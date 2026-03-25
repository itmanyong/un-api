import { loadConfigSync } from "unconfig";
import type { ConfigDocOptions, ConfigOptions, PluginOptions, RecordType } from "@/types";
import { getFullPath, LIB_NAME } from "../shared";
import { cloneDeep, isPlainObject, isString, merge } from "es-toolkit";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname } from "path";

export const DEFAULT_CONFIG_PATH = "un-api.config";
export const API_TYPE_GENERATE_NAME = "ApiFunctionGenerate";
export const DEFAULT_FILE_HEADER: string[] = [`// 当前文件由 ${LIB_NAME} 自动生成-非必要请勿手动修改此文件`];
export const DEFAULT_DOC_CONFIG: ConfigDocOptions = {
  prefix: "api",
  name: "",
  url: "",
  enable: true,
  output: "src/apis/${name}",
  outputType: "ts",
  codeMode: "proxy",
  exportMode: "module",
  requestor: "({url,...ops})=>globalThis.fetch(url, ops)",
  fileHeader: [],
  fileFooter: [],
  docParser: (doc) => JSON.parse(doc),
  apiParser: (ctx) => {},
  apiResponseCode: 200,
  apiResponseType: "*/*",
  apiRequestType: "*/*",
  enableMultiContentType: false,
  dts: {
    enable: true,
    path: "types/${name}",
    apiOptions: "RequestInit",
    apiResult: "Response",
    fileHeader: [],
    fileFooter: [],
    typeConvert: {},
    pathAlias: "@${name}",
  },
  cache: {
    enable: true,
    expireTime: 600000,
  },
};
/**
 * 编译配置
 * @param config 配置对象
 * @param baseConfig 基础配置
 * @returns 编译后的配置
 */
const compileConfig = (config: RecordType, baseConfig?: RecordType): RecordType => {
  for (const [key, value] of Object.entries(config)) {
    if (isPlainObject(value)) {
      config[key] = compileConfig(value as RecordType, baseConfig ?? config);
      continue;
    }
    if (!isString(value)) continue;
    config[key] = value.replace(/\${(.*?)}/g, (_match, p) => (baseConfig ?? config)[p] as string);
    continue;
  }
  return config as ConfigOptions;
};
/**
 * 合并配置
 * @param target 目标配置对象
 * @returns 合并后的文档配置列表
 */
const buildDocConfig = (config: ConfigOptions): ConfigDocOptions[] => {
  const { docs = [], ...rest } = config ?? {};
  const baseConfig = merge(cloneDeep(DEFAULT_DOC_CONFIG as RecordType), rest);
  return docs?.map<ConfigDocOptions>((doc) => compileConfig(merge(cloneDeep(baseConfig), doc)) as ConfigDocOptions) ?? [];
};
/**
 * 设置配置
 * @param options 插件选项
 * @returns 文档配置列表
 */
export const setupConfig = (options?: PluginOptions): ConfigDocOptions[] => {
  const { configPath = DEFAULT_CONFIG_PATH, config: optionsConfig } = options || {};
  // 加载配置
  const extensions = ["ts", "mts", "cts", "js", "mjs", "cjs", "json"];
  const files =
    configPath
      ?.split("/")
      .at(-1)
      ?.replace(new RegExp(`\\.(${extensions.join("|")})$`), "") ?? DEFAULT_CONFIG_PATH;

  const { config: fileConfig } = loadConfigSync<ConfigOptions>({
    sources: [
      // 从单独的配置文件加载
      {
        files,
        extensions,
      },
      // 从 package.json 中加载
      {
        files: "package.json",
        extensions: [],
        rewrite(config) {
          return (config as RecordType)?.[LIB_NAME];
        },
      },
    ],
    merge: false,
  });

  // 文件配置高于选项配置
  return buildDocConfig(fileConfig ?? optionsConfig);
};
/**
 * 定义配置
 * @param config 配置对象
 * @returns 配置对象
 */
export const defineConfig = (config: ConfigOptions): ConfigOptions => {
  return config;
};
/**
 * 获取缓存配置
 */
export const loadCacheConfig = (): RecordType => {
  const cachePath = getFullPath(`.${LIB_NAME}`, "config.json");
  let cacheConfig = { cache: { expires: {} }, docs: {} } as RecordType;
  try {
    if (!existsSync(cachePath)) {
      mkdirSync(dirname(cachePath), { recursive: true });
      writeFileSync(cachePath, JSON.stringify(cacheConfig, null, 2), { encoding: "utf-8", flag: "w", flush: true });
      return cacheConfig;
    }
    cacheConfig = JSON.parse(readFileSync(cachePath, { encoding: "utf-8" }));
  } catch {}
  return cacheConfig;
};
