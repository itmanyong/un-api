import type { OpenAPIObject, ParameterObject, ReferenceObject, SchemaObject } from "openapi3-ts/oas31";
import type { DocTsResult, ConfigDocOptions, ApiCtx } from "@/types";
import { capitalizeUpper, getFullPath, mergeFileRows, PKG_NAME, toValue, toVariableNameCamelCase } from "@/shared";
import { createSchemaToTs } from "./shared";
import { getApiNote, getDocNote, getModuleNote, getTypedObjectWithNested, getTypedParams } from "@/core/note";
import { API_TYPE_GENERATE_NAME } from "@/core/config";
import { existsSync, mkdirSync, rmSync, writeFile } from "fs";
import { dirname } from "path";

/**
 * 判断指定类型的参数项是否必填
 * @param apiConfig 参数项配置对象
 * @param type 参数项类型
 * @returns 是否必填
 */
export const isRequired = (apiConfig: ApiCtx, type: keyof ApiCtx): boolean => {
  const params = apiConfig[type];
  // body需要优先处理上级是否必填
  if (type === "body" && apiConfig.operation.requestBody && "required" in apiConfig.operation.requestBody && apiConfig.operation.requestBody.required) {
    return true;
  }
  // 其余参数都是通过字段自身的required字段来判断是否必填
  if (typeof params === "object" && params !== null && "required" in params && params?.required) return true;
  if (Array.isArray(params) && params.some((v) => v.required)) return true;
  return false;
};

/**
 * 构建 API 类型参数字符串
 * @param docConfig 文档配置
 * @param capitalizedModuleName 大写模块名
 * @param apiConfig API 配置
 * @returns API 类型参数字符串
 */
const buildApiTypeParams = (docConfig: ConfigDocOptions, capitalizedModuleName: string, apiConfig: Required<ApiCtx>): string => {
  return `${docConfig.dts.apiOptions},${docConfig.dts.apiResult},tsTypes.${capitalizedModuleName}.${apiConfig.apiParamsGenericName}`;
};

/**
 * 生成 API 导出声明行
 * @param docConfig 文档配置
 * @param capitalizedModuleName 大写模块名
 * @param apiConfig API 配置
 * @param exportName 导出名称
 * @returns 导出声明行
 */
const buildApiExportLine = (docConfig: ConfigDocOptions, capitalizedModuleName: string, apiConfig: Required<ApiCtx>, exportName: string): string => {
  const apiParams = buildApiTypeParams(docConfig, capitalizedModuleName, apiConfig);
  return `  export const ${exportName}: ${API_TYPE_GENERATE_NAME}<${apiParams}>;`;
};

/**
 * 判断参数数组是否包含有效字段。
 * @param params 参数数组
 * @returns 是否包含有效字段
 */
const hasParamsContent = (params: ParameterObject[] | undefined): boolean => {
  return Array.isArray(params) && params.length > 0;
};

/**
 * 判断 schema 是否包含有效内容。
 * @param schema schema 对象
 * @returns 是否包含有效内容
 */
const hasSchemaContent = (schema: SchemaObject | ReferenceObject | null | undefined): boolean => {
  if (!schema) return false;
  if ("$ref" in schema && schema.$ref) return true;
  return Object.keys(schema as SchemaObject).length > 0;
};

/**
 * 构建模块注释，描述模块下接口清单。
 * @param moduleName 模块名
 * @param apiModuleList 模块接口列表
 * @returns 模块注释字符串
 */
const buildModuleComment = (moduleName: string, apiModuleList: Required<ApiCtx>[]): string => {
  return getModuleNote(moduleName, apiModuleList);
};

/**
 * 为注释块增加统一缩进。
 * @param comment 注释字符串
 * @param indent 缩进字符
 * @returns 缩进后的注释字符串
 */
const indentComment = (comment: string, indent: string): string => {
  return comment
    .split("\n")
    .map((line) => `${indent}${line}`)
    .join("\n");
};

/**
 * 将类型定义中的 JSDoc 转成注释块内可安全展示的纯文本。
 * @param typeText 类型定义文本
 * @returns 可安全展示的文本行
 */
const toCommentSafeTypeLines = (typeText: string): string[] => {
  const normalizedTypeText = typeText
    .replace(/\r/g, "")
    .replace(/\/\*\*([\s\S]*?)\*\//g, (_, noteBody: string) => {
      const noteText = noteBody.replace(/\s+/g, " ").trim();
      return noteText ? `// ${noteText}` : "";
    });

  return normalizedTypeText
    .split("\n")
    .map((line) => {
      const rawLine = line.replace(/\r/g, "");
      const trimmedLine = rawLine.trim();

      if (!trimmedLine || trimmedLine === "*/") return "";

      return rawLine.replace(/\s+$/g, "");
    })
    .filter(Boolean);
};

/**
 * 归一化注释文本，避免换行和多余空白污染 JSDoc。
 * @param value 原始文本
 * @returns 归一化后的文本
 */
const normalizeCommentText = (value: string | undefined): string => {
  return (value || "")
    .replace(/\s+/g, " ")
    .replace(/\*\s*@[\s\S]*$/, "")
    .trim();
};

/**
 * 构建单个 JSDoc 标签对应的类型块。
 * @param tag 标签名
 * @param typeText 类型定义文本
 * @param indent 缩进字符
 * @returns 注释块行
 */
const buildCommentTypeSection = (tag: string, typeText: string, indent: string): string[] => {
  const safeLines = toCommentSafeTypeLines(typeText);
  if (safeLines.length === 0) return [];

  return [
    `${indent} * @${tag}`,
    `${indent} * \`\`\`ts`,
    ...safeLines.map((line) => `${indent} * ${line}`),
    `${indent} * \`\`\``,
  ];
};

/**
 * 生成模块级接口方法的类型定义行
 * @param docConfig 文档配置
 * @param capitalizedModuleName 大写模块名
 * @param apiModuleList API 列表
 * @param indent 缩进字符
 * @returns 接口方法类型定义行数组
 */
const buildApiMethods = (
  docConfig: ConfigDocOptions,
  capitalizedModuleName: string,
  apiModuleList: Required<ApiCtx>[],
  buildMethodComment: (apiConfig: Required<ApiCtx>, capitalizedModuleName: string, indent: string) => string,
  indent: string = "    ",
): string[] => {
  return apiModuleList.flatMap((apiConfig) => {
    const apiParams = buildApiTypeParams(docConfig, capitalizedModuleName, apiConfig);
    const methodComment = buildMethodComment(apiConfig, capitalizedModuleName, indent);
    return [methodComment, `${indent}${apiConfig.config.name}: ${API_TYPE_GENERATE_NAME}<${apiParams}>;`];
  });
};

/**
 * 生成模块级导出内容（用于 doc/default 导出模式）
 * @param apiModuleMap API 模块映射
 * @param docConfig 文档配置
 * @param indent 缩进字符
 * @returns 模块级导出内容字符串
 */
const buildModulesContent = (
  apiModuleMap: Map<string, Required<ApiCtx>[]>,
  docConfig: ConfigDocOptions,
  buildMethodComment: (apiConfig: Required<ApiCtx>, capitalizedModuleName: string, indent: string) => string,
  indent: string = "    ",
): string => {
  const modules = Array.from(apiModuleMap.entries()).map(([moduleName, apiModuleList]) => {
    const capitalizedModuleName = `${capitalizeUpper(moduleName)}Models`;
    const methods = buildApiMethods(docConfig, capitalizedModuleName, apiModuleList, buildMethodComment, indent);
    const moduleComment = buildModuleComment(moduleName, apiModuleList);
    return `${indentComment(moduleComment, indent)}\n${indent}${moduleName}: {\n${methods.join("\n")}\n${indent}};`;
  });
  return modules.join("\n");
};

/**
 * 解析openapi doc 所有的 schema 到 typescript 类型
 * @param apiDoc openapi doc 对象
 * @param apiModuleMap api 映射表
 * @param docConfig 文档配置对象
 * @param log 日志对象
 * @returns typescript 类型字符串
 */
export const generateTsType = (apiDoc: OpenAPIObject, apiModuleMap: Map<string, Required<ApiCtx>[]>, docConfig: ConfigDocOptions): DocTsResult => {
  const result = { outputPath: docConfig.dts.path, tsTotal: 0, fileTotal: 0 };

  if (!docConfig.dts.enable) return result;

  const schemaToTs = createSchemaToTs(docConfig.dts.typeConvert);
  const docNamespace = capitalizeUpper(docConfig.name);

  const paramsToTs = (params: ParameterObject[] | undefined, globalPrefix: string): string => {
    if (!params || params.length === 0) return "Record<string, any>";
    return getTypedParams(params, schemaToTs, globalPrefix);
  };

  const bodyToTs = (body: SchemaObject | ReferenceObject | null | undefined, globalPrefix: string): string => {
    if (!body) return "any";
    const bodySchema = body as SchemaObject;
    if (bodySchema.properties) {
      return getTypedObjectWithNested("", bodySchema.properties, bodySchema.required, schemaToTs, globalPrefix);
    }
    return schemaToTs(body, globalPrefix);
  };

  const responseToTs = (response: SchemaObject | ReferenceObject | null | undefined, globalPrefix: string): string => {
    if (!response) return "any";
    const responseSchema = response as SchemaObject;
    if (responseSchema.properties) {
      return getTypedObjectWithNested("", responseSchema.properties, responseSchema.required, schemaToTs, globalPrefix);
    }
    return schemaToTs(response, globalPrefix);
  };

  /**
   * 构建方法注释，直接展开接口实际字段定义。
   * @param apiConfig API 配置
   * @param capitalizedModuleName 大写模块名（含 Models 后缀）
   * @param indent 缩进字符
   * @returns 方法注释字符串
   */
  const buildApiMethodComment = (apiConfig: Required<ApiCtx>, capitalizedModuleName: string, indent: string): string => {
    const apiSummary = normalizeCommentText(apiConfig.config.summary || apiConfig.config.description || "");
    const apiMeta = [apiConfig.config.module, apiConfig.config.name, apiConfig.config.url, apiConfig.config.method, apiSummary].join(" | ");
    const commentLines = [`${indent}/**`, `${indent} * @api ${apiMeta}`];

    if (hasParamsContent(apiConfig.query)) {
      commentLines.push(...buildCommentTypeSection("query", paramsToTs(apiConfig.query, `${docNamespace}Models`), indent));
    }
    if (hasParamsContent(apiConfig.params)) {
      commentLines.push(...buildCommentTypeSection("params", paramsToTs(apiConfig.params, `${docNamespace}Models`), indent));
    }
    if (hasSchemaContent(apiConfig.body)) {
      commentLines.push(...buildCommentTypeSection("body", bodyToTs(apiConfig.body, `${docNamespace}Models`), indent));
    }
    if (hasParamsContent(apiConfig.header)) {
      commentLines.push(...buildCommentTypeSection("header", paramsToTs(apiConfig.header, `${docNamespace}Models`), indent));
    }
    if (hasParamsContent(apiConfig.cookie)) {
      commentLines.push(...buildCommentTypeSection("cookie", paramsToTs(apiConfig.cookie, `${docNamespace}Models`), indent));
    }
    if (hasSchemaContent(apiConfig.response)) {
      commentLines.push(...buildCommentTypeSection("response", responseToTs(apiConfig.response, `${docNamespace}Models`), indent));
    }

    if (commentLines.length === 2) {
      commentLines.push(`${indent} * @description 无请求参数与响应模型声明`);
    }

    commentLines.push(`${indent} */`);
    return commentLines.join("\n");
  };

  /**
   * 构建 schema 顶层注释。
   * @param schemaName schema 名称
   * @param schema schema 对象
   * @returns 注释字符串
   */
  const buildSchemaComment = (schemaName: string, schema: SchemaObject | ReferenceObject): string => {
    const rows: string[] = ["/**", ` * ${schemaName}`];

    if ("$ref" in schema && schema.$ref) {
      rows.push(` * @type ${schemaToTs(schema, componentsNamespace)}`);
      rows.push(" */");
      return rows.join("\n");
    }

    const currentSchema = schema as SchemaObject;
    if (currentSchema.title) rows.push(` * @title ${currentSchema.title}`);
    if (currentSchema.description) rows.push(` * @description ${currentSchema.description}`);
    if (currentSchema.deprecated) rows.push(" * @deprecated");
    rows.push(" */");
    return rows.join("\n");
  };

  /**
   * 生成带注释的 schema 类型定义。
   * @param schemaName schema 名称
   * @param schema schema 对象
   * @returns 类型定义字符串
   */
  const buildSchemaTypeDefinition = (schemaName: string, schema: SchemaObject | ReferenceObject): string => {
    const schemaComment = buildSchemaComment(schemaName, schema);

    if (!("$ref" in schema)) {
      const currentSchema = schema as SchemaObject;
      if (currentSchema.properties && Object.keys(currentSchema.properties).length > 0) {
        const objectType = getTypedObjectWithNested(schemaName, currentSchema.properties, currentSchema.required, schemaToTs, componentsNamespace);
        return `${schemaComment}\nexport type ${schemaName} = ${objectType}`;
      }
    }

    return `${schemaComment}\nexport type ${schemaName} = ${schemaToTs(schema, componentsNamespace)}`;
  };

  const buildApiTypeDefinitions = (apiConfig: Required<ApiCtx>, capitalizedModuleName: string): string[] => {
    const apiName = apiConfig.config.name;
    const apiNameCapitalized = `${capitalizedModuleName}${capitalizeUpper(apiName)}`;
    const lines: string[] = [];
    const summary = normalizeCommentText(apiConfig.config.summary);
    const description = normalizeCommentText(apiConfig.config.description);

    lines.push(`/**\n* @url ${apiConfig.config.url} \n* @summary ${summary} \n* @description ${description} \n */`);
    lines.push(`export type ${apiNameCapitalized}Query = ${paramsToTs(apiConfig.query, `${docNamespace}Models`)}`);
    lines.push(`export type ${apiNameCapitalized}Params = ${paramsToTs(apiConfig.params, `${docNamespace}Models`)}`);
    lines.push(`export type ${apiNameCapitalized}Body = ${bodyToTs(apiConfig.body, `${docNamespace}Models`)}`);
    lines.push(`export type ${apiNameCapitalized}Header = ${paramsToTs(apiConfig.header, `${docNamespace}Models`)}`);
    lines.push(`export type ${apiNameCapitalized}Cookie = ${paramsToTs(apiConfig.cookie, `${docNamespace}Models`)}`);
    lines.push(`export type ${apiNameCapitalized}Response = ${responseToTs(apiConfig.response, `${docNamespace}Models`)}`);

    apiConfig.apiParamsGenericName = `${apiNameCapitalized}Generic`;
    lines.push(`export type ${apiConfig.apiParamsGenericName} = {
          query: ${apiNameCapitalized}Query;
          params: ${apiNameCapitalized}Params;
          data: ${apiNameCapitalized}Body;
          header: ${apiNameCapitalized}Header;
          cookie: ${apiNameCapitalized}Cookie;
          result: ${apiNameCapitalized}Response;
          queryRequired: ${isRequired(apiConfig, "query")};
          paramsRequired: ${isRequired(apiConfig, "params")};
          dataRequired: ${isRequired(apiConfig, "body")};
          headerRequired: ${isRequired(apiConfig, "header")};
          cookieRequired: ${isRequired(apiConfig, "cookie")};\n};
     `);

    return lines;
  };

  const buildModuleFileContent = (
    moduleName: string,
    capitalizedModuleName: string,
    docNamespace: string,
    apiModuleList: Required<ApiCtx>[],
  ): string[] => {
    const fileRows = [`import { ${docNamespace}Models } from './models';`];
    const fileApiRows: string[] = [];

    for (const apiConfig of apiModuleList) {
      fileApiRows.push(...buildApiTypeDefinitions(apiConfig, capitalizedModuleName));
    }

    fileRows.push(`export namespace ${capitalizedModuleName}Models {`);
    fileRows.push(...fileApiRows);
    fileRows.push(`}`);

    return fileRows;
  };

  const fileMap = new Map<string, string[]>([
    ["index.d.ts", [`import * as tsTypes from './types';`, `import type { ${API_TYPE_GENERATE_NAME} } from '${PKG_NAME}';`]],
    ["types/index.d.ts", [`export { ${docNamespace}Models } from './models';`]],
    ["types/models.d.ts", []],
  ]);

  const componentsNamespace = `${docNamespace}Models`;
  const componentsTsTypeModule = Object.entries(apiDoc.components?.schemas || {}).map(([key, schema]) => [key, schema] as const);
  const componentsTsFileContent = componentsTsTypeModule.map(([tsName, schema]) => buildSchemaTypeDefinition(tsName, schema)).join("\n\n");
  fileMap.set(`types/models.d.ts`, [`export namespace ${componentsNamespace} {\n${componentsTsFileContent}\n}`]);
  result.tsTotal += componentsTsTypeModule.length;

  for (const [moduleName, apiModuleList] of apiModuleMap) {
    const capitalizedModuleName = capitalizeUpper(moduleName);
    const apiBucketContent = fileMap.get("types/index.d.ts")!;
    apiBucketContent.push(`export { ${capitalizedModuleName}Models } from './${moduleName}';`);

    const filename = `types/${moduleName}.d.ts`;
    const moduleFileContent = buildModuleFileContent(moduleName, capitalizedModuleName, docNamespace, apiModuleList);
    fileMap.set(filename, moduleFileContent);
    result.tsTotal += apiModuleList.length * 5; // 5 types per API: Query, Params, Body, Response, Generic
  }

  const rootFileRows = fileMap.get("index.d.ts")!;
  rootFileRows.push(`export {};\ndeclare module "${docConfig.dts.pathAlias}" {`);

  if (docConfig.exportMode === "api") {
    for (const [, apiModuleList] of apiModuleMap) {
      for (const apiConfig of apiModuleList) {
        const exportName = toVariableNameCamelCase(docConfig.prefix, apiConfig.config.module, apiConfig.config.name);
        const capitalizedModuleName = `${capitalizeUpper(apiConfig.config.module)}Models`;
        rootFileRows.push(buildApiMethodComment(apiConfig, capitalizedModuleName, "  "));
        rootFileRows.push(buildApiExportLine(docConfig, capitalizedModuleName, apiConfig, exportName));
      }
    }
  }

  if (docConfig.exportMode === "module") {
    for (const [moduleName, apiModuleList] of apiModuleMap) {
      const exportName = toVariableNameCamelCase(docConfig.prefix, moduleName);
      rootFileRows.push(getModuleNote(moduleName, apiModuleList));
      rootFileRows.push(`  export const ${exportName}: {`);
      const capitalizedModuleName = `${capitalizeUpper(moduleName)}Models`;
      rootFileRows.push(...buildApiMethods(docConfig, capitalizedModuleName, apiModuleList, buildApiMethodComment));
      rootFileRows.push(`  };`);
    }
  }

  if (docConfig.exportMode === "doc") {
    const exportName = toVariableNameCamelCase(docConfig.prefix, docConfig.name);
    rootFileRows.push(getDocNote(apiModuleMap));
    rootFileRows.push(`  export const ${exportName}: {`);
    rootFileRows.push(buildModulesContent(apiModuleMap, docConfig, buildApiMethodComment));
    rootFileRows.push(`  }`);
  }

  if (docConfig.exportMode === "default") {
    const exportName = toVariableNameCamelCase(docConfig.prefix, docConfig.name);
    rootFileRows.push(getDocNote(apiModuleMap));
    rootFileRows.push(`const ${exportName}: {`);
    rootFileRows.push(buildModulesContent(apiModuleMap, docConfig, buildApiMethodComment));
    rootFileRows.push(`  }`);
    rootFileRows.push(`export default ${exportName};`);
  }

  rootFileRows.push(`}`);

  const saveDir = getFullPath(docConfig.dts.path);
  if (existsSync(saveDir)) {
    rmSync(saveDir, { recursive: true, force: true });
  }
  for (const [filename, fileRows] of fileMap) {
    const filePath = getFullPath(docConfig.dts.path, filename);
    mergeFileRows(fileRows, toValue(docConfig.dts.fileHeader, filePath, docConfig));
    const fileAllRows = [...fileRows, ...toValue(docConfig.dts.fileFooter, filePath, docConfig)];
    mkdirSync(dirname(filePath), { recursive: true });
    writeFile(filePath, fileAllRows.join("\n") + "\n", { encoding: "utf-8", flag: "w", flush: true }, () => {});
    result.fileTotal++;
  }

  return result;
};
