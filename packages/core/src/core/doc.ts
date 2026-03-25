import { fetchApiDoc, formatWithOxfmt, getFullPath } from "@/shared";
import type { ApiCtx, ConfigDocOptions, DocResult } from "@/types";
import { generateApi, flattenApiMap } from "./api";
import { generateTsType } from "./ts";
/**
 * 根据文档配置生成文档
 * @param docConfig 文档配置
 * @returns 文档结果
 */
export const setupDoc = async (docConfig: ConfigDocOptions): Promise<DocResult> => {
  console.info(`execute doc start: ${docConfig.name} => ${docConfig.url} => ${docConfig.output}`);
  const startTime = Date.now();
  const result: DocResult = {
    api: {
      moduleTotal: 0,
      apiTotal: 0,
      outputPath: docConfig.output,
      fileTotal: 0,
    },
    ts: {
      tsTotal: 0,
      outputPath: docConfig.dts.path,
      fileTotal: 0,
    },
    docConfig,
    durationMs: 0,
  };
  let apiDoc = null;
  let apiModuleMap = new Map<string, Required<ApiCtx>[]>();
  try {
    // 补全路径
    // result.api.outputPath = getFullPath(result.api.outputPath);
    // result.ts.outputPath = getFullPath(result.ts.outputPath);
    // 获取 API 文档
    const apiDocStr = await fetchApiDoc(docConfig.url);
    if (!apiDocStr) {
      throw new Error(`api doc ${docConfig.name} is not found, please check url config`);
    }
    // 解析 API 文档
    if (docConfig.docParser) {
      apiDoc = docConfig.docParser(apiDocStr);
    }
    if (!apiDoc?.openapi) {
      throw new Error(`api doc ${docConfig.name} is not openapi doc, please check docParser config`);
    }
    // 转换API为扁平化结构
    apiModuleMap = flattenApiMap(apiDoc, docConfig);
    if (apiModuleMap.size === 0) {
      throw new Error(`api doc ${docConfig.name} is not found, please check apiParse config`);
    }
    // 生成 API + TS 代码
    const [apiResult, tsResult] = await Promise.all([generateApi(apiDoc, apiModuleMap, docConfig), generateTsType(apiDoc, apiModuleMap, docConfig)]);
    // 格式化输出目录
    formatWithOxfmt(getFullPath(result.api.outputPath));
    formatWithOxfmt(getFullPath(result.ts.outputPath));
    // 设置结果
    result.api = apiResult;
    result.ts = tsResult;
    result.durationMs = Date.now() - startTime;
    console.info(`execute doc success: ${docConfig.name} => ${docConfig.output} (${result.durationMs}ms)`);

    return result;
  } catch (error) {
    console.error(`execute doc error: ${docConfig.name} => ${error}`);
  }

  return result;
};
