import { exec } from "child_process";
import { existsSync } from "fs";
import crypto from "crypto";

/**
 * 获取最终值
 * @param source 原始值或函数
 * @param args 函数执行参数
 * @returns 最终值
 */
export const toValue = <T>(source: T | ((...args: any[]) => T), ...args: any[]): T => {
  return typeof source === "function" ? (source as (...args: any[]) => T)(...args) : source;
};

/**
 * 首字母大写
 * @param str 原始字符串
 * @returns 首字母大写后的字符串
 */
export const capitalizeUpper = (str: string): string => {
  if (/^[a-z]/.test(str)) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
};

/**
 * 转化字符串为符合命名规范的小驼峰命名
 * @param args 字符串数组
 * @returns 小驼峰命名后的字符串
 */
export const toVariableNameCamelCase = (...args: string[]): string => {
  const toVariableName = (str: string) => capitalizeLower(str.replace(/[^a-zA-Z0-9]/g, "").replace(/^[0-9]/, "_$&"));

  return args
    .map((item, index) => {
      const varName = toVariableName(item);
      return index === 0 ? varName : capitalizeUpper(varName);
    })
    .join("");
};

/**
 * 首字母小写
 * @param str 原始字符串
 * @returns 首字母小写后的字符串
 */
const capitalizeLower = (str: string): string => {
  if (/^[A-Z]/.test(str)) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
  return str;
};
/**
 * 格式化时间
 * @param ms 毫秒
 * @returns 格式化后的时间
 */
export const formatDuration = (ms: number): string => {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(2)}s`;
  return `${(ms / 60000).toFixed(2)}m`;
};

/**
 * 使用 oxfmt 格式化目录
 * @param dirPath 目录路径
 */
export const formatWithOxfmt = async (dirPath: string): Promise<void> => {
  await new Promise((resolve, reject) => {
    try {
      // 判断有无这个目录
      if (!existsSync(dirPath)) return resolve(undefined);
      exec(`oxfmt "${dirPath}"`, (error: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(undefined);
        }
      });
    } catch (error) {
      console.error(`formatWithOxfmt error: ${dirPath} => ${error}`);
      // reject(error);
    }
  });
};

// 为任意数据生成唯一值（基于内容）
export const generateUniqueKey = (data: any): string => {
  // 处理包含函数的对象
  const serializeWithFunctions = (obj: any): any => {
    if (obj === null || obj === undefined) {
      return obj;
    }

    if (typeof obj === 'function') {
      // 将函数转换为其字符串表示
      return `[Function: ${obj.toString()}]`;
    }

    if (Array.isArray(obj)) {
      return obj.map(serializeWithFunctions);
    }

    if (typeof obj === 'object') {
      const sortedKeys = Object.keys(obj).sort();
      const result: any = {};

      for (const key of sortedKeys) {
        result[key] = serializeWithFunctions(obj[key]);
      }

      return result;
    }

    return obj;
  };

  // 将数据转换为字符串（处理对象、数组、函数等）
  const content = typeof data === "object"
    ? JSON.stringify(serializeWithFunctions(data))
    : String(data);

  // 生成哈希值
  return crypto.createHash("sha256").update(content).digest("hex").substring(0, 16);
};
