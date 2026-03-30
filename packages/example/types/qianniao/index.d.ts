import * as tsTypes from "./types";
import type { ApiFunctionGenerate } from "@itmanyong/un-api";
export {};
declare module "@qianniao" {
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | app | getById | /app/{id} | GET | 获取应用详情 |
   * | app | putById | /app/{id} | PUT | 更新应用 |
   * | app | deleteById | /app/{id} | DELETE | 删除应用 |
   * | app | post | /app | POST | 创建应用 |
   * | app | postByIdStatus | /app/{id}/status | POST | 修改状态 |
   * | app | postByIdRegenerateSecret | /app/{id}/regenerate-secret | POST | 重新生成密钥 |
   * | app | getPage | /app/page | GET | 分页查询应用 |
   * | file | postUpload | /file/upload | POST | 上传文件（FormData） |
   * | file | postUploadBatch | /file/upload/batch | POST | 批量上传文件（FormData） |
   * | file | getDownload | /file/download | GET | 下载文件 |
   * | auth | postValidate | /auth/validate | POST | 验证Token |
   * | auth | postRefresh | /auth/refresh | POST | 刷新Token |
   * | auth | postLogout | /auth/logout | POST | 用户登出 |
   * | auth | postLogin | /auth/login | POST | 用户登录 |
   * | auth | getInfo | /auth/info | GET | 获取当前用户信息 |
   * | user | getAllEnums | /user/allEnums | GET | 获取所有枚举信息 |
   * | log | getOperById | /log/oper/{id} | GET | 获取操作日志详情 |
   * | log | getOperPage | /log/oper/page | GET | 分页查询操作日志 |
   * | log | getLoginById | /log/login/{id} | GET | 获取登录日志详情 |
   * | log | getLoginPage | /log/login/page | GET | 分页查询登录日志 |
   * | log | getExceptionById | /log/exception/{id} | GET | 获取异常日志详情 |
   * | log | getExceptionPage | /log/exception/page | GET | 分页查询异常日志 |
   * | log | deleteOperClean | /log/oper/clean | DELETE | 清理操作日志 |
   * | log | deleteLoginClean | /log/login/clean | DELETE | 清理登录日志 |
   * | log | deleteExceptionClean | /log/exception/clean | DELETE | 清理异常日志 |
   */
  const apiQianniao: {
    /**
     * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
     * | --- | --- | --- | --- | --- |
     * | app | getById | /app/{id} | GET | 获取应用详情 |
     * | app | putById | /app/{id} | PUT | 更新应用 |
     * | app | deleteById | /app/{id} | DELETE | 删除应用 |
     * | app | post | /app | POST | 创建应用 |
     * | app | postByIdStatus | /app/{id}/status | POST | 修改状态 |
     * | app | postByIdRegenerateSecret | /app/{id}/regenerate-secret | POST | 重新生成密钥 |
     * | app | getPage | /app/page | GET | 分页查询应用 |
     */
    app: {
      /**
       * @api app | getById | /app/{id} | GET | 获取应用详情
       * @params
       * ```ts
       * {
       *   // number - 格式: int64
       *   id: number;
       * }
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // QianniaoModels.SysApp (可选)
       *   data?: QianniaoModels.SysApp;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      getById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AppModels.AppGetByIdGeneric>;
      /**
       * @api app | putById | /app/{id} | PUT | 更新应用
       * @params
       * ```ts
       * {
       *   // number - 格式: int64
       *   id: number;
       * }
       * ```
       * @body
       * ```ts
       * {
       *   // string - 应用编码 | 示例: "portal" | 最小长度: 1字符
       *   appCode: string;
       *   // string - 应用名称 | 示例: "统一门户" | 最小长度: 1字符
       *   appName: string;
       *   // string (可选) - 应用地址 | 示例: "http://localhost:8082"
       *   appUrl?: string;
       *   // string (可选) - 应用图标URL
       *   appIcon?: string;
       *   // string (可选) - 应用描述 | 示例: "统一门户应用"
       *   appDesc?: string;
       *   // "{"name":"WEB","desc":"Web系统"}" | "{"name":"MINIAPP","desc":"小程序"}" (可选) - 应用类型(1Web 2小程序 3移动端) | 示例: 1 | 可选值: "{\"name\":\"WEB\",\"desc\":\"Web系统\"}", "{\"name\":\"MINIAPP\",\"desc\":\"小程序\"}"
       *   appType?: "WEB" | "MINIAPP";
       *   // string (可选) - 登出地址 | 示例: "http://localhost:8082/logout"
       *   logoutUrl?: string;
       *   // number (可选) - 排序 | 示例: 0 | 格式: int32
       *   sortOrder?: number;
       *   // string (可选) - 备注
       *   remark?: string;
       * }
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // () (可选) - 数据
       *   data?: any;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      putById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AppModels.AppPutByIdGeneric>;
      /**
       * @api app | deleteById | /app/{id} | DELETE | 删除应用
       * @params
       * ```ts
       * {
       *   // number - 格式: int64
       *   id: number;
       * }
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // () (可选) - 数据
       *   data?: any;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      deleteById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AppModels.AppDeleteByIdGeneric>;
      /**
       * @api app | post | /app | POST | 创建应用
       * @body
       * ```ts
       * {
       *   // string - 应用编码 | 示例: "portal" | 最小长度: 1字符
       *   appCode: string;
       *   // string - 应用名称 | 示例: "统一门户" | 最小长度: 1字符
       *   appName: string;
       *   // string (可选) - 应用地址 | 示例: "http://localhost:8082"
       *   appUrl?: string;
       *   // string (可选) - 应用图标URL
       *   appIcon?: string;
       *   // string (可选) - 应用描述 | 示例: "统一门户应用"
       *   appDesc?: string;
       *   // "{"name":"WEB","desc":"Web系统"}" | "{"name":"MINIAPP","desc":"小程序"}" (可选) - 应用类型(1Web 2小程序 3移动端) | 示例: 1 | 可选值: "{\"name\":\"WEB\",\"desc\":\"Web系统\"}", "{\"name\":\"MINIAPP\",\"desc\":\"小程序\"}"
       *   appType?: "WEB" | "MINIAPP";
       *   // string (可选) - 登出地址 | 示例: "http://localhost:8082/logout"
       *   logoutUrl?: string;
       *   // number (可选) - 排序 | 示例: 0 | 格式: int32
       *   sortOrder?: number;
       *   // string (可选) - 备注
       *   remark?: string;
       * }
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // object (可选) - 数据
       *   data?: Record<string, any>;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      post: ApiFunctionGenerate<RequestInit, Response, tsTypes.AppModels.AppPostGeneric>;
      /**
       * @api app | postByIdStatus | /app/{id}/status | POST | 修改状态
       * @params
       * ```ts
       * {
       *   // number - 格式: int64
       *   id: number;
       * }
       * ```
       * @body
       * ```ts
       * Record<string, "ENABLE" | "DISABLE">
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // () (可选) - 数据
       *   data?: any;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      postByIdStatus: ApiFunctionGenerate<RequestInit, Response, tsTypes.AppModels.AppPostByIdStatusGeneric>;
      /**
       * @api app | postByIdRegenerateSecret | /app/{id}/regenerate-secret | POST | 重新生成密钥
       * @params
       * ```ts
       * {
       *   // number - 格式: int64
       *   id: number;
       * }
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // object (可选) - 数据
       *   data?: Record<string, string>;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      postByIdRegenerateSecret: ApiFunctionGenerate<RequestInit, Response, tsTypes.AppModels.AppPostByIdRegenerateSecretGeneric>;
      /**
       * @api app | getPage | /app/page | GET | 分页查询应用
       * @query
       * ```ts
       * {
       *   // number (可选) - 默认值: 1 | 格式: int32
       *   pageNum?: number;
       *   // number (可选) - 默认值: 10 | 格式: int32
       *   pageSize?: number;
       *   // string (可选)
       *   appName?: string;
       *   // "{"name":"WEB","desc":"Web系统"}" | "{"name":"MINIAPP","desc":"小程序"}" (可选) - 可选值: "{\"name\":\"WEB\",\"desc\":\"Web系统\"}", "{\"name\":\"MINIAPP\",\"desc\":\"小程序\"}"
       *   appType?: "WEB" | "MINIAPP";
       *   // "{"name":"ENABLE","desc":"启用"}" | "{"name":"DISABLE","desc":"禁用"}" (可选) - 可选值: "{\"name\":\"ENABLE\",\"desc\":\"启用\"}", "{\"name\":\"DISABLE\",\"desc\":\"禁用\"}"
       *   status?: "ENABLE" | "DISABLE";
       * }
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // QianniaoModels.PageResultSysApp (可选)
       *   data?: QianniaoModels.PageResultSysApp;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.AppModels.AppGetPageGeneric>;
    };
    /**
     * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
     * | --- | --- | --- | --- | --- |
     * | file | postUpload | /file/upload | POST | 上传文件（FormData） |
     * | file | postUploadBatch | /file/upload/batch | POST | 批量上传文件（FormData） |
     * | file | getDownload | /file/download | GET | 下载文件 |
     */
    file: {
      /**
       * @api file | postUpload | /file/upload | POST | 上传文件（FormData）
       * @query
       * ```ts
       * {
       *   // string - 格式: binary
       *   file: string;
       *   // string (可选)
       *   parentPath?: string;
       *   // string (可选)
       *   fileName?: string;
       * }
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // QianniaoModels.UploadResultDTO (可选)
       *   data?: QianniaoModels.UploadResultDTO;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      postUpload: ApiFunctionGenerate<RequestInit, Response, tsTypes.FileModels.FilePostUploadGeneric>;
      /**
       * @api file | postUploadBatch | /file/upload/batch | POST | 批量上传文件（FormData）
       * @query
       * ```ts
       * {
       *   // array
       *   file: string[];
       *   // string (可选)
       *   parentPath?: string;
       * }
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // array (可选) - 数据
       *   data?: QianniaoModels.UploadResultDTO[];
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      postUploadBatch: ApiFunctionGenerate<RequestInit, Response, tsTypes.FileModels.FilePostUploadBatchGeneric>;
      /**
       * @api file | getDownload | /file/download | GET | 下载文件
       * @query
       * ```ts
       * {
       *   // string
       *   path: string;
       * }
       * ```
       */
      getDownload: ApiFunctionGenerate<RequestInit, Response, tsTypes.FileModels.FileGetDownloadGeneric>;
    };
    /**
     * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
     * | --- | --- | --- | --- | --- |
     * | auth | postValidate | /auth/validate | POST | 验证Token |
     * | auth | postRefresh | /auth/refresh | POST | 刷新Token |
     * | auth | postLogout | /auth/logout | POST | 用户登出 |
     * | auth | postLogin | /auth/login | POST | 用户登录 |
     * | auth | getInfo | /auth/info | GET | 获取当前用户信息 |
     */
    auth: {
      /**
       * @api auth | postValidate | /auth/validate | POST | 验证Token
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // QianniaoModels.UserInfo (可选)
       *   data?: QianniaoModels.UserInfo;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      postValidate: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuthModels.AuthPostValidateGeneric>;
      /**
       * @api auth | postRefresh | /auth/refresh | POST | 刷新Token
       * @body
       * ```ts
       * {
       *   // string - 刷新令牌 | 示例: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." | 最小长度: 1字符
       *   refreshToken: string;
       * }
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // QianniaoModels.TokenInfo (可选)
       *   data?: QianniaoModels.TokenInfo;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      postRefresh: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuthModels.AuthPostRefreshGeneric>;
      /**
       * @api auth | postLogout | /auth/logout | POST | 用户登出
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // () (可选) - 数据
       *   data?: any;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      postLogout: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuthModels.AuthPostLogoutGeneric>;
      /**
       * @api auth | postLogin | /auth/login | POST | 用户登录
       * @body
       * ```ts
       * {
       *   // string - 用户名 | 示例: "admin" | 最小长度: 1字符
       *   username: string;
       *   // string - 密码 | 示例: "MD5(admin123)" | 最小长度: 1字符
       *   password: string;
       * }
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // QianniaoModels.LoginResponse (可选)
       *   data?: QianniaoModels.LoginResponse;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      postLogin: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuthModels.AuthPostLoginGeneric>;
      /**
       * @api auth | getInfo | /auth/info | GET | 获取当前用户信息
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // QianniaoModels.UserInfo (可选)
       *   data?: QianniaoModels.UserInfo;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      getInfo: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuthModels.AuthGetInfoGeneric>;
    };
    /**
     * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
     * | --- | --- | --- | --- | --- |
     * | user | getAllEnums | /user/allEnums | GET | 获取所有枚举信息 |
     */
    user: {
      /**
       * @api user | getAllEnums | /user/allEnums | GET | 获取所有枚举信息
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // () (可选) - 数据
       *   data?: any;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      getAllEnums: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserModels.UserGetAllEnumsGeneric>;
    };
    /**
     * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
     * | --- | --- | --- | --- | --- |
     * | log | getOperById | /log/oper/{id} | GET | 获取操作日志详情 |
     * | log | getOperPage | /log/oper/page | GET | 分页查询操作日志 |
     * | log | getLoginById | /log/login/{id} | GET | 获取登录日志详情 |
     * | log | getLoginPage | /log/login/page | GET | 分页查询登录日志 |
     * | log | getExceptionById | /log/exception/{id} | GET | 获取异常日志详情 |
     * | log | getExceptionPage | /log/exception/page | GET | 分页查询异常日志 |
     * | log | deleteOperClean | /log/oper/clean | DELETE | 清理操作日志 |
     * | log | deleteLoginClean | /log/login/clean | DELETE | 清理登录日志 |
     * | log | deleteExceptionClean | /log/exception/clean | DELETE | 清理异常日志 |
     */
    log: {
      /**
       * @api log | getOperById | /log/oper/{id} | GET | 获取操作日志详情
       * @params
       * ```ts
       * {
       *   // number - 格式: int64
       *   id: number;
       * }
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // QianniaoModels.SysOperLog (可选)
       *   data?: QianniaoModels.SysOperLog;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      getOperById: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogGetOperByIdGeneric>;
      /**
       * @api log | getOperPage | /log/oper/page | GET | 分页查询操作日志
       * @query
       * ```ts
       * {
       *   // number (可选) - 默认值: 1 | 格式: int32
       *   pageNum?: number;
       *   // number (可选) - 默认值: 10 | 格式: int32
       *   pageSize?: number;
       *   // string (可选)
       *   module?: string;
       *   // string (可选)
       *   username?: string;
       *   // "{"name":"SUCCESS","desc":"成功"}" | "{"name":"FAIL","desc":"失败"}" (可选) - 可选值: "{\"name\":\"SUCCESS\",\"desc\":\"成功\"}", "{\"name\":\"FAIL\",\"desc\":\"失败\"}"
       *   status?: "SUCCESS" | "FAIL";
       * }
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // QianniaoModels.PageResultSysOperLog (可选)
       *   data?: QianniaoModels.PageResultSysOperLog;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      getOperPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogGetOperPageGeneric>;
      /**
       * @api log | getLoginById | /log/login/{id} | GET | 获取登录日志详情
       * @params
       * ```ts
       * {
       *   // number - 格式: int64
       *   id: number;
       * }
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // QianniaoModels.SysLoginLog (可选)
       *   data?: QianniaoModels.SysLoginLog;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      getLoginById: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogGetLoginByIdGeneric>;
      /**
       * @api log | getLoginPage | /log/login/page | GET | 分页查询登录日志
       * @query
       * ```ts
       * {
       *   // number (可选) - 默认值: 1 | 格式: int32
       *   pageNum?: number;
       *   // number (可选) - 默认值: 10 | 格式: int32
       *   pageSize?: number;
       *   // string (可选)
       *   username?: string;
       *   // "{"name":"SUCCESS","desc":"成功"}" | "{"name":"FAIL","desc":"失败"}" (可选) - 可选值: "{\"name\":\"SUCCESS\",\"desc\":\"成功\"}", "{\"name\":\"FAIL\",\"desc\":\"失败\"}"
       *   status?: "SUCCESS" | "FAIL";
       * }
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // QianniaoModels.PageResultSysLoginLog (可选)
       *   data?: QianniaoModels.PageResultSysLoginLog;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      getLoginPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogGetLoginPageGeneric>;
      /**
       * @api log | getExceptionById | /log/exception/{id} | GET | 获取异常日志详情
       * @params
       * ```ts
       * {
       *   // number - 格式: int64
       *   id: number;
       * }
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // QianniaoModels.SysExceptionLog (可选)
       *   data?: QianniaoModels.SysExceptionLog;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      getExceptionById: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogGetExceptionByIdGeneric>;
      /**
       * @api log | getExceptionPage | /log/exception/page | GET | 分页查询异常日志
       * @query
       * ```ts
       * {
       *   // number (可选) - 默认值: 1 | 格式: int32
       *   pageNum?: number;
       *   // number (可选) - 默认值: 10 | 格式: int32
       *   pageSize?: number;
       *   // string (可选)
       *   exceptionType?: string;
       *   // string (可选)
       *   username?: string;
       * }
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // QianniaoModels.PageResultSysExceptionLog (可选)
       *   data?: QianniaoModels.PageResultSysExceptionLog;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      getExceptionPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogGetExceptionPageGeneric>;
      /**
       * @api log | deleteOperClean | /log/oper/clean | DELETE | 清理操作日志
       * @body
       * ```ts
       * Record<string, number>
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // number (可选) - 数据 | 格式: int32
       *   data?: number;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      deleteOperClean: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogDeleteOperCleanGeneric>;
      /**
       * @api log | deleteLoginClean | /log/login/clean | DELETE | 清理登录日志
       * @body
       * ```ts
       * Record<string, number>
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // number (可选) - 数据 | 格式: int32
       *   data?: number;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      deleteLoginClean: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogDeleteLoginCleanGeneric>;
      /**
       * @api log | deleteExceptionClean | /log/exception/clean | DELETE | 清理异常日志
       * @body
       * ```ts
       * Record<string, number>
       * ```
       * @response
       * ```ts
       * {
       *   // number (可选) - 状态码 | 示例: 200 | 格式: int32
       *   code?: number;
       *   // string (可选) - 消息 | 示例: "操作成功"
       *   message?: string;
       *   // number (可选) - 数据 | 格式: int32
       *   data?: number;
       *   // number (可选) - 时间戳 | 示例: 1700000000000 | 格式: int64
       *   timestamp?: number;
       *   // boolean (可选)
       *   success?: boolean;
       * }
       * ```
       */
      deleteExceptionClean: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogModels.LogDeleteExceptionCleanGeneric>;
    };
  };
  export default apiQianniao;
}
