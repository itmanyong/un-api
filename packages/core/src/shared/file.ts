import process from "process";
import { join } from "path";
import { readFileSync } from "fs";
/**
 * 下载 openapi 文档
 * @param url openapi 文档地址
 * @returns 文档内容
 */
export const fetchApiDoc = async (url: string): Promise<string | null> => {
  try {
    // 是网络路径就下载文档
    if (url.startsWith("http")) {
      const res = await globalThis.fetch(url);
      if (!res.ok) {
        console.error(`load api doc error:  ${res.status} ${res.statusText} ${url}`);
        return null;
      }
      return await res.text();
    }
    // 否则当本地路径就读取文件
    return readFileSync(getFullPath(url), { encoding: "utf-8" });
  } catch (error) {
    console.error(`load api doc error: ${url} ${error}`);
    return null;
  }
};
/**
 * 获取完整路径
 * @param args 路径参数
 * @returns 完整路径
 */
export const getFullPath = (...args: string[]): string => join(process.cwd(), ...args.filter(Boolean));
/**
 * 根据规则合并文件内容行
 * @param fileRows 文件内容行数组
 * @param newRows 新内容行数组
 * @returns 合并后的文件内容行数组
 */
export const mergeFileRows = (fileRows: string[], newRows: string[]): string[] => {
  if (!newRows?.length) return fileRows;
  const fileLastImportIndex = fileRows.findLastIndex((v) => v.startsWith("import "));
  if (fileLastImportIndex != -1) {
    fileRows.splice(fileLastImportIndex + 1, 0, ...newRows);
    return fileRows;
  }
  fileRows.push(...newRows);
  return fileRows;
};