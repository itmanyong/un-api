import { QianniaoModels } from "./models";
export namespace LogModels {
  /**
   * @url /log/oper/{id}
   * @summary 获取操作日志详情
   * @description 根据ID获取操作日志，包含请求参数和响应结果
   */
  export type LogGetOperByIdQuery = Record<string, any>;
  export type LogGetOperByIdParams = {
    /** number - 格式: int64 */
    id: number;
  };
  export type LogGetOperByIdBody = any;
  export type LogGetOperByIdHeader = Record<string, any>;
  export type LogGetOperByIdCookie = Record<string, any>;
  export type LogGetOperByIdResponse = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** QianniaoModels.SysOperLog (可选) */
    data?: QianniaoModels.SysOperLog;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };
  export type LogGetOperByIdGeneric = {
    query: LogGetOperByIdQuery;
    params: LogGetOperByIdParams;
    data: LogGetOperByIdBody;
    header: LogGetOperByIdHeader;
    cookie: LogGetOperByIdCookie;
    result: LogGetOperByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /log/oper/page
   * @summary 分页查询操作日志
   * @description 支持按模块、用户名、状态筛选
   */
  export type LogGetOperPageQuery = {
    /** number (可选) - 默认值: 1 | 格式: int32 */
    pageNum?: number;

    /** number (可选) - 默认值: 10 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    module?: string;

    /** string (可选) */
    username?: string;

    /** "{"name":"SUCCESS","desc":"成功"}" | "{"name":"FAIL","desc":"失败"}" (可选) - 可选值: "{\"name\":\"SUCCESS\",\"desc\":\"成功\"}", "{\"name\":\"FAIL\",\"desc\":\"失败\"}" */
    status?: "SUCCESS" | "FAIL";
  };
  export type LogGetOperPageParams = Record<string, any>;
  export type LogGetOperPageBody = any;
  export type LogGetOperPageHeader = Record<string, any>;
  export type LogGetOperPageCookie = Record<string, any>;
  export type LogGetOperPageResponse = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** QianniaoModels.PageResultSysOperLog (可选) */
    data?: QianniaoModels.PageResultSysOperLog;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };
  export type LogGetOperPageGeneric = {
    query: LogGetOperPageQuery;
    params: LogGetOperPageParams;
    data: LogGetOperPageBody;
    header: LogGetOperPageHeader;
    cookie: LogGetOperPageCookie;
    result: LogGetOperPageResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /log/login/{id}
   * @summary 获取登录日志详情
   * @description 根据ID获取登录日志
   */
  export type LogGetLoginByIdQuery = Record<string, any>;
  export type LogGetLoginByIdParams = {
    /** number - 格式: int64 */
    id: number;
  };
  export type LogGetLoginByIdBody = any;
  export type LogGetLoginByIdHeader = Record<string, any>;
  export type LogGetLoginByIdCookie = Record<string, any>;
  export type LogGetLoginByIdResponse = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** QianniaoModels.SysLoginLog (可选) */
    data?: QianniaoModels.SysLoginLog;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };
  export type LogGetLoginByIdGeneric = {
    query: LogGetLoginByIdQuery;
    params: LogGetLoginByIdParams;
    data: LogGetLoginByIdBody;
    header: LogGetLoginByIdHeader;
    cookie: LogGetLoginByIdCookie;
    result: LogGetLoginByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /log/login/page
   * @summary 分页查询登录日志
   * @description 支持按用户名、状态筛选
   */
  export type LogGetLoginPageQuery = {
    /** number (可选) - 默认值: 1 | 格式: int32 */
    pageNum?: number;

    /** number (可选) - 默认值: 10 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    username?: string;

    /** "{"name":"SUCCESS","desc":"成功"}" | "{"name":"FAIL","desc":"失败"}" (可选) - 可选值: "{\"name\":\"SUCCESS\",\"desc\":\"成功\"}", "{\"name\":\"FAIL\",\"desc\":\"失败\"}" */
    status?: "SUCCESS" | "FAIL";
  };
  export type LogGetLoginPageParams = Record<string, any>;
  export type LogGetLoginPageBody = any;
  export type LogGetLoginPageHeader = Record<string, any>;
  export type LogGetLoginPageCookie = Record<string, any>;
  export type LogGetLoginPageResponse = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** QianniaoModels.PageResultSysLoginLog (可选) */
    data?: QianniaoModels.PageResultSysLoginLog;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };
  export type LogGetLoginPageGeneric = {
    query: LogGetLoginPageQuery;
    params: LogGetLoginPageParams;
    data: LogGetLoginPageBody;
    header: LogGetLoginPageHeader;
    cookie: LogGetLoginPageCookie;
    result: LogGetLoginPageResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /log/exception/{id}
   * @summary 获取异常日志详情
   * @description 根据ID获取异常日志，包含完整堆栈信息
   */
  export type LogGetExceptionByIdQuery = Record<string, any>;
  export type LogGetExceptionByIdParams = {
    /** number - 格式: int64 */
    id: number;
  };
  export type LogGetExceptionByIdBody = any;
  export type LogGetExceptionByIdHeader = Record<string, any>;
  export type LogGetExceptionByIdCookie = Record<string, any>;
  export type LogGetExceptionByIdResponse = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** QianniaoModels.SysExceptionLog (可选) */
    data?: QianniaoModels.SysExceptionLog;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };
  export type LogGetExceptionByIdGeneric = {
    query: LogGetExceptionByIdQuery;
    params: LogGetExceptionByIdParams;
    data: LogGetExceptionByIdBody;
    header: LogGetExceptionByIdHeader;
    cookie: LogGetExceptionByIdCookie;
    result: LogGetExceptionByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /log/exception/page
   * @summary 分页查询异常日志
   * @description 支持按异常类型、用户名筛选
   */
  export type LogGetExceptionPageQuery = {
    /** number (可选) - 默认值: 1 | 格式: int32 */
    pageNum?: number;

    /** number (可选) - 默认值: 10 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    exceptionType?: string;

    /** string (可选) */
    username?: string;
  };
  export type LogGetExceptionPageParams = Record<string, any>;
  export type LogGetExceptionPageBody = any;
  export type LogGetExceptionPageHeader = Record<string, any>;
  export type LogGetExceptionPageCookie = Record<string, any>;
  export type LogGetExceptionPageResponse = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** QianniaoModels.PageResultSysExceptionLog (可选) */
    data?: QianniaoModels.PageResultSysExceptionLog;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };
  export type LogGetExceptionPageGeneric = {
    query: LogGetExceptionPageQuery;
    params: LogGetExceptionPageParams;
    data: LogGetExceptionPageBody;
    header: LogGetExceptionPageHeader;
    cookie: LogGetExceptionPageCookie;
    result: LogGetExceptionPageResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /log/oper/clean
   * @summary 清理操作日志
   * @description 清理指定天数之前的操作日志(body:{"days":10})
   */
  export type LogDeleteOperCleanQuery = Record<string, any>;
  export type LogDeleteOperCleanParams = Record<string, any>;
  export type LogDeleteOperCleanBody = Record<string, number>;
  export type LogDeleteOperCleanHeader = Record<string, any>;
  export type LogDeleteOperCleanCookie = Record<string, any>;
  export type LogDeleteOperCleanResponse = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** number (可选) - 数据 | 格式: int32 */
    data?: number;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };
  export type LogDeleteOperCleanGeneric = {
    query: LogDeleteOperCleanQuery;
    params: LogDeleteOperCleanParams;
    data: LogDeleteOperCleanBody;
    header: LogDeleteOperCleanHeader;
    cookie: LogDeleteOperCleanCookie;
    result: LogDeleteOperCleanResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /log/login/clean
   * @summary 清理登录日志
   * @description 清理指定天数之前的登录日志(body:{"days":10})
   */
  export type LogDeleteLoginCleanQuery = Record<string, any>;
  export type LogDeleteLoginCleanParams = Record<string, any>;
  export type LogDeleteLoginCleanBody = Record<string, number>;
  export type LogDeleteLoginCleanHeader = Record<string, any>;
  export type LogDeleteLoginCleanCookie = Record<string, any>;
  export type LogDeleteLoginCleanResponse = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** number (可选) - 数据 | 格式: int32 */
    data?: number;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };
  export type LogDeleteLoginCleanGeneric = {
    query: LogDeleteLoginCleanQuery;
    params: LogDeleteLoginCleanParams;
    data: LogDeleteLoginCleanBody;
    header: LogDeleteLoginCleanHeader;
    cookie: LogDeleteLoginCleanCookie;
    result: LogDeleteLoginCleanResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /log/exception/clean
   * @summary 清理异常日志
   * @description 清理指定天数之前的异常日志(body:{"days":10})
   */
  export type LogDeleteExceptionCleanQuery = Record<string, any>;
  export type LogDeleteExceptionCleanParams = Record<string, any>;
  export type LogDeleteExceptionCleanBody = Record<string, number>;
  export type LogDeleteExceptionCleanHeader = Record<string, any>;
  export type LogDeleteExceptionCleanCookie = Record<string, any>;
  export type LogDeleteExceptionCleanResponse = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** number (可选) - 数据 | 格式: int32 */
    data?: number;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };
  export type LogDeleteExceptionCleanGeneric = {
    query: LogDeleteExceptionCleanQuery;
    params: LogDeleteExceptionCleanParams;
    data: LogDeleteExceptionCleanBody;
    header: LogDeleteExceptionCleanHeader;
    cookie: LogDeleteExceptionCleanCookie;
    result: LogDeleteExceptionCleanResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };
}
