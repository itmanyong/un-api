import pc from "picocolors";
import { Table } from "console-table-printer";
import type { DocResult, PluginOptions } from "../types";
import { loadCacheConfig, setupConfig } from "./config";
import { setupDoc } from "./doc";
import { LIB_NAME, formatDuration, generateUniqueKey, getFullPath } from "@/shared";
import { writeFile, writeFileSync } from "fs";
/**
 * 打印生成总结表格
 * @param results 生成结果
 */
const printSummaryTable = (results: DocResult[]): void => {
  if (results.length === 0) {
    console.info(pc.yellow("No documents were generated."));
    return;
  }

  const table = new Table({
    title: pc.green(LIB_NAME + " 生成总结"),
    columns: [
      { name: "标识", alignment: "left", color: "green" },
      { name: "输出路径", alignment: "left" },
      { name: "模块总数", alignment: "right" },
      { name: "接口总数", alignment: "right" },
      { name: "类型总数", alignment: "right" },
      { name: "耗时", alignment: "right", color: "cyan" },
    ],
  });

  for (const result of results) {
    const { api, ts } = result;
    table.addRow({
      标识: result.docConfig.name,
      输出路径: result.docConfig.output,
      模块总数: api.moduleTotal ?? 0,
      接口总数: api.apiTotal ?? 0,
      类型总数: ts.tsTotal ?? 0,
      耗时: formatDuration(result.durationMs),
    });
  }

  const totalMs = results.reduce((sum, r) => sum + r.durationMs, 0);
  table.addRow({
    标识: "Total",
    输出路径: "",
    模块总数: results.reduce((sum, r) => sum + (r.api.moduleTotal ?? 0), 0),
    接口总数: results.reduce((sum, r) => sum + (r.api.apiTotal ?? 0), 0),
    类型总数: results.reduce((sum, r) => sum + (r.ts.tsTotal ?? 0), 0),
    耗时: formatDuration(totalMs),
  });
  // 清除之前的日志
  console.clear();
  console.log();
  table.printTable();
  console.log();
};

export const setupRun = async (options?: PluginOptions): Promise<void> => {
  // 读取最终配置
  const configList = setupConfig(options);
  // 获取缓存配置
  const cacheConfig = loadCacheConfig();
  // 筛选需要生成的配置
  const runConfigList = configList.filter((config) => {
    if (!config.enable) return true;
    if (cacheConfig.docs?.[config.name]?.hash !== generateUniqueKey(config)) return true;
    if (config.cache?.enable === true && config.cache.expireTime > 0) {
      const expires = cacheConfig.cache?.expires?.[config.name] ?? 0;
      if (Date.now() >= expires) return true;
    }
    return false;
  });
  // 执行文档生成
  const results = await Promise.all(runConfigList.map((config) => setupDoc(config)));
  // 输出结果
  printSummaryTable(results);
  // 更新存储文档
  for (let i = 0; i < configList.length; i++) {
    const item = configList[i];
    if (!item.cache.enable) {
      delete cacheConfig.cache.expires[item.name];
      continue;
    }
    cacheConfig.cache.expires[item.name] = Date.now() + item.cache.expireTime;
    ((cacheConfig.docs ??= {})[item.name] ??= {}).hash = generateUniqueKey(item);
  }
  const cachePath = getFullPath(`.${LIB_NAME}`, "config.json");
  writeFileSync(cachePath, JSON.stringify(cacheConfig, null, 2), { encoding: "utf-8", flag: "w", flush: true });
};
