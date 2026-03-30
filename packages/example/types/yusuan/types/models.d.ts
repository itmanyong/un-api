export namespace YusuanModels {
  /**
   * ResultBoolean
   */
  export type ResultBoolean = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };

  /**
   * UpdateUserInfoDTO
   */
  export type UpdateUserInfoDTO = {
    /** string (可选) - 用户姓名 */
    realName?: string;

    /** string (可选) - 身份证号 */
    cardNumber?: string;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";

    /** string (可选) - 手机号 */
    phone?: string;

    /** string (可选) - 部门id */
    departmentId?: string;

    /** string (可选) - 备注 */
    remark?: string;

    /** string (可选) - 昵称 */
    nickName?: string;

    /** string (可选) - 头像路径 */
    avatarPicPath?: string;

    /** string (可选) - 角色id集合（多个英文逗号隔开） */
    roleIds?: string;
  };

  /**
   * RoleInfoDTO
   */
  export type RoleInfoDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string - 角色名称 */
    name: string;

    /** string - 角色编码 */
    code: string;

    /** string (可选) - 权限菜单ids（多个英文逗号隔开） */
    permissionIds?: string;
  };

  /**
   * PermissionMenusDTO
   */
  export type PermissionMenusDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string - 名称 */
    name: string;

    /** "{"desc":"菜单","name":"MENU"}" | "{"desc":"功能","name":"FUNCTION"}" | "{"desc":"目录","name":"GROUP"}" - 类型 | 可选值: "{\"desc\":\"菜单\",\"name\":\"MENU\"}", "{\"desc\":\"功能\",\"name\":\"FUNCTION\"}", "{\"desc\":\"目录\",\"name\":\"GROUP\"}" */
    type: "MENU" | "FUNCTION" | "GROUP";

    /** string - 功能编码 */
    code: string;

    /** string - 父级菜单ID */
    parentId: string;

    /** string (可选) - 路由 */
    path?: string;

    /** string (可选) - 扩展字段 */
    extend?: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** string (可选) - 组件 */
    component?: string;

    /** string (可选) - 标题 */
    title?: string;

    /** boolean (可选) - 是否隐藏 */
    isHidden?: boolean;
  };

  /**
   * DictTypeDTO
   */
  export type DictTypeDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string - 字典名称 */
    dictName: string;

    /** string - 字典类型 */
    dictType: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态（启用/停用） | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 备注 */
    remark?: string;
  };

  /**
   * ProjectCategoryDTO
   */
  export type ProjectCategoryDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string (可选) - 父级ID */
    parentId?: string;

    /** string (可选) - 编码 */
    code?: string;

    /** string (可选) - 名称 */
    name?: string;

    /** number (可选) - 排序号 | 格式: int32 */
    sort?: number;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 备注 */
    remark?: string;
  };

  /**
   * UpdateProjectInfoDTO
   */
  export type UpdateProjectInfoDTO = {
    /** string - id */
    id: string;

    /** string - 标题 */
    title: string;

    /** string - 项目编号 */
    code: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** string (可选) - 计划开始时间 | 格式: date-time */
    planStartTime?: string;

    /** string (可选) - 计划结束时间 | 格式: date-time */
    planEndTime?: string;

    /** string (可选) - 实际开始时间 | 格式: date-time */
    actualStartTime?: string;

    /** string (可选) - 实际结束时间 | 格式: date-time */
    actualEndTime?: string;

    /** number - 总金额 */
    total: number;
  };

  /**
   * DictDataDTO
   */
  export type DictDataDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string - 字典类型 */
    dictType: string;

    /** string (可选) - 字典标签 */
    dictLabel?: string;

    /** number (可选) - 字典排序 | 格式: int32 */
    dictSort?: number;

    /** string (可选) - 字典键值 */
    dictValue?: string;

    /** string (可选) - 颜色 */
    color?: string;

    /** string (可选) - 标识 */
    logo?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态（启用/停用） | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 备注 */
    remark?: string;
  };

  /**
   * UpdateStatusDTO
   */
  export type UpdateStatusDTO = {
    /** array - 主键ID列表 */
    ids: string[];

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status: "ENABLE" | "DISABLE";
  };

  /**
   * DepartmentDTO
   */
  export type DepartmentDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string - 上级部门ID（顶级默认-1） */
    parentId: string;

    /** string - 部门编码 */
    code: string;

    /** string - 部门名称 */
    name: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 备注 */
    remark?: string;
  };

  /**
   * FinanceCategoryDTO
   */
  export type FinanceCategoryDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string (可选) - 父级ID */
    parentId?: string;

    /** string (可选) - 编码 */
    code?: string;

    /** string (可选) - 名称 */
    name?: string;

    /** number (可选) - 排序号 | 格式: int32 */
    sort?: number;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 备注 */
    remark?: string;
  };

  /**
   * SystemConfigDTO
   */
  export type SystemConfigDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string - key */
    key: string;

    /** string - value */
    value: string;
  };

  /**
   * UpdateProjectStatusChangeDTO
   */
  export type UpdateProjectStatusChangeDTO = {
    /** string - 主键ID */
    id: string;

    /** string (可选) - 状态实际变更时间 | 格式: date-time */
    changeTime?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;
  };

  /**
   * UpdatePasswordCurrentDTO
   */
  export type UpdatePasswordCurrentDTO = {
    /** string - 旧密码 */
    oldPassword: string;

    /** string - 新密码 */
    newPassword: string;
  };

  /**
   * AddFinanceInfoDTO
   */
  export type AddFinanceInfoDTO = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 标题 */
    title?: string;

    /** string (可选) - 资金批次编码 */
    code?: string;

    /** number (可选) - 资金批次总额 */
    total?: number;

    /** number (可选) - 资金批次年度 | 格式: int32 */
    year?: number;

    /** string (可选) - 资金批次截止时间 | 格式: date-time */
    abortTime?: string;

    /** string (可选) - 资金批次备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;
  };

  /**
   * UpdateProjectLifeCycleDTO
   */
  export type UpdateProjectLifeCycleDTO = {
    /** string - ID */
    id: string;

    /** string - 标题 */
    title: string;

    /** string (可选) - 执行人id */
    runAccountId?: string;

    /** string (可选) - 完成人id */
    completeAccountId?: string;

    /** string (可选) - 计划开始时间 | 格式: date-time */
    planStartTime?: string;

    /** string (可选) - 计划结束时间 | 格式: date-time */
    planEndTime?: string;

    /** string (可选) - 实际开始时间 | 格式: date-time */
    actualStartTime?: string;

    /** string (可选) - 实际结束时间 | 格式: date-time */
    actualEndTime?: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;
  };

  /**
   * UpdatePasswordAdminDTO
   */
  export type UpdatePasswordAdminDTO = {
    /** string - 账号id */
    accountId: string;

    /** string - 用户密码 */
    password: string;
  };

  /**
   * UpdateFinanceAllocationDepartmentDTO
   */
  export type UpdateFinanceAllocationDepartmentDTO = {
    /** string (可选) */
    id?: string;

    /** number (可选) - 资金批次总额 */
    total?: number;

    /** string (可选) - 截止时间 | 格式: date-time */
    abortTime?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;
  };

  /**
   * UpdateProjectLifeCycleStatusDTO
   */
  export type UpdateProjectLifeCycleStatusDTO = {
    /** string - ID */
    id: string;

    /** "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完成","name":"YWC"}" - 状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完成\",\"name\":\"YWC\"}" */
    status: "WKS" | "ZXZ" | "YWC";
  };

  /**
   * ResultRoleInfoDTO
   */
  export type ResultRoleInfoDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.RoleInfoDTO (可选) */
    data?: YusuanModels.RoleInfoDTO;
  };

  /**
   * UpdateFinanceAllocationCategoryDTO
   */
  export type UpdateFinanceAllocationCategoryDTO = {
    /** string (可选) */
    id?: string;

    /** number (可选) - 资金批次总额 */
    total?: number;

    /** string (可选) - 截止时间 | 格式: date-time */
    abortTime?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;
  };

  /**
   * ResultListRoleInfoDTO
   */
  export type ResultListRoleInfoDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.RoleInfoDTO[];
  };

  /**
   * AddUserInfoDTO
   */
  export type AddUserInfoDTO = {
    /** string (可选) - 用户姓名 */
    realName?: string;

    /** string (可选) - 身份证号 */
    cardNumber?: string;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";

    /** string (可选) - 手机号 */
    phone?: string;

    /** string - 部门id */
    departmentId: string;

    /** string (可选) - 备注 */
    remark?: string;

    /** string - 用户名 */
    userName: string;

    /** string - 密码 */
    userPassword: string;

    /** "{"desc":"超级管理员","name":"SUPPER"}" | "{"desc":"普通用户","name":"NOMAL"}" - 用户类型 | 可选值: "{\"desc\":\"超级管理员\",\"name\":\"SUPPER\"}", "{\"desc\":\"普通用户\",\"name\":\"NOMAL\"}" */
    userType: "SUPPER" | "NOMAL";

    /** string (可选) - 昵称 */
    nickName?: string;

    /** string (可选) - 头像路径 */
    avatarPicPath?: string;

    /** string (可选) - 角色id集合（多个英文逗号隔开） */
    roleIds?: string;
  };

  /**
   * ResultPermissionMenusDTO
   */
  export type ResultPermissionMenusDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.PermissionMenusDTO (可选) */
    data?: YusuanModels.PermissionMenusDTO;
  };

  /**
   * ResultUserInfoDTO
   */
  export type ResultUserInfoDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.UserInfoDTO (可选) */
    data?: YusuanModels.UserInfoDTO;
  };

  /**
   * ResultListPermissionMenusDTO
   */
  export type ResultListPermissionMenusDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.PermissionMenusDTO[];
  };

  /**
   * ResultDictTypeDTO
   */
  export type ResultDictTypeDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.DictTypeDTO (可选) */
    data?: YusuanModels.DictTypeDTO;
  };

  /**
   * ResultDictDataDTO
   */
  export type ResultDictDataDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.DictDataDTO (可选) */
    data?: YusuanModels.DictDataDTO;
  };

  /**
   * ResultDepartmentDTO
   */
  export type ResultDepartmentDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.DepartmentDTO (可选) */
    data?: YusuanModels.DepartmentDTO;
  };

  /**
   * ResultSystemConfigDTO
   */
  export type ResultSystemConfigDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.SystemConfigDTO (可选) */
    data?: YusuanModels.SystemConfigDTO;
  };

  /**
   * UserLoginDTO
   */
  export type UserLoginDTO = {
    /** string - 用户名 */
    userName: string;

    /** string - 用户密码 */
    password: string;
  };

  /**
   * ResultProjectCategoryDTO
   */
  export type ResultProjectCategoryDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.ProjectCategoryDTO (可选) */
    data?: YusuanModels.ProjectCategoryDTO;
  };

  /**
   * ResultString
   */
  export type ResultString = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** string (可选) - 返回数据 */
    data?: string;
  };

  /**
   * AddApprovalDTO
   */
  export type AddApprovalDTO = {
    /** string - 主键ID(修改时传入) */
    id: string;

    /** string - 标题 */
    title: string;

    /** "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}" */
    status: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";

    /** string (可选) - 内容 */
    content?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** string - 审批人id集合（英文逗号隔开） */
    approveAccountIds: string;

    /** "{"desc":"且","name":"AND"}" | "{"desc":"或","name":"OR"}" - 审批条件限制 | 可选值: "{\"desc\":\"且\",\"name\":\"AND\"}", "{\"desc\":\"或\",\"name\":\"OR\"}" */
    approveCondition: "AND" | "OR";

    /** string (可选) - 抄送人id集合（英文逗号隔开） */
    copyAccountIds?: string;
  };

  /**
   * AccountInfoPageQuery
   */
  export type AccountInfoPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** "{"desc":"超级管理员","name":"SUPPER"}" | "{"desc":"普通用户","name":"NOMAL"}" (可选) - 用户类型 | 可选值: "{\"desc\":\"超级管理员\",\"name\":\"SUPPER\"}", "{\"desc\":\"普通用户\",\"name\":\"NOMAL\"}" */
    userType?: "SUPPER" | "NOMAL";

    /** boolean (可选) - 是否锁定 */
    isLock?: boolean;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 账号状态(启用,禁用) | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 最后登录开始时间 | 格式: date-time */
    startTime?: string;

    /** string (可选) - 最后登录结束时间 | 格式: date-time */
    endTime?: string;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";

    /** string (可选) - 部门id */
    departmentId?: string;
  };

  /**
   * AddApprovalRecordDTO
   */
  export type AddApprovalRecordDTO = {
    /** string - ID */
    id: string;

    /** string - 审批id */
    approvalId: string;

    /** "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}" */
    status: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";

    /** string (可选) - 审批意见 */
    suggestion?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** boolean - 是否提交 */
    isSubmit: boolean;

    /** string (可选) - 后续审批人id集合（英文逗号隔开） */
    approveAccountIds?: string;

    /** "{"desc":"且","name":"AND"}" | "{"desc":"或","name":"OR"}" (可选) - 后续审批条件限制 | 可选值: "{\"desc\":\"且\",\"name\":\"AND\"}", "{\"desc\":\"或\",\"name\":\"OR\"}" */
    approveCondition?: "AND" | "OR";

    /** string (可选) - 后续知会人id集合（英文逗号隔开） */
    copyAccountIds?: string;
  };

  /**
   * BasePageUserInfoDTO
   * @title 返回数据
   */
  export type BasePageUserInfoDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.UserInfoDTO[];
  };

  /**
   * ResultFinanceCategoryDTO
   */
  export type ResultFinanceCategoryDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.FinanceCategoryDTO (可选) */
    data?: YusuanModels.FinanceCategoryDTO;
  };

  /**
   * ApprovalBackDTO
   */
  export type ApprovalBackDTO = {
    /** string - 审批id */
    approvalId: string;

    /** string (可选) - 审批意见 */
    suggestion?: string;

    /** string (可选) - 附件 */
    files?: string;
  };

  /**
   * ResultBasePageUserInfoDTO
   */
  export type ResultBasePageUserInfoDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageUserInfoDTO (可选) */
    data?: YusuanModels.BasePageUserInfoDTO;
  };

  /**
   * UserInfoDTO
   * @title 返回数据
   */
  export type UserInfoDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string (可选) - 账号id */
    accountId?: string;

    /** string (可选) - 用户姓名 */
    realName?: string;

    /** string (可选) - 身份证号 */
    cardNumber?: string;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";

    /** string (可选) - 手机号 */
    phone?: string;

    /** string (可选) - 部门id */
    departmentId?: string;

    /** string (可选) - 备注 */
    remark?: string;

    /** string (可选) - 用户名 */
    userName?: string;

    /** "{"desc":"超级管理员","name":"SUPPER"}" | "{"desc":"普通用户","name":"NOMAL"}" (可选) - 用户类型 | 可选值: "{\"desc\":\"超级管理员\",\"name\":\"SUPPER\"}", "{\"desc\":\"普通用户\",\"name\":\"NOMAL\"}" */
    userType?: "SUPPER" | "NOMAL";

    /** string (可选) - 昵称 */
    nickName?: string;

    /** string (可选) - 最后登录时间 | 格式: date-time */
    lastLoginTime?: string;

    /** string (可选) - 最后登录ip */
    lastLoginIp?: string;

    /** boolean (可选) - 是否锁定 */
    isLock?: boolean;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 账号状态(启用,禁用) | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** number (可选) - 登录错误次数 | 格式: int32 */
    loginErrorCount?: number;

    /** string (可选) - 登录错误时间 | 格式: date-time */
    loginErrorTime?: string;

    /** string (可选) - 头像路径 */
    avatarPicPath?: string;

    /** string (可选) - 角色id集合（多个英文逗号隔开） */
    roleIds?: string;

    /** string (可选) - 前端勿用 */
    dataScope?: string;
  };

  /**
   * FinanceInfoDTO
   * @title 返回数据
   */
  export type FinanceInfoDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string (可选) - 标题 */
    title?: string;

    /** string (可选) - 资金批次编码 */
    code?: string;

    /** number (可选) - 资金批次总额 */
    total?: number;

    /** number (可选) - 资金批次已使用总额 */
    used?: number;

    /** number (可选) - 资金批次剩余总额 */
    surplus?: number;

    /** number (可选) - 资金批次年度 | 格式: int32 */
    year?: number;

    /** string (可选) - 资金批次截止时间 | 格式: date-time */
    abortTime?: string;

    /** string (可选) - 资金批次备注 */
    remarks?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 附件 */
    files?: string;
  };

  /**
   * SystemMessagePageQuery
   */
  export type SystemMessagePageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string (可选) - 接收人账号id */
    receiveId?: string;

    /** "{"desc":"审批通知","name":"SP"}" | "{"desc":"预算通知","name":"YS"}" | "{"desc":"项目通知","name":"XM"}" | "{"desc":"系统通知","name":"XT"}" (可选) - 类型 | 可选值: "{\"desc\":\"审批通知\",\"name\":\"SP\"}", "{\"desc\":\"预算通知\",\"name\":\"YS\"}", "{\"desc\":\"项目通知\",\"name\":\"XM\"}", "{\"desc\":\"系统通知\",\"name\":\"XT\"}" */
    type?: "SP" | "YS" | "XM" | "XT";

    /** "{"desc":"未读","name":"WD"}" | "{"desc":"已读","name":"YD"}" (可选) - 阅读状态 | 可选值: "{\"desc\":\"未读\",\"name\":\"WD\"}", "{\"desc\":\"已读\",\"name\":\"YD\"}" */
    readStatus?: "WD" | "YD";

    /** string (可选) - 阅读开始时间 | 格式: date-time */
    readStartTime?: string;

    /** string (可选) - 阅读结束时间 | 格式: date-time */
    readEndTime?: string;
  };

  /**
   * ResultFinanceInfoDTO
   */
  export type ResultFinanceInfoDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.FinanceInfoDTO (可选) */
    data?: YusuanModels.FinanceInfoDTO;
  };

  /**
   * BasePageSystemMessageDTO
   * @title 返回数据
   */
  export type BasePageSystemMessageDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.SystemMessageDTO[];
  };

  /**
   * ResultBasePageSystemMessageDTO
   */
  export type ResultBasePageSystemMessageDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageSystemMessageDTO (可选) */
    data?: YusuanModels.BasePageSystemMessageDTO;
  };

  /**
   * AddProjectInfoDTO
   */
  export type AddProjectInfoDTO = {
    /** string - 部门id */
    departmentId: string;

    /** string - 资金批次id */
    financeId: string;

    /** string - 标题 */
    title: string;

    /** string - 项目编号 */
    code: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** string (可选) - 计划开始时间 | 格式: date-time */
    planStartTime?: string;

    /** string (可选) - 计划结束时间 | 格式: date-time */
    planEndTime?: string;

    /** string (可选) - 实际开始时间 | 格式: date-time */
    actualStartTime?: string;

    /** string (可选) - 实际结束时间 | 格式: date-time */
    actualEndTime?: string;

    /** number - 总金额 */
    total: number;

    /** string - 父级id(顶级默认-1) */
    parentId: string;

    /** string - 项目类目id */
    categoryId: string;

    /** string - 分配资金类目id（从哪笔分配记录上面扣） */
    allocationCategoryId: string;
  };

  /**
   * SystemMessageDTO
   */
  export type SystemMessageDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string (可选) - 接收人账号id */
    receiveId?: string;

    /** string (可选) - 标题 */
    title?: string;

    /** string (可选) - 内容 */
    content?: string;

    /** string (可选) - 扩展内容 */
    extend?: string;

    /** "{"desc":"审批通知","name":"SP"}" | "{"desc":"预算通知","name":"YS"}" | "{"desc":"项目通知","name":"XM"}" | "{"desc":"系统通知","name":"XT"}" (可选) - 类型 | 可选值: "{\"desc\":\"审批通知\",\"name\":\"SP\"}", "{\"desc\":\"预算通知\",\"name\":\"YS\"}", "{\"desc\":\"项目通知\",\"name\":\"XM\"}", "{\"desc\":\"系统通知\",\"name\":\"XT\"}" */
    type?: "SP" | "YS" | "XM" | "XT";

    /** "{"desc":"未读","name":"WD"}" | "{"desc":"已读","name":"YD"}" (可选) - 阅读状态 | 可选值: "{\"desc\":\"未读\",\"name\":\"WD\"}", "{\"desc\":\"已读\",\"name\":\"YD\"}" */
    readStatus?: "WD" | "YD";

    /** string (可选) - 阅读时间 | 格式: date-time */
    readTime?: string;
  };

  /**
   * AddFinanceAllocationDepartmentDTO
   */
  export type AddFinanceAllocationDepartmentDTO = {
    /** number (可选) - 资金总额 */
    total?: number;

    /** string (可选) - 截止时间 | 格式: date-time */
    abortTime?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** string (可选) - 资金id */
    financeId?: string;

    /** string (可选) - 部门id */
    departmentId?: string;
  };

  /**
   * ProjectInfoDTO
   * @title 返回数据
   */
  export type ProjectInfoDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string (可选) - 创建人id */
    creator?: string;

    /** string (可选) - 部门id */
    departmentId?: string;

    /** string (可选) - 资金批次id */
    financeId?: string;

    /** string (可选) - 标题 */
    title?: string;

    /** string (可选) - 项目编号 */
    code?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完结","name":"YWJ"}" | "{"desc":"已取消","name":"YQX"}" (可选) - 项目状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完结\",\"name\":\"YWJ\"}", "{\"desc\":\"已取消\",\"name\":\"YQX\"}" */
    status?: "WKS" | "ZXZ" | "YWJ" | "YQX";

    /** string (可选) - 附件 */
    files?: string;

    /** string (可选) - 计划开始时间 | 格式: date-time */
    planStartTime?: string;

    /** string (可选) - 计划结束时间 | 格式: date-time */
    planEndTime?: string;

    /** string (可选) - 实际开始时间 | 格式: date-time */
    actualStartTime?: string;

    /** string (可选) - 实际结束时间 | 格式: date-time */
    actualEndTime?: string;

    /** number (可选) - 总金额 */
    total?: number;

    /** number (可选) - 已用金额 */
    used?: number;

    /** number (可选) - 剩余金额 */
    surplus?: number;

    /** string (可选) - 父级id */
    parentId?: string;

    /** string (可选) - 状态变为执行中时间（自动记录） | 格式: date-time */
    runStartTime?: string;

    /** string (可选) - 状态变为完结时间（自动记录） | 格式: date-time */
    runEndTime?: string;

    /** number (可选) - 项目进度 */
    progress?: number;

    /** string (可选) - 项目类目id */
    categoryId?: string;

    /** string (可选) - 分配资金类目id（从哪笔分配记录上面扣） */
    allocationCategoryId?: string;
  };

  /**
   * ResultListUserInfoDTO
   */
  export type ResultListUserInfoDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.UserInfoDTO[];
  };

  /**
   * BasePageQuery
   */
  export type BasePageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;
  };

  /**
   * ResultProjectInfoDTO
   */
  export type ResultProjectInfoDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.ProjectInfoDTO (可选) */
    data?: YusuanModels.ProjectInfoDTO;
  };

  /**
   * BasePageRoleInfoDTO
   * @title 返回数据
   */
  export type BasePageRoleInfoDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.RoleInfoDTO[];
  };

  /**
   * AddFinanceAllocationCategoryDTO
   */
  export type AddFinanceAllocationCategoryDTO = {
    /** number (可选) - 资金总额 */
    total?: number;

    /** string (可选) - 截止时间 | 格式: date-time */
    abortTime?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** string (可选) - 资金类目id */
    financeCategoryId?: string;

    /** string (可选) - 资金分配部门id */
    allocationDepartmentId?: string;
  };

  /**
   * ResultBasePageRoleInfoDTO
   */
  export type ResultBasePageRoleInfoDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageRoleInfoDTO (可选) */
    data?: YusuanModels.BasePageRoleInfoDTO;
  };

  /**
   * FinanceAllocationCategoryDTO
   * @title 返回数据
   */
  export type FinanceAllocationCategoryDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string (可选) - 资金批次ID */
    financeId?: string;

    /** string (可选) - 部门ID */
    departmentId?: string;

    /** string (可选) - 资金类目ID */
    financeCategoryId?: string;

    /** string (可选) - 资金分配部门关联ID */
    allocationDepartmentId?: string;

    /** number (可选) - 分配资金总额 */
    total?: number;

    /** number (可选) - 已使用资金总额 */
    used?: number;

    /** number (可选) - 剩余资金总额 */
    surplus?: number;

    /** string (可选) - 使用截止时间 | 格式: date-time */
    abortTime?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 附件 */
    files?: string;

    /** string (可选) - 备注 */
    remarks?: string;
  };

  /**
   * AddProjectStatusChangeDTO
   */
  export type AddProjectStatusChangeDTO = {
    /** string - 项目ID */
    projectId: string;

    /** "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完结","name":"YWJ"}" | "{"desc":"已取消","name":"YQX"}" - 变更状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完结\",\"name\":\"YWJ\"}", "{\"desc\":\"已取消\",\"name\":\"YQX\"}" */
    status: "WKS" | "ZXZ" | "YWJ" | "YQX";

    /** string (可选) - 状态实际变更时间 | 格式: date-time */
    changeTime?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;
  };

  /**
   * BasePagePermissionMenusDTO
   * @title 返回数据
   */
  export type BasePagePermissionMenusDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.PermissionMenusDTO[];
  };

  /**
   * ResultFinanceAllocationCategoryDTO
   */
  export type ResultFinanceAllocationCategoryDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.FinanceAllocationCategoryDTO (可选) */
    data?: YusuanModels.FinanceAllocationCategoryDTO;
  };

  /**
   * ProjectStatusChangeDTO
   * @title 返回数据
   */
  export type ProjectStatusChangeDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string (可选) - 创建人ID */
    creator?: string;

    /** string (可选) - 部门ID */
    departmentId?: string;

    /** string (可选) - 项目ID */
    projectId?: string;

    /** "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完结","name":"YWJ"}" | "{"desc":"已取消","name":"YQX"}" (可选) - 变更前状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完结\",\"name\":\"YWJ\"}", "{\"desc\":\"已取消\",\"name\":\"YQX\"}" */
    oldStatus?: "WKS" | "ZXZ" | "YWJ" | "YQX";

    /** "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完结","name":"YWJ"}" | "{"desc":"已取消","name":"YQX"}" (可选) - 变更后状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完结\",\"name\":\"YWJ\"}", "{\"desc\":\"已取消\",\"name\":\"YQX\"}" */
    newStatus?: "WKS" | "ZXZ" | "YWJ" | "YQX";

    /** string (可选) - 状态实际变更时间 | 格式: date-time */
    changeTime?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;
  };

  /**
   * ResultBasePagePermissionMenusDTO
   */
  export type ResultBasePagePermissionMenusDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePagePermissionMenusDTO (可选) */
    data?: YusuanModels.BasePagePermissionMenusDTO;
  };

  /**
   * AddAllocationProjectCategoryDTO
   */
  export type AddAllocationProjectCategoryDTO = {
    /** string - 项目类目id */
    projectCategoryId: string;
  };

  /**
   * ResultProjectStatusChangeDTO
   */
  export type ResultProjectStatusChangeDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.ProjectStatusChangeDTO (可选) */
    data?: YusuanModels.ProjectStatusChangeDTO;
  };

  /**
   * Result
   */
  export type Result = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** object (可选) - 返回数据 */
    data?: Record<string, any>;
  };

  /**
   * AddProjectLifeCycleDTO
   */
  export type AddProjectLifeCycleDTO = {
    /** string - 标题 */
    title: string;

    /** string - 父级ID(顶级默认-1) */
    parentId: string;

    /** string - 项目ID */
    projectId: string;

    /** string (可选) - 执行人id */
    runAccountId?: string;

    /** string (可选) - 完成人id */
    completeAccountId?: string;

    /** string (可选) - 计划开始时间 | 格式: date-time */
    planStartTime?: string;

    /** string (可选) - 计划结束时间 | 格式: date-time */
    planEndTime?: string;

    /** string (可选) - 实际开始时间 | 格式: date-time */
    actualStartTime?: string;

    /** string (可选) - 实际结束时间 | 格式: date-time */
    actualEndTime?: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;
  };

  /**
   * DictTypePageQuery
   */
  export type DictTypePageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态（启用/停用） | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";
  };

  /**
   * ProjectLifeCycleDTO
   * @title 返回数据
   */
  export type ProjectLifeCycleDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string (可选) - 标题 */
    title?: string;

    /** string (可选) - 创建人ID */
    creator?: string;

    /** string (可选) - 部门ID */
    departmentId?: string;

    /** string (可选) - 父级ID */
    parentId?: string;

    /** string (可选) - 项目ID */
    projectId?: string;

    /** string (可选) - 执行人id */
    runAccountId?: string;

    /** string (可选) - 完成人id */
    completeAccountId?: string;

    /** string (可选) - 计划开始时间 | 格式: date-time */
    planStartTime?: string;

    /** string (可选) - 计划结束时间 | 格式: date-time */
    planEndTime?: string;

    /** string (可选) - 实际开始时间 | 格式: date-time */
    actualStartTime?: string;

    /** string (可选) - 实际结束时间 | 格式: date-time */
    actualEndTime?: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完成","name":"YWC"}" (可选) - 状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完成\",\"name\":\"YWC\"}" */
    status?: "WKS" | "ZXZ" | "YWC";
  };

  /**
   * ResultListProjectCategoryDTO
   */
  export type ResultListProjectCategoryDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.ProjectCategoryDTO[];
  };

  /**
   * BasePageDictTypeDTO
   * @title 返回数据
   */
  export type BasePageDictTypeDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.DictTypeDTO[];
  };

  /**
   * ResultProjectLifeCycleDTO
   */
  export type ResultProjectLifeCycleDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.ProjectLifeCycleDTO (可选) */
    data?: YusuanModels.ProjectLifeCycleDTO;
  };

  /**
   * ResultBasePageDictTypeDTO
   */
  export type ResultBasePageDictTypeDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageDictTypeDTO (可选) */
    data?: YusuanModels.BasePageDictTypeDTO;
  };

  /**
   * DictDataPageQuery
   */
  export type DictDataPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";
  };

  /**
   * BasePageDictDataDTO
   * @title 返回数据
   */
  export type BasePageDictDataDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.DictDataDTO[];
  };

  /**
   * ResultListProjectStatusChangeDTO
   */
  export type ResultListProjectStatusChangeDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.ProjectStatusChangeDTO[];
  };

  /**
   * ResultBasePageDictDataDTO
   */
  export type ResultBasePageDictDataDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageDictDataDTO (可选) */
    data?: YusuanModels.BasePageDictDataDTO;
  };

  /**
   * BasePageProjectCategoryDTO
   * @title 返回数据
   */
  export type BasePageProjectCategoryDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.ProjectCategoryDTO[];
  };

  /**
   * ResultListProjectInfoDTO
   */
  export type ResultListProjectInfoDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.ProjectInfoDTO[];
  };

  /**
   * DepartmentPageQuery
   */
  export type DepartmentPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string (可选) - 上级部门ID */
    parentId?: string;
  };

  /**
   * ResultBasePageProjectCategoryDTO
   */
  export type ResultBasePageProjectCategoryDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageProjectCategoryDTO (可选) */
    data?: YusuanModels.BasePageProjectCategoryDTO;
  };

  /**
   * BasePageDepartmentDTO
   * @title 返回数据
   */
  export type BasePageDepartmentDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.DepartmentDTO[];
  };

  /**
   * ResultBasePageDepartmentDTO
   */
  export type ResultBasePageDepartmentDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageDepartmentDTO (可选) */
    data?: YusuanModels.BasePageDepartmentDTO;
  };

  /**
   * ResultListProjectLifeCycleDTO
   */
  export type ResultListProjectLifeCycleDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.ProjectLifeCycleDTO[];
  };

  /**
   * LogInfoPageQuery
   */
  export type LogInfoPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** number (可选) - 类型 1：操作日志2：异常日志3：登录日志 | 格式: int32 */
    typeId?: number;
  };

  /**
   * BasePageLogInfoDTO
   * @title 返回数据
   */
  export type BasePageLogInfoDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.LogInfoDTO[];
  };

  /**
   * LogInfoDTO
   */
  export type LogInfoDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** number (可选) - 类型 1：操作日志2：异常日志3：登录日志 | 格式: int32 */
    typeId?: number;

    /** string (可选) - 日志内容 */
    message?: string;

    /** string (可选) - 堆栈信息 */
    stackInfo?: string;

    /** string (可选) - 请求地址 */
    url?: string;

    /** string (可选) - IP地址 */
    ipAddress?: string;
  };

  /**
   * ResultBasePageLogInfoDTO
   */
  export type ResultBasePageLogInfoDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageLogInfoDTO (可选) */
    data?: YusuanModels.BasePageLogInfoDTO;
  };

  /**
   * BasePageFinanceCategoryDTO
   * @title 返回数据
   */
  export type BasePageFinanceCategoryDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.FinanceCategoryDTO[];
  };

  /**
   * ResultBasePageFinanceCategoryDTO
   */
  export type ResultBasePageFinanceCategoryDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageFinanceCategoryDTO (可选) */
    data?: YusuanModels.BasePageFinanceCategoryDTO;
  };

  /**
   * ResultListFinanceCategoryDTO
   */
  export type ResultListFinanceCategoryDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.FinanceCategoryDTO[];
  };

  /**
   * ResultListFinanceInfoDTO
   */
  export type ResultListFinanceInfoDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.FinanceInfoDTO[];
  };

  /**
   * ResultListFinanceAllocationDepartmentDTO
   */
  export type ResultListFinanceAllocationDepartmentDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.FinanceAllocationDepartmentDTO[];
  };

  /**
   * FinanceInfoPageQuery
   */
  export type FinanceInfoPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** number (可选) - 资金批次最小总额 | 格式: int64 */
    minTotal?: number;

    /** number (可选) - 资金批次最大总额 | 格式: int64 */
    maxTotal?: number;

    /** number (可选) - 资金批次已使用最小总额 | 格式: int64 */
    minUsed?: number;

    /** number (可选) - 资金批次已使用最大总额 | 格式: int64 */
    maxUsed?: number;

    /** number (可选) - 资金批次剩余最小总额 | 格式: int64 */
    minSurplus?: number;

    /** number (可选) - 资金批次剩余最大总额 | 格式: int64 */
    maxSurplus?: number;

    /** number (可选) - 资金批次最小年度 | 格式: int32 */
    minYear?: number;

    /** number (可选) - 资金批次最大年度 | 格式: int32 */
    maxYear?: number;

    /** string (可选) - 资金批次截止时间（开始） | 格式: date-time */
    startAbortTime?: string;

    /** string (可选) - 资金批次截止时间（结束） | 格式: date-time */
    endAbortTime?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";
  };

  /**
   * ApprovalDTO
   * @title 返回数据
   */
  export type ApprovalDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** "{"desc":"常规审批","name":"CG"}" (可选) - 单子类型 | 可选值: "{\"desc\":\"常规审批\",\"name\":\"CG\"}" */
    type?: "CG";

    /** string (可选) - 标题 */
    title?: string;

    /** "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" (可选) - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}" */
    status?: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";

    /** string (可选) - 创建人 */
    creator?: string;

    /** string (可选) - 部门id */
    departmentId?: string;

    /** string (可选) - 内容 */
    content?: string;

    /** string (可选) - 备注 */
    remarks?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** string (可选) - 审批人id集合（英文逗号隔开） */
    approveAccountIds?: string;

    /** "{"desc":"且","name":"AND"}" | "{"desc":"或","name":"OR"}" (可选) - 审批条件限制 | 可选值: "{\"desc\":\"且\",\"name\":\"AND\"}", "{\"desc\":\"或\",\"name\":\"OR\"}" */
    approveCondition?: "AND" | "OR";

    /** number (可选) - 审批阶段 | 格式: int32 */
    lot?: number;

    /** string (可选) - 抄送人id集合（英文逗号隔开） */
    copyAccountIds?: string;
  };

  /**
   * BasePageFinanceInfoDTO
   * @title 返回数据
   */
  export type BasePageFinanceInfoDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.FinanceInfoDTO[];
  };

  /**
   * ResultApprovalDTO
   */
  export type ResultApprovalDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.ApprovalDTO (可选) */
    data?: YusuanModels.ApprovalDTO;
  };

  /**
   * ResultBasePageFinanceInfoDTO
   */
  export type ResultBasePageFinanceInfoDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageFinanceInfoDTO (可选) */
    data?: YusuanModels.BasePageFinanceInfoDTO;
  };

  /**
   * FinanceAllocationDepartmentPageQuery
   */
  export type FinanceAllocationDepartmentPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** number (可选) - 资金批次最小总额 | 格式: int64 */
    minTotal?: number;

    /** number (可选) - 资金批次最大总额 | 格式: int64 */
    maxTotal?: number;

    /** number (可选) - 资金批次已使用最小总额 | 格式: int64 */
    minUsed?: number;

    /** number (可选) - 资金批次已使用最大总额 | 格式: int64 */
    maxUsed?: number;

    /** number (可选) - 资金批次剩余最小总额 | 格式: int64 */
    minSurplus?: number;

    /** number (可选) - 资金批次剩余最大总额 | 格式: int64 */
    maxSurplus?: number;

    /** string (可选) - 资金批次id */
    financeId?: string;

    /** string (可选) - 部门id */
    departmentId?: string;

    /** string (可选) - 资金批次截止时间（开始） | 格式: date-time */
    startAbortTime?: string;

    /** string (可选) - 资金批次截止时间（结束） | 格式: date-time */
    endAbortTime?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** number (可选) - 资金批次年度 | 格式: int32 */
    financeYear?: number;
  };

  /**
   * ResultListFinanceAllocationCategoryDTO
   */
  export type ResultListFinanceAllocationCategoryDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.FinanceAllocationCategoryDTO[];
  };

  /**
   * BasePageFinanceAllocationDepartmentDTO
   * @title 返回数据
   */
  export type BasePageFinanceAllocationDepartmentDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.FinanceAllocationDepartmentDTO[];
  };

  /**
   * FinanceAllocationDepartmentDTO
   * @title 返回数据
   */
  export type FinanceAllocationDepartmentDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string (可选) - 资金批次ID */
    financeId?: string;

    /** string (可选) - 部门ID */
    departmentId?: string;

    /** number (可选) - 资金分配总额 */
    total?: number;

    /** number (可选) - 已使用资金总额 */
    used?: number;

    /** number (可选) - 剩余资金总额 */
    surplus?: number;

    /** string (可选) - 使用截止时间 | 格式: date-time */
    abortTime?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 附件 */
    files?: string;

    /** string (可选) - 备注 */
    remarks?: string;
  };

  /**
   * IMLinkDTO
   * @title 返回数据
   */
  export type IMLinkDTO = {
    /** string (可选) */
    appId?: string;

    /** string (可选) */
    data?: string;

    /** string (可选) */
    key?: string;

    /** string (可选) */
    nonceStr?: string;

    /** string (可选) */
    sign?: string;

    /** string (可选) */
    timestamp?: string;

    /** string (可选) */
    appUserId?: string;
  };

  /**
   * ResultBasePageFinanceAllocationDepartmentDTO
   */
  export type ResultBasePageFinanceAllocationDepartmentDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageFinanceAllocationDepartmentDTO (可选) */
    data?: YusuanModels.BasePageFinanceAllocationDepartmentDTO;
  };

  /**
   * ResultIMLinkDTO
   */
  export type ResultIMLinkDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.IMLinkDTO (可选) */
    data?: YusuanModels.IMLinkDTO;
  };

  /**
   * ResultListDepartmentDTO
   */
  export type ResultListDepartmentDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.DepartmentDTO[];
  };

  /**
   * ProjectStatusPageQuery
   */
  export type ProjectStatusPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string (可选) - 项目ID */
    projectId?: string;

    /** "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完结","name":"YWJ"}" | "{"desc":"已取消","name":"YQX"}" (可选) - 变更前状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完结\",\"name\":\"YWJ\"}", "{\"desc\":\"已取消\",\"name\":\"YQX\"}" */
    oldStatus?: "WKS" | "ZXZ" | "YWJ" | "YQX";

    /** "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完结","name":"YWJ"}" | "{"desc":"已取消","name":"YQX"}" (可选) - 变更后状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完结\",\"name\":\"YWJ\"}", "{\"desc\":\"已取消\",\"name\":\"YQX\"}" */
    newStatus?: "WKS" | "ZXZ" | "YWJ" | "YQX";

    /** string (可选) - 状态实际变更时间 | 格式: date-time */
    startChangeTime?: string;

    /** string (可选) - 状态实际变更时间 | 格式: date-time */
    endChangeTime?: string;
  };

  /**
   * AllocationProjectCategoryPageQuery
   */
  export type AllocationProjectCategoryPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string - 分配资金类目的关联id */
    allocationCategoryId: string;

    /** string (可选) - 项目类目id */
    projectCategoryId?: string;
  };

  /**
   * BasePageProjectStatusChangeDTO
   * @title 返回数据
   */
  export type BasePageProjectStatusChangeDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.ProjectStatusChangeDTO[];
  };

  /**
   * AllocationProjectCategoryDTO
   */
  export type AllocationProjectCategoryDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string - 分配资金类目的关联id */
    allocationCategoryId: string;

    /** string - 项目类目id */
    projectCategoryId: string;
  };

  /**
   * ResultBasePageProjectStatusChangeDTO
   */
  export type ResultBasePageProjectStatusChangeDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageProjectStatusChangeDTO (可选) */
    data?: YusuanModels.BasePageProjectStatusChangeDTO;
  };

  /**
   * ResultListApprovalRecordDTO
   */
  export type ResultListApprovalRecordDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.ApprovalRecordDTO[];
  };

  /**
   * BasePageAllocationProjectCategoryDTO
   * @title 返回数据
   */
  export type BasePageAllocationProjectCategoryDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.AllocationProjectCategoryDTO[];
  };

  /**
   * ProjectPageQuery
   */
  export type ProjectPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string (可选) - 父级项目ID */
    parentId?: string;

    /** string (可选) - 创建人id */
    creator?: string;

    /** string (可选) - 部门id */
    departmentId?: string;

    /** string (可选) - 资金批次id */
    financeId?: string;

    /** "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完结","name":"YWJ"}" | "{"desc":"已取消","name":"YQX"}" (可选) - 项目状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完结\",\"name\":\"YWJ\"}", "{\"desc\":\"已取消\",\"name\":\"YQX\"}" */
    status?: "WKS" | "ZXZ" | "YWJ" | "YQX";

    /** number (可选) - 总金额大于 */
    minTotal?: number;

    /** number (可选) - 总金额小于 */
    maxTotal?: number;

    /** number (可选) - 资金批次已使用最小总额 | 格式: int64 */
    minUsed?: number;

    /** number (可选) - 资金批次已使用最大总额 | 格式: int64 */
    maxUsed?: number;

    /** number (可选) - 资金批次剩余最小总额 | 格式: int64 */
    minSurplus?: number;

    /** number (可选) - 资金批次剩余最大总额 | 格式: int64 */
    maxSurplus?: number;

    /** number (可选) - 项目进度大于 */
    minProgress?: number;

    /** number (可选) - 项目进度小于 */
    maxProgress?: number;

    /** string (可选) - 项目类目id */
    categoryId?: string;

    /** string (可选) - 创建开始时间 | 格式: date-time */
    startCreateTime?: string;

    /** string (可选) - 创建结束时间 | 格式: date-time */
    endCreateTime?: string;
  };

  /**
   * ResultListApprovalDTO
   */
  export type ResultListApprovalDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** array (可选) - 返回数据 */
    data?: YusuanModels.ApprovalDTO[];
  };

  /**
   * ResultBasePageAllocationProjectCategoryDTO
   */
  export type ResultBasePageAllocationProjectCategoryDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageAllocationProjectCategoryDTO (可选) */
    data?: YusuanModels.BasePageAllocationProjectCategoryDTO;
  };

  /**
   * BasePageProjectInfoDTO
   * @title 返回数据
   */
  export type BasePageProjectInfoDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.ProjectInfoDTO[];
  };

  /**
   * ApprovalHistoryPageQuery
   */
  export type ApprovalHistoryPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string (可选) */
    approveAccountId?: string;

    /** "{"desc":"且","name":"AND"}" | "{"desc":"或","name":"OR"}" (可选) - 可选值: "{\"desc\":\"且\",\"name\":\"AND\"}", "{\"desc\":\"或\",\"name\":\"OR\"}" */
    approveCondition?: "AND" | "OR";

    /** number (可选) - 格式: int32 */
    lot?: number;

    /** string (可选) */
    copyAccountId?: string;

    /** array (可选) */
    approvalIds?: string[];
  };

  /**
   * FinanceAllocationCategoryPageQuery
   */
  export type FinanceAllocationCategoryPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** number (可选) - 资金批次最小总额 | 格式: int64 */
    minTotal?: number;

    /** number (可选) - 资金批次最大总额 | 格式: int64 */
    maxTotal?: number;

    /** number (可选) - 资金批次已使用最小总额 | 格式: int64 */
    minUsed?: number;

    /** number (可选) - 资金批次已使用最大总额 | 格式: int64 */
    maxUsed?: number;

    /** number (可选) - 资金批次剩余最小总额 | 格式: int64 */
    minSurplus?: number;

    /** number (可选) - 资金批次剩余最大总额 | 格式: int64 */
    maxSurplus?: number;

    /** string (可选) - 资金批次id */
    financeId?: string;

    /** string (可选) - 部门id */
    departmentId?: string;

    /** string (可选) - 资金类目id */
    financeCategoryId?: string;

    /** string (可选) - 资金分配部门id */
    allocationDepartmentId?: string;

    /** string (可选) - 资金批次截止时间（开始） | 格式: date-time */
    startAbortTime?: string;

    /** string (可选) - 资金批次截止时间（结束） | 格式: date-time */
    endAbortTime?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** number (可选) - 资金批次年度 | 格式: int32 */
    financeYear?: number;
  };

  /**
   * ResultBasePageProjectInfoDTO
   */
  export type ResultBasePageProjectInfoDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageProjectInfoDTO (可选) */
    data?: YusuanModels.BasePageProjectInfoDTO;
  };

  /**
   * ApprovalHistoryDTO
   */
  export type ApprovalHistoryDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string (可选) */
    approveAccountIds?: string;

    /** "{"desc":"且","name":"AND"}" | "{"desc":"或","name":"OR"}" (可选) - 可选值: "{\"desc\":\"且\",\"name\":\"AND\"}", "{\"desc\":\"或\",\"name\":\"OR\"}" */
    approveCondition?: "AND" | "OR";

    /** number (可选) - 格式: int32 */
    lot?: number;

    /** string (可选) */
    copyAccountIds?: string;

    /** string (可选) */
    approvalId?: string;
  };

  /**
   * BasePageFinanceAllocationCategoryDTO
   * @title 返回数据
   */
  export type BasePageFinanceAllocationCategoryDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.FinanceAllocationCategoryDTO[];
  };

  /**
   * ProjectLifeCyclePageQuery
   */
  export type ProjectLifeCyclePageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string (可选) - 创建人ID */
    creator?: string;

    /** string (可选) - 部门ID */
    departmentId?: string;

    /** string (可选) - 父级ID */
    parentId?: string;

    /** string (可选) - 项目ID */
    projectId?: string;

    /** string (可选) - 执行人id */
    runAccountId?: string;

    /** string (可选) - 完成人id */
    completeAccountId?: string;

    /** "{"desc":"未开始","name":"WKS"}" | "{"desc":"执行中","name":"ZXZ"}" | "{"desc":"已完成","name":"YWC"}" (可选) - 状态 | 可选值: "{\"desc\":\"未开始\",\"name\":\"WKS\"}", "{\"desc\":\"执行中\",\"name\":\"ZXZ\"}", "{\"desc\":\"已完成\",\"name\":\"YWC\"}" */
    status?: "WKS" | "ZXZ" | "YWC";

    /** string (可选) - 创建开始时间 | 格式: date-time */
    startCreateTime?: string;

    /** string (可选) - 创建结束时间 | 格式: date-time */
    endCreateTime?: string;
  };

  /**
   * BasePageApprovalHistoryDTO
   * @title 返回数据
   */
  export type BasePageApprovalHistoryDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.ApprovalHistoryDTO[];
  };

  /**
   * ResultBasePageFinanceAllocationCategoryDTO
   */
  export type ResultBasePageFinanceAllocationCategoryDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageFinanceAllocationCategoryDTO (可选) */
    data?: YusuanModels.BasePageFinanceAllocationCategoryDTO;
  };

  /**
   * BasePageProjectLifeCycleDTO
   * @title 返回数据
   */
  export type BasePageProjectLifeCycleDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.ProjectLifeCycleDTO[];
  };

  /**
   * ResultBasePageApprovalHistoryDTO
   */
  export type ResultBasePageApprovalHistoryDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageApprovalHistoryDTO (可选) */
    data?: YusuanModels.BasePageApprovalHistoryDTO;
  };

  /**
   * ResultBasePageProjectLifeCycleDTO
   */
  export type ResultBasePageProjectLifeCycleDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageProjectLifeCycleDTO (可选) */
    data?: YusuanModels.BasePageProjectLifeCycleDTO;
  };

  /**
   * ApprovalRecordPageQuery
   */
  export type ApprovalRecordPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string (可选) - 审批id */
    approvalId?: string;

    /** string (可选) - 审批人id */
    approvalAccountId?: string;

    /** "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" (可选) - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}" */
    status?: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";

    /** number (可选) - 审批阶段 | 格式: int32 */
    lot?: number;

    /** boolean (可选) - 是否提交 */
    isSubmit?: boolean;

    /** string (可选) - 创建开始时间 | 格式: date-time */
    startCreateTime?: string;

    /** string (可选) - 创建结束时间 | 格式: date-time */
    endCreateTime?: string;

    /** string (可选) - 提交开始时间 | 格式: date-time */
    startSubmitTime?: string;

    /** string (可选) - 提交结束时间 | 格式: date-time */
    endSubmitTime?: string;
  };

  /**
   * ApprovalRecordDTO
   * @title 返回数据
   */
  export type ApprovalRecordDTO = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string (可选) - 审批单id */
    approvalId?: string;

    /** string (可选) - 审批人id */
    approvalAccountId?: string;

    /** "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" (可选) - 审批状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}" */
    status?: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";

    /** number (可选) - 审批阶段 | 格式: int32 */
    lot?: number;

    /** string (可选) - 审批意见 */
    suggestion?: string;

    /** string (可选) - 附件 */
    files?: string;

    /** boolean (可选) - 是否有效 */
    isValid?: boolean;

    /** boolean (可选) - 是否提交 */
    isSubmit?: boolean;

    /** string (可选) - 提交时间 | 格式: date-time */
    submitTime?: string;
  };

  /**
   * BasePageApprovalRecordDTO
   * @title 返回数据
   */
  export type BasePageApprovalRecordDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.ApprovalRecordDTO[];
  };

  /**
   * ResultBasePageApprovalRecordDTO
   */
  export type ResultBasePageApprovalRecordDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageApprovalRecordDTO (可选) */
    data?: YusuanModels.BasePageApprovalRecordDTO;
  };

  /**
   * ApprovalPageQuery
   */
  export type ApprovalPageQuery = {
    /** number - 页码 | 最小值: >=1 | 格式: int32 */
    page: number;

    /** number (可选) - 页大小 | 最大值: <=10000 | 格式: int32 */
    size?: number;

    /** string (可选) - 搜索关键字 */
    keyword?: string;

    /** string (可选) - 创建人ID */
    creator?: string;

    /** string (可选) - 部门ID */
    departmentId?: string;

    /** "{"desc":"草稿","name":"CG"}" | "{"desc":"待审批","name":"DSP"}" | "{"desc":"审核通过","name":"SHTG"}" | "{"desc":"审核不通过","name":"SHBTG"}" | "{"desc":"退回","name":"TH"}" (可选) - 状态 | 可选值: "{\"desc\":\"草稿\",\"name\":\"CG\"}", "{\"desc\":\"待审批\",\"name\":\"DSP\"}", "{\"desc\":\"审核通过\",\"name\":\"SHTG\"}", "{\"desc\":\"审核不通过\",\"name\":\"SHBTG\"}", "{\"desc\":\"退回\",\"name\":\"TH\"}" */
    status?: "CG" | "DSP" | "SHTG" | "SHBTG" | "TH";

    /** string (可选) - 创建开始时间 | 格式: date-time */
    startCreateTime?: string;

    /** string (可选) - 创建结束时间 | 格式: date-time */
    endCreateTime?: string;

    /** string (可选) - 当前审批人ID */
    approveAccountId?: string;

    /** string (可选) - 当前抄送人id */
    copyAccountId?: string;
  };

  /**
   * BasePageApprovalDTO
   * @title 返回数据
   */
  export type BasePageApprovalDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: YusuanModels.ApprovalDTO[];
  };

  /**
   * ResultBasePageApprovalDTO
   */
  export type ResultBasePageApprovalDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.BasePageApprovalDTO (可选) */
    data?: YusuanModels.BasePageApprovalDTO;
  };

  /**
   * ResultApprovalHistoryDTO
   */
  export type ResultApprovalHistoryDTO = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.ApprovalHistoryDTO (可选) */
    data?: YusuanModels.ApprovalHistoryDTO;
  };
}
