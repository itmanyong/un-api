export namespace QianniaoModels {
  /**
   * ResultVoid
   * @description 统一响应结果
   */
  export type ResultVoid = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** () (可选) - 数据 */
    data?: any;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };

  /**
   * AppCreateRequest
   * @description 创建应用请求
   */
  export type AppCreateRequest = {
    /** string - 应用编码 | 示例: "portal" | 最小长度: 1字符 */
    appCode: string;

    /** string - 应用名称 | 示例: "统一门户" | 最小长度: 1字符 */
    appName: string;

    /** string (可选) - 应用地址 | 示例: "http://localhost:8082" */
    appUrl?: string;

    /** string (可选) - 应用图标URL */
    appIcon?: string;

    /** string (可选) - 应用描述 | 示例: "统一门户应用" */
    appDesc?: string;

    /** "{"name":"WEB","desc":"Web系统"}" | "{"name":"MINIAPP","desc":"小程序"}" (可选) - 应用类型(1Web 2小程序 3移动端) | 示例: 1 | 可选值: "{\"name\":\"WEB\",\"desc\":\"Web系统\"}", "{\"name\":\"MINIAPP\",\"desc\":\"小程序\"}" */
    appType?: "WEB" | "MINIAPP";

    /** string (可选) - 登出地址 | 示例: "http://localhost:8082/logout" */
    logoutUrl?: string;

    /** number (可选) - 排序 | 示例: 0 | 格式: int32 */
    sortOrder?: number;

    /** string (可选) - 备注 */
    remark?: string;
  };

  /**
   * ResultUploadResultDTO
   * @description 统一响应结果
   */
  export type ResultUploadResultDTO = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** QianniaoModels.UploadResultDTO (可选) */
    data?: QianniaoModels.UploadResultDTO;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };

  /**
   * UploadResultDTO
   */
  export type UploadResultDTO = {
    /** string (可选) */
    originalFileName?: string;

    /** string (可选) */
    savePath?: string;
  };

  /**
   * ResultListUploadResultDTO
   * @description 统一响应结果
   */
  export type ResultListUploadResultDTO = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** array (可选) - 数据 */
    data?: QianniaoModels.UploadResultDTO[];

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };

  /**
   * AppInfo
   * @description 应用信息
   */
  export type AppInfo = {
    /** number (可选) - 应用ID | 示例: 1 | 格式: int64 */
    appId?: number;

    /** string (可选) - 应用编码 | 示例: "portal" */
    appCode?: string;

    /** string (可选) - 应用名称 | 示例: "统一门户" */
    appName?: string;

    /** string (可选) - 应用地址 | 示例: "http://localhost:8082" */
    appUrl?: string;

    /** string (可选) - 应用图标 */
    appIcon?: string;
  };

  /**
   * ResultUserInfo
   * @description 统一响应结果
   */
  export type ResultUserInfo = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** QianniaoModels.UserInfo (可选) */
    data?: QianniaoModels.UserInfo;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };

  /**
   * UserInfo
   * @description 用户信息
   */
  export type UserInfo = {
    /** number (可选) - 用户ID | 示例: 1 | 格式: int64 */
    userId?: number;

    /** string (可选) - 用户名 | 示例: "admin" */
    username?: string;

    /** string (可选) - 真实姓名 | 示例: "管理员" */
    realName?: string;

    /** string (可选) - 手机号 | 示例: 13800138000 */
    phone?: string;

    /** string (可选) - 头像URL */
    avatar?: string;

    /** number (可选) - 租户ID | 示例: 1 | 格式: int64 */
    tenantId?: number;

    /** string (可选) - 租户名称 | 示例: "默认租户" */
    tenantName?: string;

    /** array (可选) - 拥有的应用列表 */
    apps?: QianniaoModels.AppInfo[];
  };

  /**
   * RefreshTokenRequest
   * @description 刷新Token请求
   */
  export type RefreshTokenRequest = {
    /** string - 刷新令牌 | 示例: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." | 最小长度: 1字符 */
    refreshToken: string;
  };

  /**
   * ResultTokenInfo
   * @description 统一响应结果
   */
  export type ResultTokenInfo = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** QianniaoModels.TokenInfo (可选) */
    data?: QianniaoModels.TokenInfo;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };

  /**
   * TokenInfo
   * @description Token信息
   */
  export type TokenInfo = {
    /** string (可选) - 访问令牌 | 示例: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." */
    accessToken?: string;

    /** string (可选) - 刷新令牌 | 示例: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." */
    refreshToken?: string;

    /** number (可选) - 过期时间(秒) | 示例: 7200 | 格式: int64 */
    expiresIn?: number;

    /** string (可选) - 令牌类型 | 示例: "Bearer" */
    tokenType?: string;
  };

  /**
   * LoginRequest
   * @description 登录请求
   */
  export type LoginRequest = {
    /** string - 用户名 | 示例: "admin" | 最小长度: 1字符 */
    username: string;

    /** string - 密码 | 示例: "MD5(admin123)" | 最小长度: 1字符 */
    password: string;
  };

  /**
   * LoginResponse
   * @description 登录响应
   */
  export type LoginResponse = {
    /** string (可选) - 访问令牌 | 示例: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." */
    accessToken?: string;

    /** string (可选) - 刷新令牌 | 示例: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." */
    refreshToken?: string;

    /** number (可选) - 过期时间(秒) | 示例: 7200 | 格式: int64 */
    expiresIn?: number;

    /** string (可选) - 令牌类型 | 示例: "Bearer" */
    tokenType?: string;

    /** QianniaoModels.UserInfo (可选) */
    userInfo?: QianniaoModels.UserInfo;
  };

  /**
   * ResultLoginResponse
   * @description 统一响应结果
   */
  export type ResultLoginResponse = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** QianniaoModels.LoginResponse (可选) */
    data?: QianniaoModels.LoginResponse;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };

  /**
   * ResultMapStringObject
   * @description 统一响应结果
   */
  export type ResultMapStringObject = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** object (可选) - 数据 */
    data?: Record<string, any>;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };

  /**
   * ResultMapStringString
   * @description 统一响应结果
   */
  export type ResultMapStringString = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** object (可选) - 数据 */
    data?: Record<string, string>;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };

  /**
   * Result
   * @description 统一响应结果
   */
  export type Result = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** () (可选) - 数据 */
    data?: any;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };

  /**
   * ResultSysOperLog
   * @description 统一响应结果
   */
  export type ResultSysOperLog = {
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

  /**
   * SysOperLog
   */
  export type SysOperLog = {
    /** number (可选) - 格式: int64 */
    id?: number;

    /** number (可选) - 格式: int64 */
    userId?: number;

    /** string (可选) */
    username?: string;

    /** number (可选) - 格式: int64 */
    tenantId?: number;

    /** string (可选) */
    module?: string;

    /** "{"name":"OTHER","desc":"其他"}" | "{"name":"INSERT","desc":"新增"}" | "{"name":"UPDATE","desc":"修改"}" | "{"name":"DELETE","desc":"删除"}" | "{"name":"QUERY","desc":"查询"}" | "{"name":"EXPORT","desc":"导出"}" | "{"name":"IMPORT","desc":"导入"}" | "{"name":"GRANT","desc":"授权"}" | "{"name":"FORCE_LOGOUT","desc":"强制退出"}" (可选) - 可选值: "{\"name\":\"OTHER\",\"desc\":\"其他\"}", "{\"name\":\"INSERT\",\"desc\":\"新增\"}", "{\"name\":\"UPDATE\",\"desc\":\"修改\"}", "{\"name\":\"DELETE\",\"desc\":\"删除\"}", "{\"name\":\"QUERY\",\"desc\":\"查询\"}", "{\"name\":\"EXPORT\",\"desc\":\"导出\"}", "{\"name\":\"IMPORT\",\"desc\":\"导入\"}", "{\"name\":\"GRANT\",\"desc\":\"授权\"}", "{\"name\":\"FORCE_LOGOUT\",\"desc\":\"强制退出\"}" */
    operType?: "OTHER" | "INSERT" | "UPDATE" | "DELETE" | "QUERY" | "EXPORT" | "IMPORT" | "GRANT" | "FORCE_LOGOUT";

    /** string (可选) */
    operDesc?: string;

    /** string (可选) */
    methodName?: string;

    /** string (可选) */
    requestMethod?: string;

    /** string (可选) */
    requestUrl?: string;

    /** string (可选) */
    requestParams?: string;

    /** string (可选) */
    responseResult?: string;

    /** string (可选) */
    errorMsg?: string;

    /** string (可选) */
    operIp?: string;

    /** string (可选) */
    operLocation?: string;

    /** number (可选) - 格式: int64 */
    costTime?: number;

    /** "{"name":"SUCCESS","desc":"成功"}" | "{"name":"FAIL","desc":"失败"}" (可选) - 可选值: "{\"name\":\"SUCCESS\",\"desc\":\"成功\"}", "{\"name\":\"FAIL\",\"desc\":\"失败\"}" */
    status?: "SUCCESS" | "FAIL";

    /** string (可选) - 格式: date-time */
    operTime?: string;
  };

  /**
   * PageResultSysOperLog
   * @description 分页结果
   */
  export type PageResultSysOperLog = {
    /** number (可选) - 当前页码 | 示例: 1 | 格式: int64 */
    pageNum?: number;

    /** number (可选) - 每页大小 | 示例: 10 | 格式: int64 */
    pageSize?: number;

    /** number (可选) - 总记录数 | 示例: 100 | 格式: int64 */
    total?: number;

    /** number (可选) - 总页数 | 示例: 10 | 格式: int64 */
    pages?: number;

    /** array (可选) - 数据列表 */
    list?: QianniaoModels.SysOperLog[];
  };

  /**
   * ResultPageResultSysOperLog
   * @description 统一响应结果
   */
  export type ResultPageResultSysOperLog = {
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

  /**
   * ResultSysLoginLog
   * @description 统一响应结果
   */
  export type ResultSysLoginLog = {
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

  /**
   * SysLoginLog
   */
  export type SysLoginLog = {
    /** number (可选) - 格式: int64 */
    id?: number;

    /** number (可选) - 格式: int64 */
    userId?: number;

    /** string (可选) */
    username?: string;

    /** "{"name":"PASSWORD","desc":"账号密码"}" | "{"name":"MINIAPP","desc":"小程序"}" (可选) - 可选值: "{\"name\":\"PASSWORD\",\"desc\":\"账号密码\"}", "{\"name\":\"MINIAPP\",\"desc\":\"小程序\"}" */
    loginType?: "PASSWORD" | "MINIAPP";

    /** string (可选) */
    loginIp?: string;

    /** string (可选) */
    loginLocation?: string;

    /** string (可选) */
    browser?: string;

    /** string (可选) */
    os?: string;

    /** string (可选) */
    device?: string;

    /** "{"name":"SUCCESS","desc":"成功"}" | "{"name":"FAIL","desc":"失败"}" (可选) - 可选值: "{\"name\":\"SUCCESS\",\"desc\":\"成功\"}", "{\"name\":\"FAIL\",\"desc\":\"失败\"}" */
    status?: "SUCCESS" | "FAIL";

    /** string (可选) */
    message?: string;

    /** string (可选) - 格式: date-time */
    loginTime?: string;
  };

  /**
   * PageResultSysLoginLog
   * @description 分页结果
   */
  export type PageResultSysLoginLog = {
    /** number (可选) - 当前页码 | 示例: 1 | 格式: int64 */
    pageNum?: number;

    /** number (可选) - 每页大小 | 示例: 10 | 格式: int64 */
    pageSize?: number;

    /** number (可选) - 总记录数 | 示例: 100 | 格式: int64 */
    total?: number;

    /** number (可选) - 总页数 | 示例: 10 | 格式: int64 */
    pages?: number;

    /** array (可选) - 数据列表 */
    list?: QianniaoModels.SysLoginLog[];
  };

  /**
   * ResultPageResultSysLoginLog
   * @description 统一响应结果
   */
  export type ResultPageResultSysLoginLog = {
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

  /**
   * ResultSysExceptionLog
   * @description 统一响应结果
   */
  export type ResultSysExceptionLog = {
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

  /**
   * SysExceptionLog
   */
  export type SysExceptionLog = {
    /** number (可选) - 格式: int64 */
    id?: number;

    /** number (可选) - 格式: int64 */
    userId?: number;

    /** string (可选) */
    username?: string;

    /** string (可选) */
    exceptionType?: string;

    /** string (可选) */
    exceptionMessage?: string;

    /** string (可选) */
    exceptionStack?: string;

    /** string (可选) */
    requestUrl?: string;

    /** string (可选) */
    requestMethod?: string;

    /** string (可选) */
    requestParams?: string;

    /** string (可选) */
    className?: string;

    /** string (可选) */
    methodName?: string;

    /** number (可选) - 格式: int32 */
    lineNumber?: number;

    /** string (可选) */
    exceptionIp?: string;

    /** string (可选) - 格式: date-time */
    exceptionTime?: string;
  };

  /**
   * PageResultSysExceptionLog
   * @description 分页结果
   */
  export type PageResultSysExceptionLog = {
    /** number (可选) - 当前页码 | 示例: 1 | 格式: int64 */
    pageNum?: number;

    /** number (可选) - 每页大小 | 示例: 10 | 格式: int64 */
    pageSize?: number;

    /** number (可选) - 总记录数 | 示例: 100 | 格式: int64 */
    total?: number;

    /** number (可选) - 总页数 | 示例: 10 | 格式: int64 */
    pages?: number;

    /** array (可选) - 数据列表 */
    list?: QianniaoModels.SysExceptionLog[];
  };

  /**
   * ResultPageResultSysExceptionLog
   * @description 统一响应结果
   */
  export type ResultPageResultSysExceptionLog = {
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

  /**
   * ResultSysApp
   * @description 统一响应结果
   */
  export type ResultSysApp = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** QianniaoModels.SysApp (可选) */
    data?: QianniaoModels.SysApp;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };

  /**
   * SysApp
   */
  export type SysApp = {
    /** number (可选) - 格式: int64 */
    id?: number;

    /** string (可选) */
    appCode?: string;

    /** string (可选) */
    appName?: string;

    /** string (可选) */
    appKey?: string;

    /** string (可选) */
    appSecret?: string;

    /** string (可选) */
    appUrl?: string;

    /** string (可选) */
    appIcon?: string;

    /** string (可选) */
    appDesc?: string;

    /** "{"name":"WEB","desc":"Web系统"}" | "{"name":"MINIAPP","desc":"小程序"}" (可选) - 可选值: "{\"name\":\"WEB\",\"desc\":\"Web系统\"}", "{\"name\":\"MINIAPP\",\"desc\":\"小程序\"}" */
    appType?: "WEB" | "MINIAPP";

    /** string (可选) */
    logoutUrl?: string;

    /** number (可选) - 格式: int32 */
    sortOrder?: number;

    /** "{"name":"ENABLE","desc":"启用"}" | "{"name":"DISABLE","desc":"禁用"}" (可选) - 可选值: "{\"name\":\"ENABLE\",\"desc\":\"启用\"}", "{\"name\":\"DISABLE\",\"desc\":\"禁用\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) */
    remark?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 格式: date-time */
    updateTime?: string;

    /** string (可选) */
    createBy?: string;

    /** string (可选) */
    updateBy?: string;

    /** number (可选) - 格式: int32 */
    deleted?: number;
  };

  /**
   * PageResultSysApp
   * @description 分页结果
   */
  export type PageResultSysApp = {
    /** number (可选) - 当前页码 | 示例: 1 | 格式: int64 */
    pageNum?: number;

    /** number (可选) - 每页大小 | 示例: 10 | 格式: int64 */
    pageSize?: number;

    /** number (可选) - 总记录数 | 示例: 100 | 格式: int64 */
    total?: number;

    /** number (可选) - 总页数 | 示例: 10 | 格式: int64 */
    pages?: number;

    /** array (可选) - 数据列表 */
    list?: QianniaoModels.SysApp[];
  };

  /**
   * ResultPageResultSysApp
   * @description 统一响应结果
   */
  export type ResultPageResultSysApp = {
    /** number (可选) - 状态码 | 示例: 200 | 格式: int32 */
    code?: number;

    /** string (可选) - 消息 | 示例: "操作成功" */
    message?: string;

    /** QianniaoModels.PageResultSysApp (可选) */
    data?: QianniaoModels.PageResultSysApp;

    /** number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64 */
    timestamp?: number;

    /** boolean (可选) */
    success?: boolean;
  };

  /**
   * ResultInteger
   * @description 统一响应结果
   */
  export type ResultInteger = {
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
}
