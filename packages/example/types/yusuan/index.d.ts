import * as tsTypes from './types';
import type { ApiFunctionGenerate } from 'un-api';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
export {};
declare module "@yusuan" {
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | file | postUpload | /file/upload | POST | 上传文件（FormData） |
 */
  export const apiFilePostUpload: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FileModels.FilePostUploadGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | file | postUploadList | /file/upload/list | POST | 批量上传文件（FormData） |
 */
  export const apiFilePostUploadList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FileModels.FilePostUploadListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | file | postUploadListBase64 | /file/upload/list/base64 | POST | 批量上传文件（Base64） |
 */
  export const apiFilePostUploadListBase64: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FileModels.FilePostUploadListBase64Generic>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | file | getDownload | /file/download | GET | 下载文件 |
 */
  export const apiFileGetDownload: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FileModels.FileGetDownloadGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | user | putById | /user/{id} | PUT | 修改用户信息 |
 */
  export const apiUserPutById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.UserModels.UserPutByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | user | post | /user | POST | 新增用户信息 |
 */
  export const apiUserPost: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.UserModels.UserPostGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | user | postList | /user/list | POST | 根据userId集合获取用户列表 |
 */
  export const apiUserPostList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.UserModels.UserPostListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | user | postListByAccount | /user/listByAccount | POST | 根据accountId集合获取用户列表 |
 */
  export const apiUserPostListByAccount: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.UserModels.UserPostListByAccountGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | user | getPage | /user/page | GET | 分页查询 |
 */
  export const apiUserGetPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.UserModels.UserGetPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | user | getGetIMLink | /user/getIMLink | GET | 获取IM连接加密信息 |
 */
  export const apiUserGetGetIMLink: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.UserModels.UserGetGetIMLinkGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | user | getGetAccountInfo | /user/getAccountInfo | GET | 获取当前登录用户的信息 |
 */
  export const apiUserGetGetAccountInfo: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.UserModels.UserGetGetAccountInfoGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | systemMessage | putReadById | /systemMessage/read/{id} | PUT | 指定消息为已读状态 |
 */
  export const apiSystemMessagePutReadById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.SystemMessageModels.SystemMessagePutReadByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | systemMessage | getPage | /systemMessage/page | GET | 分页查询 |
 */
  export const apiSystemMessageGetPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.SystemMessageModels.SystemMessageGetPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | systemMessage | getCurrentPage | /systemMessage/current/page | GET | 分页查询当前登录用户的系统消息 |
 */
  export const apiSystemMessageGetCurrentPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.SystemMessageModels.SystemMessageGetCurrentPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | getById | /role/{id} | GET | 根据ID查询一条数据 |
 */
  export const apiRoleGetById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.RoleModels.RoleGetByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | putById | /role/{id} | PUT | 根据id修改一条数据 |
 */
  export const apiRolePutById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.RoleModels.RolePutByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | deleteById | /role/{id} | DELETE | 根据id删除数据 |
 */
  export const apiRoleDeleteById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.RoleModels.RoleDeleteByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | putList | /role/list | PUT | 批量修改数据 |
 */
  export const apiRolePutList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.RoleModels.RolePutListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | postList | /role/list | POST | 批量添加数据 |
 */
  export const apiRolePostList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.RoleModels.RolePostListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | deleteList | /role/list | DELETE | 根据id集合批量删除数据 |
 */
  export const apiRoleDeleteList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.RoleModels.RoleDeleteListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | post | /role | POST | 添加一条数据 |
 */
  export const apiRolePost: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.RoleModels.RolePostGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | postListQuery | /role/list/query | POST | 根据id集合获取列表 |
 */
  export const apiRolePostListQuery: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.RoleModels.RolePostListQueryGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | getPage | /role/page | GET | 分页查询 |
 */
  export const apiRoleGetPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.RoleModels.RoleGetPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | put | /project | PUT | 修改项目 |
 */
  export const apiProjectPut: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectModels.ProjectPutGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | post | /project | POST | 新增项目 |
 */
  export const apiProjectPost: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectModels.ProjectPostGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | postList | /project/list | POST | 根据id集合获取列表 |
 */
  export const apiProjectPostList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectModels.ProjectPostListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | getPage | /project/page | GET | 分页查询 |
 */
  export const apiProjectGetPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectModels.ProjectGetPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | putStatusChange | /project/statusChange | PUT | 修改项目状态 |
 */
  export const apiProjectPutStatusChange: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectModels.ProjectPutStatusChangeGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | postStatusChange | /project/statusChange | POST | 新增项目状态 |
 */
  export const apiProjectPostStatusChange: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectModels.ProjectPostStatusChangeGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | postStatusChangeList | /project/statusChange/list | POST | 根据id集合获取列表 |
 */
  export const apiProjectPostStatusChangeList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectModels.ProjectPostStatusChangeListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | getStatusChangePage | /project/statusChange/page | GET | 分页查询 |
 */
  export const apiProjectGetStatusChangePage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectModels.ProjectGetStatusChangePageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | putLifeCycle | /project/lifeCycle | PUT | 修改任务 |
 */
  export const apiProjectPutLifeCycle: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectModels.ProjectPutLifeCycleGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | postLifeCycle | /project/lifeCycle | POST | 新增任务 |
 */
  export const apiProjectPostLifeCycle: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectModels.ProjectPostLifeCycleGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | putLifeCycleStatus | /project/lifeCycle/status | PUT | 修改状态 |
 */
  export const apiProjectPutLifeCycleStatus: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectModels.ProjectPutLifeCycleStatusGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | postLifeCycleList | /project/lifeCycle/list | POST | 根据id集合获取列表 |
 */
  export const apiProjectPostLifeCycleList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectModels.ProjectPostLifeCycleListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | getLifeCyclePage | /project/lifeCycle/page | GET | 分页查询 |
 */
  export const apiProjectGetLifeCyclePage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectModels.ProjectGetLifeCyclePageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | projectCategory | putById | /projectCategory/{id} | PUT | 修改类目数据 |
 */
  export const apiProjectCategoryPutById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectCategoryModels.ProjectCategoryPutByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | projectCategory | putStatus | /projectCategory/status | PUT | 批量修改状态 |
 */
  export const apiProjectCategoryPutStatus: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectCategoryModels.ProjectCategoryPutStatusGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | projectCategory | post | /projectCategory | POST | 新增类目数据 |
 */
  export const apiProjectCategoryPost: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectCategoryModels.ProjectCategoryPostGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | projectCategory | postList | /projectCategory/list | POST | 根据id集合获取列表 |
 */
  export const apiProjectCategoryPostList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectCategoryModels.ProjectCategoryPostListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | projectCategory | getPage | /projectCategory/page | GET | 分页查询 |
 */
  export const apiProjectCategoryGetPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ProjectCategoryModels.ProjectCategoryGetPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | getById | /permissionMenus/{id} | GET | 根据ID查询一条数据 |
 */
  export const apiPermissionMenusGetById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.PermissionMenusModels.PermissionMenusGetByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | putById | /permissionMenus/{id} | PUT | 根据id修改一条数据 |
 */
  export const apiPermissionMenusPutById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.PermissionMenusModels.PermissionMenusPutByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | deleteById | /permissionMenus/{id} | DELETE | 根据id删除数据 |
 */
  export const apiPermissionMenusDeleteById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.PermissionMenusModels.PermissionMenusDeleteByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | putList | /permissionMenus/list | PUT | 批量修改数据 |
 */
  export const apiPermissionMenusPutList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.PermissionMenusModels.PermissionMenusPutListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | postList | /permissionMenus/list | POST | 批量添加数据 |
 */
  export const apiPermissionMenusPostList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.PermissionMenusModels.PermissionMenusPostListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | deleteList | /permissionMenus/list | DELETE | 根据id集合批量删除数据 |
 */
  export const apiPermissionMenusDeleteList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.PermissionMenusModels.PermissionMenusDeleteListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | post | /permissionMenus | POST | 添加一条数据 |
 */
  export const apiPermissionMenusPost: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.PermissionMenusModels.PermissionMenusPostGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | postListQuery | /permissionMenus/list/query | POST | 根据id集合获取列表 |
 */
  export const apiPermissionMenusPostListQuery: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.PermissionMenusModels.PermissionMenusPostListQueryGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | getPage | /permissionMenus/page | GET | 分页查询 |
 */
  export const apiPermissionMenusGetPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.PermissionMenusModels.PermissionMenusGetPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | getCurrent | /permissionMenus/current | GET | 获取当前登录用户拥有的菜单功能权限 |
 */
  export const apiPermissionMenusGetCurrent: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.PermissionMenusModels.PermissionMenusGetCurrentGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | financeCategory | putById | /financeCategory/{id} | PUT | 修改类目数据 |
 */
  export const apiFinanceCategoryPutById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceCategoryModels.FinanceCategoryPutByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | financeCategory | putStatus | /financeCategory/status | PUT | 批量修改状态 |
 */
  export const apiFinanceCategoryPutStatus: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceCategoryModels.FinanceCategoryPutStatusGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | financeCategory | post | /financeCategory | POST | 新增类目数据 |
 */
  export const apiFinanceCategoryPost: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceCategoryModels.FinanceCategoryPostGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | financeCategory | postList | /financeCategory/list | POST | 根据id集合获取列表 |
 */
  export const apiFinanceCategoryPostList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceCategoryModels.FinanceCategoryPostListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | financeCategory | getPage | /financeCategory/page | GET | 分页查询 |
 */
  export const apiFinanceCategoryGetPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceCategoryModels.FinanceCategoryGetPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | putById | /finance/{id} | PUT | 修改资金批次 |
 */
  export const apiFinancePutById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinancePutByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | putStatus | /finance/status | PUT | 批量修改状态 |
 */
  export const apiFinancePutStatus: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinancePutStatusGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | post | /finance | POST | 新增资金批次 |
 */
  export const apiFinancePost: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinancePostGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | postList | /finance/list | POST | 根据id集合获取列表 |
 */
  export const apiFinancePostList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinancePostListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | getPage | /finance/page | GET | 分页查询 |
 */
  export const apiFinanceGetPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinanceGetPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | putDepartmentById | /finance/department/{id} | PUT | 修改分配给部门的资金 |
 */
  export const apiFinancePutDepartmentById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinancePutDepartmentByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | putDepartmentStatus | /finance/department/status | PUT | 批量修改状态 |
 */
  export const apiFinancePutDepartmentStatus: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinancePutDepartmentStatusGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | postDepartment | /finance/department | POST | 新增资金分配给部门（从批次上分配给顶级部门） |
 */
  export const apiFinancePostDepartment: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinancePostDepartmentGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | postDepartmentList | /finance/department/list | POST | 根据id集合获取列表 |
 */
  export const apiFinancePostDepartmentList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinancePostDepartmentListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | postDepartmentChild | /finance/department/child | POST | 新增资金分配给部门（分配给子部门） |
 */
  export const apiFinancePostDepartmentChild: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinancePostDepartmentChildGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | getDepartmentPage | /finance/department/page | GET | 分页查询 |
 */
  export const apiFinanceGetDepartmentPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinanceGetDepartmentPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | putCategoryById | /finance/category/{id} | PUT | 修改部门分配资金类目 |
 */
  export const apiFinancePutCategoryById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinancePutCategoryByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | putCategoryStatus | /finance/category/status | PUT | 批量修改状态 |
 */
  export const apiFinancePutCategoryStatus: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinancePutCategoryStatusGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | postCategory | /finance/category | POST | 新增部门下资金分配给类目 |
 */
  export const apiFinancePostCategory: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinancePostCategoryGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | postCategoryList | /finance/category/list | POST | 根据id集合获取列表 |
 */
  export const apiFinancePostCategoryList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinancePostCategoryListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | getCategoryPage | /finance/category/page | GET | 分页查询 |
 */
  export const apiFinanceGetCategoryPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinanceGetCategoryPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | postCategoryProjectByAllocationCategoryId | /finance/category/project/{allocationCategoryId} | POST | 批量关联项目类目id |
 */
  export const apiFinancePostCategoryProjectByAllocationCategoryId: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinancePostCategoryProjectByAllocationCategoryIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | getCategoryProjectPage | /finance/category/project/page | GET | 分页查询 |
 */
  export const apiFinanceGetCategoryProjectPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.FinanceModels.FinanceGetCategoryProjectPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictType | putById | /dictType/{id} | PUT | 修改字典类型 |
 */
  export const apiDictTypePutById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DictTypeModels.DictTypePutByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictType | deleteById | /dictType/{id} | DELETE | 删除字典类型 |
 */
  export const apiDictTypeDeleteById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DictTypeModels.DictTypeDeleteByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictType | putStatusById | /dictType/status/{id} | PUT | 修改状态 |
 */
  export const apiDictTypePutStatusById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DictTypeModels.DictTypePutStatusByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictType | post | /dictType | POST | 新增字典类型 |
 */
  export const apiDictTypePost: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DictTypeModels.DictTypePostGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictType | getPage | /dictType/page | GET | 分页查询 |
 */
  export const apiDictTypeGetPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DictTypeModels.DictTypeGetPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictType | deleteList | /dictType/list | DELETE | 批量删除字典类型 |
 */
  export const apiDictTypeDeleteList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DictTypeModels.DictTypeDeleteListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictData | putById | /dictData/{id} | PUT | 修改字典数据 |
 */
  export const apiDictDataPutById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DictDataModels.DictDataPutByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictData | deleteById | /dictData/{id} | DELETE | 删除字典数据 |
 */
  export const apiDictDataDeleteById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DictDataModels.DictDataDeleteByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictData | putStatusById | /dictData/status/{id} | PUT | 修改状态 |
 */
  export const apiDictDataPutStatusById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DictDataModels.DictDataPutStatusByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictData | post | /dictData | POST | 新增字典数据 |
 */
  export const apiDictDataPost: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DictDataModels.DictDataPostGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictData | getPage | /dictData/page | GET | 分页查询 |
 */
  export const apiDictDataGetPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DictDataModels.DictDataGetPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictData | deleteList | /dictData/list | DELETE | 批量删除字典数据 |
 */
  export const apiDictDataDeleteList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DictDataModels.DictDataDeleteListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | department | putById | /department/{id} | PUT | 修改部门数据 |
 */
  export const apiDepartmentPutById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DepartmentModels.DepartmentPutByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | department | deleteById | /department/{id} | DELETE | 删除部门数据 |
 */
  export const apiDepartmentDeleteById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DepartmentModels.DepartmentDeleteByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | department | putStatus | /department/status | PUT | 批量修改状态 |
 */
  export const apiDepartmentPutStatus: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DepartmentModels.DepartmentPutStatusGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | department | post | /department | POST | 新增部门数据 |
 */
  export const apiDepartmentPost: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DepartmentModels.DepartmentPostGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | department | postList | /department/list | POST | 根据id集合获取列表 |
 */
  export const apiDepartmentPostList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DepartmentModels.DepartmentPostListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | department | deleteList | /department/list | DELETE | 批量删除部门数据 |
 */
  export const apiDepartmentDeleteList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DepartmentModels.DepartmentDeleteListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | department | getPage | /department/page | GET | 分页查询 |
 */
  export const apiDepartmentGetPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.DepartmentModels.DepartmentGetPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | config | putUpdate | /config/update | PUT | 修改系统配置(自定义) |
 */
  export const apiConfigPutUpdate: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ConfigModels.ConfigPutUpdateGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | config | postSave | /config/save | POST | 新增系统配置(自定义) |
 */
  export const apiConfigPostSave: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ConfigModels.ConfigPostSaveGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | config | getItem | /config/item | GET | 根据key获取配置项 |
 */
  export const apiConfigGetItem: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ConfigModels.ConfigGetItemGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | config | getEnums | /config/enums | GET | 获取所有枚举信息 |
 */
  export const apiConfigGetEnums: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ConfigModels.ConfigGetEnumsGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | put | /approval | PUT | 修改 |
 */
  export const apiApprovalPut: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ApprovalModels.ApprovalPutGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | post | /approval | POST | 新增 |
 */
  export const apiApprovalPost: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ApprovalModels.ApprovalPostGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | postList | /approval/list | POST | 根据id集合获取列表 |
 */
  export const apiApprovalPostList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ApprovalModels.ApprovalPostListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | deleteList | /approval/list | DELETE | 批量删除 |
 */
  export const apiApprovalDeleteList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ApprovalModels.ApprovalDeleteListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | postHistoryPage | /approval/history/page | POST | 分配历史记录分页查询 |
 */
  export const apiApprovalPostHistoryPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ApprovalModels.ApprovalPostHistoryPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | getPage | /approval/page | GET | 分页查询 |
 */
  export const apiApprovalGetPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ApprovalModels.ApprovalGetPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | getHistoryByApprovalIdByLot | /approval/history/{approvalId}/{lot} | GET | 获取指定单子指定阶段最新的审批人知会人 |
 */
  export const apiApprovalGetHistoryByApprovalIdByLot: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ApprovalModels.ApprovalGetHistoryByApprovalIdByLotGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | deleteById | /approval/{id} | DELETE | 删除 |
 */
  export const apiApprovalDeleteById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ApprovalModels.ApprovalDeleteByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | putRecord | /approval/record | PUT | 修改 |
 */
  export const apiApprovalPutRecord: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ApprovalModels.ApprovalPutRecordGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | postRecord | /approval/record | POST | 新增 |
 */
  export const apiApprovalPostRecord: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ApprovalModels.ApprovalPostRecordGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | putRecordBack | /approval/record/back | PUT | 退回 |
 */
  export const apiApprovalPutRecordBack: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ApprovalModels.ApprovalPutRecordBackGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | postRecordList | /approval/record/list | POST | 根据id集合获取列表 |
 */
  export const apiApprovalPostRecordList: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ApprovalModels.ApprovalPostRecordListGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | getRecordPage | /approval/record/page | GET | 分页查询 |
 */
  export const apiApprovalGetRecordPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ApprovalModels.ApprovalGetRecordPageGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | deleteRecordById | /approval/record/{id} | DELETE | 删除 |
 */
  export const apiApprovalDeleteRecordById: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.ApprovalModels.ApprovalDeleteRecordByIdGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | account | putUpdatePasswordCurrent | /account/updatePassword/current | PUT | 当前登录用户修改密码 |
 */
  export const apiAccountPutUpdatePasswordCurrent: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.AccountModels.AccountPutUpdatePasswordCurrentGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | account | putUpdatePasswordAdmin | /account/updatePassword/admin | PUT | 超管修改指定用户密码 |
 */
  export const apiAccountPutUpdatePasswordAdmin: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.AccountModels.AccountPutUpdatePasswordAdminGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | account | putStatus | /account/status | PUT | 批量修改状态 |
 */
  export const apiAccountPutStatus: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.AccountModels.AccountPutStatusGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | account | postLogin | /account/login | POST | 用户登录 |
 */
  export const apiAccountPostLogin: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.AccountModels.AccountPostLoginGeneric>;
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | logInfo | getPage | /logInfo/page | GET | 分页查询 |
 */
  export const apiLogInfoGetPage: ApiFunctionGenerate<AxiosRequestConfig,AxiosResponse,tsTypes.LogInfoModels.LogInfoGetPageGeneric>;
}
