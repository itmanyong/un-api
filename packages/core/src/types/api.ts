import type { OperationObject, SchemaObject, ReferenceObject, PathItemObject, ParameterObject } from "openapi3-ts/oas31";
import type { RecordType } from "./common";

export interface ApiCtx extends RecordType {
  path: string;
  method: string;
  pathItem: PathItemObject;
  operation: OperationObject;
  contentType?: string;
  body?: SchemaObject | ReferenceObject | null;
  header?: ParameterObject[];
  cookie?: ParameterObject[];
  query?: ParameterObject[];
  params?: ParameterObject[];
  response?: SchemaObject | ReferenceObject | null;
  config?: ApiCtxConfig;
}

export interface ApiCtxConfig {
  /**
   * 接口路径
   * @description 实际请求的接口路径-即`requestor`参数对象中的`url`
   */
  url: string;
  /**
   * 接口方法
   * @description 实际请求的接口方法-即`requestor`参数对象中的`method`
   */
  method: string;
  /**
   * 接口函数名称
   * @description 默认根据“接口类型+接口路径”生成一个小驼峰函数名
   */
  name: string;
  /**
   * 接口模块名
   * @description 所属模块的接口会被分类到该模块下，默认根据“接口路径”的第一部分生成一个小驼峰模块名
   */
  module: string;
  /**
   * 接口额外参数
   * @description 额外的参数，会被添加到接口函数的参数列表中
   */
  options: RecordType;
  /**
   * 接口摘要
   * @description 来自于 openapi 文档中的 summary 字段
   */
  summary: string;
  /**
   * 接口描述
   * @description 来自于 openapi 文档中的 description 字段
   */
  description: string;
}

export interface ApiRequesterOptions extends RecordType {
  url: string;
  method?: string;
  headers?: RecordType<string>;
  summary?: string;
  description?: string;
}
// 请求器函数签名
export type ApiRequesterType = (options: ApiRequesterOptions) => Promise<any>;

// 将接口的类型完全聚合成一个类型
export interface ApiGenericWithFlags {
  query: unknown;
  params: unknown;
  data: unknown;
  result: unknown;
  queryRequired?: boolean;
  paramsRequired?: boolean;
  dataRequired?: boolean;
}
// 辅助类型：构建 options 的内部类型
type BuildOptions<ApiOptions, G extends ApiGenericWithFlags> = 
  ApiOptions &
  (G["queryRequired"] extends true ? { query: G["query"] } : { query?: G["query"] }) &
  (G["paramsRequired"] extends true ? { params: G["params"] } : { params?: G["params"] }) &
  (G["dataRequired"] extends true ? { data: G["data"] } : { data?: G["data"] });

// 辅助类型：判断是否有任何 Required 标志为 true
type HasAnyRequired<G extends ApiGenericWithFlags> = 
  [G["queryRequired"], G["paramsRequired"], G["dataRequired"]] extends [infer Q, infer P, infer D]
    ? (Q extends true ? true : P extends true ? true : D extends true ? true : false)
    : false;

// 生成接口函数类型
export type ApiFunctionGenerate<ApiOptions, ApiResult, G extends ApiGenericWithFlags> = 
  HasAnyRequired<G> extends true
    ? (options: BuildOptions<ApiOptions, G>) => Promise<ApiResult>
    : (options?: BuildOptions<ApiOptions, G>) => Promise<ApiResult>;