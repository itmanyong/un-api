import * as tsTypes from "./types";
import type { ApiFunctionGenerate } from "@itmanyong/un-api";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
export {};
declare module "@yusuan" {
  /**
   * @api file | postUpload | /file/upload | POST | 上传文件（FormData）
   * @query
   * ```ts
   * {
   *   // string
   *   parentPath: string;
   *   // string
   *   fileName: string;
   * }
   * ```
   * @body
   * ```ts
   * {
   *   // string - 格式: binary
   *   file: string;
   * }
   * ```
   * @header
   * ```ts
   * {
   *   // string
   *   "request-source": string;
   * }
   * ```
   * @response
   * ```ts
   * Record<string, any>
   * ```
   */
  export const apiFilePostUpload: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.FileModels.FilePostUploadGeneric>;
  /**
   * @api file | postUploadList | /file/upload/list | POST | 批量上传文件（FormData）
   * @query
   * ```ts
   * {
   *   // array
   *   file: string[];
   *   // string
   *   parentPath: string;
   * }
   * ```
   * @header
   * ```ts
   * {
   *   // string
   *   "request-source": string;
   * }
   * ```
   * @response
   * ```ts
   * Record<string, any>
   * ```
   */
  export const apiFilePostUploadList: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.FileModels.FilePostUploadListGeneric>;
  /**
   * @api file | postUploadListBase64 | /file/upload/list/base64 | POST | 批量上传文件（Base64）
   * @body
   * ```ts
   * Record<string, any>[]
   * ```
   * @header
   * ```ts
   * {
   *   // string
   *   "request-source": string;
   * }
   * ```
   * @response
   * ```ts
   * Record<string, any>
   * ```
   */
  export const apiFilePostUploadListBase64: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.FileModels.FilePostUploadListBase64Generic
  >;
  /**
   * @api file | getDownload | /file/download | GET | 下载文件
   * @query
   * ```ts
   * {
   *   // string
   *   path: string;
   *   // "{"desc":"WEB","name":"WEB"}" - 可选值: "{\"desc\":\"WEB\",\"name\":\"WEB\"}"
   *   type: "WEB";
   * }
   * ```
   */
  export const apiFileGetDownload: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.FileModels.FileGetDownloadGeneric>;
  /**
   * @api user | putById | /user/{id} | PUT | 修改用户信息
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @body
   * ```ts
   * {
   *   // string (可选) - 用户姓名
   *   realName?: string;
   *   // string (可选) - 身份证号
   *   cardNumber?: string;
   *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
   *   sex?: "MAN" | "WOMAN" | "UNKNOWN";
   *   // string (可选) - 手机号
   *   phone?: string;
   *   // string (可选) - 部门id
   *   departmentId?: string;
   *   // string (可选) - 备注
   *   remark?: string;
   *   // string (可选) - 昵称
   *   nickName?: string;
   *   // string (可选) - 头像路径
   *   avatarPicPath?: string;
   *   // string (可选) - 角色id集合（多个英文逗号隔开）
   *   roleIds?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiUserPutById: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.UserModels.UserPutByIdGeneric>;
  /**
   * @api user | post | /user | POST | 新增用户信息
   * @body
   * ```ts
   * {
   *   // string (可选) - 用户姓名
   *   realName?: string;
   *   // string (可选) - 身份证号
   *   cardNumber?: string;
   *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
   *   sex?: "MAN" | "WOMAN" | "UNKNOWN";
   *   // string (可选) - 手机号
   *   phone?: string;
   *   // string - 部门id
   *   departmentId: string;
   *   // string (可选) - 备注
   *   remark?: string;
   *   // string - 用户名
   *   userName: string;
   *   // string - 密码
   *   userPassword: string;
   *   // "{"desc":"超级管理员","name":"SUPPER"}" | "{"desc":"普通用户","name":"NOMAL"}" - 用户类型 | 可选值: "{\"desc\":\"超级管理员\",\"name\":\"SUPPER\"}", "{\"desc\":\"普通用户\",\"name\":\"NOMAL\"}"
   *   userType: "SUPPER" | "NOMAL";
   *   // string (可选) - 昵称
   *   nickName?: string;
   *   // string (可选) - 头像路径
   *   avatarPicPath?: string;
   *   // string (可选) - 角色id集合（多个英文逗号隔开）
   *   roleIds?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.UserInfoDTO (可选)
   *   data?: YusuanModels.UserInfoDTO;
   * }
   * ```
   */
  export const apiUserPost: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.UserModels.UserPostGeneric>;
  /**
   * @api user | postList | /user/list | POST | 根据userId集合获取用户列表
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.UserInfoDTO[];
   * }
   * ```
   */
  export const apiUserPostList: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.UserModels.UserPostListGeneric>;
  /**
   * @api user | postListByAccount | /user/listByAccount | POST | 根据accountId集合获取用户列表
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.UserInfoDTO[];
   * }
   * ```
   */
  export const apiUserPostListByAccount: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.UserModels.UserPostListByAccountGeneric>;
  /**
   * @api user | getPage | /user/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // "{"desc":"超级管理员","name":"SUPPER"}" | "{"desc":"普通用户","name":"NOMAL"}" (可选) - 用户类型 | 可选值: "{\"desc\":\"超级管理员\",\"name\":\"SUPPER\"}", "{\"desc\":\"普通用户\",\"name\":\"NOMAL\"}"
   *   userType?: "SUPPER" | "NOMAL";
   *   // boolean (可选) - 是否锁定
   *   isLock?: boolean;
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 账号状态(启用,禁用) | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status?: "ENABLE" | "DISABLE";
   *   // string (可选) - 最后登录开始时间 | 格式: date-time
   *   startTime?: string;
   *   // string (可选) - 最后登录结束时间 | 格式: date-time
   *   endTime?: string;
   *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
   *   sex?: "MAN" | "WOMAN" | "UNKNOWN";
   *   // string (可选) - 部门id
   *   departmentId?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageUserInfoDTO (可选)
   *   data?: YusuanModels.BasePageUserInfoDTO;
   * }
   * ```
   */
  export const apiUserGetPage: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.UserModels.UserGetPageGeneric>;
  /**
   * @api user | getGetIMLink | /user/getIMLink | GET | 获取IM连接加密信息
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.IMLinkDTO (可选)
   *   data?: YusuanModels.IMLinkDTO;
   * }
   * ```
   */
  export const apiUserGetGetIMLink: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.UserModels.UserGetGetIMLinkGeneric>;
  /**
   * @api user | getGetAccountInfo | /user/getAccountInfo | GET | 获取当前登录用户的信息
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.UserInfoDTO (可选)
   *   data?: YusuanModels.UserInfoDTO;
   * }
   * ```
   */
  export const apiUserGetGetAccountInfo: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.UserModels.UserGetGetAccountInfoGeneric>;
  /**
   * @api systemMessage | putReadById | /systemMessage/read/{id} | PUT | 指定消息为已读状态
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiSystemMessagePutReadById: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.SystemMessageModels.SystemMessagePutReadByIdGeneric
  >;
  /**
   * @api systemMessage | getPage | /systemMessage/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // string (可选) - 接收人账号id
   *   receiveId?: string;
   *   // "{"desc":"审批通知","name":"SP"}" | "{"desc":"预算通知","name":"YS"}" | "{"desc":"项目通知","name":"XM"}" | "{"desc":"系统通知","name":"XT"}" (可选) - 类型 | 可选值: "{\"desc\":\"审批通知\",\"name\":\"SP\"}", "{\"desc\":\"预算通知\",\"name\":\"YS\"}", "{\"desc\":\"项目通知\",\"name\":\"XM\"}", "{\"desc\":\"系统通知\",\"name\":\"XT\"}"
   *   type?: "SP" | "YS" | "XM" | "XT";
   *   // "{"desc":"未读","name":"WD"}" | "{"desc":"已读","name":"YD"}" (可选) - 阅读状态 | 可选值: "{\"desc\":\"未读\",\"name\":\"WD\"}", "{\"desc\":\"已读\",\"name\":\"YD\"}"
   *   readStatus?: "WD" | "YD";
   *   // string (可选) - 阅读开始时间 | 格式: date-time
   *   readStartTime?: string;
   *   // string (可选) - 阅读结束时间 | 格式: date-time
   *   readEndTime?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageSystemMessageDTO (可选)
   *   data?: YusuanModels.BasePageSystemMessageDTO;
   * }
   * ```
   */
  export const apiSystemMessageGetPage: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.SystemMessageModels.SystemMessageGetPageGeneric
  >;
  /**
   * @api systemMessage | getCurrentPage | /systemMessage/current/page | GET | 分页查询当前登录用户的系统消息
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // string (可选) - 接收人账号id
   *   receiveId?: string;
   *   // "{"desc":"审批通知","name":"SP"}" | "{"desc":"预算通知","name":"YS"}" | "{"desc":"项目通知","name":"XM"}" | "{"desc":"系统通知","name":"XT"}" (可选) - 类型 | 可选值: "{\"desc\":\"审批通知\",\"name\":\"SP\"}", "{\"desc\":\"预算通知\",\"name\":\"YS\"}", "{\"desc\":\"项目通知\",\"name\":\"XM\"}", "{\"desc\":\"系统通知\",\"name\":\"XT\"}"
   *   type?: "SP" | "YS" | "XM" | "XT";
   *   // "{"desc":"未读","name":"WD"}" | "{"desc":"已读","name":"YD"}" (可选) - 阅读状态 | 可选值: "{\"desc\":\"未读\",\"name\":\"WD\"}", "{\"desc\":\"已读\",\"name\":\"YD\"}"
   *   readStatus?: "WD" | "YD";
   *   // string (可选) - 阅读开始时间 | 格式: date-time
   *   readStartTime?: string;
   *   // string (可选) - 阅读结束时间 | 格式: date-time
   *   readEndTime?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageSystemMessageDTO (可选)
   *   data?: YusuanModels.BasePageSystemMessageDTO;
   * }
   * ```
   */
  export const apiSystemMessageGetCurrentPage: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.SystemMessageModels.SystemMessageGetCurrentPageGeneric
  >;
  /**
   * @api role | getById | /role/{id} | GET | 根据ID查询一条数据
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.RoleInfoDTO (可选)
   *   data?: YusuanModels.RoleInfoDTO;
   * }
   * ```
   */
  export const apiRoleGetById: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.RoleModels.RoleGetByIdGeneric>;
  /**
   * @api role | putById | /role/{id} | PUT | 根据id修改一条数据
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @body
   * ```ts
   * {
   *   // string (可选) - 主键ID
   *   id?: string;
   *   // string (可选) - 创建时间 | 格式: date-time
   *   createTime?: string;
   *   // string (可选) - 修改时间 | 格式: date-time
   *   modifTime?: string;
   *   // string - 角色名称
   *   name: string;
   *   // string - 角色编码
   *   code: string;
   *   // string (可选) - 权限菜单ids（多个英文逗号隔开）
   *   permissionIds?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiRolePutById: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.RoleModels.RolePutByIdGeneric>;
  /**
   * @api role | deleteById | /role/{id} | DELETE | 根据id删除数据
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiRoleDeleteById: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.RoleModels.RoleDeleteByIdGeneric>;
  /**
   * @api role | putList | /role/list | PUT | 批量修改数据
   * @body
   * ```ts
   * YusuanModels.RoleInfoDTO[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiRolePutList: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.RoleModels.RolePutListGeneric>;
  /**
   * @api role | postList | /role/list | POST | 批量添加数据
   * @body
   * ```ts
   * YusuanModels.RoleInfoDTO[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.RoleInfoDTO[];
   * }
   * ```
   */
  export const apiRolePostList: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.RoleModels.RolePostListGeneric>;
  /**
   * @api role | deleteList | /role/list | DELETE | 根据id集合批量删除数据
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiRoleDeleteList: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.RoleModels.RoleDeleteListGeneric>;
  /**
   * @api role | post | /role | POST | 添加一条数据
   * @body
   * ```ts
   * {
   *   // string (可选) - 主键ID
   *   id?: string;
   *   // string (可选) - 创建时间 | 格式: date-time
   *   createTime?: string;
   *   // string (可选) - 修改时间 | 格式: date-time
   *   modifTime?: string;
   *   // string - 角色名称
   *   name: string;
   *   // string - 角色编码
   *   code: string;
   *   // string (可选) - 权限菜单ids（多个英文逗号隔开）
   *   permissionIds?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.RoleInfoDTO (可选)
   *   data?: YusuanModels.RoleInfoDTO;
   * }
   * ```
   */
  export const apiRolePost: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.RoleModels.RolePostGeneric>;
  /**
   * @api role | postListQuery | /role/list/query | POST | 根据id集合获取列表
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.RoleInfoDTO[];
   * }
   * ```
   */
  export const apiRolePostListQuery: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.RoleModels.RolePostListQueryGeneric>;
  /**
   * @api role | getPage | /role/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageRoleInfoDTO (可选)
   *   data?: YusuanModels.BasePageRoleInfoDTO;
   * }
   * ```
   */
  export const apiRoleGetPage: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.RoleModels.RoleGetPageGeneric>;
  /**
   * @api project | put | /project | PUT | 修改项目
   * @body
   * ```ts
   * {
   *   // string - id
   *   id: string;
   *   // string - 标题
   *   title: string;
   *   // string - 项目编号
   *   code: string;
   *   // string (可选) - 备注
   *   remarks?: string;
   *   // string (可选) - 附件
   *   files?: string;
   *   // string (可选) - 计划开始时间 | 格式: date-time
   *   planStartTime?: string;
   *   // string (可选) - 计划结束时间 | 格式: date-time
   *   planEndTime?: string;
   *   // string (可选) - 实际开始时间 | 格式: date-time
   *   actualStartTime?: string;
   *   // string (可选) - 实际结束时间 | 格式: date-time
   *   actualEndTime?: string;
   *   // number - 总金额
   *   total: number;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiProjectPut: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ProjectModels.ProjectPutGeneric>;
  /**
   * @api project | post | /project | POST | 新增项目
   * @body
   * ```ts
   * {
   *   // string - 部门id
   *   departmentId: string;
   *   // string - 资金批次id
   *   financeId: string;
   *   // string - 标题
   *   title: string;
   *   // string - 项目编号
   *   code: string;
   *   // string (可选) - 备注
   *   remarks?: string;
   *   // string (可选) - 附件
   *   files?: string;
   *   // string (可选) - 计划开始时间 | 格式: date-time
   *   planStartTime?: string;
   *   // string (可选) - 计划结束时间 | 格式: date-time
   *   planEndTime?: string;
   *   // string (可选) - 实际开始时间 | 格式: date-time
   *   actualStartTime?: string;
   *   // string (可选) - 实际结束时间 | 格式: date-time
   *   actualEndTime?: string;
   *   // number - 总金额
   *   total: number;
   *   // string - 父级id(顶级默认-1)
   *   parentId: string;
   *   // string - 项目类目id
   *   categoryId: string;
   *   // string - 分配资金类目id（从哪笔分配记录上面扣）
   *   allocationCategoryId: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.ProjectInfoDTO (可选)
   *   data?: YusuanModels.ProjectInfoDTO;
   * }
   * ```
   */
  export const apiProjectPost: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ProjectModels.ProjectPostGeneric>;
  /**
   * @api project | postList | /project/list | POST | 根据id集合获取列表
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.ProjectInfoDTO[];
   * }
   * ```
   */
  export const apiProjectPostList: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ProjectModels.ProjectPostListGeneric>;
  /**
   * @api project | getPage | /project/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // string (可选) - 父级项目ID
   *   parentId?: string;
   *   // string (可选) - 创建人id
   *   creator?: string;
   *   // string (可选) - 部门id
   *   departmentId?: string;
   *   // string (可选) - 资金批次id
   *   financeId?: string;
   *   // "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完结","name":"YWJ"}" | "{"desc":"已取消","name":"YQX"}" (可选) - 项目状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完结\",\"name\":\"YWJ\"}", "{\"desc\":\"已取消\",\"name\":\"YQX\"}"
   *   status?: "WKS" | "ZXZ" | "YWJ" | "YQX";
   *   // number (可选) - 总金额大于
   *   minTotal?: number;
   *   // number (可选) - 总金额小于
   *   maxTotal?: number;
   *   // number (可选) - 资金批次已使用最小总额 | 格式: int64
   *   minUsed?: number;
   *   // number (可选) - 资金批次已使用最大总额 | 格式: int64
   *   maxUsed?: number;
   *   // number (可选) - 资金批次剩余最小总额 | 格式: int64
   *   minSurplus?: number;
   *   // number (可选) - 资金批次剩余最大总额 | 格式: int64
   *   maxSurplus?: number;
   *   // number (可选) - 项目进度大于
   *   minProgress?: number;
   *   // number (可选) - 项目进度小于
   *   maxProgress?: number;
   *   // string (可选) - 项目类目id
   *   categoryId?: string;
   *   // string (可选) - 创建开始时间 | 格式: date-time
   *   startCreateTime?: string;
   *   // string (可选) - 创建结束时间 | 格式: date-time
   *   endCreateTime?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageProjectInfoDTO (可选)
   *   data?: YusuanModels.BasePageProjectInfoDTO;
   * }
   * ```
   */
  export const apiProjectGetPage: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ProjectModels.ProjectGetPageGeneric>;
  /**
   * @api project | putStatusChange | /project/statusChange | PUT | 修改项目状态
   * @body
   * ```ts
   * {
   *   // string - 主键ID
   *   id: string;
   *   // string (可选) - 状态实际变更时间 | 格式: date-time
   *   changeTime?: string;
   *   // string (可选) - 备注
   *   remarks?: string;
   *   // string (可选) - 附件
   *   files?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiProjectPutStatusChange: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ProjectModels.ProjectPutStatusChangeGeneric>;
  /**
   * @api project | postStatusChange | /project/statusChange | POST | 新增项目状态
   * @body
   * ```ts
   * {
   *   // string - 项目ID
   *   projectId: string;
   *   // "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完结","name":"YWJ"}" | "{"desc":"已取消","name":"YQX"}" - 变更状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完结\",\"name\":\"YWJ\"}", "{\"desc\":\"已取消\",\"name\":\"YQX\"}"
   *   status: "WKS" | "ZXZ" | "YWJ" | "YQX";
   *   // string (可选) - 状态实际变更时间 | 格式: date-time
   *   changeTime?: string;
   *   // string (可选) - 备注
   *   remarks?: string;
   *   // string (可选) - 附件
   *   files?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.ProjectStatusChangeDTO (可选)
   *   data?: YusuanModels.ProjectStatusChangeDTO;
   * }
   * ```
   */
  export const apiProjectPostStatusChange: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.ProjectModels.ProjectPostStatusChangeGeneric
  >;
  /**
   * @api project | postStatusChangeList | /project/statusChange/list | POST | 根据id集合获取列表
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.ProjectStatusChangeDTO[];
   * }
   * ```
   */
  export const apiProjectPostStatusChangeList: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.ProjectModels.ProjectPostStatusChangeListGeneric
  >;
  /**
   * @api project | getStatusChangePage | /project/statusChange/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // string (可选) - 项目ID
   *   projectId?: string;
   *   // "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完结","name":"YWJ"}" | "{"desc":"已取消","name":"YQX"}" (可选) - 变更前状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完结\",\"name\":\"YWJ\"}", "{\"desc\":\"已取消\",\"name\":\"YQX\"}"
   *   oldStatus?: "WKS" | "ZXZ" | "YWJ" | "YQX";
   *   // "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完结","name":"YWJ"}" | "{"desc":"已取消","name":"YQX"}" (可选) - 变更后状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完结\",\"name\":\"YWJ\"}", "{\"desc\":\"已取消\",\"name\":\"YQX\"}"
   *   newStatus?: "WKS" | "ZXZ" | "YWJ" | "YQX";
   *   // string (可选) - 状态实际变更时间 | 格式: date-time
   *   startChangeTime?: string;
   *   // string (可选) - 状态实际变更时间 | 格式: date-time
   *   endChangeTime?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageProjectStatusChangeDTO (可选)
   *   data?: YusuanModels.BasePageProjectStatusChangeDTO;
   * }
   * ```
   */
  export const apiProjectGetStatusChangePage: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.ProjectModels.ProjectGetStatusChangePageGeneric
  >;
  /**
   * @api project | putLifeCycle | /project/lifeCycle | PUT | 修改任务
   * @body
   * ```ts
   * {
   *   // string - ID
   *   id: string;
   *   // string - 标题
   *   title: string;
   *   // string (可选) - 执行人id
   *   runAccountId?: string;
   *   // string (可选) - 完成人id
   *   completeAccountId?: string;
   *   // string (可选) - 计划开始时间 | 格式: date-time
   *   planStartTime?: string;
   *   // string (可选) - 计划结束时间 | 格式: date-time
   *   planEndTime?: string;
   *   // string (可选) - 实际开始时间 | 格式: date-time
   *   actualStartTime?: string;
   *   // string (可选) - 实际结束时间 | 格式: date-time
   *   actualEndTime?: string;
   *   // number (可选) - 排序 | 格式: int32
   *   sort?: number;
   *   // string (可选) - 备注
   *   remarks?: string;
   *   // string (可选) - 附件
   *   files?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiProjectPutLifeCycle: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ProjectModels.ProjectPutLifeCycleGeneric>;
  /**
   * @api project | postLifeCycle | /project/lifeCycle | POST | 新增任务
   * @body
   * ```ts
   * {
   *   // string - 标题
   *   title: string;
   *   // string - 父级ID(顶级默认-1)
   *   parentId: string;
   *   // string - 项目ID
   *   projectId: string;
   *   // string (可选) - 执行人id
   *   runAccountId?: string;
   *   // string (可选) - 完成人id
   *   completeAccountId?: string;
   *   // string (可选) - 计划开始时间 | 格式: date-time
   *   planStartTime?: string;
   *   // string (可选) - 计划结束时间 | 格式: date-time
   *   planEndTime?: string;
   *   // string (可选) - 实际开始时间 | 格式: date-time
   *   actualStartTime?: string;
   *   // string (可选) - 实际结束时间 | 格式: date-time
   *   actualEndTime?: string;
   *   // number (可选) - 排序 | 格式: int32
   *   sort?: number;
   *   // string (可选) - 备注
   *   remarks?: string;
   *   // string (可选) - 附件
   *   files?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.ProjectLifeCycleDTO (可选)
   *   data?: YusuanModels.ProjectLifeCycleDTO;
   * }
   * ```
   */
  export const apiProjectPostLifeCycle: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ProjectModels.ProjectPostLifeCycleGeneric>;
  /**
   * @api project | putLifeCycleStatus | /project/lifeCycle/status | PUT | 修改状态
   * @body
   * ```ts
   * {
   *   // string - ID
   *   id: string;
   *   // "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完成","name":"YWC"}" - 状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完成\",\"name\":\"YWC\"}"
   *   status: "WKS" | "ZXZ" | "YWC";
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiProjectPutLifeCycleStatus: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.ProjectModels.ProjectPutLifeCycleStatusGeneric
  >;
  /**
   * @api project | postLifeCycleList | /project/lifeCycle/list | POST | 根据id集合获取列表
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.ProjectLifeCycleDTO[];
   * }
   * ```
   */
  export const apiProjectPostLifeCycleList: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.ProjectModels.ProjectPostLifeCycleListGeneric
  >;
  /**
   * @api project | getLifeCyclePage | /project/lifeCycle/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // string (可选) - 创建人ID
   *   creator?: string;
   *   // string (可选) - 部门ID
   *   departmentId?: string;
   *   // string (可选) - 父级ID
   *   parentId?: string;
   *   // string (可选) - 项目ID
   *   projectId?: string;
   *   // string (可选) - 执行人id
   *   runAccountId?: string;
   *   // string (可选) - 完成人id
   *   completeAccountId?: string;
   *   // "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完成","name":"YWC"}" (可选) - 状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完成\",\"name\":\"YWC\"}"
   *   status?: "WKS" | "ZXZ" | "YWC";
   *   // string (可选) - 创建开始时间 | 格式: date-time
   *   startCreateTime?: string;
   *   // string (可选) - 创建结束时间 | 格式: date-time
   *   endCreateTime?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageProjectLifeCycleDTO (可选)
   *   data?: YusuanModels.BasePageProjectLifeCycleDTO;
   * }
   * ```
   */
  export const apiProjectGetLifeCyclePage: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.ProjectModels.ProjectGetLifeCyclePageGeneric
  >;
  /**
   * @api projectCategory | putById | /projectCategory/{id} | PUT | 修改类目数据
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @body
   * ```ts
   * {
   *   // string (可选) - 主键ID
   *   id?: string;
   *   // string (可选) - 创建时间 | 格式: date-time
   *   createTime?: string;
   *   // string (可选) - 修改时间 | 格式: date-time
   *   modifTime?: string;
   *   // string (可选) - 父级ID
   *   parentId?: string;
   *   // string (可选) - 编码
   *   code?: string;
   *   // string (可选) - 名称
   *   name?: string;
   *   // number (可选) - 排序号 | 格式: int32
   *   sort?: number;
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status?: "ENABLE" | "DISABLE";
   *   // string (可选) - 备注
   *   remark?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiProjectCategoryPutById: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.ProjectCategoryModels.ProjectCategoryPutByIdGeneric
  >;
  /**
   * @api projectCategory | putStatus | /projectCategory/status | PUT | 批量修改状态
   * @body
   * ```ts
   * {
   *   // array - 主键ID列表
   *   ids: string[];
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status: "ENABLE" | "DISABLE";
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiProjectCategoryPutStatus: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.ProjectCategoryModels.ProjectCategoryPutStatusGeneric
  >;
  /**
   * @api projectCategory | post | /projectCategory | POST | 新增类目数据
   * @body
   * ```ts
   * {
   *   // string (可选) - 主键ID
   *   id?: string;
   *   // string (可选) - 创建时间 | 格式: date-time
   *   createTime?: string;
   *   // string (可选) - 修改时间 | 格式: date-time
   *   modifTime?: string;
   *   // string (可选) - 父级ID
   *   parentId?: string;
   *   // string (可选) - 编码
   *   code?: string;
   *   // string (可选) - 名称
   *   name?: string;
   *   // number (可选) - 排序号 | 格式: int32
   *   sort?: number;
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status?: "ENABLE" | "DISABLE";
   *   // string (可选) - 备注
   *   remark?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.ProjectCategoryDTO (可选)
   *   data?: YusuanModels.ProjectCategoryDTO;
   * }
   * ```
   */
  export const apiProjectCategoryPost: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.ProjectCategoryModels.ProjectCategoryPostGeneric
  >;
  /**
   * @api projectCategory | postList | /projectCategory/list | POST | 根据id集合获取列表
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.ProjectCategoryDTO[];
   * }
   * ```
   */
  export const apiProjectCategoryPostList: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.ProjectCategoryModels.ProjectCategoryPostListGeneric
  >;
  /**
   * @api projectCategory | getPage | /projectCategory/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // string (可选) - 上级部门ID
   *   parentId?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageProjectCategoryDTO (可选)
   *   data?: YusuanModels.BasePageProjectCategoryDTO;
   * }
   * ```
   */
  export const apiProjectCategoryGetPage: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.ProjectCategoryModels.ProjectCategoryGetPageGeneric
  >;
  /**
   * @api permissionMenus | getById | /permissionMenus/{id} | GET | 根据ID查询一条数据
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.PermissionMenusDTO (可选)
   *   data?: YusuanModels.PermissionMenusDTO;
   * }
   * ```
   */
  export const apiPermissionMenusGetById: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.PermissionMenusModels.PermissionMenusGetByIdGeneric
  >;
  /**
   * @api permissionMenus | putById | /permissionMenus/{id} | PUT | 根据id修改一条数据
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @body
   * ```ts
   * {
   *   // string (可选) - 主键ID
   *   id?: string;
   *   // string (可选) - 创建时间 | 格式: date-time
   *   createTime?: string;
   *   // string (可选) - 修改时间 | 格式: date-time
   *   modifTime?: string;
   *   // string - 名称
   *   name: string;
   *   // "{"desc":"菜单","name":"MENU"}" | "{"desc":"功能","name":"FUNCTION"}" | "{"desc":"目录","name":"GROUP"}" - 类型 | 可选值: "{\"desc\":\"菜单\",\"name\":\"MENU\"}", "{\"desc\":\"功能\",\"name\":\"FUNCTION\"}", "{\"desc\":\"目录\",\"name\":\"GROUP\"}"
   *   type: "MENU" | "FUNCTION" | "GROUP";
   *   // string - 功能编码
   *   code: string;
   *   // string - 父级菜单ID
   *   parentId: string;
   *   // string (可选) - 路由
   *   path?: string;
   *   // string (可选) - 扩展字段
   *   extend?: string;
   *   // number (可选) - 排序 | 格式: int32
   *   sort?: number;
   *   // string (可选) - 组件
   *   component?: string;
   *   // string (可选) - 标题
   *   title?: string;
   *   // boolean (可选) - 是否隐藏
   *   isHidden?: boolean;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiPermissionMenusPutById: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.PermissionMenusModels.PermissionMenusPutByIdGeneric
  >;
  /**
   * @api permissionMenus | deleteById | /permissionMenus/{id} | DELETE | 根据id删除数据
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiPermissionMenusDeleteById: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.PermissionMenusModels.PermissionMenusDeleteByIdGeneric
  >;
  /**
   * @api permissionMenus | putList | /permissionMenus/list | PUT | 批量修改数据
   * @body
   * ```ts
   * YusuanModels.PermissionMenusDTO[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiPermissionMenusPutList: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.PermissionMenusModels.PermissionMenusPutListGeneric
  >;
  /**
   * @api permissionMenus | postList | /permissionMenus/list | POST | 批量添加数据
   * @body
   * ```ts
   * YusuanModels.PermissionMenusDTO[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.PermissionMenusDTO[];
   * }
   * ```
   */
  export const apiPermissionMenusPostList: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.PermissionMenusModels.PermissionMenusPostListGeneric
  >;
  /**
   * @api permissionMenus | deleteList | /permissionMenus/list | DELETE | 根据id集合批量删除数据
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiPermissionMenusDeleteList: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.PermissionMenusModels.PermissionMenusDeleteListGeneric
  >;
  /**
   * @api permissionMenus | post | /permissionMenus | POST | 添加一条数据
   * @body
   * ```ts
   * {
   *   // string (可选) - 主键ID
   *   id?: string;
   *   // string (可选) - 创建时间 | 格式: date-time
   *   createTime?: string;
   *   // string (可选) - 修改时间 | 格式: date-time
   *   modifTime?: string;
   *   // string - 名称
   *   name: string;
   *   // "{"desc":"菜单","name":"MENU"}" | "{"desc":"功能","name":"FUNCTION"}" | "{"desc":"目录","name":"GROUP"}" - 类型 | 可选值: "{\"desc\":\"菜单\",\"name\":\"MENU\"}", "{\"desc\":\"功能\",\"name\":\"FUNCTION\"}", "{\"desc\":\"目录\",\"name\":\"GROUP\"}"
   *   type: "MENU" | "FUNCTION" | "GROUP";
   *   // string - 功能编码
   *   code: string;
   *   // string - 父级菜单ID
   *   parentId: string;
   *   // string (可选) - 路由
   *   path?: string;
   *   // string (可选) - 扩展字段
   *   extend?: string;
   *   // number (可选) - 排序 | 格式: int32
   *   sort?: number;
   *   // string (可选) - 组件
   *   component?: string;
   *   // string (可选) - 标题
   *   title?: string;
   *   // boolean (可选) - 是否隐藏
   *   isHidden?: boolean;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.PermissionMenusDTO (可选)
   *   data?: YusuanModels.PermissionMenusDTO;
   * }
   * ```
   */
  export const apiPermissionMenusPost: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.PermissionMenusModels.PermissionMenusPostGeneric
  >;
  /**
   * @api permissionMenus | postListQuery | /permissionMenus/list/query | POST | 根据id集合获取列表
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.PermissionMenusDTO[];
   * }
   * ```
   */
  export const apiPermissionMenusPostListQuery: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.PermissionMenusModels.PermissionMenusPostListQueryGeneric
  >;
  /**
   * @api permissionMenus | getPage | /permissionMenus/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePagePermissionMenusDTO (可选)
   *   data?: YusuanModels.BasePagePermissionMenusDTO;
   * }
   * ```
   */
  export const apiPermissionMenusGetPage: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.PermissionMenusModels.PermissionMenusGetPageGeneric
  >;
  /**
   * @api permissionMenus | getCurrent | /permissionMenus/current | GET | 获取当前登录用户拥有的菜单功能权限
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // object (可选) - 返回数据
   *   data?: Record<string, any>;
   * }
   * ```
   */
  export const apiPermissionMenusGetCurrent: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.PermissionMenusModels.PermissionMenusGetCurrentGeneric
  >;
  /**
   * @api financeCategory | putById | /financeCategory/{id} | PUT | 修改类目数据
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @body
   * ```ts
   * {
   *   // string (可选) - 主键ID
   *   id?: string;
   *   // string (可选) - 创建时间 | 格式: date-time
   *   createTime?: string;
   *   // string (可选) - 修改时间 | 格式: date-time
   *   modifTime?: string;
   *   // string (可选) - 父级ID
   *   parentId?: string;
   *   // string (可选) - 编码
   *   code?: string;
   *   // string (可选) - 名称
   *   name?: string;
   *   // number (可选) - 排序号 | 格式: int32
   *   sort?: number;
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status?: "ENABLE" | "DISABLE";
   *   // string (可选) - 备注
   *   remark?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiFinanceCategoryPutById: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.FinanceCategoryModels.FinanceCategoryPutByIdGeneric
  >;
  /**
   * @api financeCategory | putStatus | /financeCategory/status | PUT | 批量修改状态
   * @body
   * ```ts
   * {
   *   // array - 主键ID列表
   *   ids: string[];
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status: "ENABLE" | "DISABLE";
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiFinanceCategoryPutStatus: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.FinanceCategoryModels.FinanceCategoryPutStatusGeneric
  >;
  /**
   * @api financeCategory | post | /financeCategory | POST | 新增类目数据
   * @body
   * ```ts
   * {
   *   // string (可选) - 主键ID
   *   id?: string;
   *   // string (可选) - 创建时间 | 格式: date-time
   *   createTime?: string;
   *   // string (可选) - 修改时间 | 格式: date-time
   *   modifTime?: string;
   *   // string (可选) - 父级ID
   *   parentId?: string;
   *   // string (可选) - 编码
   *   code?: string;
   *   // string (可选) - 名称
   *   name?: string;
   *   // number (可选) - 排序号 | 格式: int32
   *   sort?: number;
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status?: "ENABLE" | "DISABLE";
   *   // string (可选) - 备注
   *   remark?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.FinanceCategoryDTO (可选)
   *   data?: YusuanModels.FinanceCategoryDTO;
   * }
   * ```
   */
  export const apiFinanceCategoryPost: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.FinanceCategoryModels.FinanceCategoryPostGeneric
  >;
  /**
   * @api financeCategory | postList | /financeCategory/list | POST | 根据id集合获取列表
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.FinanceCategoryDTO[];
   * }
   * ```
   */
  export const apiFinanceCategoryPostList: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.FinanceCategoryModels.FinanceCategoryPostListGeneric
  >;
  /**
   * @api financeCategory | getPage | /financeCategory/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // string (可选) - 上级部门ID
   *   parentId?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageFinanceCategoryDTO (可选)
   *   data?: YusuanModels.BasePageFinanceCategoryDTO;
   * }
   * ```
   */
  export const apiFinanceCategoryGetPage: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.FinanceCategoryModels.FinanceCategoryGetPageGeneric
  >;
  /**
   * @api finance | putById | /finance/{id} | PUT | 修改资金批次
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @body
   * ```ts
   * {
   *   // string (可选)
   *   id?: string;
   *   // string (可选) - 标题
   *   title?: string;
   *   // string (可选) - 资金批次编码
   *   code?: string;
   *   // number (可选) - 资金批次总额
   *   total?: number;
   *   // number (可选) - 资金批次年度 | 格式: int32
   *   year?: number;
   *   // string (可选) - 资金批次截止时间 | 格式: date-time
   *   abortTime?: string;
   *   // string (可选) - 资金批次备注
   *   remarks?: string;
   *   // string (可选) - 附件
   *   files?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiFinancePutById: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.FinanceModels.FinancePutByIdGeneric>;
  /**
   * @api finance | putStatus | /finance/status | PUT | 批量修改状态
   * @body
   * ```ts
   * {
   *   // array - 主键ID列表
   *   ids: string[];
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status: "ENABLE" | "DISABLE";
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiFinancePutStatus: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.FinanceModels.FinancePutStatusGeneric>;
  /**
   * @api finance | post | /finance | POST | 新增资金批次
   * @body
   * ```ts
   * {
   *   // string (可选)
   *   id?: string;
   *   // string (可选) - 标题
   *   title?: string;
   *   // string (可选) - 资金批次编码
   *   code?: string;
   *   // number (可选) - 资金批次总额
   *   total?: number;
   *   // number (可选) - 资金批次年度 | 格式: int32
   *   year?: number;
   *   // string (可选) - 资金批次截止时间 | 格式: date-time
   *   abortTime?: string;
   *   // string (可选) - 资金批次备注
   *   remarks?: string;
   *   // string (可选) - 附件
   *   files?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.FinanceInfoDTO (可选)
   *   data?: YusuanModels.FinanceInfoDTO;
   * }
   * ```
   */
  export const apiFinancePost: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.FinanceModels.FinancePostGeneric>;
  /**
   * @api finance | postList | /finance/list | POST | 根据id集合获取列表
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.FinanceInfoDTO[];
   * }
   * ```
   */
  export const apiFinancePostList: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.FinanceModels.FinancePostListGeneric>;
  /**
   * @api finance | getPage | /finance/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // number (可选) - 资金批次最小总额 | 格式: int64
   *   minTotal?: number;
   *   // number (可选) - 资金批次最大总额 | 格式: int64
   *   maxTotal?: number;
   *   // number (可选) - 资金批次已使用最小总额 | 格式: int64
   *   minUsed?: number;
   *   // number (可选) - 资金批次已使用最大总额 | 格式: int64
   *   maxUsed?: number;
   *   // number (可选) - 资金批次剩余最小总额 | 格式: int64
   *   minSurplus?: number;
   *   // number (可选) - 资金批次剩余最大总额 | 格式: int64
   *   maxSurplus?: number;
   *   // number (可选) - 资金批次最小年度 | 格式: int32
   *   minYear?: number;
   *   // number (可选) - 资金批次最大年度 | 格式: int32
   *   maxYear?: number;
   *   // string (可选) - 资金批次截止时间（开始） | 格式: date-time
   *   startAbortTime?: string;
   *   // string (可选) - 资金批次截止时间（结束） | 格式: date-time
   *   endAbortTime?: string;
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status?: "ENABLE" | "DISABLE";
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageFinanceInfoDTO (可选)
   *   data?: YusuanModels.BasePageFinanceInfoDTO;
   * }
   * ```
   */
  export const apiFinanceGetPage: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.FinanceModels.FinanceGetPageGeneric>;
  /**
   * @api finance | putDepartmentById | /finance/department/{id} | PUT | 修改分配给部门的资金
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @body
   * ```ts
   * {
   *   // string (可选)
   *   id?: string;
   *   // number (可选) - 资金批次总额
   *   total?: number;
   *   // string (可选) - 截止时间 | 格式: date-time
   *   abortTime?: string;
   *   // string (可选) - 备注
   *   remarks?: string;
   *   // string (可选) - 附件
   *   files?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiFinancePutDepartmentById: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.FinanceModels.FinancePutDepartmentByIdGeneric
  >;
  /**
   * @api finance | putDepartmentStatus | /finance/department/status | PUT | 批量修改状态
   * @body
   * ```ts
   * {
   *   // array - 主键ID列表
   *   ids: string[];
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status: "ENABLE" | "DISABLE";
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiFinancePutDepartmentStatus: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.FinanceModels.FinancePutDepartmentStatusGeneric
  >;
  /**
   * @api finance | postDepartment | /finance/department | POST | 新增资金分配给部门（从批次上分配给顶级部门）
   * @body
   * ```ts
   * {
   *   // number (可选) - 资金总额
   *   total?: number;
   *   // string (可选) - 截止时间 | 格式: date-time
   *   abortTime?: string;
   *   // string (可选) - 备注
   *   remarks?: string;
   *   // string (可选) - 附件
   *   files?: string;
   *   // string (可选) - 资金id
   *   financeId?: string;
   *   // string (可选) - 部门id
   *   departmentId?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.FinanceInfoDTO (可选)
   *   data?: YusuanModels.FinanceInfoDTO;
   * }
   * ```
   */
  export const apiFinancePostDepartment: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.FinanceModels.FinancePostDepartmentGeneric>;
  /**
   * @api finance | postDepartmentList | /finance/department/list | POST | 根据id集合获取列表
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.FinanceAllocationDepartmentDTO[];
   * }
   * ```
   */
  export const apiFinancePostDepartmentList: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.FinanceModels.FinancePostDepartmentListGeneric
  >;
  /**
   * @api finance | postDepartmentChild | /finance/department/child | POST | 新增资金分配给部门（分配给子部门）
   * @body
   * ```ts
   * {
   *   // number (可选) - 资金总额
   *   total?: number;
   *   // string (可选) - 截止时间 | 格式: date-time
   *   abortTime?: string;
   *   // string (可选) - 备注
   *   remarks?: string;
   *   // string (可选) - 附件
   *   files?: string;
   *   // string (可选) - 资金id
   *   financeId?: string;
   *   // string (可选) - 部门id
   *   departmentId?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.FinanceInfoDTO (可选)
   *   data?: YusuanModels.FinanceInfoDTO;
   * }
   * ```
   */
  export const apiFinancePostDepartmentChild: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.FinanceModels.FinancePostDepartmentChildGeneric
  >;
  /**
   * @api finance | getDepartmentPage | /finance/department/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // number (可选) - 资金批次最小总额 | 格式: int64
   *   minTotal?: number;
   *   // number (可选) - 资金批次最大总额 | 格式: int64
   *   maxTotal?: number;
   *   // number (可选) - 资金批次已使用最小总额 | 格式: int64
   *   minUsed?: number;
   *   // number (可选) - 资金批次已使用最大总额 | 格式: int64
   *   maxUsed?: number;
   *   // number (可选) - 资金批次剩余最小总额 | 格式: int64
   *   minSurplus?: number;
   *   // number (可选) - 资金批次剩余最大总额 | 格式: int64
   *   maxSurplus?: number;
   *   // string (可选) - 资金批次id
   *   financeId?: string;
   *   // string (可选) - 部门id
   *   departmentId?: string;
   *   // string (可选) - 资金批次截止时间（开始） | 格式: date-time
   *   startAbortTime?: string;
   *   // string (可选) - 资金批次截止时间（结束） | 格式: date-time
   *   endAbortTime?: string;
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status?: "ENABLE" | "DISABLE";
   *   // number (可选) - 资金批次年度 | 格式: int32
   *   financeYear?: number;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageFinanceAllocationDepartmentDTO (可选)
   *   data?: YusuanModels.BasePageFinanceAllocationDepartmentDTO;
   * }
   * ```
   */
  export const apiFinanceGetDepartmentPage: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.FinanceModels.FinanceGetDepartmentPageGeneric
  >;
  /**
   * @api finance | putCategoryById | /finance/category/{id} | PUT | 修改部门分配资金类目
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @body
   * ```ts
   * {
   *   // string (可选)
   *   id?: string;
   *   // number (可选) - 资金批次总额
   *   total?: number;
   *   // string (可选) - 截止时间 | 格式: date-time
   *   abortTime?: string;
   *   // string (可选) - 备注
   *   remarks?: string;
   *   // string (可选) - 附件
   *   files?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiFinancePutCategoryById: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.FinanceModels.FinancePutCategoryByIdGeneric>;
  /**
   * @api finance | putCategoryStatus | /finance/category/status | PUT | 批量修改状态
   * @body
   * ```ts
   * {
   *   // array - 主键ID列表
   *   ids: string[];
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status: "ENABLE" | "DISABLE";
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiFinancePutCategoryStatus: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.FinanceModels.FinancePutCategoryStatusGeneric
  >;
  /**
   * @api finance | postCategory | /finance/category | POST | 新增部门下资金分配给类目
   * @body
   * ```ts
   * {
   *   // number (可选) - 资金总额
   *   total?: number;
   *   // string (可选) - 截止时间 | 格式: date-time
   *   abortTime?: string;
   *   // string (可选) - 备注
   *   remarks?: string;
   *   // string (可选) - 附件
   *   files?: string;
   *   // string (可选) - 资金类目id
   *   financeCategoryId?: string;
   *   // string (可选) - 资金分配部门id
   *   allocationDepartmentId?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.FinanceAllocationCategoryDTO (可选)
   *   data?: YusuanModels.FinanceAllocationCategoryDTO;
   * }
   * ```
   */
  export const apiFinancePostCategory: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.FinanceModels.FinancePostCategoryGeneric>;
  /**
   * @api finance | postCategoryList | /finance/category/list | POST | 根据id集合获取列表
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.FinanceAllocationCategoryDTO[];
   * }
   * ```
   */
  export const apiFinancePostCategoryList: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.FinanceModels.FinancePostCategoryListGeneric
  >;
  /**
   * @api finance | getCategoryPage | /finance/category/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // number (可选) - 资金批次最小总额 | 格式: int64
   *   minTotal?: number;
   *   // number (可选) - 资金批次最大总额 | 格式: int64
   *   maxTotal?: number;
   *   // number (可选) - 资金批次已使用最小总额 | 格式: int64
   *   minUsed?: number;
   *   // number (可选) - 资金批次已使用最大总额 | 格式: int64
   *   maxUsed?: number;
   *   // number (可选) - 资金批次剩余最小总额 | 格式: int64
   *   minSurplus?: number;
   *   // number (可选) - 资金批次剩余最大总额 | 格式: int64
   *   maxSurplus?: number;
   *   // string (可选) - 资金批次id
   *   financeId?: string;
   *   // string (可选) - 部门id
   *   departmentId?: string;
   *   // string (可选) - 资金类目id
   *   financeCategoryId?: string;
   *   // string (可选) - 资金分配部门id
   *   allocationDepartmentId?: string;
   *   // string (可选) - 资金批次截止时间（开始） | 格式: date-time
   *   startAbortTime?: string;
   *   // string (可选) - 资金批次截止时间（结束） | 格式: date-time
   *   endAbortTime?: string;
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status?: "ENABLE" | "DISABLE";
   *   // number (可选) - 资金批次年度 | 格式: int32
   *   financeYear?: number;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageFinanceAllocationCategoryDTO (可选)
   *   data?: YusuanModels.BasePageFinanceAllocationCategoryDTO;
   * }
   * ```
   */
  export const apiFinanceGetCategoryPage: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.FinanceModels.FinanceGetCategoryPageGeneric>;
  /**
   * @api finance | postCategoryProjectByAllocationCategoryId | /finance/category/project/{allocationCategoryId} | POST | 批量关联项目类目id
   * @params
   * ```ts
   * {
   *   // string
   *   allocationCategoryId: string;
   * }
   * ```
   * @body
   * ```ts
   * YusuanModels.AddAllocationProjectCategoryDTO[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // object (可选) - 返回数据
   *   data?: Record<string, any>;
   * }
   * ```
   */
  export const apiFinancePostCategoryProjectByAllocationCategoryId: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.FinanceModels.FinancePostCategoryProjectByAllocationCategoryIdGeneric
  >;
  /**
   * @api finance | getCategoryProjectPage | /finance/category/project/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // string - 分配资金类目的关联id
   *   allocationCategoryId: string;
   *   // string (可选) - 项目类目id
   *   projectCategoryId?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageAllocationProjectCategoryDTO (可选)
   *   data?: YusuanModels.BasePageAllocationProjectCategoryDTO;
   * }
   * ```
   */
  export const apiFinanceGetCategoryProjectPage: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.FinanceModels.FinanceGetCategoryProjectPageGeneric
  >;
  /**
   * @api dictType | putById | /dictType/{id} | PUT | 修改字典类型
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @body
   * ```ts
   * {
   *   // string (可选) - 主键ID
   *   id?: string;
   *   // string (可选) - 创建时间 | 格式: date-time
   *   createTime?: string;
   *   // string (可选) - 修改时间 | 格式: date-time
   *   modifTime?: string;
   *   // string - 字典名称
   *   dictName: string;
   *   // string - 字典类型
   *   dictType: string;
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态（启用/停用） | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status?: "ENABLE" | "DISABLE";
   *   // string (可选) - 备注
   *   remark?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiDictTypePutById: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DictTypeModels.DictTypePutByIdGeneric>;
  /**
   * @api dictType | deleteById | /dictType/{id} | DELETE | 删除字典类型
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiDictTypeDeleteById: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DictTypeModels.DictTypeDeleteByIdGeneric>;
  /**
   * @api dictType | putStatusById | /dictType/status/{id} | PUT | 修改状态
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiDictTypePutStatusById: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DictTypeModels.DictTypePutStatusByIdGeneric>;
  /**
   * @api dictType | post | /dictType | POST | 新增字典类型
   * @body
   * ```ts
   * {
   *   // string (可选) - 主键ID
   *   id?: string;
   *   // string (可选) - 创建时间 | 格式: date-time
   *   createTime?: string;
   *   // string (可选) - 修改时间 | 格式: date-time
   *   modifTime?: string;
   *   // string - 字典名称
   *   dictName: string;
   *   // string - 字典类型
   *   dictType: string;
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态（启用/停用） | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status?: "ENABLE" | "DISABLE";
   *   // string (可选) - 备注
   *   remark?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.DictTypeDTO (可选)
   *   data?: YusuanModels.DictTypeDTO;
   * }
   * ```
   */
  export const apiDictTypePost: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DictTypeModels.DictTypePostGeneric>;
  /**
   * @api dictType | getPage | /dictType/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态（启用/停用） | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status?: "ENABLE" | "DISABLE";
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageDictTypeDTO (可选)
   *   data?: YusuanModels.BasePageDictTypeDTO;
   * }
   * ```
   */
  export const apiDictTypeGetPage: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DictTypeModels.DictTypeGetPageGeneric>;
  /**
   * @api dictType | deleteList | /dictType/list | DELETE | 批量删除字典类型
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiDictTypeDeleteList: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DictTypeModels.DictTypeDeleteListGeneric>;
  /**
   * @api dictData | putById | /dictData/{id} | PUT | 修改字典数据
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @body
   * ```ts
   * {
   *   // string (可选) - 主键ID
   *   id?: string;
   *   // string (可选) - 创建时间 | 格式: date-time
   *   createTime?: string;
   *   // string (可选) - 修改时间 | 格式: date-time
   *   modifTime?: string;
   *   // string - 字典类型
   *   dictType: string;
   *   // string (可选) - 字典标签
   *   dictLabel?: string;
   *   // number (可选) - 字典排序 | 格式: int32
   *   dictSort?: number;
   *   // string (可选) - 字典键值
   *   dictValue?: string;
   *   // string (可选) - 颜色
   *   color?: string;
   *   // string (可选) - 标识
   *   logo?: string;
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态（启用/停用） | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status?: "ENABLE" | "DISABLE";
   *   // string (可选) - 备注
   *   remark?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiDictDataPutById: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DictDataModels.DictDataPutByIdGeneric>;
  /**
   * @api dictData | deleteById | /dictData/{id} | DELETE | 删除字典数据
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiDictDataDeleteById: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DictDataModels.DictDataDeleteByIdGeneric>;
  /**
   * @api dictData | putStatusById | /dictData/status/{id} | PUT | 修改状态
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiDictDataPutStatusById: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DictDataModels.DictDataPutStatusByIdGeneric>;
  /**
   * @api dictData | post | /dictData | POST | 新增字典数据
   * @body
   * ```ts
   * {
   *   // string (可选) - 主键ID
   *   id?: string;
   *   // string (可选) - 创建时间 | 格式: date-time
   *   createTime?: string;
   *   // string (可选) - 修改时间 | 格式: date-time
   *   modifTime?: string;
   *   // string - 字典类型
   *   dictType: string;
   *   // string (可选) - 字典标签
   *   dictLabel?: string;
   *   // number (可选) - 字典排序 | 格式: int32
   *   dictSort?: number;
   *   // string (可选) - 字典键值
   *   dictValue?: string;
   *   // string (可选) - 颜色
   *   color?: string;
   *   // string (可选) - 标识
   *   logo?: string;
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态（启用/停用） | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status?: "ENABLE" | "DISABLE";
   *   // string (可选) - 备注
   *   remark?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.DictDataDTO (可选)
   *   data?: YusuanModels.DictDataDTO;
   * }
   * ```
   */
  export const apiDictDataPost: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DictDataModels.DictDataPostGeneric>;
  /**
   * @api dictData | getPage | /dictData/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status?: "ENABLE" | "DISABLE";
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageDictDataDTO (可选)
   *   data?: YusuanModels.BasePageDictDataDTO;
   * }
   * ```
   */
  export const apiDictDataGetPage: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DictDataModels.DictDataGetPageGeneric>;
  /**
   * @api dictData | deleteList | /dictData/list | DELETE | 批量删除字典数据
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiDictDataDeleteList: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DictDataModels.DictDataDeleteListGeneric>;
  /**
   * @api department | putById | /department/{id} | PUT | 修改部门数据
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @body
   * ```ts
   * {
   *   // string (可选) - 主键ID
   *   id?: string;
   *   // string (可选) - 创建时间 | 格式: date-time
   *   createTime?: string;
   *   // string (可选) - 修改时间 | 格式: date-time
   *   modifTime?: string;
   *   // string - 上级部门ID（顶级默认-1）
   *   parentId: string;
   *   // string - 部门编码
   *   code: string;
   *   // string - 部门名称
   *   name: string;
   *   // number (可选) - 排序 | 格式: int32
   *   sort?: number;
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status?: "ENABLE" | "DISABLE";
   *   // string (可选) - 备注
   *   remark?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiDepartmentPutById: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DepartmentModels.DepartmentPutByIdGeneric>;
  /**
   * @api department | deleteById | /department/{id} | DELETE | 删除部门数据
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiDepartmentDeleteById: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DepartmentModels.DepartmentDeleteByIdGeneric>;
  /**
   * @api department | putStatus | /department/status | PUT | 批量修改状态
   * @body
   * ```ts
   * {
   *   // array - 主键ID列表
   *   ids: string[];
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status: "ENABLE" | "DISABLE";
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiDepartmentPutStatus: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DepartmentModels.DepartmentPutStatusGeneric>;
  /**
   * @api department | post | /department | POST | 新增部门数据
   * @body
   * ```ts
   * {
   *   // string (可选) - 主键ID
   *   id?: string;
   *   // string (可选) - 创建时间 | 格式: date-time
   *   createTime?: string;
   *   // string (可选) - 修改时间 | 格式: date-time
   *   modifTime?: string;
   *   // string - 上级部门ID（顶级默认-1）
   *   parentId: string;
   *   // string - 部门编码
   *   code: string;
   *   // string - 部门名称
   *   name: string;
   *   // number (可选) - 排序 | 格式: int32
   *   sort?: number;
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status?: "ENABLE" | "DISABLE";
   *   // string (可选) - 备注
   *   remark?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.DepartmentDTO (可选)
   *   data?: YusuanModels.DepartmentDTO;
   * }
   * ```
   */
  export const apiDepartmentPost: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DepartmentModels.DepartmentPostGeneric>;
  /**
   * @api department | postList | /department/list | POST | 根据id集合获取列表
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.DepartmentDTO[];
   * }
   * ```
   */
  export const apiDepartmentPostList: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DepartmentModels.DepartmentPostListGeneric>;
  /**
   * @api department | deleteList | /department/list | DELETE | 批量删除部门数据
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiDepartmentDeleteList: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DepartmentModels.DepartmentDeleteListGeneric>;
  /**
   * @api department | getPage | /department/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // string (可选) - 上级部门ID
   *   parentId?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageDepartmentDTO (可选)
   *   data?: YusuanModels.BasePageDepartmentDTO;
   * }
   * ```
   */
  export const apiDepartmentGetPage: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.DepartmentModels.DepartmentGetPageGeneric>;
  /**
   * @api config | putUpdate | /config/update | PUT | 修改系统配置(自定义)
   * @body
   * ```ts
   * {
   *   // string (可选) - 主键ID
   *   id?: string;
   *   // string (可选) - 创建时间 | 格式: date-time
   *   createTime?: string;
   *   // string (可选) - 修改时间 | 格式: date-time
   *   modifTime?: string;
   *   // string - key
   *   key: string;
   *   // string - value
   *   value: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiConfigPutUpdate: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ConfigModels.ConfigPutUpdateGeneric>;
  /**
   * @api config | postSave | /config/save | POST | 新增系统配置(自定义)
   * @body
   * ```ts
   * {
   *   // string (可选) - 主键ID
   *   id?: string;
   *   // string (可选) - 创建时间 | 格式: date-time
   *   createTime?: string;
   *   // string (可选) - 修改时间 | 格式: date-time
   *   modifTime?: string;
   *   // string - key
   *   key: string;
   *   // string - value
   *   value: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.SystemConfigDTO (可选)
   *   data?: YusuanModels.SystemConfigDTO;
   * }
   * ```
   */
  export const apiConfigPostSave: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ConfigModels.ConfigPostSaveGeneric>;
  /**
   * @api config | getItem | /config/item | GET | 根据key获取配置项
   * @query
   * ```ts
   * {
   *   // string
   *   key: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // object (可选) - 返回数据
   *   data?: Record<string, any>;
   * }
   * ```
   */
  export const apiConfigGetItem: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ConfigModels.ConfigGetItemGeneric>;
  /**
   * @api config | getEnums | /config/enums | GET | 获取所有枚举信息
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // object (可选) - 返回数据
   *   data?: Record<string, any>;
   * }
   * ```
   */
  export const apiConfigGetEnums: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ConfigModels.ConfigGetEnumsGeneric>;
  /**
   * @api approval | put | /approval | PUT | 修改
   * @body
   * ```ts
   * {
   *   // string - 主键ID(修改时传入)
   *   id: string;
   *   // string - 标题
   *   title: string;
   *   // "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}"
   *   status: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";
   *   // string (可选) - 内容
   *   content?: string;
   *   // string (可选) - 备注
   *   remarks?: string;
   *   // string (可选) - 附件
   *   files?: string;
   *   // string - 审批人id集合（英文逗号隔开）
   *   approveAccountIds: string;
   *   // "{"desc":"且","name":"AND"}" | "{"desc":"或","name":"OR"}" - 审批条件限制 | 可选值: "{\"desc\":\"且\",\"name\":\"AND\"}", "{\"desc\":\"或\",\"name\":\"OR\"}"
   *   approveCondition: "AND" | "OR";
   *   // string (可选) - 抄送人id集合（英文逗号隔开）
   *   copyAccountIds?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiApprovalPut: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ApprovalModels.ApprovalPutGeneric>;
  /**
   * @api approval | post | /approval | POST | 新增
   * @body
   * ```ts
   * {
   *   // string - 主键ID(修改时传入)
   *   id: string;
   *   // string - 标题
   *   title: string;
   *   // "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}"
   *   status: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";
   *   // string (可选) - 内容
   *   content?: string;
   *   // string (可选) - 备注
   *   remarks?: string;
   *   // string (可选) - 附件
   *   files?: string;
   *   // string - 审批人id集合（英文逗号隔开）
   *   approveAccountIds: string;
   *   // "{"desc":"且","name":"AND"}" | "{"desc":"或","name":"OR"}" - 审批条件限制 | 可选值: "{\"desc\":\"且\",\"name\":\"AND\"}", "{\"desc\":\"或\",\"name\":\"OR\"}"
   *   approveCondition: "AND" | "OR";
   *   // string (可选) - 抄送人id集合（英文逗号隔开）
   *   copyAccountIds?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.ApprovalDTO (可选)
   *   data?: YusuanModels.ApprovalDTO;
   * }
   * ```
   */
  export const apiApprovalPost: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ApprovalModels.ApprovalPostGeneric>;
  /**
   * @api approval | postList | /approval/list | POST | 根据id集合获取列表
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.ApprovalDTO[];
   * }
   * ```
   */
  export const apiApprovalPostList: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ApprovalModels.ApprovalPostListGeneric>;
  /**
   * @api approval | deleteList | /approval/list | DELETE | 批量删除
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiApprovalDeleteList: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ApprovalModels.ApprovalDeleteListGeneric>;
  /**
   * @api approval | postHistoryPage | /approval/history/page | POST | 分配历史记录分页查询
   * @body
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // string (可选)
   *   approveAccountId?: string;
   *   // "{"desc":"且","name":"AND"}" | "{"desc":"或","name":"OR"}" (可选) - 可选值: "{\"desc\":\"且\",\"name\":\"AND\"}", "{\"desc\":\"或\",\"name\":\"OR\"}"
   *   approveCondition?: "AND" | "OR";
   *   // number (可选) - 格式: int32
   *   lot?: number;
   *   // string (可选)
   *   copyAccountId?: string;
   *   // array (可选)
   *   approvalIds?: string[];
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageApprovalHistoryDTO (可选)
   *   data?: YusuanModels.BasePageApprovalHistoryDTO;
   * }
   * ```
   */
  export const apiApprovalPostHistoryPage: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.ApprovalModels.ApprovalPostHistoryPageGeneric
  >;
  /**
   * @api approval | getPage | /approval/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // string (可选) - 创建人ID
   *   creator?: string;
   *   // string (可选) - 部门ID
   *   departmentId?: string;
   *   // "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" (可选) - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}"
   *   status?: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";
   *   // string (可选) - 创建开始时间 | 格式: date-time
   *   startCreateTime?: string;
   *   // string (可选) - 创建结束时间 | 格式: date-time
   *   endCreateTime?: string;
   *   // string (可选) - 当前审批人ID
   *   approveAccountId?: string;
   *   // string (可选) - 当前抄送人id
   *   copyAccountId?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageApprovalDTO (可选)
   *   data?: YusuanModels.BasePageApprovalDTO;
   * }
   * ```
   */
  export const apiApprovalGetPage: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ApprovalModels.ApprovalGetPageGeneric>;
  /**
   * @api approval | getHistoryByApprovalIdByLot | /approval/history/{approvalId}/{lot} | GET | 获取指定单子指定阶段最新的审批人知会人
   * @params
   * ```ts
   * {
   *   // string
   *   approvalId: string;
   *   // number - 格式: int32
   *   lot: number;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.ApprovalHistoryDTO (可选)
   *   data?: YusuanModels.ApprovalHistoryDTO;
   * }
   * ```
   */
  export const apiApprovalGetHistoryByApprovalIdByLot: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.ApprovalModels.ApprovalGetHistoryByApprovalIdByLotGeneric
  >;
  /**
   * @api approval | deleteById | /approval/{id} | DELETE | 删除
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiApprovalDeleteById: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ApprovalModels.ApprovalDeleteByIdGeneric>;
  /**
   * @api approval | putRecord | /approval/record | PUT | 修改
   * @body
   * ```ts
   * {
   *   // string - ID
   *   id: string;
   *   // string - 审批id
   *   approvalId: string;
   *   // "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}"
   *   status: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";
   *   // string (可选) - 审批意见
   *   suggestion?: string;
   *   // string (可选) - 附件
   *   files?: string;
   *   // boolean - 是否提交
   *   isSubmit: boolean;
   *   // string (可选) - 后续审批人id集合（英文逗号隔开）
   *   approveAccountIds?: string;
   *   // "{"desc":"且","name":"AND"}" | "{"desc":"或","name":"OR"}" (可选) - 后续审批条件限制 | 可选值: "{\"desc\":\"且\",\"name\":\"AND\"}", "{\"desc\":\"或\",\"name\":\"OR\"}"
   *   approveCondition?: "AND" | "OR";
   *   // string (可选) - 后续知会人id集合（英文逗号隔开）
   *   copyAccountIds?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiApprovalPutRecord: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ApprovalModels.ApprovalPutRecordGeneric>;
  /**
   * @api approval | postRecord | /approval/record | POST | 新增
   * @body
   * ```ts
   * {
   *   // string - ID
   *   id: string;
   *   // string - 审批id
   *   approvalId: string;
   *   // "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}"
   *   status: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";
   *   // string (可选) - 审批意见
   *   suggestion?: string;
   *   // string (可选) - 附件
   *   files?: string;
   *   // boolean - 是否提交
   *   isSubmit: boolean;
   *   // string (可选) - 后续审批人id集合（英文逗号隔开）
   *   approveAccountIds?: string;
   *   // "{"desc":"且","name":"AND"}" | "{"desc":"或","name":"OR"}" (可选) - 后续审批条件限制 | 可选值: "{\"desc\":\"且\",\"name\":\"AND\"}", "{\"desc\":\"或\",\"name\":\"OR\"}"
   *   approveCondition?: "AND" | "OR";
   *   // string (可选) - 后续知会人id集合（英文逗号隔开）
   *   copyAccountIds?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.ApprovalDTO (可选)
   *   data?: YusuanModels.ApprovalDTO;
   * }
   * ```
   */
  export const apiApprovalPostRecord: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ApprovalModels.ApprovalPostRecordGeneric>;
  /**
   * @api approval | putRecordBack | /approval/record/back | PUT | 退回
   * @body
   * ```ts
   * {
   *   // string - 审批id
   *   approvalId: string;
   *   // string (可选) - 审批意见
   *   suggestion?: string;
   *   // string (可选) - 附件
   *   files?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiApprovalPutRecordBack: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ApprovalModels.ApprovalPutRecordBackGeneric>;
  /**
   * @api approval | postRecordList | /approval/record/list | POST | 根据id集合获取列表
   * @body
   * ```ts
   * string[]
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // array (可选) - 返回数据
   *   data?: YusuanModels.ApprovalRecordDTO[];
   * }
   * ```
   */
  export const apiApprovalPostRecordList: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.ApprovalModels.ApprovalPostRecordListGeneric
  >;
  /**
   * @api approval | getRecordPage | /approval/record/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // string (可选) - 审批id
   *   approvalId?: string;
   *   // string (可选) - 审批人id
   *   approvalAccountId?: string;
   *   // "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" (可选) - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}"
   *   status?: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";
   *   // number (可选) - 审批阶段 | 格式: int32
   *   lot?: number;
   *   // boolean (可选) - 是否提交
   *   isSubmit?: boolean;
   *   // string (可选) - 创建开始时间 | 格式: date-time
   *   startCreateTime?: string;
   *   // string (可选) - 创建结束时间 | 格式: date-time
   *   endCreateTime?: string;
   *   // string (可选) - 提交开始时间 | 格式: date-time
   *   startSubmitTime?: string;
   *   // string (可选) - 提交结束时间 | 格式: date-time
   *   endSubmitTime?: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageApprovalRecordDTO (可选)
   *   data?: YusuanModels.BasePageApprovalRecordDTO;
   * }
   * ```
   */
  export const apiApprovalGetRecordPage: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.ApprovalModels.ApprovalGetRecordPageGeneric>;
  /**
   * @api approval | deleteRecordById | /approval/record/{id} | DELETE | 删除
   * @params
   * ```ts
   * {
   *   // string
   *   id: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiApprovalDeleteRecordById: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.ApprovalModels.ApprovalDeleteRecordByIdGeneric
  >;
  /**
   * @api account | putUpdatePasswordCurrent | /account/updatePassword/current | PUT | 当前登录用户修改密码
   * @body
   * ```ts
   * {
   *   // string - 旧密码
   *   oldPassword: string;
   *   // string - 新密码
   *   newPassword: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiAccountPutUpdatePasswordCurrent: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.AccountModels.AccountPutUpdatePasswordCurrentGeneric
  >;
  /**
   * @api account | putUpdatePasswordAdmin | /account/updatePassword/admin | PUT | 超管修改指定用户密码
   * @body
   * ```ts
   * {
   *   // string - 账号id
   *   accountId: string;
   *   // string - 用户密码
   *   password: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiAccountPutUpdatePasswordAdmin: ApiFunctionGenerate<
    AxiosRequestConfig,
    AxiosResponse,
    tsTypes.AccountModels.AccountPutUpdatePasswordAdminGeneric
  >;
  /**
   * @api account | putStatus | /account/status | PUT | 批量修改状态
   * @body
   * ```ts
   * {
   *   // array - 主键ID列表
   *   ids: string[];
   *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
   *   status: "ENABLE" | "DISABLE";
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // boolean (可选) - 返回数据
   *   data?: boolean;
   * }
   * ```
   */
  export const apiAccountPutStatus: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.AccountModels.AccountPutStatusGeneric>;
  /**
   * @api account | postLogin | /account/login | POST | 用户登录
   * @body
   * ```ts
   * {
   *   // string - 用户名
   *   userName: string;
   *   // string - 用户密码
   *   password: string;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // string (可选) - 返回数据
   *   data?: string;
   * }
   * ```
   */
  export const apiAccountPostLogin: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.AccountModels.AccountPostLoginGeneric>;
  /**
   * @api logInfo | getPage | /logInfo/page | GET | 分页查询
   * @query
   * ```ts
   * {
   *   // number - 页码 | 最小值: >=1 | 格式: int32
   *   page: number;
   *   // number (可选) - 页大小 | 最大值: <=10000 | 格式: int32
   *   size?: number;
   *   // string (可选) - 搜索关键字
   *   keyword?: string;
   *   // number (可选) - 类型 1：操作日志2：异常日志3：登录日志 | 格式: int32
   *   typeId?: number;
   * }
   * ```
   * @response
   * ```ts
   * {
   *   // number (可选) - 状态码 | 格式: int32
   *   code?: number;
   *   // string (可选) - 返回信息
   *   msg?: string;
   *   // YusuanModels.BasePageLogInfoDTO (可选)
   *   data?: YusuanModels.BasePageLogInfoDTO;
   * }
   * ```
   */
  export const apiLogInfoGetPage: ApiFunctionGenerate<AxiosRequestConfig, AxiosResponse, tsTypes.LogInfoModels.LogInfoGetPageGeneric>;
}
