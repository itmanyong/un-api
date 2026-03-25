import type { ConfigOptions } from "./config";

export interface PluginOptions {
  /**
   * 配置文件路径
   * @default process.cwd() + "/un-api.config.ts"
   * @description 默认项目根路径下的 un-api.config.(ts|js|mts|mjs) 配置文件
   */
  configPath?: string;
  /**
   * API配置
   * @description 配置内容等同 un-api.config.(ts|js|mts|mjs) 配置文件
   */
  config?: ConfigOptions;
}
