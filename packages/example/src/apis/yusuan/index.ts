// 当前文件由 un-api 自动生成-非必要请勿手动修改此文件
import { axiosBaseClient } from "@/service/axios-base-client";
import * as apis from "./apis/index.ts";
import { createProxyApi } from "un-api/browser";

/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | file | postUpload | /file/upload | POST | 上传文件（FormData） |
 */
export const apiFilePostUpload = createProxyApi(apis.file.postUpload, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | file | postUploadList | /file/upload/list | POST | 批量上传文件（FormData） |
 */
export const apiFilePostUploadList = createProxyApi(apis.file.postUploadList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | file | postUploadListBase64 | /file/upload/list/base64 | POST | 批量上传文件（Base64） |
 */
export const apiFilePostUploadListBase64 = createProxyApi(apis.file.postUploadListBase64, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | file | getDownload | /file/download | GET | 下载文件 |
 */
export const apiFileGetDownload = createProxyApi(apis.file.getDownload, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | user | putById | /user/{id} | PUT | 修改用户信息 |
 */
export const apiUserPutById = createProxyApi(apis.user.putById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | user | post | /user | POST | 新增用户信息 |
 */
export const apiUserPost = createProxyApi(apis.user.post, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | user | postList | /user/list | POST | 根据userId集合获取用户列表 |
 */
export const apiUserPostList = createProxyApi(apis.user.postList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | user | postListByAccount | /user/listByAccount | POST | 根据accountId集合获取用户列表 |
 */
export const apiUserPostListByAccount = createProxyApi(apis.user.postListByAccount, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | user | getPage | /user/page | GET | 分页查询 |
 */
export const apiUserGetPage = createProxyApi(apis.user.getPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | user | getGetIMLink | /user/getIMLink | GET | 获取IM连接加密信息 |
 */
export const apiUserGetGetIMLink = createProxyApi(apis.user.getGetIMLink, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | user | getGetAccountInfo | /user/getAccountInfo | GET | 获取当前登录用户的信息 |
 */
export const apiUserGetGetAccountInfo = createProxyApi(apis.user.getGetAccountInfo, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | systemMessage | putReadById | /systemMessage/read/{id} | PUT | 指定消息为已读状态 |
 */
export const apiSystemMessagePutReadById = createProxyApi(apis.systemMessage.putReadById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | systemMessage | getPage | /systemMessage/page | GET | 分页查询 |
 */
export const apiSystemMessageGetPage = createProxyApi(apis.systemMessage.getPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | systemMessage | getCurrentPage | /systemMessage/current/page | GET | 分页查询当前登录用户的系统消息 |
 */
export const apiSystemMessageGetCurrentPage = createProxyApi(apis.systemMessage.getCurrentPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | getById | /role/{id} | GET | 根据ID查询一条数据 |
 */
export const apiRoleGetById = createProxyApi(apis.role.getById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | putById | /role/{id} | PUT | 根据id修改一条数据 |
 */
export const apiRolePutById = createProxyApi(apis.role.putById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | deleteById | /role/{id} | DELETE | 根据id删除数据 |
 */
export const apiRoleDeleteById = createProxyApi(apis.role.deleteById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | putList | /role/list | PUT | 批量修改数据 |
 */
export const apiRolePutList = createProxyApi(apis.role.putList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | postList | /role/list | POST | 批量添加数据 |
 */
export const apiRolePostList = createProxyApi(apis.role.postList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | deleteList | /role/list | DELETE | 根据id集合批量删除数据 |
 */
export const apiRoleDeleteList = createProxyApi(apis.role.deleteList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | post | /role | POST | 添加一条数据 |
 */
export const apiRolePost = createProxyApi(apis.role.post, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | postListQuery | /role/list/query | POST | 根据id集合获取列表 |
 */
export const apiRolePostListQuery = createProxyApi(apis.role.postListQuery, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | getPage | /role/page | GET | 分页查询 |
 */
export const apiRoleGetPage = createProxyApi(apis.role.getPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | put | /project | PUT | 修改项目 |
 */
export const apiProjectPut = createProxyApi(apis.project.put, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | post | /project | POST | 新增项目 |
 */
export const apiProjectPost = createProxyApi(apis.project.post, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | postList | /project/list | POST | 根据id集合获取列表 |
 */
export const apiProjectPostList = createProxyApi(apis.project.postList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | getPage | /project/page | GET | 分页查询 |
 */
export const apiProjectGetPage = createProxyApi(apis.project.getPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | putStatusChange | /project/statusChange | PUT | 修改项目状态 |
 */
export const apiProjectPutStatusChange = createProxyApi(apis.project.putStatusChange, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | postStatusChange | /project/statusChange | POST | 新增项目状态 |
 */
export const apiProjectPostStatusChange = createProxyApi(apis.project.postStatusChange, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | postStatusChangeList | /project/statusChange/list | POST | 根据id集合获取列表 |
 */
export const apiProjectPostStatusChangeList = createProxyApi(apis.project.postStatusChangeList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | getStatusChangePage | /project/statusChange/page | GET | 分页查询 |
 */
export const apiProjectGetStatusChangePage = createProxyApi(apis.project.getStatusChangePage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | putLifeCycle | /project/lifeCycle | PUT | 修改任务 |
 */
export const apiProjectPutLifeCycle = createProxyApi(apis.project.putLifeCycle, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | postLifeCycle | /project/lifeCycle | POST | 新增任务 |
 */
export const apiProjectPostLifeCycle = createProxyApi(apis.project.postLifeCycle, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | putLifeCycleStatus | /project/lifeCycle/status | PUT | 修改状态 |
 */
export const apiProjectPutLifeCycleStatus = createProxyApi(apis.project.putLifeCycleStatus, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | postLifeCycleList | /project/lifeCycle/list | POST | 根据id集合获取列表 |
 */
export const apiProjectPostLifeCycleList = createProxyApi(apis.project.postLifeCycleList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | project | getLifeCyclePage | /project/lifeCycle/page | GET | 分页查询 |
 */
export const apiProjectGetLifeCyclePage = createProxyApi(apis.project.getLifeCyclePage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | projectCategory | putById | /projectCategory/{id} | PUT | 修改类目数据 |
 */
export const apiProjectCategoryPutById = createProxyApi(apis.projectCategory.putById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | projectCategory | putStatus | /projectCategory/status | PUT | 批量修改状态 |
 */
export const apiProjectCategoryPutStatus = createProxyApi(apis.projectCategory.putStatus, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | projectCategory | post | /projectCategory | POST | 新增类目数据 |
 */
export const apiProjectCategoryPost = createProxyApi(apis.projectCategory.post, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | projectCategory | postList | /projectCategory/list | POST | 根据id集合获取列表 |
 */
export const apiProjectCategoryPostList = createProxyApi(apis.projectCategory.postList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | projectCategory | getPage | /projectCategory/page | GET | 分页查询 |
 */
export const apiProjectCategoryGetPage = createProxyApi(apis.projectCategory.getPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | getById | /permissionMenus/{id} | GET | 根据ID查询一条数据 |
 */
export const apiPermissionMenusGetById = createProxyApi(apis.permissionMenus.getById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | putById | /permissionMenus/{id} | PUT | 根据id修改一条数据 |
 */
export const apiPermissionMenusPutById = createProxyApi(apis.permissionMenus.putById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | deleteById | /permissionMenus/{id} | DELETE | 根据id删除数据 |
 */
export const apiPermissionMenusDeleteById = createProxyApi(apis.permissionMenus.deleteById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | putList | /permissionMenus/list | PUT | 批量修改数据 |
 */
export const apiPermissionMenusPutList = createProxyApi(apis.permissionMenus.putList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | postList | /permissionMenus/list | POST | 批量添加数据 |
 */
export const apiPermissionMenusPostList = createProxyApi(apis.permissionMenus.postList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | deleteList | /permissionMenus/list | DELETE | 根据id集合批量删除数据 |
 */
export const apiPermissionMenusDeleteList = createProxyApi(apis.permissionMenus.deleteList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | post | /permissionMenus | POST | 添加一条数据 |
 */
export const apiPermissionMenusPost = createProxyApi(apis.permissionMenus.post, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | postListQuery | /permissionMenus/list/query | POST | 根据id集合获取列表 |
 */
export const apiPermissionMenusPostListQuery = createProxyApi(apis.permissionMenus.postListQuery, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | getPage | /permissionMenus/page | GET | 分页查询 |
 */
export const apiPermissionMenusGetPage = createProxyApi(apis.permissionMenus.getPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | permissionMenus | getCurrent | /permissionMenus/current | GET | 获取当前登录用户拥有的菜单功能权限 |
 */
export const apiPermissionMenusGetCurrent = createProxyApi(apis.permissionMenus.getCurrent, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | financeCategory | putById | /financeCategory/{id} | PUT | 修改类目数据 |
 */
export const apiFinanceCategoryPutById = createProxyApi(apis.financeCategory.putById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | financeCategory | putStatus | /financeCategory/status | PUT | 批量修改状态 |
 */
export const apiFinanceCategoryPutStatus = createProxyApi(apis.financeCategory.putStatus, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | financeCategory | post | /financeCategory | POST | 新增类目数据 |
 */
export const apiFinanceCategoryPost = createProxyApi(apis.financeCategory.post, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | financeCategory | postList | /financeCategory/list | POST | 根据id集合获取列表 |
 */
export const apiFinanceCategoryPostList = createProxyApi(apis.financeCategory.postList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | financeCategory | getPage | /financeCategory/page | GET | 分页查询 |
 */
export const apiFinanceCategoryGetPage = createProxyApi(apis.financeCategory.getPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | putById | /finance/{id} | PUT | 修改资金批次 |
 */
export const apiFinancePutById = createProxyApi(apis.finance.putById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | putStatus | /finance/status | PUT | 批量修改状态 |
 */
export const apiFinancePutStatus = createProxyApi(apis.finance.putStatus, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | post | /finance | POST | 新增资金批次 |
 */
export const apiFinancePost = createProxyApi(apis.finance.post, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | postList | /finance/list | POST | 根据id集合获取列表 |
 */
export const apiFinancePostList = createProxyApi(apis.finance.postList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | getPage | /finance/page | GET | 分页查询 |
 */
export const apiFinanceGetPage = createProxyApi(apis.finance.getPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | putDepartmentById | /finance/department/{id} | PUT | 修改分配给部门的资金 |
 */
export const apiFinancePutDepartmentById = createProxyApi(apis.finance.putDepartmentById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | putDepartmentStatus | /finance/department/status | PUT | 批量修改状态 |
 */
export const apiFinancePutDepartmentStatus = createProxyApi(apis.finance.putDepartmentStatus, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | postDepartment | /finance/department | POST | 新增资金分配给部门（从批次上分配给顶级部门） |
 */
export const apiFinancePostDepartment = createProxyApi(apis.finance.postDepartment, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | postDepartmentList | /finance/department/list | POST | 根据id集合获取列表 |
 */
export const apiFinancePostDepartmentList = createProxyApi(apis.finance.postDepartmentList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | postDepartmentChild | /finance/department/child | POST | 新增资金分配给部门（分配给子部门） |
 */
export const apiFinancePostDepartmentChild = createProxyApi(apis.finance.postDepartmentChild, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | getDepartmentPage | /finance/department/page | GET | 分页查询 |
 */
export const apiFinanceGetDepartmentPage = createProxyApi(apis.finance.getDepartmentPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | putCategoryById | /finance/category/{id} | PUT | 修改部门分配资金类目 |
 */
export const apiFinancePutCategoryById = createProxyApi(apis.finance.putCategoryById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | putCategoryStatus | /finance/category/status | PUT | 批量修改状态 |
 */
export const apiFinancePutCategoryStatus = createProxyApi(apis.finance.putCategoryStatus, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | postCategory | /finance/category | POST | 新增部门下资金分配给类目 |
 */
export const apiFinancePostCategory = createProxyApi(apis.finance.postCategory, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | postCategoryList | /finance/category/list | POST | 根据id集合获取列表 |
 */
export const apiFinancePostCategoryList = createProxyApi(apis.finance.postCategoryList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | getCategoryPage | /finance/category/page | GET | 分页查询 |
 */
export const apiFinanceGetCategoryPage = createProxyApi(apis.finance.getCategoryPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | postCategoryProjectByAllocationCategoryId | /finance/category/project/{allocationCategoryId} | POST | 批量关联项目类目id |
 */
export const apiFinancePostCategoryProjectByAllocationCategoryId = createProxyApi(
  apis.finance.postCategoryProjectByAllocationCategoryId,
  axiosBaseClient,
);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | finance | getCategoryProjectPage | /finance/category/project/page | GET | 分页查询 |
 */
export const apiFinanceGetCategoryProjectPage = createProxyApi(apis.finance.getCategoryProjectPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictType | putById | /dictType/{id} | PUT | 修改字典类型 |
 */
export const apiDictTypePutById = createProxyApi(apis.dictType.putById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictType | deleteById | /dictType/{id} | DELETE | 删除字典类型 |
 */
export const apiDictTypeDeleteById = createProxyApi(apis.dictType.deleteById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictType | putStatusById | /dictType/status/{id} | PUT | 修改状态 |
 */
export const apiDictTypePutStatusById = createProxyApi(apis.dictType.putStatusById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictType | post | /dictType | POST | 新增字典类型 |
 */
export const apiDictTypePost = createProxyApi(apis.dictType.post, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictType | getPage | /dictType/page | GET | 分页查询 |
 */
export const apiDictTypeGetPage = createProxyApi(apis.dictType.getPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictType | deleteList | /dictType/list | DELETE | 批量删除字典类型 |
 */
export const apiDictTypeDeleteList = createProxyApi(apis.dictType.deleteList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictData | putById | /dictData/{id} | PUT | 修改字典数据 |
 */
export const apiDictDataPutById = createProxyApi(apis.dictData.putById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictData | deleteById | /dictData/{id} | DELETE | 删除字典数据 |
 */
export const apiDictDataDeleteById = createProxyApi(apis.dictData.deleteById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictData | putStatusById | /dictData/status/{id} | PUT | 修改状态 |
 */
export const apiDictDataPutStatusById = createProxyApi(apis.dictData.putStatusById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictData | post | /dictData | POST | 新增字典数据 |
 */
export const apiDictDataPost = createProxyApi(apis.dictData.post, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictData | getPage | /dictData/page | GET | 分页查询 |
 */
export const apiDictDataGetPage = createProxyApi(apis.dictData.getPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dictData | deleteList | /dictData/list | DELETE | 批量删除字典数据 |
 */
export const apiDictDataDeleteList = createProxyApi(apis.dictData.deleteList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | department | putById | /department/{id} | PUT | 修改部门数据 |
 */
export const apiDepartmentPutById = createProxyApi(apis.department.putById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | department | deleteById | /department/{id} | DELETE | 删除部门数据 |
 */
export const apiDepartmentDeleteById = createProxyApi(apis.department.deleteById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | department | putStatus | /department/status | PUT | 批量修改状态 |
 */
export const apiDepartmentPutStatus = createProxyApi(apis.department.putStatus, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | department | post | /department | POST | 新增部门数据 |
 */
export const apiDepartmentPost = createProxyApi(apis.department.post, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | department | postList | /department/list | POST | 根据id集合获取列表 |
 */
export const apiDepartmentPostList = createProxyApi(apis.department.postList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | department | deleteList | /department/list | DELETE | 批量删除部门数据 |
 */
export const apiDepartmentDeleteList = createProxyApi(apis.department.deleteList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | department | getPage | /department/page | GET | 分页查询 |
 */
export const apiDepartmentGetPage = createProxyApi(apis.department.getPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | config | putUpdate | /config/update | PUT | 修改系统配置(自定义) |
 */
export const apiConfigPutUpdate = createProxyApi(apis.config.putUpdate, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | config | postSave | /config/save | POST | 新增系统配置(自定义) |
 */
export const apiConfigPostSave = createProxyApi(apis.config.postSave, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | config | getItem | /config/item | GET | 根据key获取配置项 |
 */
export const apiConfigGetItem = createProxyApi(apis.config.getItem, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | config | getEnums | /config/enums | GET | 获取所有枚举信息 |
 */
export const apiConfigGetEnums = createProxyApi(apis.config.getEnums, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | put | /approval | PUT | 修改 |
 */
export const apiApprovalPut = createProxyApi(apis.approval.put, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | post | /approval | POST | 新增 |
 */
export const apiApprovalPost = createProxyApi(apis.approval.post, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | postList | /approval/list | POST | 根据id集合获取列表 |
 */
export const apiApprovalPostList = createProxyApi(apis.approval.postList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | deleteList | /approval/list | DELETE | 批量删除 |
 */
export const apiApprovalDeleteList = createProxyApi(apis.approval.deleteList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | postHistoryPage | /approval/history/page | POST | 分配历史记录分页查询 |
 */
export const apiApprovalPostHistoryPage = createProxyApi(apis.approval.postHistoryPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | getPage | /approval/page | GET | 分页查询 |
 */
export const apiApprovalGetPage = createProxyApi(apis.approval.getPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | getHistoryByApprovalIdByLot | /approval/history/{approvalId}/{lot} | GET | 获取指定单子指定阶段最新的审批人知会人 |
 */
export const apiApprovalGetHistoryByApprovalIdByLot = createProxyApi(apis.approval.getHistoryByApprovalIdByLot, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | deleteById | /approval/{id} | DELETE | 删除 |
 */
export const apiApprovalDeleteById = createProxyApi(apis.approval.deleteById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | putRecord | /approval/record | PUT | 修改 |
 */
export const apiApprovalPutRecord = createProxyApi(apis.approval.putRecord, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | postRecord | /approval/record | POST | 新增 |
 */
export const apiApprovalPostRecord = createProxyApi(apis.approval.postRecord, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | putRecordBack | /approval/record/back | PUT | 退回 |
 */
export const apiApprovalPutRecordBack = createProxyApi(apis.approval.putRecordBack, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | postRecordList | /approval/record/list | POST | 根据id集合获取列表 |
 */
export const apiApprovalPostRecordList = createProxyApi(apis.approval.postRecordList, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | getRecordPage | /approval/record/page | GET | 分页查询 |
 */
export const apiApprovalGetRecordPage = createProxyApi(apis.approval.getRecordPage, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | approval | deleteRecordById | /approval/record/{id} | DELETE | 删除 |
 */
export const apiApprovalDeleteRecordById = createProxyApi(apis.approval.deleteRecordById, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | account | putUpdatePasswordCurrent | /account/updatePassword/current | PUT | 当前登录用户修改密码 |
 */
export const apiAccountPutUpdatePasswordCurrent = createProxyApi(apis.account.putUpdatePasswordCurrent, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | account | putUpdatePasswordAdmin | /account/updatePassword/admin | PUT | 超管修改指定用户密码 |
 */
export const apiAccountPutUpdatePasswordAdmin = createProxyApi(apis.account.putUpdatePasswordAdmin, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | account | putStatus | /account/status | PUT | 批量修改状态 |
 */
export const apiAccountPutStatus = createProxyApi(apis.account.putStatus, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | account | postLogin | /account/login | POST | 用户登录 |
 */
export const apiAccountPostLogin = createProxyApi(apis.account.postLogin, axiosBaseClient);
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | logInfo | getPage | /logInfo/page | GET | 分页查询 |
 */
export const apiLogInfoGetPage = createProxyApi(apis.logInfo.getPage, axiosBaseClient);
