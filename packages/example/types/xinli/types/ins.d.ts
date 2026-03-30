import { XinliModels } from "./models";
export namespace InsModels {
  /**
   * @url /ins/api/v1/userInfo/item
   * @summary 修改用户
   * @description
   */
  export type InsPutApiV1UserInfoItemQuery = Record<string, any>;
  export type InsPutApiV1UserInfoItemParams = Record<string, any>;
  export type InsPutApiV1UserInfoItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 账号ids */
    accountIds?: string;

    /** string (可选) - 微信id */
    openId?: string;

    /** string (可选) - 名称 */
    name?: string;

    /** string (可选) - 昵称 */
    nickName?: string;

    /** number (可选) - 年龄 | 格式: int32 */
    age?: number;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";

    /** string (可选) - 电话 */
    phone?: string;

    /** string (可选) - 密码 */
    password?: string;

    /** string (可选) - 头像 */
    avatarPicPath?: string;

    /** string (可选) - 身份证 */
    idNumber?: string;
  };
  export type InsPutApiV1UserInfoItemHeader = Record<string, any>;
  export type InsPutApiV1UserInfoItemCookie = Record<string, any>;
  export type InsPutApiV1UserInfoItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1UserInfoItemGeneric = {
    query: InsPutApiV1UserInfoItemQuery;
    params: InsPutApiV1UserInfoItemParams;
    data: InsPutApiV1UserInfoItemBody;
    header: InsPutApiV1UserInfoItemHeader;
    cookie: InsPutApiV1UserInfoItemCookie;
    result: InsPutApiV1UserInfoItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/userInfo/item
   * @summary 新增用户
   * @description
   */
  export type InsPostApiV1UserInfoItemQuery = Record<string, any>;
  export type InsPostApiV1UserInfoItemParams = Record<string, any>;
  export type InsPostApiV1UserInfoItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 账号id */
    accountIds?: string;

    /** string (可选) - 微信id */
    openId?: string;

    /** string - 姓名 */
    name: string;

    /** string (可选) - 昵称 */
    nickName?: string;

    /** number (可选) - 年龄 | 格式: int32 */
    age?: number;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";

    /** string - 电话 */
    phone: string;

    /** boolean (可选) - 是否为会员 */
    isVip?: boolean;

    /** string (可选) - 密码 */
    password?: string;

    /** string (可选) - 头像 */
    avatarPicPath?: string;

    /** string (可选) - 身份证 */
    idNumber?: string;
  };
  export type InsPostApiV1UserInfoItemHeader = Record<string, any>;
  export type InsPostApiV1UserInfoItemCookie = Record<string, any>;
  export type InsPostApiV1UserInfoItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.UserInfoDTO (可选) */
    data?: XinliModels.UserInfoDTO;
  };
  export type InsPostApiV1UserInfoItemGeneric = {
    query: InsPostApiV1UserInfoItemQuery;
    params: InsPostApiV1UserInfoItemParams;
    data: InsPostApiV1UserInfoItemBody;
    header: InsPostApiV1UserInfoItemHeader;
    cookie: InsPostApiV1UserInfoItemCookie;
    result: InsPostApiV1UserInfoItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/userInfo/item
   * @summary 批量删除
   * @description
   */
  export type InsDeleteApiV1UserInfoItemQuery = Record<string, any>;
  export type InsDeleteApiV1UserInfoItemParams = Record<string, any>;
  export type InsDeleteApiV1UserInfoItemBody = string[];
  export type InsDeleteApiV1UserInfoItemHeader = Record<string, any>;
  export type InsDeleteApiV1UserInfoItemCookie = Record<string, any>;
  export type InsDeleteApiV1UserInfoItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1UserInfoItemGeneric = {
    query: InsDeleteApiV1UserInfoItemQuery;
    params: InsDeleteApiV1UserInfoItemParams;
    data: InsDeleteApiV1UserInfoItemBody;
    header: InsDeleteApiV1UserInfoItemHeader;
    cookie: InsDeleteApiV1UserInfoItemCookie;
    result: InsDeleteApiV1UserInfoItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/systemMessage/list
   * @summary 批量修改
   * @description
   */
  export type InsPutApiV1SystemMessageListQuery = Record<string, any>;
  export type InsPutApiV1SystemMessageListParams = Record<string, any>;
  export type InsPutApiV1SystemMessageListBody = XinliModels.UpdateSystemMessage[];
  export type InsPutApiV1SystemMessageListHeader = Record<string, any>;
  export type InsPutApiV1SystemMessageListCookie = Record<string, any>;
  export type InsPutApiV1SystemMessageListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1SystemMessageListGeneric = {
    query: InsPutApiV1SystemMessageListQuery;
    params: InsPutApiV1SystemMessageListParams;
    data: InsPutApiV1SystemMessageListBody;
    header: InsPutApiV1SystemMessageListHeader;
    cookie: InsPutApiV1SystemMessageListCookie;
    result: InsPutApiV1SystemMessageListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/systemMessage/list
   * @summary 批量新增
   * @description
   */
  export type InsPostApiV1SystemMessageListQuery = Record<string, any>;
  export type InsPostApiV1SystemMessageListParams = Record<string, any>;
  export type InsPostApiV1SystemMessageListBody = XinliModels.SystemMessageDTO[];
  export type InsPostApiV1SystemMessageListHeader = Record<string, any>;
  export type InsPostApiV1SystemMessageListCookie = Record<string, any>;
  export type InsPostApiV1SystemMessageListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SystemMessageDTO[];
  };
  export type InsPostApiV1SystemMessageListGeneric = {
    query: InsPostApiV1SystemMessageListQuery;
    params: InsPostApiV1SystemMessageListParams;
    data: InsPostApiV1SystemMessageListBody;
    header: InsPostApiV1SystemMessageListHeader;
    cookie: InsPostApiV1SystemMessageListCookie;
    result: InsPostApiV1SystemMessageListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/systemMessage/list
   * @summary 批量删除
   * @description
   */
  export type InsDeleteApiV1SystemMessageListQuery = Record<string, any>;
  export type InsDeleteApiV1SystemMessageListParams = Record<string, any>;
  export type InsDeleteApiV1SystemMessageListBody = string[];
  export type InsDeleteApiV1SystemMessageListHeader = Record<string, any>;
  export type InsDeleteApiV1SystemMessageListCookie = Record<string, any>;
  export type InsDeleteApiV1SystemMessageListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1SystemMessageListGeneric = {
    query: InsDeleteApiV1SystemMessageListQuery;
    params: InsDeleteApiV1SystemMessageListParams;
    data: InsDeleteApiV1SystemMessageListBody;
    header: InsDeleteApiV1SystemMessageListHeader;
    cookie: InsDeleteApiV1SystemMessageListCookie;
    result: InsDeleteApiV1SystemMessageListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/systemMessage/item
   * @summary 修改
   * @description
   */
  export type InsPutApiV1SystemMessageItemQuery = Record<string, any>;
  export type InsPutApiV1SystemMessageItemParams = Record<string, any>;
  export type InsPutApiV1SystemMessageItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 用户ID */
    userId?: string;

    /** "{"desc":"系统消息","name":"SYSTEM"}" (可选) - 消息类型，枚举：MessageType | 可选值: "{\"desc\":\"系统消息\",\"name\":\"SYSTEM\"}" */
    messageType?: "SYSTEM";

    /** string (可选) - 消息内容 */
    content?: string;

    /** "{"desc":"已发送","name":"SEND"}" | "{"desc":"已读","name":"READ"}" | "{"desc":"未读","name":"UNREAD"}" (可选) - 已读状态，枚举：MessageStatus | 可选值: "{\"desc\":\"已发送\",\"name\":\"SEND\"}", "{\"desc\":\"已读\",\"name\":\"READ\"}", "{\"desc\":\"未读\",\"name\":\"UNREAD\"}" */
    status?: "SEND" | "READ" | "UNREAD";

    /** string (可选) - 消息已读时间 | 格式: date-time */
    readTime?: string;
  };
  export type InsPutApiV1SystemMessageItemHeader = Record<string, any>;
  export type InsPutApiV1SystemMessageItemCookie = Record<string, any>;
  export type InsPutApiV1SystemMessageItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1SystemMessageItemGeneric = {
    query: InsPutApiV1SystemMessageItemQuery;
    params: InsPutApiV1SystemMessageItemParams;
    data: InsPutApiV1SystemMessageItemBody;
    header: InsPutApiV1SystemMessageItemHeader;
    cookie: InsPutApiV1SystemMessageItemCookie;
    result: InsPutApiV1SystemMessageItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/systemMessage/item
   * @summary 新增
   * @description
   */
  export type InsPostApiV1SystemMessageItemQuery = Record<string, any>;
  export type InsPostApiV1SystemMessageItemParams = Record<string, any>;
  export type InsPostApiV1SystemMessageItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 用户ID */
    userId?: string;

    /** "{"desc":"系统消息","name":"SYSTEM"}" (可选) - 消息类型，枚举：MessageType | 可选值: "{\"desc\":\"系统消息\",\"name\":\"SYSTEM\"}" */
    messageType?: "SYSTEM";

    /** string (可选) - 消息内容 */
    content?: string;

    /** "{"desc":"已发送","name":"SEND"}" | "{"desc":"已读","name":"READ"}" | "{"desc":"未读","name":"UNREAD"}" (可选) - 已读状态，枚举：MessageStatus | 可选值: "{\"desc\":\"已发送\",\"name\":\"SEND\"}", "{\"desc\":\"已读\",\"name\":\"READ\"}", "{\"desc\":\"未读\",\"name\":\"UNREAD\"}" */
    status?: "SEND" | "READ" | "UNREAD";

    /** string (可选) - 消息已读时间 | 格式: date-time */
    readTime?: string;

    /** string (可选) */
    userName?: string;
  };
  export type InsPostApiV1SystemMessageItemHeader = Record<string, any>;
  export type InsPostApiV1SystemMessageItemCookie = Record<string, any>;
  export type InsPostApiV1SystemMessageItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SystemMessageDTO (可选) */
    data?: XinliModels.SystemMessageDTO;
  };
  export type InsPostApiV1SystemMessageItemGeneric = {
    query: InsPostApiV1SystemMessageItemQuery;
    params: InsPostApiV1SystemMessageItemParams;
    data: InsPostApiV1SystemMessageItemBody;
    header: InsPostApiV1SystemMessageItemHeader;
    cookie: InsPostApiV1SystemMessageItemCookie;
    result: InsPostApiV1SystemMessageItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveysParticipant/list
   * @summary 批量修改
   * @description
   */
  export type InsPutApiV1SurveysParticipantListQuery = Record<string, any>;
  export type InsPutApiV1SurveysParticipantListParams = Record<string, any>;
  export type InsPutApiV1SurveysParticipantListBody = XinliModels.UpdateSurveysParticipant[];
  export type InsPutApiV1SurveysParticipantListHeader = Record<string, any>;
  export type InsPutApiV1SurveysParticipantListCookie = Record<string, any>;
  export type InsPutApiV1SurveysParticipantListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1SurveysParticipantListGeneric = {
    query: InsPutApiV1SurveysParticipantListQuery;
    params: InsPutApiV1SurveysParticipantListParams;
    data: InsPutApiV1SurveysParticipantListBody;
    header: InsPutApiV1SurveysParticipantListHeader;
    cookie: InsPutApiV1SurveysParticipantListCookie;
    result: InsPutApiV1SurveysParticipantListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveysParticipant/list
   * @summary 批量新增
   * @description
   */
  export type InsPostApiV1SurveysParticipantListQuery = Record<string, any>;
  export type InsPostApiV1SurveysParticipantListParams = Record<string, any>;
  export type InsPostApiV1SurveysParticipantListBody = XinliModels.SurveysParticipantDTO[];
  export type InsPostApiV1SurveysParticipantListHeader = Record<string, any>;
  export type InsPostApiV1SurveysParticipantListCookie = Record<string, any>;
  export type InsPostApiV1SurveysParticipantListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SurveysParticipantDTO[];
  };
  export type InsPostApiV1SurveysParticipantListGeneric = {
    query: InsPostApiV1SurveysParticipantListQuery;
    params: InsPostApiV1SurveysParticipantListParams;
    data: InsPostApiV1SurveysParticipantListBody;
    header: InsPostApiV1SurveysParticipantListHeader;
    cookie: InsPostApiV1SurveysParticipantListCookie;
    result: InsPostApiV1SurveysParticipantListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveysParticipant/list
   * @summary 批量删除
   * @description
   */
  export type InsDeleteApiV1SurveysParticipantListQuery = Record<string, any>;
  export type InsDeleteApiV1SurveysParticipantListParams = Record<string, any>;
  export type InsDeleteApiV1SurveysParticipantListBody = string[];
  export type InsDeleteApiV1SurveysParticipantListHeader = Record<string, any>;
  export type InsDeleteApiV1SurveysParticipantListCookie = Record<string, any>;
  export type InsDeleteApiV1SurveysParticipantListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1SurveysParticipantListGeneric = {
    query: InsDeleteApiV1SurveysParticipantListQuery;
    params: InsDeleteApiV1SurveysParticipantListParams;
    data: InsDeleteApiV1SurveysParticipantListBody;
    header: InsDeleteApiV1SurveysParticipantListHeader;
    cookie: InsDeleteApiV1SurveysParticipantListCookie;
    result: InsDeleteApiV1SurveysParticipantListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveysParticipant/item
   * @summary 修改
   * @description
   */
  export type InsPutApiV1SurveysParticipantItemQuery = Record<string, any>;
  export type InsPutApiV1SurveysParticipantItemParams = Record<string, any>;
  export type InsPutApiV1SurveysParticipantItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** string (可选) - 参测人员手机号 */
    phone?: string;

    /** string (可选) - 参测人员称呼 */
    name?: string;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 参测人员性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";
  };
  export type InsPutApiV1SurveysParticipantItemHeader = Record<string, any>;
  export type InsPutApiV1SurveysParticipantItemCookie = Record<string, any>;
  export type InsPutApiV1SurveysParticipantItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1SurveysParticipantItemGeneric = {
    query: InsPutApiV1SurveysParticipantItemQuery;
    params: InsPutApiV1SurveysParticipantItemParams;
    data: InsPutApiV1SurveysParticipantItemBody;
    header: InsPutApiV1SurveysParticipantItemHeader;
    cookie: InsPutApiV1SurveysParticipantItemCookie;
    result: InsPutApiV1SurveysParticipantItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveysParticipant/item
   * @summary 新增
   * @description
   */
  export type InsPostApiV1SurveysParticipantItemQuery = Record<string, any>;
  export type InsPostApiV1SurveysParticipantItemParams = Record<string, any>;
  export type InsPostApiV1SurveysParticipantItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** string (可选) - 参测人员手机号 */
    phone?: string;

    /** string (可选) - 参测人员称呼 */
    name?: string;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 参测人员性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";

    /** "{"desc":"待测评","name":"WAIT"}" | "{"desc":"已完成","name":"COMPLETE"}" | "{"desc":"未完成","name":"NOT_COMPLETE"}" (可选) - 参与状态 | 可选值: "{\"desc\":\"待测评\",\"name\":\"WAIT\"}", "{\"desc\":\"已完成\",\"name\":\"COMPLETE\"}", "{\"desc\":\"未完成\",\"name\":\"NOT_COMPLETE\"}" */
    status?: "WAIT" | "COMPLETE" | "NOT_COMPLETE";
  };
  export type InsPostApiV1SurveysParticipantItemHeader = Record<string, any>;
  export type InsPostApiV1SurveysParticipantItemCookie = Record<string, any>;
  export type InsPostApiV1SurveysParticipantItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SurveysParticipantDTO (可选) */
    data?: XinliModels.SurveysParticipantDTO;
  };
  export type InsPostApiV1SurveysParticipantItemGeneric = {
    query: InsPostApiV1SurveysParticipantItemQuery;
    params: InsPostApiV1SurveysParticipantItemParams;
    data: InsPostApiV1SurveysParticipantItemBody;
    header: InsPostApiV1SurveysParticipantItemHeader;
    cookie: InsPostApiV1SurveysParticipantItemCookie;
    result: InsPostApiV1SurveysParticipantItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveys/item
   * @summary 修改
   * @description
   */
  export type InsPutApiV1SurveysItemQuery = Record<string, any>;
  export type InsPutApiV1SurveysItemParams = Record<string, any>;
  export type InsPutApiV1SurveysItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 机构ID */
    institutionId?: string;

    /** string (可选) - 量表标题 */
    title?: string;

    /** string (可选) - 量表描述 */
    description?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 量表状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** number (可选) - 推荐等级 | 格式: int32 */
    isRec?: number;

    /** string (可选) - 开始日期 | 格式: date-time */
    openTime?: string;

    /** string (可选) - 截止日期 | 格式: date-time */
    closeTime?: string;

    /** "{"desc":"完全开放","name":"FULLY_OPEN"}" | "{"desc":"机构内开放","name":"INSTITUTION_OPEN"}" | "{"desc":"固定人员开放","name":"FIXED_PERSONNEL_OPEN"}" | "{"desc":"量表码开放","name":"CODE_BASED_OPEN"}" (可选) - 量表开放类型，枚举：SurveyOpenType | 可选值: "{\"desc\":\"完全开放\",\"name\":\"FULLY_OPEN\"}", "{\"desc\":\"机构内开放\",\"name\":\"INSTITUTION_OPEN\"}", "{\"desc\":\"固定人员开放\",\"name\":\"FIXED_PERSONNEL_OPEN\"}", "{\"desc\":\"量表码开放\",\"name\":\"CODE_BASED_OPEN\"}" */
    openType?: "FULLY_OPEN" | "INSTITUTION_OPEN" | "FIXED_PERSONNEL_OPEN" | "CODE_BASED_OPEN";

    /** string (可选) - 量表码 */
    code?: string;

    /** number (可选) - 预警分数 | 格式: int32 */
    warningScore?: number;

    /** string (可选) - 量表图片 */
    image?: string;

    /** boolean (可选) - 是否允许重复测试 */
    isRepetition?: boolean;

    /** string (可选) - 类型 */
    category?: string;

    /** boolean (可选) - 是否推荐 */
    isRecommended?: boolean;
  };
  export type InsPutApiV1SurveysItemHeader = Record<string, any>;
  export type InsPutApiV1SurveysItemCookie = Record<string, any>;
  export type InsPutApiV1SurveysItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1SurveysItemGeneric = {
    query: InsPutApiV1SurveysItemQuery;
    params: InsPutApiV1SurveysItemParams;
    data: InsPutApiV1SurveysItemBody;
    header: InsPutApiV1SurveysItemHeader;
    cookie: InsPutApiV1SurveysItemCookie;
    result: InsPutApiV1SurveysItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveys/item
   * @summary 新增
   * @description
   */
  export type InsPostApiV1SurveysItemQuery = Record<string, any>;
  export type InsPostApiV1SurveysItemParams = Record<string, any>;
  export type InsPostApiV1SurveysItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 机构ID */
    institutionId?: string;

    /** string (可选) - 量表标题 */
    title?: string;

    /** string (可选) - 量表描述 */
    description?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 量表状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** number (可选) - 推荐等级 | 格式: int32 */
    isRec?: number;

    /** string (可选) - 开始日期 | 格式: date-time */
    openTime?: string;

    /** string (可选) - 截止日期 | 格式: date-time */
    closeTime?: string;

    /** "{"desc":"完全开放","name":"FULLY_OPEN"}" | "{"desc":"机构内开放","name":"INSTITUTION_OPEN"}" | "{"desc":"固定人员开放","name":"FIXED_PERSONNEL_OPEN"}" | "{"desc":"量表码开放","name":"CODE_BASED_OPEN"}" (可选) - 量表开放类型，枚举：SurveyOpenType | 可选值: "{\"desc\":\"完全开放\",\"name\":\"FULLY_OPEN\"}", "{\"desc\":\"机构内开放\",\"name\":\"INSTITUTION_OPEN\"}", "{\"desc\":\"固定人员开放\",\"name\":\"FIXED_PERSONNEL_OPEN\"}", "{\"desc\":\"量表码开放\",\"name\":\"CODE_BASED_OPEN\"}" */
    openType?: "FULLY_OPEN" | "INSTITUTION_OPEN" | "FIXED_PERSONNEL_OPEN" | "CODE_BASED_OPEN";

    /** string (可选) - 量表码 */
    code?: string;

    /** number (可选) - 预警分数 | 格式: int32 */
    warningScore?: number;

    /** string (可选) - 量表图片 */
    image?: string;

    /** boolean (可选) - 是否允许重复测试 */
    isRepetition?: boolean;

    /** string (可选) */
    insName?: string;

    /** boolean (可选) - 是否推荐 */
    isRecommended?: boolean;

    /** string - 类型 */
    category: string;

    /** string (可选) - 类型名字 */
    categoryName?: string;

    /** array (可选) - 条件 */
    preconditionDtoList?: XinliModels.PreconditionDTO[];

    /** "{"desc":"待测评","name":"WAIT"}" | "{"desc":"已完成","name":"COMPLETE"}" | "{"desc":"未完成","name":"NOT_COMPLETE"}" (可选) - 参与状态 | 可选值: "{\"desc\":\"待测评\",\"name\":\"WAIT\"}", "{\"desc\":\"已完成\",\"name\":\"COMPLETE\"}", "{\"desc\":\"未完成\",\"name\":\"NOT_COMPLETE\"}" */
    joinStatus?: "WAIT" | "COMPLETE" | "NOT_COMPLETE";

    /** number (可选) - 参与人数 | 格式: int32 */
    joinNum?: number;
  };
  export type InsPostApiV1SurveysItemHeader = Record<string, any>;
  export type InsPostApiV1SurveysItemCookie = Record<string, any>;
  export type InsPostApiV1SurveysItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SurveysDTO (可选) */
    data?: XinliModels.SurveysDTO;
  };
  export type InsPostApiV1SurveysItemGeneric = {
    query: InsPostApiV1SurveysItemQuery;
    params: InsPostApiV1SurveysItemParams;
    data: InsPostApiV1SurveysItemBody;
    header: InsPostApiV1SurveysItemHeader;
    cookie: InsPostApiV1SurveysItemCookie;
    result: InsPostApiV1SurveysItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveys/category/item
   * @summary 修改
   * @description
   */
  export type InsPutApiV1SurveysCategoryItemQuery = Record<string, any>;
  export type InsPutApiV1SurveysCategoryItemParams = Record<string, any>;
  export type InsPutApiV1SurveysCategoryItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 名字 */
    title: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status: "ENABLE" | "DISABLE";

    /** string (可选) */
    pid?: string;
  };
  export type InsPutApiV1SurveysCategoryItemHeader = Record<string, any>;
  export type InsPutApiV1SurveysCategoryItemCookie = Record<string, any>;
  export type InsPutApiV1SurveysCategoryItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1SurveysCategoryItemGeneric = {
    query: InsPutApiV1SurveysCategoryItemQuery;
    params: InsPutApiV1SurveysCategoryItemParams;
    data: InsPutApiV1SurveysCategoryItemBody;
    header: InsPutApiV1SurveysCategoryItemHeader;
    cookie: InsPutApiV1SurveysCategoryItemCookie;
    result: InsPutApiV1SurveysCategoryItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveys/category/item
   * @summary 添加
   * @description
   */
  export type InsPostApiV1SurveysCategoryItemQuery = Record<string, any>;
  export type InsPostApiV1SurveysCategoryItemParams = Record<string, any>;
  export type InsPostApiV1SurveysCategoryItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 名字 */
    title: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status: "ENABLE" | "DISABLE";

    /** string (可选) */
    pid?: string;
  };
  export type InsPostApiV1SurveysCategoryItemHeader = Record<string, any>;
  export type InsPostApiV1SurveysCategoryItemCookie = Record<string, any>;
  export type InsPostApiV1SurveysCategoryItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SurveysCategoryDto (可选) */
    data?: XinliModels.SurveysCategoryDto;
  };
  export type InsPostApiV1SurveysCategoryItemGeneric = {
    query: InsPostApiV1SurveysCategoryItemQuery;
    params: InsPostApiV1SurveysCategoryItemParams;
    data: InsPostApiV1SurveysCategoryItemBody;
    header: InsPostApiV1SurveysCategoryItemHeader;
    cookie: InsPostApiV1SurveysCategoryItemCookie;
    result: InsPostApiV1SurveysCategoryItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveys/category/item
   * @summary 批量删除
   * @description
   */
  export type InsDeleteApiV1SurveysCategoryItemQuery = Record<string, any>;
  export type InsDeleteApiV1SurveysCategoryItemParams = Record<string, any>;
  export type InsDeleteApiV1SurveysCategoryItemBody = string[];
  export type InsDeleteApiV1SurveysCategoryItemHeader = Record<string, any>;
  export type InsDeleteApiV1SurveysCategoryItemCookie = Record<string, any>;
  export type InsDeleteApiV1SurveysCategoryItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1SurveysCategoryItemGeneric = {
    query: InsDeleteApiV1SurveysCategoryItemQuery;
    params: InsDeleteApiV1SurveysCategoryItemParams;
    data: InsDeleteApiV1SurveysCategoryItemBody;
    header: InsDeleteApiV1SurveysCategoryItemHeader;
    cookie: InsDeleteApiV1SurveysCategoryItemCookie;
    result: InsDeleteApiV1SurveysCategoryItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/questions/updateStatus/{id}
   * @summary 修改状态
   * @description
   */
  export type InsPutApiV1QuestionsUpdateStatusByIdQuery = Record<string, any>;
  export type InsPutApiV1QuestionsUpdateStatusByIdParams = {
    /** string */
    id: string;
  };
  export type InsPutApiV1QuestionsUpdateStatusByIdBody = any;
  export type InsPutApiV1QuestionsUpdateStatusByIdHeader = Record<string, any>;
  export type InsPutApiV1QuestionsUpdateStatusByIdCookie = Record<string, any>;
  export type InsPutApiV1QuestionsUpdateStatusByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1QuestionsUpdateStatusByIdGeneric = {
    query: InsPutApiV1QuestionsUpdateStatusByIdQuery;
    params: InsPutApiV1QuestionsUpdateStatusByIdParams;
    data: InsPutApiV1QuestionsUpdateStatusByIdBody;
    header: InsPutApiV1QuestionsUpdateStatusByIdHeader;
    cookie: InsPutApiV1QuestionsUpdateStatusByIdCookie;
    result: InsPutApiV1QuestionsUpdateStatusByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/questions/list
   * @summary 批量修改（量表的题）
   * @description 量表的题批量修改
   */
  export type InsPutApiV1QuestionsListQuery = Record<string, any>;
  export type InsPutApiV1QuestionsListParams = Record<string, any>;
  export type InsPutApiV1QuestionsListBody = XinliModels.QuestionsDTO[];
  export type InsPutApiV1QuestionsListHeader = Record<string, any>;
  export type InsPutApiV1QuestionsListCookie = Record<string, any>;
  export type InsPutApiV1QuestionsListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1QuestionsListGeneric = {
    query: InsPutApiV1QuestionsListQuery;
    params: InsPutApiV1QuestionsListParams;
    data: InsPutApiV1QuestionsListBody;
    header: InsPutApiV1QuestionsListHeader;
    cookie: InsPutApiV1QuestionsListCookie;
    result: InsPutApiV1QuestionsListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/questions/list
   * @summary 批量新增
   * @description
   */
  export type InsPostApiV1QuestionsListQuery = Record<string, any>;
  export type InsPostApiV1QuestionsListParams = Record<string, any>;
  export type InsPostApiV1QuestionsListBody = XinliModels.QuestionsDTO[];
  export type InsPostApiV1QuestionsListHeader = Record<string, any>;
  export type InsPostApiV1QuestionsListCookie = Record<string, any>;
  export type InsPostApiV1QuestionsListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.QuestionsDTO[];
  };
  export type InsPostApiV1QuestionsListGeneric = {
    query: InsPostApiV1QuestionsListQuery;
    params: InsPostApiV1QuestionsListParams;
    data: InsPostApiV1QuestionsListBody;
    header: InsPostApiV1QuestionsListHeader;
    cookie: InsPostApiV1QuestionsListCookie;
    result: InsPostApiV1QuestionsListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/questions/list
   * @summary 批量删除
   * @description
   */
  export type InsDeleteApiV1QuestionsListQuery = Record<string, any>;
  export type InsDeleteApiV1QuestionsListParams = Record<string, any>;
  export type InsDeleteApiV1QuestionsListBody = string[];
  export type InsDeleteApiV1QuestionsListHeader = Record<string, any>;
  export type InsDeleteApiV1QuestionsListCookie = Record<string, any>;
  export type InsDeleteApiV1QuestionsListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1QuestionsListGeneric = {
    query: InsDeleteApiV1QuestionsListQuery;
    params: InsDeleteApiV1QuestionsListParams;
    data: InsDeleteApiV1QuestionsListBody;
    header: InsDeleteApiV1QuestionsListHeader;
    cookie: InsDeleteApiV1QuestionsListCookie;
    result: InsDeleteApiV1QuestionsListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/questions/item
   * @summary 修改（题库的题）
   * @description 题库的题单个修改
   */
  export type InsPutApiV1QuestionsItemQuery = Record<string, any>;
  export type InsPutApiV1QuestionsItemParams = Record<string, any>;
  export type InsPutApiV1QuestionsItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** "{"desc":"题库","name":"BANK"}" | "{"desc":"量表","name":"SURVEY"}" (可选) - 题库、量表，枚举：QuestionSourceType | 可选值: "{\"desc\":\"题库\",\"name\":\"BANK\"}", "{\"desc\":\"量表\",\"name\":\"SURVEY\"}" */
    sourceType?: "BANK" | "SURVEY";

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}" */
    questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";

    /** string (可选) - 问题文本 */
    questionText?: string;

    /** number (可选) - 排序 | 格式: int32 */
    order?: number;

    /** boolean (可选) - 是否必填 */
    required?: boolean;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 分类ID */
    categoryId?: string;

    /** string (可选) - code */
    code?: string;
  };
  export type InsPutApiV1QuestionsItemHeader = Record<string, any>;
  export type InsPutApiV1QuestionsItemCookie = Record<string, any>;
  export type InsPutApiV1QuestionsItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1QuestionsItemGeneric = {
    query: InsPutApiV1QuestionsItemQuery;
    params: InsPutApiV1QuestionsItemParams;
    data: InsPutApiV1QuestionsItemBody;
    header: InsPutApiV1QuestionsItemHeader;
    cookie: InsPutApiV1QuestionsItemCookie;
    result: InsPutApiV1QuestionsItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/questions/item
   * @summary 新增
   * @description
   */
  export type InsPostApiV1QuestionsItemQuery = Record<string, any>;
  export type InsPostApiV1QuestionsItemParams = Record<string, any>;
  export type InsPostApiV1QuestionsItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** "{"desc":"题库","name":"BANK"}" | "{"desc":"量表","name":"SURVEY"}" (可选) - 题库、量表，枚举：QuestionSourceType | 可选值: "{\"desc\":\"题库\",\"name\":\"BANK\"}", "{\"desc\":\"量表\",\"name\":\"SURVEY\"}" */
    sourceType?: "BANK" | "SURVEY";

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}" */
    questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";

    /** string (可选) - 问题文本 */
    questionText?: string;

    /** number (可选) - 排序 | 格式: int32 */
    order?: number;

    /** boolean (可选) - 是否必填 */
    required?: boolean;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 分类ID */
    categoryId?: string;

    /** string (可选) - 分类名字 */
    categoryName?: string;

    /** string (可选) - code */
    code?: string;

    /** string (可选) */
    surveysTitle?: string;

    /** array (可选) */
    optionList?: XinliModels.OptionsDTO[];

    /** array (可选) */
    preconditionList?: XinliModels.PreconditionDTO[];
  };
  export type InsPostApiV1QuestionsItemHeader = Record<string, any>;
  export type InsPostApiV1QuestionsItemCookie = Record<string, any>;
  export type InsPostApiV1QuestionsItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.QuestionsDTO (可选) */
    data?: XinliModels.QuestionsDTO;
  };
  export type InsPostApiV1QuestionsItemGeneric = {
    query: InsPostApiV1QuestionsItemQuery;
    params: InsPostApiV1QuestionsItemParams;
    data: InsPostApiV1QuestionsItemBody;
    header: InsPostApiV1QuestionsItemHeader;
    cookie: InsPostApiV1QuestionsItemCookie;
    result: InsPostApiV1QuestionsItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/precondition/list
   * @summary 批量修改
   * @description
   */
  export type InsPutApiV1PreconditionListQuery = Record<string, any>;
  export type InsPutApiV1PreconditionListParams = Record<string, any>;
  export type InsPutApiV1PreconditionListBody = XinliModels.UpdatePrecondition[];
  export type InsPutApiV1PreconditionListHeader = Record<string, any>;
  export type InsPutApiV1PreconditionListCookie = Record<string, any>;
  export type InsPutApiV1PreconditionListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1PreconditionListGeneric = {
    query: InsPutApiV1PreconditionListQuery;
    params: InsPutApiV1PreconditionListParams;
    data: InsPutApiV1PreconditionListBody;
    header: InsPutApiV1PreconditionListHeader;
    cookie: InsPutApiV1PreconditionListCookie;
    result: InsPutApiV1PreconditionListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/precondition/list
   * @summary 批量新增
   * @description
   */
  export type InsPostApiV1PreconditionListQuery = Record<string, any>;
  export type InsPostApiV1PreconditionListParams = Record<string, any>;
  export type InsPostApiV1PreconditionListBody = XinliModels.PreconditionDTO[];
  export type InsPostApiV1PreconditionListHeader = Record<string, any>;
  export type InsPostApiV1PreconditionListCookie = Record<string, any>;
  export type InsPostApiV1PreconditionListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.PreconditionDTO[];
  };
  export type InsPostApiV1PreconditionListGeneric = {
    query: InsPostApiV1PreconditionListQuery;
    params: InsPostApiV1PreconditionListParams;
    data: InsPostApiV1PreconditionListBody;
    header: InsPostApiV1PreconditionListHeader;
    cookie: InsPostApiV1PreconditionListCookie;
    result: InsPostApiV1PreconditionListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/precondition/list
   * @summary 批量删除
   * @description
   */
  export type InsDeleteApiV1PreconditionListQuery = Record<string, any>;
  export type InsDeleteApiV1PreconditionListParams = Record<string, any>;
  export type InsDeleteApiV1PreconditionListBody = string[];
  export type InsDeleteApiV1PreconditionListHeader = Record<string, any>;
  export type InsDeleteApiV1PreconditionListCookie = Record<string, any>;
  export type InsDeleteApiV1PreconditionListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1PreconditionListGeneric = {
    query: InsDeleteApiV1PreconditionListQuery;
    params: InsDeleteApiV1PreconditionListParams;
    data: InsDeleteApiV1PreconditionListBody;
    header: InsDeleteApiV1PreconditionListHeader;
    cookie: InsDeleteApiV1PreconditionListCookie;
    result: InsDeleteApiV1PreconditionListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/precondition/item
   * @summary 修改
   * @description
   */
  export type InsPutApiV1PreconditionItemQuery = Record<string, any>;
  export type InsPutApiV1PreconditionItemParams = Record<string, any>;
  export type InsPutApiV1PreconditionItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** "{"desc":"问题","name":"QUESTION"}" | "{"desc":"选项","name":"OPTION"}" (可选) - 类型，枚举：SourceType | 可选值: "{\"desc\":\"问题\",\"name\":\"QUESTION\"}", "{\"desc\":\"选项\",\"name\":\"OPTION\"}" */
    sourceType?: "QUESTION" | "OPTION";

    /** "{"desc":"当前总得分","name":"TOTAL"}" | "{"desc":"某些题总得分（全部满足）","name":"SUM_SCORE"}" | "{"desc":"某些题总得分（满足一个）","name":"SUM_SCORE_OR"}" | "{"desc":"某些题得了多少分（全部满足）","name":"INDIVIDUAL_SCORES"}" | "{"desc":"某些题得了多少分（满足一个）","name":"INDIVIDUAL_SCORES_OR"}" | "{"desc":"某些题选了某些项（全部满足）","name":"SELECTED_OPTIONS"}" | "{"desc":"某些题选了某些项（满足一个）","name":"SELECTED_CERTAIN_OPTIONS"}" (可选) - 前置条件类型，枚举：ConditionType | 可选值: "{\"desc\":\"当前总得分\",\"name\":\"TOTAL\"}", "{\"desc\":\"某些题总得分（全部满足）\",\"name\":\"SUM_SCORE\"}", "{\"desc\":\"某些题总得分（满足一个）\",\"name\":\"SUM_SCORE_OR\"}", "{\"desc\":\"某些题得了多少分（全部满足）\",\"name\":\"INDIVIDUAL_SCORES\"}", "{\"desc\":\"某些题得了多少分（满足一个）\",\"name\":\"INDIVIDUAL_SCORES_OR\"}", "{\"desc\":\"某些题选了某些项（全部满足）\",\"name\":\"SELECTED_OPTIONS\"}", "{\"desc\":\"某些题选了某些项（满足一个）\",\"name\":\"SELECTED_CERTAIN_OPTIONS\"}" */
    conditionType?:
      | "TOTAL"
      | "SUM_SCORE"
      | "SUM_SCORE_OR"
      | "INDIVIDUAL_SCORES"
      | "INDIVIDUAL_SCORES_OR"
      | "SELECTED_OPTIONS"
      | "SELECTED_CERTAIN_OPTIONS";

    /** "{"desc":"大于","name":"GT"}" | "{"desc":"小于","name":"LT"}" | "{"desc":"等于","name":"EQ"}" | "{"desc":"包含","name":"IN"}" | "{"desc":"不包含","name":"NOT_IN"}" | "{"desc":"至少包含一个","name":"ANY_IN"}" | "{"desc":"至少不包含一个","name":"ANY_NOT_IN"}" (可选) - 条件，枚举：Condition | 可选值: "{\"desc\":\"大于\",\"name\":\"GT\"}", "{\"desc\":\"小于\",\"name\":\"LT\"}", "{\"desc\":\"等于\",\"name\":\"EQ\"}", "{\"desc\":\"包含\",\"name\":\"IN\"}", "{\"desc\":\"不包含\",\"name\":\"NOT_IN\"}", "{\"desc\":\"至少包含一个\",\"name\":\"ANY_IN\"}", "{\"desc\":\"至少不包含一个\",\"name\":\"ANY_NOT_IN\"}" */
    condition?: "GT" | "LT" | "EQ" | "IN" | "NOT_IN" | "ANY_IN" | "ANY_NOT_IN";

    /** number (可选) - 条件值（用于总得分和指定题得分） | 格式: int32 */
    value?: number;

    /** string (可选) - 指定选项值（用于指定题选项的条件） */
    optionValue?: string;

    /** string (可选) - 绑定问题或选项code */
    parentCode?: string;

    /** string (可选) - 目标问题code */
    questionCode?: string;

    /** string (可选) */
    surveysId?: string;
  };
  export type InsPutApiV1PreconditionItemHeader = Record<string, any>;
  export type InsPutApiV1PreconditionItemCookie = Record<string, any>;
  export type InsPutApiV1PreconditionItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1PreconditionItemGeneric = {
    query: InsPutApiV1PreconditionItemQuery;
    params: InsPutApiV1PreconditionItemParams;
    data: InsPutApiV1PreconditionItemBody;
    header: InsPutApiV1PreconditionItemHeader;
    cookie: InsPutApiV1PreconditionItemCookie;
    result: InsPutApiV1PreconditionItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/precondition/item
   * @summary 新增
   * @description
   */
  export type InsPostApiV1PreconditionItemQuery = Record<string, any>;
  export type InsPostApiV1PreconditionItemParams = Record<string, any>;
  export type InsPostApiV1PreconditionItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** "{"desc":"问题","name":"QUESTION"}" | "{"desc":"选项","name":"OPTION"}" (可选) - 类型，枚举：SourceType | 可选值: "{\"desc\":\"问题\",\"name\":\"QUESTION\"}", "{\"desc\":\"选项\",\"name\":\"OPTION\"}" */
    sourceType?: "QUESTION" | "OPTION";

    /** "{"desc":"当前总得分","name":"TOTAL"}" | "{"desc":"某些题总得分（全部满足）","name":"SUM_SCORE"}" | "{"desc":"某些题总得分（满足一个）","name":"SUM_SCORE_OR"}" | "{"desc":"某些题得了多少分（全部满足）","name":"INDIVIDUAL_SCORES"}" | "{"desc":"某些题得了多少分（满足一个）","name":"INDIVIDUAL_SCORES_OR"}" | "{"desc":"某些题选了某些项（全部满足）","name":"SELECTED_OPTIONS"}" | "{"desc":"某些题选了某些项（满足一个）","name":"SELECTED_CERTAIN_OPTIONS"}" (可选) - 前置条件类型，枚举：ConditionType | 可选值: "{\"desc\":\"当前总得分\",\"name\":\"TOTAL\"}", "{\"desc\":\"某些题总得分（全部满足）\",\"name\":\"SUM_SCORE\"}", "{\"desc\":\"某些题总得分（满足一个）\",\"name\":\"SUM_SCORE_OR\"}", "{\"desc\":\"某些题得了多少分（全部满足）\",\"name\":\"INDIVIDUAL_SCORES\"}", "{\"desc\":\"某些题得了多少分（满足一个）\",\"name\":\"INDIVIDUAL_SCORES_OR\"}", "{\"desc\":\"某些题选了某些项（全部满足）\",\"name\":\"SELECTED_OPTIONS\"}", "{\"desc\":\"某些题选了某些项（满足一个）\",\"name\":\"SELECTED_CERTAIN_OPTIONS\"}" */
    conditionType?:
      | "TOTAL"
      | "SUM_SCORE"
      | "SUM_SCORE_OR"
      | "INDIVIDUAL_SCORES"
      | "INDIVIDUAL_SCORES_OR"
      | "SELECTED_OPTIONS"
      | "SELECTED_CERTAIN_OPTIONS";

    /** "{"desc":"大于","name":"GT"}" | "{"desc":"小于","name":"LT"}" | "{"desc":"等于","name":"EQ"}" | "{"desc":"包含","name":"IN"}" | "{"desc":"不包含","name":"NOT_IN"}" | "{"desc":"至少包含一个","name":"ANY_IN"}" | "{"desc":"至少不包含一个","name":"ANY_NOT_IN"}" (可选) - 条件，枚举：Condition | 可选值: "{\"desc\":\"大于\",\"name\":\"GT\"}", "{\"desc\":\"小于\",\"name\":\"LT\"}", "{\"desc\":\"等于\",\"name\":\"EQ\"}", "{\"desc\":\"包含\",\"name\":\"IN\"}", "{\"desc\":\"不包含\",\"name\":\"NOT_IN\"}", "{\"desc\":\"至少包含一个\",\"name\":\"ANY_IN\"}", "{\"desc\":\"至少不包含一个\",\"name\":\"ANY_NOT_IN\"}" */
    condition?: "GT" | "LT" | "EQ" | "IN" | "NOT_IN" | "ANY_IN" | "ANY_NOT_IN";

    /** number (可选) - 条件值（用于总得分和指定题得分） | 格式: int32 */
    value?: number;

    /** string (可选) - 指定选项值（用于指定题选项的条件） */
    optionValue?: string;

    /** string (可选) - 绑定问题或选项code */
    parentCode?: string;

    /** string (可选) - 目标问题code */
    questionCode?: string;

    /** string (可选) */
    surveysId?: string;
  };
  export type InsPostApiV1PreconditionItemHeader = Record<string, any>;
  export type InsPostApiV1PreconditionItemCookie = Record<string, any>;
  export type InsPostApiV1PreconditionItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.PreconditionDTO (可选) */
    data?: XinliModels.PreconditionDTO;
  };
  export type InsPostApiV1PreconditionItemGeneric = {
    query: InsPostApiV1PreconditionItemQuery;
    params: InsPostApiV1PreconditionItemParams;
    data: InsPostApiV1PreconditionItemBody;
    header: InsPostApiV1PreconditionItemHeader;
    cookie: InsPostApiV1PreconditionItemCookie;
    result: InsPostApiV1PreconditionItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/options/list
   * @summary 批量修改
   * @description
   */
  export type InsPutApiV1OptionsListQuery = Record<string, any>;
  export type InsPutApiV1OptionsListParams = Record<string, any>;
  export type InsPutApiV1OptionsListBody = XinliModels.UpdateOptions[];
  export type InsPutApiV1OptionsListHeader = Record<string, any>;
  export type InsPutApiV1OptionsListCookie = Record<string, any>;
  export type InsPutApiV1OptionsListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1OptionsListGeneric = {
    query: InsPutApiV1OptionsListQuery;
    params: InsPutApiV1OptionsListParams;
    data: InsPutApiV1OptionsListBody;
    header: InsPutApiV1OptionsListHeader;
    cookie: InsPutApiV1OptionsListCookie;
    result: InsPutApiV1OptionsListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/options/list
   * @summary 批量新增
   * @description
   */
  export type InsPostApiV1OptionsListQuery = Record<string, any>;
  export type InsPostApiV1OptionsListParams = Record<string, any>;
  export type InsPostApiV1OptionsListBody = XinliModels.OptionsDTO[];
  export type InsPostApiV1OptionsListHeader = Record<string, any>;
  export type InsPostApiV1OptionsListCookie = Record<string, any>;
  export type InsPostApiV1OptionsListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.OptionsDTO[];
  };
  export type InsPostApiV1OptionsListGeneric = {
    query: InsPostApiV1OptionsListQuery;
    params: InsPostApiV1OptionsListParams;
    data: InsPostApiV1OptionsListBody;
    header: InsPostApiV1OptionsListHeader;
    cookie: InsPostApiV1OptionsListCookie;
    result: InsPostApiV1OptionsListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/options/list
   * @summary 批量删除
   * @description
   */
  export type InsDeleteApiV1OptionsListQuery = Record<string, any>;
  export type InsDeleteApiV1OptionsListParams = Record<string, any>;
  export type InsDeleteApiV1OptionsListBody = string[];
  export type InsDeleteApiV1OptionsListHeader = Record<string, any>;
  export type InsDeleteApiV1OptionsListCookie = Record<string, any>;
  export type InsDeleteApiV1OptionsListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1OptionsListGeneric = {
    query: InsDeleteApiV1OptionsListQuery;
    params: InsDeleteApiV1OptionsListParams;
    data: InsDeleteApiV1OptionsListBody;
    header: InsDeleteApiV1OptionsListHeader;
    cookie: InsDeleteApiV1OptionsListCookie;
    result: InsDeleteApiV1OptionsListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/options/item
   * @summary 修改
   * @description
   */
  export type InsPutApiV1OptionsItemQuery = Record<string, any>;
  export type InsPutApiV1OptionsItemParams = Record<string, any>;
  export type InsPutApiV1OptionsItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** "{"desc":"问题","name":"QUESTION"}" | "{"desc":"信息收集","name":"INFORMATION"}" (可选) - 类型，枚举：OptionsType | 可选值: "{\"desc\":\"问题\",\"name\":\"QUESTION\"}", "{\"desc\":\"信息收集\",\"name\":\"INFORMATION\"}" */
    type?: "QUESTION" | "INFORMATION";

    /** string (可选) - 选项文本（如 A、B、C） */
    label?: string;

    /** string (可选) - 选项对应的值 */
    value?: string;

    /** number (可选) - 选项分数 | 格式: int32 */
    score?: number;

    /** string (可选) - 问题code */
    questionCode?: string;

    /** string (可选) - code */
    code?: string;
  };
  export type InsPutApiV1OptionsItemHeader = Record<string, any>;
  export type InsPutApiV1OptionsItemCookie = Record<string, any>;
  export type InsPutApiV1OptionsItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1OptionsItemGeneric = {
    query: InsPutApiV1OptionsItemQuery;
    params: InsPutApiV1OptionsItemParams;
    data: InsPutApiV1OptionsItemBody;
    header: InsPutApiV1OptionsItemHeader;
    cookie: InsPutApiV1OptionsItemCookie;
    result: InsPutApiV1OptionsItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/options/item
   * @summary 新增
   * @description
   */
  export type InsPostApiV1OptionsItemQuery = Record<string, any>;
  export type InsPostApiV1OptionsItemParams = Record<string, any>;
  export type InsPostApiV1OptionsItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** "{"desc":"问题","name":"QUESTION"}" | "{"desc":"信息收集","name":"INFORMATION"}" (可选) - 类型，枚举：OptionsType | 可选值: "{\"desc\":\"问题\",\"name\":\"QUESTION\"}", "{\"desc\":\"信息收集\",\"name\":\"INFORMATION\"}" */
    type?: "QUESTION" | "INFORMATION";

    /** string (可选) - 选项文本（如 A、B、C） */
    label?: string;

    /** string (可选) - 选项对应的值 */
    value?: string;

    /** number (可选) - 选项分数 | 格式: int32 */
    score?: number;

    /** string (可选) - 问题code */
    questionCode?: string;

    /** string (可选) - code */
    code?: string;

    /** number (可选) - 格式: int32 */
    sort?: number;

    /** array (可选) */
    preconditionList?: XinliModels.PreconditionDTO[];
  };
  export type InsPostApiV1OptionsItemHeader = Record<string, any>;
  export type InsPostApiV1OptionsItemCookie = Record<string, any>;
  export type InsPostApiV1OptionsItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.OptionsDTO (可选) */
    data?: XinliModels.OptionsDTO;
  };
  export type InsPostApiV1OptionsItemGeneric = {
    query: InsPostApiV1OptionsItemQuery;
    params: InsPostApiV1OptionsItemParams;
    data: InsPostApiV1OptionsItemBody;
    header: InsPostApiV1OptionsItemHeader;
    cookie: InsPostApiV1OptionsItemCookie;
    result: InsPostApiV1OptionsItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/institution/item
   * @summary 修改
   * @description
   */
  export type InsPutApiV1InstitutionItemQuery = Record<string, any>;
  export type InsPutApiV1InstitutionItemParams = Record<string, any>;
  export type InsPutApiV1InstitutionItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 账号id */
    accountId?: string;

    /** string (可选) - 机构名称 */
    insName?: string;

    /** string (可选) - 机构地址 */
    address?: string;

    /** string (可选) - 联系人 */
    contactPerson?: string;

    /** string (可选) - 联系电话 */
    contactPhone?: string;

    /** string (可选) - 机构图片 */
    images?: string;

    /** "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" (可选) - 审核状态：待审核、审核通过、审核失败 | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}" */
    auditStatus?: "WAIT" | "PASS" | "FAIL";

    /** string (可选) - 审核意见 */
    reason?: string;

    /** number (可选) - 最大人数 | 格式: int32 */
    maxNumber?: number;

    /** string (可选) - 城市编码 */
    parentCode?: string;

    /** boolean (可选) - 是否签署 */
    isSign?: boolean;

    /** string (可选) - 机构码 */
    code?: string;

    /** string (可选) - 机构介绍 */
    introduce?: string;

    /** string (可选) - 业务范围 */
    business?: string;

    /** string (可选) - 身份证正面 */
    idCardFont?: string;

    /** string (可选) - 身份证反面 */
    idCardBack?: string;

    /** string (可选) - 资格证书 */
    qualifications?: string;

    /** string (可选) */
    userId?: string;
  };
  export type InsPutApiV1InstitutionItemHeader = Record<string, any>;
  export type InsPutApiV1InstitutionItemCookie = Record<string, any>;
  export type InsPutApiV1InstitutionItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1InstitutionItemGeneric = {
    query: InsPutApiV1InstitutionItemQuery;
    params: InsPutApiV1InstitutionItemParams;
    data: InsPutApiV1InstitutionItemBody;
    header: InsPutApiV1InstitutionItemHeader;
    cookie: InsPutApiV1InstitutionItemCookie;
    result: InsPutApiV1InstitutionItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/informationQuestions/list
   * @summary 批量修改
   * @description
   */
  export type InsPutApiV1InformationQuestionsListQuery = Record<string, any>;
  export type InsPutApiV1InformationQuestionsListParams = Record<string, any>;
  export type InsPutApiV1InformationQuestionsListBody = XinliModels.InformationQuestionsDTO[];
  export type InsPutApiV1InformationQuestionsListHeader = Record<string, any>;
  export type InsPutApiV1InformationQuestionsListCookie = Record<string, any>;
  export type InsPutApiV1InformationQuestionsListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1InformationQuestionsListGeneric = {
    query: InsPutApiV1InformationQuestionsListQuery;
    params: InsPutApiV1InformationQuestionsListParams;
    data: InsPutApiV1InformationQuestionsListBody;
    header: InsPutApiV1InformationQuestionsListHeader;
    cookie: InsPutApiV1InformationQuestionsListCookie;
    result: InsPutApiV1InformationQuestionsListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/informationQuestions/list
   * @summary 批量新增
   * @description
   */
  export type InsPostApiV1InformationQuestionsListQuery = Record<string, any>;
  export type InsPostApiV1InformationQuestionsListParams = Record<string, any>;
  export type InsPostApiV1InformationQuestionsListBody = XinliModels.InformationQuestionsDTO[];
  export type InsPostApiV1InformationQuestionsListHeader = Record<string, any>;
  export type InsPostApiV1InformationQuestionsListCookie = Record<string, any>;
  export type InsPostApiV1InformationQuestionsListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.InformationQuestionsDTO[];
  };
  export type InsPostApiV1InformationQuestionsListGeneric = {
    query: InsPostApiV1InformationQuestionsListQuery;
    params: InsPostApiV1InformationQuestionsListParams;
    data: InsPostApiV1InformationQuestionsListBody;
    header: InsPostApiV1InformationQuestionsListHeader;
    cookie: InsPostApiV1InformationQuestionsListCookie;
    result: InsPostApiV1InformationQuestionsListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/informationQuestions/list
   * @summary 批量删除
   * @description
   */
  export type InsDeleteApiV1InformationQuestionsListQuery = Record<string, any>;
  export type InsDeleteApiV1InformationQuestionsListParams = Record<string, any>;
  export type InsDeleteApiV1InformationQuestionsListBody = string[];
  export type InsDeleteApiV1InformationQuestionsListHeader = Record<string, any>;
  export type InsDeleteApiV1InformationQuestionsListCookie = Record<string, any>;
  export type InsDeleteApiV1InformationQuestionsListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1InformationQuestionsListGeneric = {
    query: InsDeleteApiV1InformationQuestionsListQuery;
    params: InsDeleteApiV1InformationQuestionsListParams;
    data: InsDeleteApiV1InformationQuestionsListBody;
    header: InsDeleteApiV1InformationQuestionsListHeader;
    cookie: InsDeleteApiV1InformationQuestionsListCookie;
    result: InsDeleteApiV1InformationQuestionsListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/informationQuestions/item
   * @summary 修改
   * @description
   */
  export type InsPutApiV1InformationQuestionsItemQuery = Record<string, any>;
  export type InsPutApiV1InformationQuestionsItemParams = Record<string, any>;
  export type InsPutApiV1InformationQuestionsItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** number (可选) - 排序 | 格式: int32 */
    order?: number;

    /** "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}" */
    questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";

    /** string (可选) - 问题文本 */
    questionText?: string;

    /** boolean (可选) - 是否必填 */
    required?: boolean;

    /** string (可选) - code */
    code?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";
  };
  export type InsPutApiV1InformationQuestionsItemHeader = Record<string, any>;
  export type InsPutApiV1InformationQuestionsItemCookie = Record<string, any>;
  export type InsPutApiV1InformationQuestionsItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1InformationQuestionsItemGeneric = {
    query: InsPutApiV1InformationQuestionsItemQuery;
    params: InsPutApiV1InformationQuestionsItemParams;
    data: InsPutApiV1InformationQuestionsItemBody;
    header: InsPutApiV1InformationQuestionsItemHeader;
    cookie: InsPutApiV1InformationQuestionsItemCookie;
    result: InsPutApiV1InformationQuestionsItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/informationQuestions/item
   * @summary 新增
   * @description
   */
  export type InsPostApiV1InformationQuestionsItemQuery = Record<string, any>;
  export type InsPostApiV1InformationQuestionsItemParams = Record<string, any>;
  export type InsPostApiV1InformationQuestionsItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** number (可选) - 排序 | 格式: int32 */
    order?: number;

    /** "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}" */
    questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";

    /** string (可选) - 问题文本 */
    questionText?: string;

    /** boolean (可选) - 是否必填 */
    required?: boolean;

    /** string (可选) - code */
    code?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** array (可选) */
    optionList?: XinliModels.OptionsDTO[];
  };
  export type InsPostApiV1InformationQuestionsItemHeader = Record<string, any>;
  export type InsPostApiV1InformationQuestionsItemCookie = Record<string, any>;
  export type InsPostApiV1InformationQuestionsItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.InformationQuestionsDTO (可选) */
    data?: XinliModels.InformationQuestionsDTO;
  };
  export type InsPostApiV1InformationQuestionsItemGeneric = {
    query: InsPostApiV1InformationQuestionsItemQuery;
    params: InsPostApiV1InformationQuestionsItemParams;
    data: InsPostApiV1InformationQuestionsItemBody;
    header: InsPostApiV1InformationQuestionsItemHeader;
    cookie: InsPostApiV1InformationQuestionsItemCookie;
    result: InsPostApiV1InformationQuestionsItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/informationCollection/item
   * @summary 修改
   * @description
   */
  export type InsPutApiV1InformationCollectionItemQuery = Record<string, any>;
  export type InsPutApiV1InformationCollectionItemParams = Record<string, any>;
  export type InsPutApiV1InformationCollectionItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 用户ID */
    userId?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** string (可选) - 填写的内容 */
    responseContent?: string;
  };
  export type InsPutApiV1InformationCollectionItemHeader = Record<string, any>;
  export type InsPutApiV1InformationCollectionItemCookie = Record<string, any>;
  export type InsPutApiV1InformationCollectionItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1InformationCollectionItemGeneric = {
    query: InsPutApiV1InformationCollectionItemQuery;
    params: InsPutApiV1InformationCollectionItemParams;
    data: InsPutApiV1InformationCollectionItemBody;
    header: InsPutApiV1InformationCollectionItemHeader;
    cookie: InsPutApiV1InformationCollectionItemCookie;
    result: InsPutApiV1InformationCollectionItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/informationCollection/item
   * @summary 新增
   * @description
   */
  export type InsPostApiV1InformationCollectionItemQuery = Record<string, any>;
  export type InsPostApiV1InformationCollectionItemParams = Record<string, any>;
  export type InsPostApiV1InformationCollectionItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 用户ID */
    userId?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** string (可选) - 填写的内容 */
    responseContent?: string;

    /** string (可选) - 量表标题 */
    title?: string;

    /** string (可选) - 用户名 */
    userName?: string;

    /** array (可选) - 传入对象 */
    contentList?: XinliModels.Content[];
  };
  export type InsPostApiV1InformationCollectionItemHeader = Record<string, any>;
  export type InsPostApiV1InformationCollectionItemCookie = Record<string, any>;
  export type InsPostApiV1InformationCollectionItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.InformationCollectionDTO (可选) */
    data?: XinliModels.InformationCollectionDTO;
  };
  export type InsPostApiV1InformationCollectionItemGeneric = {
    query: InsPostApiV1InformationCollectionItemQuery;
    params: InsPostApiV1InformationCollectionItemParams;
    data: InsPostApiV1InformationCollectionItemBody;
    header: InsPostApiV1InformationCollectionItemHeader;
    cookie: InsPostApiV1InformationCollectionItemCookie;
    result: InsPostApiV1InformationCollectionItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/doctor/item
   * @summary 修改
   * @description
   */
  export type InsPutApiV1DoctorItemQuery = Record<string, any>;
  export type InsPutApiV1DoctorItemParams = Record<string, any>;
  export type InsPutApiV1DoctorItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 医师姓名 */
    name?: string;

    /** string (可选) - 绑定的机构ID */
    institutionId?: string;

    /** boolean (可选) - 是否在线 */
    isOnline?: boolean;

    /** string (可选) - 医生标签 */
    label?: string;

    /** string (可选) - 医师等级 */
    level?: string;

    /** string (可选) - 擅长领域 */
    specialty?: string;

    /** string (可选) - 个人简介 */
    introduction?: string;

    /** number (可选) - 咨询费用 */
    serviceFee?: number;

    /** string (可选) - 地址 */
    address?: string;

    /** number (可选) - 服务时长 | 格式: int32 */
    serviceHours?: number;

    /** number (可选) - 服务次数 | 格式: int32 */
    serviceCount?: number;

    /** string (可选) - 入行时间 */
    entryTime?: string;

    /** number (可选) - 在线时长 | 格式: int32 */
    onlineHours?: number;

    /** string (可选) - 下线时间 | 格式: date-time */
    logoutTime?: string;

    /** string (可选) - 登录时间 | 格式: date-time */
    loginTime?: string;

    /** string (可选) - 审核意见 */
    reason?: string;

    /** string - 身份证正面 */
    idCardFont: string;

    /** string - 身份证反面 */
    idCardBack: string;

    /** string (可选) - 证书-允许传多个,逗号分隔 */
    qualifications?: string;

    /** string - 电话 */
    phone: string;

    /** string (可选) - 头像 */
    avatar?: string;
  };
  export type InsPutApiV1DoctorItemHeader = Record<string, any>;
  export type InsPutApiV1DoctorItemCookie = Record<string, any>;
  export type InsPutApiV1DoctorItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1DoctorItemGeneric = {
    query: InsPutApiV1DoctorItemQuery;
    params: InsPutApiV1DoctorItemParams;
    data: InsPutApiV1DoctorItemBody;
    header: InsPutApiV1DoctorItemHeader;
    cookie: InsPutApiV1DoctorItemCookie;
    result: InsPutApiV1DoctorItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/doctor/item
   * @summary 新增
   * @description
   */
  export type InsPostApiV1DoctorItemQuery = Record<string, any>;
  export type InsPostApiV1DoctorItemParams = Record<string, any>;
  export type InsPostApiV1DoctorItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 医师姓名 */
    name: string;

    /** string - 身份证号 */
    idCard: string;

    /** string - 电话 */
    phone: string;

    /** string - 职务 */
    job: string;

    /** string - 擅长领域 */
    specialty: string;

    /** string (可选) - 绑定的机构ID */
    institutionId?: string;

    /** string (可选) - 地址 */
    address?: string;

    /** string - 个人简介 */
    introduction: string;

    /** string - 身份证正面 */
    idCardFont: string;

    /** string - 身份证反面 */
    idCardBack: string;

    /** string (可选) - 证书-允许传多个,逗号分隔 */
    qualifications?: string;

    /** number - 咨询费用 */
    serviceFee: number;

    /** "{"desc":"系统","name":"SYSTEM"}" | "{"desc":"个人","name":"PERSONAL"}" (可选) - 申请类型 | 可选值: "{\"desc\":\"系统\",\"name\":\"SYSTEM\"}", "{\"desc\":\"个人\",\"name\":\"PERSONAL\"}" */
    applicationType?: "SYSTEM" | "PERSONAL";

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** boolean (可选) - 是否在线 */
    isOnline?: boolean;

    /** "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" (可选) - 申请审核状态，枚举：AuditStatus | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}" */
    auditStatus?: "WAIT" | "PASS" | "FAIL";

    /** string (可选) - 医生标签 */
    label?: string;

    /** string (可选) - 医师等级 */
    level?: string;

    /** number (可选) - 服务时长 | 格式: int32 */
    serviceHours?: number;

    /** number (可选) - 服务次数 | 格式: int32 */
    serviceCount?: number;

    /** string - 入行时间 */
    entryTime: string;

    /** number (可选) - 在线时长 | 格式: int32 */
    onlineHours?: number;

    /** string (可选) - 下线时间 | 格式: date-time */
    logoutTime?: string;

    /** string (可选) - 登录时间 | 格式: date-time */
    loginTime?: string;

    /** string (可选) - 申请人ID */
    userId?: string;

    /** string (可选) - 审核意见 */
    reason?: string;

    /** string (可选) - 密码 */
    userPassword?: string;

    /** string (可选) */
    institutionName?: string;

    /** string (可选) - 头像 */
    avatar?: string;

    /** string (可选) - 角色id - 管端添加必填，审核通过必填 */
    roleIds?: string;

    /** string (可选) - 账号id - 后端处理 */
    accountId?: string;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex: "MAN" | "WOMAN" | "UNKNOWN";
  };
  export type InsPostApiV1DoctorItemHeader = Record<string, any>;
  export type InsPostApiV1DoctorItemCookie = Record<string, any>;
  export type InsPostApiV1DoctorItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.DoctorDTO (可选) */
    data?: XinliModels.DoctorDTO;
  };
  export type InsPostApiV1DoctorItemGeneric = {
    query: InsPostApiV1DoctorItemQuery;
    params: InsPostApiV1DoctorItemParams;
    data: InsPostApiV1DoctorItemBody;
    header: InsPostApiV1DoctorItemHeader;
    cookie: InsPostApiV1DoctorItemCookie;
    result: InsPostApiV1DoctorItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/course/type/item
   * @summary 修改课程
   * @description
   */
  export type InsPutApiV1CourseTypeItemQuery = Record<string, any>;
  export type InsPutApiV1CourseTypeItemParams = Record<string, any>;
  export type InsPutApiV1CourseTypeItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 标题 */
    title: string;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** string (可选) */
    pid?: string;
  };
  export type InsPutApiV1CourseTypeItemHeader = Record<string, any>;
  export type InsPutApiV1CourseTypeItemCookie = Record<string, any>;
  export type InsPutApiV1CourseTypeItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1CourseTypeItemGeneric = {
    query: InsPutApiV1CourseTypeItemQuery;
    params: InsPutApiV1CourseTypeItemParams;
    data: InsPutApiV1CourseTypeItemBody;
    header: InsPutApiV1CourseTypeItemHeader;
    cookie: InsPutApiV1CourseTypeItemCookie;
    result: InsPutApiV1CourseTypeItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/course/type/item
   * @summary 添加课程分类
   * @description
   */
  export type InsPostApiV1CourseTypeItemQuery = Record<string, any>;
  export type InsPostApiV1CourseTypeItemParams = Record<string, any>;
  export type InsPostApiV1CourseTypeItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 标题 */
    title: string;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** string (可选) */
    pid?: string;
  };
  export type InsPostApiV1CourseTypeItemHeader = Record<string, any>;
  export type InsPostApiV1CourseTypeItemCookie = Record<string, any>;
  export type InsPostApiV1CourseTypeItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.CourseTypeDto (可选) */
    data?: XinliModels.CourseTypeDto;
  };
  export type InsPostApiV1CourseTypeItemGeneric = {
    query: InsPostApiV1CourseTypeItemQuery;
    params: InsPostApiV1CourseTypeItemParams;
    data: InsPostApiV1CourseTypeItemBody;
    header: InsPostApiV1CourseTypeItemHeader;
    cookie: InsPostApiV1CourseTypeItemCookie;
    result: InsPostApiV1CourseTypeItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/course/type/item
   * @summary 批量删除课程
   * @description
   */
  export type InsDeleteApiV1CourseTypeItemQuery = Record<string, any>;
  export type InsDeleteApiV1CourseTypeItemParams = Record<string, any>;
  export type InsDeleteApiV1CourseTypeItemBody = string[];
  export type InsDeleteApiV1CourseTypeItemHeader = Record<string, any>;
  export type InsDeleteApiV1CourseTypeItemCookie = Record<string, any>;
  export type InsDeleteApiV1CourseTypeItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1CourseTypeItemGeneric = {
    query: InsDeleteApiV1CourseTypeItemQuery;
    params: InsDeleteApiV1CourseTypeItemParams;
    data: InsDeleteApiV1CourseTypeItemBody;
    header: InsDeleteApiV1CourseTypeItemHeader;
    cookie: InsDeleteApiV1CourseTypeItemCookie;
    result: InsDeleteApiV1CourseTypeItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/course/resources/item
   * @summary 修改
   * @description
   */
  export type InsPutApiV1CourseResourcesItemQuery = Record<string, any>;
  export type InsPutApiV1CourseResourcesItemParams = Record<string, any>;
  export type InsPutApiV1CourseResourcesItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 课程id */
    courseId: string;

    /** string - 课时标题 */
    title: string;

    /** string (可选) - 课时介绍 */
    description?: string;

    /** number (可选) - 时长 | 格式: double */
    duration?: number;

    /** string (可选) - 附件 */
    annex?: string;

    /** string - 资源地址 */
    resourceUrl: string;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** boolean - 是否开放 */
    isOpen: boolean;
  };
  export type InsPutApiV1CourseResourcesItemHeader = Record<string, any>;
  export type InsPutApiV1CourseResourcesItemCookie = Record<string, any>;
  export type InsPutApiV1CourseResourcesItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1CourseResourcesItemGeneric = {
    query: InsPutApiV1CourseResourcesItemQuery;
    params: InsPutApiV1CourseResourcesItemParams;
    data: InsPutApiV1CourseResourcesItemBody;
    header: InsPutApiV1CourseResourcesItemHeader;
    cookie: InsPutApiV1CourseResourcesItemCookie;
    result: InsPutApiV1CourseResourcesItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/course/resources/item
   * @summary 添加
   * @description
   */
  export type InsPostApiV1CourseResourcesItemQuery = Record<string, any>;
  export type InsPostApiV1CourseResourcesItemParams = Record<string, any>;
  export type InsPostApiV1CourseResourcesItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 课程id */
    courseId: string;

    /** string - 课时标题 */
    title: string;

    /** string (可选) - 课时介绍 */
    description?: string;

    /** number (可选) - 时长 | 格式: double */
    duration?: number;

    /** string (可选) - 附件 */
    annex?: string;

    /** string - 资源地址 */
    resourceUrl: string;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** boolean - 是否开放 */
    isOpen: boolean;
  };
  export type InsPostApiV1CourseResourcesItemHeader = Record<string, any>;
  export type InsPostApiV1CourseResourcesItemCookie = Record<string, any>;
  export type InsPostApiV1CourseResourcesItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.CourseResourcesDto (可选) */
    data?: XinliModels.CourseResourcesDto;
  };
  export type InsPostApiV1CourseResourcesItemGeneric = {
    query: InsPostApiV1CourseResourcesItemQuery;
    params: InsPostApiV1CourseResourcesItemParams;
    data: InsPostApiV1CourseResourcesItemBody;
    header: InsPostApiV1CourseResourcesItemHeader;
    cookie: InsPostApiV1CourseResourcesItemCookie;
    result: InsPostApiV1CourseResourcesItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/course/resources/item
   * @summary 批量删除
   * @description
   */
  export type InsDeleteApiV1CourseResourcesItemQuery = Record<string, any>;
  export type InsDeleteApiV1CourseResourcesItemParams = Record<string, any>;
  export type InsDeleteApiV1CourseResourcesItemBody = string[];
  export type InsDeleteApiV1CourseResourcesItemHeader = Record<string, any>;
  export type InsDeleteApiV1CourseResourcesItemCookie = Record<string, any>;
  export type InsDeleteApiV1CourseResourcesItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1CourseResourcesItemGeneric = {
    query: InsDeleteApiV1CourseResourcesItemQuery;
    params: InsDeleteApiV1CourseResourcesItemParams;
    data: InsDeleteApiV1CourseResourcesItemBody;
    header: InsDeleteApiV1CourseResourcesItemHeader;
    cookie: InsDeleteApiV1CourseResourcesItemCookie;
    result: InsDeleteApiV1CourseResourcesItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/category/list
   * @summary 批量修改
   * @description
   */
  export type InsPutApiV1CategoryListQuery = Record<string, any>;
  export type InsPutApiV1CategoryListParams = Record<string, any>;
  export type InsPutApiV1CategoryListBody = XinliModels.UpdateCategory[];
  export type InsPutApiV1CategoryListHeader = Record<string, any>;
  export type InsPutApiV1CategoryListCookie = Record<string, any>;
  export type InsPutApiV1CategoryListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1CategoryListGeneric = {
    query: InsPutApiV1CategoryListQuery;
    params: InsPutApiV1CategoryListParams;
    data: InsPutApiV1CategoryListBody;
    header: InsPutApiV1CategoryListHeader;
    cookie: InsPutApiV1CategoryListCookie;
    result: InsPutApiV1CategoryListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/category/list
   * @summary 批量新增
   * @description
   */
  export type InsPostApiV1CategoryListQuery = Record<string, any>;
  export type InsPostApiV1CategoryListParams = Record<string, any>;
  export type InsPostApiV1CategoryListBody = XinliModels.CategoryDTO[];
  export type InsPostApiV1CategoryListHeader = Record<string, any>;
  export type InsPostApiV1CategoryListCookie = Record<string, any>;
  export type InsPostApiV1CategoryListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.CategoryDTO[];
  };
  export type InsPostApiV1CategoryListGeneric = {
    query: InsPostApiV1CategoryListQuery;
    params: InsPostApiV1CategoryListParams;
    data: InsPostApiV1CategoryListBody;
    header: InsPostApiV1CategoryListHeader;
    cookie: InsPostApiV1CategoryListCookie;
    result: InsPostApiV1CategoryListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/category/list
   * @summary 批量删除
   * @description
   */
  export type InsDeleteApiV1CategoryListQuery = Record<string, any>;
  export type InsDeleteApiV1CategoryListParams = Record<string, any>;
  export type InsDeleteApiV1CategoryListBody = string[];
  export type InsDeleteApiV1CategoryListHeader = Record<string, any>;
  export type InsDeleteApiV1CategoryListCookie = Record<string, any>;
  export type InsDeleteApiV1CategoryListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1CategoryListGeneric = {
    query: InsDeleteApiV1CategoryListQuery;
    params: InsDeleteApiV1CategoryListParams;
    data: InsDeleteApiV1CategoryListBody;
    header: InsDeleteApiV1CategoryListHeader;
    cookie: InsDeleteApiV1CategoryListCookie;
    result: InsDeleteApiV1CategoryListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/category/item
   * @summary 修改
   * @description
   */
  export type InsPutApiV1CategoryItemQuery = Record<string, any>;
  export type InsPutApiV1CategoryItemParams = Record<string, any>;
  export type InsPutApiV1CategoryItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 名称 */
    name?: string;

    /** string (可选) - 描述 */
    description?: string;

    /** string (可选) - 父id */
    parentId?: string;

    /** string (可选) - 所属机构ID */
    institutionId?: string;
  };
  export type InsPutApiV1CategoryItemHeader = Record<string, any>;
  export type InsPutApiV1CategoryItemCookie = Record<string, any>;
  export type InsPutApiV1CategoryItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1CategoryItemGeneric = {
    query: InsPutApiV1CategoryItemQuery;
    params: InsPutApiV1CategoryItemParams;
    data: InsPutApiV1CategoryItemBody;
    header: InsPutApiV1CategoryItemHeader;
    cookie: InsPutApiV1CategoryItemCookie;
    result: InsPutApiV1CategoryItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/category/item
   * @summary 新增
   * @description
   */
  export type InsPostApiV1CategoryItemQuery = Record<string, any>;
  export type InsPostApiV1CategoryItemParams = Record<string, any>;
  export type InsPostApiV1CategoryItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 名称 */
    name?: string;

    /** string (可选) - 描述 */
    description?: string;

    /** string (可选) - 父id */
    parentId?: string;

    /** string (可选) - 所属机构ID */
    institutionId?: string;

    /** string (可选) - 机构名称 */
    insName?: string;
  };
  export type InsPostApiV1CategoryItemHeader = Record<string, any>;
  export type InsPostApiV1CategoryItemCookie = Record<string, any>;
  export type InsPostApiV1CategoryItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.CategoryDTO (可选) */
    data?: XinliModels.CategoryDTO;
  };
  export type InsPostApiV1CategoryItemGeneric = {
    query: InsPostApiV1CategoryItemQuery;
    params: InsPostApiV1CategoryItemParams;
    data: InsPostApiV1CategoryItemBody;
    header: InsPostApiV1CategoryItemHeader;
    cookie: InsPostApiV1CategoryItemCookie;
    result: InsPostApiV1CategoryItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answers/list
   * @summary 批量修改
   * @description
   */
  export type InsPutApiV1AnswersListQuery = Record<string, any>;
  export type InsPutApiV1AnswersListParams = Record<string, any>;
  export type InsPutApiV1AnswersListBody = XinliModels.UpdateAnswers[];
  export type InsPutApiV1AnswersListHeader = Record<string, any>;
  export type InsPutApiV1AnswersListCookie = Record<string, any>;
  export type InsPutApiV1AnswersListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1AnswersListGeneric = {
    query: InsPutApiV1AnswersListQuery;
    params: InsPutApiV1AnswersListParams;
    data: InsPutApiV1AnswersListBody;
    header: InsPutApiV1AnswersListHeader;
    cookie: InsPutApiV1AnswersListCookie;
    result: InsPutApiV1AnswersListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answers/list
   * @summary 批量新增
   * @description
   */
  export type InsPostApiV1AnswersListQuery = Record<string, any>;
  export type InsPostApiV1AnswersListParams = Record<string, any>;
  export type InsPostApiV1AnswersListBody = XinliModels.AnswersDTO[];
  export type InsPostApiV1AnswersListHeader = Record<string, any>;
  export type InsPostApiV1AnswersListCookie = Record<string, any>;
  export type InsPostApiV1AnswersListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.AnswersDTO[];
  };
  export type InsPostApiV1AnswersListGeneric = {
    query: InsPostApiV1AnswersListQuery;
    params: InsPostApiV1AnswersListParams;
    data: InsPostApiV1AnswersListBody;
    header: InsPostApiV1AnswersListHeader;
    cookie: InsPostApiV1AnswersListCookie;
    result: InsPostApiV1AnswersListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answers/list
   * @summary 批量删除
   * @description
   */
  export type InsDeleteApiV1AnswersListQuery = Record<string, any>;
  export type InsDeleteApiV1AnswersListParams = Record<string, any>;
  export type InsDeleteApiV1AnswersListBody = string[];
  export type InsDeleteApiV1AnswersListHeader = Record<string, any>;
  export type InsDeleteApiV1AnswersListCookie = Record<string, any>;
  export type InsDeleteApiV1AnswersListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1AnswersListGeneric = {
    query: InsDeleteApiV1AnswersListQuery;
    params: InsDeleteApiV1AnswersListParams;
    data: InsDeleteApiV1AnswersListBody;
    header: InsDeleteApiV1AnswersListHeader;
    cookie: InsDeleteApiV1AnswersListCookie;
    result: InsDeleteApiV1AnswersListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answers/item
   * @summary 修改
   * @description
   */
  export type InsPutApiV1AnswersItemQuery = Record<string, any>;
  export type InsPutApiV1AnswersItemParams = Record<string, any>;
  export type InsPutApiV1AnswersItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 用户ID */
    userId?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** number (可选) - 总分数 | 格式: int32 */
    totalScore?: number;

    /** string (可选) - 回答详细内容 */
    answer?: string;
  };
  export type InsPutApiV1AnswersItemHeader = Record<string, any>;
  export type InsPutApiV1AnswersItemCookie = Record<string, any>;
  export type InsPutApiV1AnswersItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1AnswersItemGeneric = {
    query: InsPutApiV1AnswersItemQuery;
    params: InsPutApiV1AnswersItemParams;
    data: InsPutApiV1AnswersItemBody;
    header: InsPutApiV1AnswersItemHeader;
    cookie: InsPutApiV1AnswersItemCookie;
    result: InsPutApiV1AnswersItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answers/item
   * @summary 新增
   * @description
   */
  export type InsPostApiV1AnswersItemQuery = Record<string, any>;
  export type InsPostApiV1AnswersItemParams = Record<string, any>;
  export type InsPostApiV1AnswersItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 用户ID */
    userId?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** number (可选) - 总分数 | 格式: int32 */
    totalScore?: number;

    /** string (可选) - 回答详细内容 */
    answer?: string;

    /** string (可选) - 用户名 */
    userName?: string;

    /** string (可选) - 量表标题 */
    title?: string;

    /** string (可选) - 维度 */
    dimension?: string;

    /** string (可选) - 测评结论 */
    conclusion?: string;

    /** string (可选) - 结论解析 */
    analysis?: string;

    /** string (可选) - 建议 */
    recommendation?: string;
  };
  export type InsPostApiV1AnswersItemHeader = Record<string, any>;
  export type InsPostApiV1AnswersItemCookie = Record<string, any>;
  export type InsPostApiV1AnswersItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AnswersDTO (可选) */
    data?: XinliModels.AnswersDTO;
  };
  export type InsPostApiV1AnswersItemGeneric = {
    query: InsPostApiV1AnswersItemQuery;
    params: InsPostApiV1AnswersItemParams;
    data: InsPostApiV1AnswersItemBody;
    header: InsPostApiV1AnswersItemHeader;
    cookie: InsPostApiV1AnswersItemCookie;
    result: InsPostApiV1AnswersItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answerScoreRanges/list
   * @summary 批量修改
   * @description
   */
  export type InsPutApiV1AnswerScoreRangesListQuery = Record<string, any>;
  export type InsPutApiV1AnswerScoreRangesListParams = Record<string, any>;
  export type InsPutApiV1AnswerScoreRangesListBody = XinliModels.UpdateAnswerScoreRanges[];
  export type InsPutApiV1AnswerScoreRangesListHeader = Record<string, any>;
  export type InsPutApiV1AnswerScoreRangesListCookie = Record<string, any>;
  export type InsPutApiV1AnswerScoreRangesListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1AnswerScoreRangesListGeneric = {
    query: InsPutApiV1AnswerScoreRangesListQuery;
    params: InsPutApiV1AnswerScoreRangesListParams;
    data: InsPutApiV1AnswerScoreRangesListBody;
    header: InsPutApiV1AnswerScoreRangesListHeader;
    cookie: InsPutApiV1AnswerScoreRangesListCookie;
    result: InsPutApiV1AnswerScoreRangesListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answerScoreRanges/list
   * @summary 批量新增
   * @description
   */
  export type InsPostApiV1AnswerScoreRangesListQuery = Record<string, any>;
  export type InsPostApiV1AnswerScoreRangesListParams = Record<string, any>;
  export type InsPostApiV1AnswerScoreRangesListBody = XinliModels.AnswerScoreRangesDTO[];
  export type InsPostApiV1AnswerScoreRangesListHeader = Record<string, any>;
  export type InsPostApiV1AnswerScoreRangesListCookie = Record<string, any>;
  export type InsPostApiV1AnswerScoreRangesListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.AnswerScoreRangesDTO[];
  };
  export type InsPostApiV1AnswerScoreRangesListGeneric = {
    query: InsPostApiV1AnswerScoreRangesListQuery;
    params: InsPostApiV1AnswerScoreRangesListParams;
    data: InsPostApiV1AnswerScoreRangesListBody;
    header: InsPostApiV1AnswerScoreRangesListHeader;
    cookie: InsPostApiV1AnswerScoreRangesListCookie;
    result: InsPostApiV1AnswerScoreRangesListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answerScoreRanges/list
   * @summary 批量删除
   * @description
   */
  export type InsDeleteApiV1AnswerScoreRangesListQuery = Record<string, any>;
  export type InsDeleteApiV1AnswerScoreRangesListParams = Record<string, any>;
  export type InsDeleteApiV1AnswerScoreRangesListBody = string[];
  export type InsDeleteApiV1AnswerScoreRangesListHeader = Record<string, any>;
  export type InsDeleteApiV1AnswerScoreRangesListCookie = Record<string, any>;
  export type InsDeleteApiV1AnswerScoreRangesListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1AnswerScoreRangesListGeneric = {
    query: InsDeleteApiV1AnswerScoreRangesListQuery;
    params: InsDeleteApiV1AnswerScoreRangesListParams;
    data: InsDeleteApiV1AnswerScoreRangesListBody;
    header: InsDeleteApiV1AnswerScoreRangesListHeader;
    cookie: InsDeleteApiV1AnswerScoreRangesListCookie;
    result: InsDeleteApiV1AnswerScoreRangesListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answerScoreRanges/item
   * @summary 修改
   * @description
   */
  export type InsPutApiV1AnswerScoreRangesItemQuery = Record<string, any>;
  export type InsPutApiV1AnswerScoreRangesItemParams = Record<string, any>;
  export type InsPutApiV1AnswerScoreRangesItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** string (可选) - 维度 */
    dimension?: string;

    /** number (可选) - 分数区间最小值 | 格式: int32 */
    minScore?: number;

    /** number (可选) - 分数区间最大值 | 格式: int32 */
    maxScore?: number;

    /** string (可选) - 测评结论 */
    conclusion?: string;

    /** string (可选) - 结论解析 */
    analysis?: string;

    /** string (可选) - 建议 */
    recommendation?: string;
  };
  export type InsPutApiV1AnswerScoreRangesItemHeader = Record<string, any>;
  export type InsPutApiV1AnswerScoreRangesItemCookie = Record<string, any>;
  export type InsPutApiV1AnswerScoreRangesItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1AnswerScoreRangesItemGeneric = {
    query: InsPutApiV1AnswerScoreRangesItemQuery;
    params: InsPutApiV1AnswerScoreRangesItemParams;
    data: InsPutApiV1AnswerScoreRangesItemBody;
    header: InsPutApiV1AnswerScoreRangesItemHeader;
    cookie: InsPutApiV1AnswerScoreRangesItemCookie;
    result: InsPutApiV1AnswerScoreRangesItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answerScoreRanges/item
   * @summary 新增
   * @description
   */
  export type InsPostApiV1AnswerScoreRangesItemQuery = Record<string, any>;
  export type InsPostApiV1AnswerScoreRangesItemParams = Record<string, any>;
  export type InsPostApiV1AnswerScoreRangesItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** string (可选) - 维度 */
    dimension?: string;

    /** number (可选) - 分数区间最小值 | 格式: int32 */
    minScore?: number;

    /** number (可选) - 分数区间最大值 | 格式: int32 */
    maxScore?: number;

    /** string (可选) - 测评结论 */
    conclusion?: string;

    /** string (可选) - 结论解析 */
    analysis?: string;

    /** string (可选) - 建议 */
    recommendation?: string;

    /** string (可选) - 量表标题 */
    title?: string;
  };
  export type InsPostApiV1AnswerScoreRangesItemHeader = Record<string, any>;
  export type InsPostApiV1AnswerScoreRangesItemCookie = Record<string, any>;
  export type InsPostApiV1AnswerScoreRangesItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AnswerScoreRangesDTO (可选) */
    data?: XinliModels.AnswerScoreRangesDTO;
  };
  export type InsPostApiV1AnswerScoreRangesItemGeneric = {
    query: InsPostApiV1AnswerScoreRangesItemQuery;
    params: InsPostApiV1AnswerScoreRangesItemParams;
    data: InsPostApiV1AnswerScoreRangesItemBody;
    header: InsPostApiV1AnswerScoreRangesItemHeader;
    cookie: InsPostApiV1AnswerScoreRangesItemCookie;
    result: InsPostApiV1AnswerScoreRangesItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/account/item
   * @summary 修改账号信息
   * @description
   */
  export type InsPutApiV1AccountItemQuery = Record<string, any>;
  export type InsPutApiV1AccountItemParams = Record<string, any>;
  export type InsPutApiV1AccountItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 角色ids */
    roleIds?: string;

    /** string (可选) - 用户名 */
    userName?: string;

    /** "{"desc":"管理","name":"ADMIN"}" | "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" | "{"desc":"用户","name":"USER"}" (可选) - 类型(超管,商家) | 可选值: "{\"desc\":\"管理\",\"name\":\"ADMIN\"}", "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}", "{\"desc\":\"用户\",\"name\":\"USER\"}" */
    type?: "ADMIN" | "INSTITUTION" | "DOCTOR" | "USER";

    /** string (可选) - 昵称 */
    nickName?: string;

    /** string (可选) - 电话 */
    phone?: string;

    /** string (可选) - 身份证号 */
    idNumber?: string;

    /** string (可选) - 头像路径 */
    avatarPicPath?: string;

    /** string (可选) - 菜单ids */
    menuIds?: string;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";

    /** number (可选) - 年龄 | 格式: int32 */
    age?: number;

    /** string (可选) - 描述 */
    desc?: string;
  };
  export type InsPutApiV1AccountItemHeader = Record<string, any>;
  export type InsPutApiV1AccountItemCookie = Record<string, any>;
  export type InsPutApiV1AccountItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1AccountItemGeneric = {
    query: InsPutApiV1AccountItemQuery;
    params: InsPutApiV1AccountItemParams;
    data: InsPutApiV1AccountItemBody;
    header: InsPutApiV1AccountItemHeader;
    cookie: InsPutApiV1AccountItemCookie;
    result: InsPutApiV1AccountItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/account/info/status/{id}
   * @summary 修改状态
   * @description
   */
  export type InsPutApiV1AccountInfoStatusByIdQuery = Record<string, any>;
  export type InsPutApiV1AccountInfoStatusByIdParams = {
    /** string */
    id: string;
  };
  export type InsPutApiV1AccountInfoStatusByIdBody = any;
  export type InsPutApiV1AccountInfoStatusByIdHeader = Record<string, any>;
  export type InsPutApiV1AccountInfoStatusByIdCookie = Record<string, any>;
  export type InsPutApiV1AccountInfoStatusByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1AccountInfoStatusByIdGeneric = {
    query: InsPutApiV1AccountInfoStatusByIdQuery;
    params: InsPutApiV1AccountInfoStatusByIdParams;
    data: InsPutApiV1AccountInfoStatusByIdBody;
    header: InsPutApiV1AccountInfoStatusByIdHeader;
    cookie: InsPutApiV1AccountInfoStatusByIdCookie;
    result: InsPutApiV1AccountInfoStatusByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/account/info/password
   * @summary 修改密码
   * @description
   */
  export type InsPutApiV1AccountInfoPasswordQuery = Record<string, any>;
  export type InsPutApiV1AccountInfoPasswordParams = Record<string, any>;
  export type InsPutApiV1AccountInfoPasswordBody = {
    /** string - 用户名 */
    username: string;

    /** string - 用户密码 */
    password: string;

    /** string (可选) - ras密码 */
    rsaPassword?: string;

    /** string (可选) */
    code?: string;

    /** string (可选) - 商家id */
    storeId?: string;

    /** string (可选) */
    openId?: string;

    /** number (可选) - 格式: int32 */
    remainCount?: number;
  };
  export type InsPutApiV1AccountInfoPasswordHeader = Record<string, any>;
  export type InsPutApiV1AccountInfoPasswordCookie = Record<string, any>;
  export type InsPutApiV1AccountInfoPasswordResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1AccountInfoPasswordGeneric = {
    query: InsPutApiV1AccountInfoPasswordQuery;
    params: InsPutApiV1AccountInfoPasswordParams;
    data: InsPutApiV1AccountInfoPasswordBody;
    header: InsPutApiV1AccountInfoPasswordHeader;
    cookie: InsPutApiV1AccountInfoPasswordCookie;
    result: InsPutApiV1AccountInfoPasswordResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/account/info/item
   * @summary 修改账号信息
   * @description
   */
  export type InsPutApiV1AccountInfoItemQuery = Record<string, any>;
  export type InsPutApiV1AccountInfoItemParams = Record<string, any>;
  export type InsPutApiV1AccountInfoItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 角色ids */
    roleIds?: string;

    /** string (可选) - 用户名 */
    userName?: string;

    /** "{"desc":"管理","name":"ADMIN"}" | "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" | "{"desc":"用户","name":"USER"}" (可选) - 类型(超管,商家) | 可选值: "{\"desc\":\"管理\",\"name\":\"ADMIN\"}", "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}", "{\"desc\":\"用户\",\"name\":\"USER\"}" */
    type?: "ADMIN" | "INSTITUTION" | "DOCTOR" | "USER";

    /** string (可选) - 昵称 */
    nickName?: string;

    /** string (可选) - 电话 */
    phone?: string;

    /** string (可选) - 身份证号 */
    idNumber?: string;

    /** string (可选) - 头像路径 */
    avatarPicPath?: string;

    /** string (可选) - 菜单ids */
    menuIds?: string;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";

    /** number (可选) - 年龄 | 格式: int32 */
    age?: number;

    /** string (可选) - 描述 */
    desc?: string;
  };
  export type InsPutApiV1AccountInfoItemHeader = Record<string, any>;
  export type InsPutApiV1AccountInfoItemCookie = Record<string, any>;
  export type InsPutApiV1AccountInfoItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPutApiV1AccountInfoItemGeneric = {
    query: InsPutApiV1AccountInfoItemQuery;
    params: InsPutApiV1AccountInfoItemParams;
    data: InsPutApiV1AccountInfoItemBody;
    header: InsPutApiV1AccountInfoItemHeader;
    cookie: InsPutApiV1AccountInfoItemCookie;
    result: InsPutApiV1AccountInfoItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/account/info/item
   * @summary 新增账号信息
   * @description
   */
  export type InsPostApiV1AccountInfoItemQuery = Record<string, any>;
  export type InsPostApiV1AccountInfoItemParams = Record<string, any>;
  export type InsPostApiV1AccountInfoItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 角色ids */
    roleIds: string;

    /** string - 用户名 */
    userName: string;

    /** string - 用户密码 */
    userPassword: string;

    /** "{"desc":"管理","name":"ADMIN"}" | "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" | "{"desc":"用户","name":"USER"}" - 类型(超管,商家) | 可选值: "{\"desc\":\"管理\",\"name\":\"ADMIN\"}", "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}", "{\"desc\":\"用户\",\"name\":\"USER\"}" */
    type: "ADMIN" | "INSTITUTION" | "DOCTOR" | "USER";

    /** string - 昵称 */
    nickName: string;

    /** string (可选) - 电话 */
    phone?: string;

    /** string (可选) - 身份证号 */
    idNumber?: string;

    /** string (可选) - 最后登录时间 | 格式: date-time */
    lastLoginTime?: string;

    /** string (可选) - 最后登录ip */
    lastLoginIp?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 账号状态(启用,禁用) | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** number (可选) - 登录错误次数 | 格式: int32 */
    loginErrorCount?: number;

    /** string (可选) - 登录错误时间 | 格式: date-time */
    loginErrorTime?: string;

    /** string (可选) - 头像路径 */
    avatarPicPath?: string;

    /** string (可选) - 菜单ids */
    menuIds?: string;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";

    /** number (可选) - 年龄 | 格式: int32 */
    age?: number;

    /** string (可选) - 描述 */
    desc?: string;

    /** array (可选) - 角色名称 */
    roleName?: string[];

    /** boolean (可选) */
    lock?: boolean;
  };
  export type InsPostApiV1AccountInfoItemHeader = Record<string, any>;
  export type InsPostApiV1AccountInfoItemCookie = Record<string, any>;
  export type InsPostApiV1AccountInfoItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AccountInfoDTO (可选) */
    data?: XinliModels.AccountInfoDTO;
  };
  export type InsPostApiV1AccountInfoItemGeneric = {
    query: InsPostApiV1AccountInfoItemQuery;
    params: InsPostApiV1AccountInfoItemParams;
    data: InsPostApiV1AccountInfoItemBody;
    header: InsPostApiV1AccountInfoItemHeader;
    cookie: InsPostApiV1AccountInfoItemCookie;
    result: InsPostApiV1AccountInfoItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/userInfo/getUserNameById
   * @summary 根据用户id查询用户名
   * @description
   */
  export type InsPostApiV1UserInfoGetUserNameByIdQuery = Record<string, any>;
  export type InsPostApiV1UserInfoGetUserNameByIdParams = Record<string, any>;
  export type InsPostApiV1UserInfoGetUserNameByIdBody = string[];
  export type InsPostApiV1UserInfoGetUserNameByIdHeader = Record<string, any>;
  export type InsPostApiV1UserInfoGetUserNameByIdCookie = Record<string, any>;
  export type InsPostApiV1UserInfoGetUserNameByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** object (可选) */
    data?: Record<string, string>;
  };
  export type InsPostApiV1UserInfoGetUserNameByIdGeneric = {
    query: InsPostApiV1UserInfoGetUserNameByIdQuery;
    params: InsPostApiV1UserInfoGetUserNameByIdParams;
    data: InsPostApiV1UserInfoGetUserNameByIdBody;
    header: InsPostApiV1UserInfoGetUserNameByIdHeader;
    cookie: InsPostApiV1UserInfoGetUserNameByIdCookie;
    result: InsPostApiV1UserInfoGetUserNameByIdResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/systemMessage/list/query
   * @summary 批量查询
   * @description
   */
  export type InsPostApiV1SystemMessageListQueryQuery = Record<string, any>;
  export type InsPostApiV1SystemMessageListQueryParams = Record<string, any>;
  export type InsPostApiV1SystemMessageListQueryBody = string[];
  export type InsPostApiV1SystemMessageListQueryHeader = Record<string, any>;
  export type InsPostApiV1SystemMessageListQueryCookie = Record<string, any>;
  export type InsPostApiV1SystemMessageListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SystemMessageDTO[];
  };
  export type InsPostApiV1SystemMessageListQueryGeneric = {
    query: InsPostApiV1SystemMessageListQueryQuery;
    params: InsPostApiV1SystemMessageListQueryParams;
    data: InsPostApiV1SystemMessageListQueryBody;
    header: InsPostApiV1SystemMessageListQueryHeader;
    cookie: InsPostApiV1SystemMessageListQueryCookie;
    result: InsPostApiV1SystemMessageListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveysParticipant/list/query
   * @summary 批量查询
   * @description
   */
  export type InsPostApiV1SurveysParticipantListQueryQuery = Record<string, any>;
  export type InsPostApiV1SurveysParticipantListQueryParams = Record<string, any>;
  export type InsPostApiV1SurveysParticipantListQueryBody = string[];
  export type InsPostApiV1SurveysParticipantListQueryHeader = Record<string, any>;
  export type InsPostApiV1SurveysParticipantListQueryCookie = Record<string, any>;
  export type InsPostApiV1SurveysParticipantListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SurveysParticipantDTO[];
  };
  export type InsPostApiV1SurveysParticipantListQueryGeneric = {
    query: InsPostApiV1SurveysParticipantListQueryQuery;
    params: InsPostApiV1SurveysParticipantListQueryParams;
    data: InsPostApiV1SurveysParticipantListQueryBody;
    header: InsPostApiV1SurveysParticipantListQueryHeader;
    cookie: InsPostApiV1SurveysParticipantListQueryCookie;
    result: InsPostApiV1SurveysParticipantListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/questions/list/query
   * @summary 批量查询
   * @description
   */
  export type InsPostApiV1QuestionsListQueryQuery = Record<string, any>;
  export type InsPostApiV1QuestionsListQueryParams = Record<string, any>;
  export type InsPostApiV1QuestionsListQueryBody = string[];
  export type InsPostApiV1QuestionsListQueryHeader = Record<string, any>;
  export type InsPostApiV1QuestionsListQueryCookie = Record<string, any>;
  export type InsPostApiV1QuestionsListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.QuestionsDTO[];
  };
  export type InsPostApiV1QuestionsListQueryGeneric = {
    query: InsPostApiV1QuestionsListQueryQuery;
    params: InsPostApiV1QuestionsListQueryParams;
    data: InsPostApiV1QuestionsListQueryBody;
    header: InsPostApiV1QuestionsListQueryHeader;
    cookie: InsPostApiV1QuestionsListQueryCookie;
    result: InsPostApiV1QuestionsListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/precondition/list/query
   * @summary 批量查询
   * @description
   */
  export type InsPostApiV1PreconditionListQueryQuery = Record<string, any>;
  export type InsPostApiV1PreconditionListQueryParams = Record<string, any>;
  export type InsPostApiV1PreconditionListQueryBody = string[];
  export type InsPostApiV1PreconditionListQueryHeader = Record<string, any>;
  export type InsPostApiV1PreconditionListQueryCookie = Record<string, any>;
  export type InsPostApiV1PreconditionListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.PreconditionDTO[];
  };
  export type InsPostApiV1PreconditionListQueryGeneric = {
    query: InsPostApiV1PreconditionListQueryQuery;
    params: InsPostApiV1PreconditionListQueryParams;
    data: InsPostApiV1PreconditionListQueryBody;
    header: InsPostApiV1PreconditionListQueryHeader;
    cookie: InsPostApiV1PreconditionListQueryCookie;
    result: InsPostApiV1PreconditionListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/options/list/query
   * @summary 批量查询
   * @description
   */
  export type InsPostApiV1OptionsListQueryQuery = Record<string, any>;
  export type InsPostApiV1OptionsListQueryParams = Record<string, any>;
  export type InsPostApiV1OptionsListQueryBody = string[];
  export type InsPostApiV1OptionsListQueryHeader = Record<string, any>;
  export type InsPostApiV1OptionsListQueryCookie = Record<string, any>;
  export type InsPostApiV1OptionsListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.OptionsDTO[];
  };
  export type InsPostApiV1OptionsListQueryGeneric = {
    query: InsPostApiV1OptionsListQueryQuery;
    params: InsPostApiV1OptionsListQueryParams;
    data: InsPostApiV1OptionsListQueryBody;
    header: InsPostApiV1OptionsListQueryHeader;
    cookie: InsPostApiV1OptionsListQueryCookie;
    result: InsPostApiV1OptionsListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/informationQuestions/list/query
   * @summary 批量查询
   * @description
   */
  export type InsPostApiV1InformationQuestionsListQueryQuery = Record<string, any>;
  export type InsPostApiV1InformationQuestionsListQueryParams = Record<string, any>;
  export type InsPostApiV1InformationQuestionsListQueryBody = string[];
  export type InsPostApiV1InformationQuestionsListQueryHeader = Record<string, any>;
  export type InsPostApiV1InformationQuestionsListQueryCookie = Record<string, any>;
  export type InsPostApiV1InformationQuestionsListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.InformationQuestionsDTO[];
  };
  export type InsPostApiV1InformationQuestionsListQueryGeneric = {
    query: InsPostApiV1InformationQuestionsListQueryQuery;
    params: InsPostApiV1InformationQuestionsListQueryParams;
    data: InsPostApiV1InformationQuestionsListQueryBody;
    header: InsPostApiV1InformationQuestionsListQueryHeader;
    cookie: InsPostApiV1InformationQuestionsListQueryCookie;
    result: InsPostApiV1InformationQuestionsListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/informationCollection/list/query
   * @summary 批量查询
   * @description
   */
  export type InsPostApiV1InformationCollectionListQueryQuery = Record<string, any>;
  export type InsPostApiV1InformationCollectionListQueryParams = Record<string, any>;
  export type InsPostApiV1InformationCollectionListQueryBody = string[];
  export type InsPostApiV1InformationCollectionListQueryHeader = Record<string, any>;
  export type InsPostApiV1InformationCollectionListQueryCookie = Record<string, any>;
  export type InsPostApiV1InformationCollectionListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.InformationCollectionDTO[];
  };
  export type InsPostApiV1InformationCollectionListQueryGeneric = {
    query: InsPostApiV1InformationCollectionListQueryQuery;
    params: InsPostApiV1InformationCollectionListQueryParams;
    data: InsPostApiV1InformationCollectionListQueryBody;
    header: InsPostApiV1InformationCollectionListQueryHeader;
    cookie: InsPostApiV1InformationCollectionListQueryCookie;
    result: InsPostApiV1InformationCollectionListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/file/list
   * @summary 批量上传文件（FormData）
   * @description
   */
  export type InsPostApiV1FileListQuery = {
    /** array */
    files: string[];

    /** string */
    parentPath: string;
  };
  export type InsPostApiV1FileListParams = Record<string, any>;
  export type InsPostApiV1FileListBody = any;
  export type InsPostApiV1FileListHeader = Record<string, any>;
  export type InsPostApiV1FileListCookie = Record<string, any>;
  export type InsPostApiV1FileListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.UploadResultDTO[];
  };
  export type InsPostApiV1FileListGeneric = {
    query: InsPostApiV1FileListQuery;
    params: InsPostApiV1FileListParams;
    data: InsPostApiV1FileListBody;
    header: InsPostApiV1FileListHeader;
    cookie: InsPostApiV1FileListCookie;
    result: InsPostApiV1FileListResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/file/list/base64
   * @summary 批量上传文件（Base64）
   * @description
   */
  export type InsPostApiV1FileListBase64Query = Record<string, any>;
  export type InsPostApiV1FileListBase64Params = Record<string, any>;
  export type InsPostApiV1FileListBase64Body = XinliModels.UploadBase64DTO[];
  export type InsPostApiV1FileListBase64Header = Record<string, any>;
  export type InsPostApiV1FileListBase64Cookie = Record<string, any>;
  export type InsPostApiV1FileListBase64Response = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.UploadResultDTO[];
  };
  export type InsPostApiV1FileListBase64Generic = {
    query: InsPostApiV1FileListBase64Query;
    params: InsPostApiV1FileListBase64Params;
    data: InsPostApiV1FileListBase64Body;
    header: InsPostApiV1FileListBase64Header;
    cookie: InsPostApiV1FileListBase64Cookie;
    result: InsPostApiV1FileListBase64Response;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/file/item
   * @summary 上传文件（FormData）
   * @description
   */
  export type InsPostApiV1FileItemQuery = {
    /** string */
    parentPath: string;

    /** string */
    fileName: string;
  };
  export type InsPostApiV1FileItemParams = Record<string, any>;
  export type InsPostApiV1FileItemBody = {
    /** string - 格式: binary */
    file: string;
  };
  export type InsPostApiV1FileItemHeader = Record<string, any>;
  export type InsPostApiV1FileItemCookie = Record<string, any>;
  export type InsPostApiV1FileItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.UploadResultDTO (可选) */
    data?: XinliModels.UploadResultDTO;
  };
  export type InsPostApiV1FileItemGeneric = {
    query: InsPostApiV1FileItemQuery;
    params: InsPostApiV1FileItemParams;
    data: InsPostApiV1FileItemBody;
    header: InsPostApiV1FileItemHeader;
    cookie: InsPostApiV1FileItemCookie;
    result: InsPostApiV1FileItemResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/doctor/putStatus/{id}/{status}
   * @summary 修改状态
   * @description
   */
  export type InsPostApiV1DoctorPutStatusByIdByStatusQuery = Record<string, any>;
  export type InsPostApiV1DoctorPutStatusByIdByStatusParams = {
    /** string */
    id: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status: "ENABLE" | "DISABLE";
  };
  export type InsPostApiV1DoctorPutStatusByIdByStatusBody = any;
  export type InsPostApiV1DoctorPutStatusByIdByStatusHeader = Record<string, any>;
  export type InsPostApiV1DoctorPutStatusByIdByStatusCookie = Record<string, any>;
  export type InsPostApiV1DoctorPutStatusByIdByStatusResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPostApiV1DoctorPutStatusByIdByStatusGeneric = {
    query: InsPostApiV1DoctorPutStatusByIdByStatusQuery;
    params: InsPostApiV1DoctorPutStatusByIdByStatusParams;
    data: InsPostApiV1DoctorPutStatusByIdByStatusBody;
    header: InsPostApiV1DoctorPutStatusByIdByStatusHeader;
    cookie: InsPostApiV1DoctorPutStatusByIdByStatusCookie;
    result: InsPostApiV1DoctorPutStatusByIdByStatusResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/doctor/enterAudit
   * @summary 医生入驻审核
   * @description
   */
  export type InsPostApiV1DoctorEnterAuditQuery = Record<string, any>;
  export type InsPostApiV1DoctorEnterAuditParams = Record<string, any>;
  export type InsPostApiV1DoctorEnterAuditBody = {
    /** string - 医生id */
    doctorId: string;

    /** "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" - 审核状态 | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}" */
    auditStatus: "WAIT" | "PASS" | "FAIL";

    /** string (可选) - 密码 - 审核状态为通过是必传，并且密码是rsa加密后的 */
    password?: string;

    /** number (可选) - 咨询费用 - 不传默认为0 */
    serviceFee?: number;

    /** string (可选) - 角色id - 审核状态为通过是必传 */
    roleIds?: string;

    /** string (可选) - 理由 */
    reason?: string;
  };
  export type InsPostApiV1DoctorEnterAuditHeader = Record<string, any>;
  export type InsPostApiV1DoctorEnterAuditCookie = Record<string, any>;
  export type InsPostApiV1DoctorEnterAuditResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsPostApiV1DoctorEnterAuditGeneric = {
    query: InsPostApiV1DoctorEnterAuditQuery;
    params: InsPostApiV1DoctorEnterAuditParams;
    data: InsPostApiV1DoctorEnterAuditBody;
    header: InsPostApiV1DoctorEnterAuditHeader;
    cookie: InsPostApiV1DoctorEnterAuditCookie;
    result: InsPostApiV1DoctorEnterAuditResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/category/list/query
   * @summary 批量查询
   * @description
   */
  export type InsPostApiV1CategoryListQueryQuery = Record<string, any>;
  export type InsPostApiV1CategoryListQueryParams = Record<string, any>;
  export type InsPostApiV1CategoryListQueryBody = string[];
  export type InsPostApiV1CategoryListQueryHeader = Record<string, any>;
  export type InsPostApiV1CategoryListQueryCookie = Record<string, any>;
  export type InsPostApiV1CategoryListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.CategoryDTO[];
  };
  export type InsPostApiV1CategoryListQueryGeneric = {
    query: InsPostApiV1CategoryListQueryQuery;
    params: InsPostApiV1CategoryListQueryParams;
    data: InsPostApiV1CategoryListQueryBody;
    header: InsPostApiV1CategoryListQueryHeader;
    cookie: InsPostApiV1CategoryListQueryCookie;
    result: InsPostApiV1CategoryListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answers/list/query
   * @summary 批量查询
   * @description
   */
  export type InsPostApiV1AnswersListQueryQuery = Record<string, any>;
  export type InsPostApiV1AnswersListQueryParams = Record<string, any>;
  export type InsPostApiV1AnswersListQueryBody = string[];
  export type InsPostApiV1AnswersListQueryHeader = Record<string, any>;
  export type InsPostApiV1AnswersListQueryCookie = Record<string, any>;
  export type InsPostApiV1AnswersListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.AnswersDTO[];
  };
  export type InsPostApiV1AnswersListQueryGeneric = {
    query: InsPostApiV1AnswersListQueryQuery;
    params: InsPostApiV1AnswersListQueryParams;
    data: InsPostApiV1AnswersListQueryBody;
    header: InsPostApiV1AnswersListQueryHeader;
    cookie: InsPostApiV1AnswersListQueryCookie;
    result: InsPostApiV1AnswersListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answerScoreRanges/list/query
   * @summary 批量查询
   * @description
   */
  export type InsPostApiV1AnswerScoreRangesListQueryQuery = Record<string, any>;
  export type InsPostApiV1AnswerScoreRangesListQueryParams = Record<string, any>;
  export type InsPostApiV1AnswerScoreRangesListQueryBody = string[];
  export type InsPostApiV1AnswerScoreRangesListQueryHeader = Record<string, any>;
  export type InsPostApiV1AnswerScoreRangesListQueryCookie = Record<string, any>;
  export type InsPostApiV1AnswerScoreRangesListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.AnswerScoreRangesDTO[];
  };
  export type InsPostApiV1AnswerScoreRangesListQueryGeneric = {
    query: InsPostApiV1AnswerScoreRangesListQueryQuery;
    params: InsPostApiV1AnswerScoreRangesListQueryParams;
    data: InsPostApiV1AnswerScoreRangesListQueryBody;
    header: InsPostApiV1AnswerScoreRangesListQueryHeader;
    cookie: InsPostApiV1AnswerScoreRangesListQueryCookie;
    result: InsPostApiV1AnswerScoreRangesListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/account/login
   * @summary 登录
   * @description
   */
  export type InsPostApiV1AccountLoginQuery = Record<string, any>;
  export type InsPostApiV1AccountLoginParams = Record<string, any>;
  export type InsPostApiV1AccountLoginBody = {
    /** string - 用户名 */
    username: string;

    /** string - 用户密码 */
    password: string;

    /** string (可选) - ras密码 */
    rsaPassword?: string;

    /** string (可选) */
    code?: string;

    /** string (可选) - 商家id */
    storeId?: string;

    /** string (可选) */
    openId?: string;

    /** number (可选) - 格式: int32 */
    remainCount?: number;
  };
  export type InsPostApiV1AccountLoginHeader = Record<string, any>;
  export type InsPostApiV1AccountLoginCookie = Record<string, any>;
  export type InsPostApiV1AccountLoginResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** string (可选) */
    data?: string;
  };
  export type InsPostApiV1AccountLoginGeneric = {
    query: InsPostApiV1AccountLoginQuery;
    params: InsPostApiV1AccountLoginParams;
    data: InsPostApiV1AccountLoginBody;
    header: InsPostApiV1AccountLoginHeader;
    cookie: InsPostApiV1AccountLoginCookie;
    result: InsPostApiV1AccountLoginResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/account/info/login
   * @summary 登录
   * @description
   */
  export type InsPostApiV1AccountInfoLoginQuery = Record<string, any>;
  export type InsPostApiV1AccountInfoLoginParams = Record<string, any>;
  export type InsPostApiV1AccountInfoLoginBody = {
    /** string - 用户名 */
    username: string;

    /** string - 用户密码 */
    password: string;

    /** string (可选) - ras密码 */
    rsaPassword?: string;

    /** string (可选) */
    code?: string;

    /** string (可选) - 商家id */
    storeId?: string;

    /** string (可选) */
    openId?: string;

    /** number (可选) - 格式: int32 */
    remainCount?: number;
  };
  export type InsPostApiV1AccountInfoLoginHeader = Record<string, any>;
  export type InsPostApiV1AccountInfoLoginCookie = Record<string, any>;
  export type InsPostApiV1AccountInfoLoginResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** string (可选) */
    data?: string;
  };
  export type InsPostApiV1AccountInfoLoginGeneric = {
    query: InsPostApiV1AccountInfoLoginQuery;
    params: InsPostApiV1AccountInfoLoginParams;
    data: InsPostApiV1AccountInfoLoginBody;
    header: InsPostApiV1AccountInfoLoginHeader;
    cookie: InsPostApiV1AccountInfoLoginCookie;
    result: InsPostApiV1AccountInfoLoginResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/account/info/getUserNameById
   * @summary 根据账号id查询userName
   * @description
   */
  export type InsPostApiV1AccountInfoGetUserNameByIdQuery = Record<string, any>;
  export type InsPostApiV1AccountInfoGetUserNameByIdParams = Record<string, any>;
  export type InsPostApiV1AccountInfoGetUserNameByIdBody = string[];
  export type InsPostApiV1AccountInfoGetUserNameByIdHeader = Record<string, any>;
  export type InsPostApiV1AccountInfoGetUserNameByIdCookie = Record<string, any>;
  export type InsPostApiV1AccountInfoGetUserNameByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** object (可选) */
    data?: Record<string, string>;
  };
  export type InsPostApiV1AccountInfoGetUserNameByIdGeneric = {
    query: InsPostApiV1AccountInfoGetUserNameByIdQuery;
    params: InsPostApiV1AccountInfoGetUserNameByIdParams;
    data: InsPostApiV1AccountInfoGetUserNameByIdBody;
    header: InsPostApiV1AccountInfoGetUserNameByIdHeader;
    cookie: InsPostApiV1AccountInfoGetUserNameByIdCookie;
    result: InsPostApiV1AccountInfoGetUserNameByIdResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/userInfo/page
   * @summary 分页查询
   * @description 用户分页查询
   */
  export type InsGetApiV1UserInfoPageQuery = XinliModels.UserInfoPageQuery;
  export type InsGetApiV1UserInfoPageParams = Record<string, any>;
  export type InsGetApiV1UserInfoPageBody = any;
  export type InsGetApiV1UserInfoPageHeader = Record<string, any>;
  export type InsGetApiV1UserInfoPageCookie = Record<string, any>;
  export type InsGetApiV1UserInfoPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageUserInfoDTO (可选) */
    data?: XinliModels.BasePageUserInfoDTO;
  };
  export type InsGetApiV1UserInfoPageGeneric = {
    query: InsGetApiV1UserInfoPageQuery;
    params: InsGetApiV1UserInfoPageParams;
    data: InsGetApiV1UserInfoPageBody;
    header: InsGetApiV1UserInfoPageHeader;
    cookie: InsGetApiV1UserInfoPageCookie;
    result: InsGetApiV1UserInfoPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/userInfo/item/{id}
   * @summary 查询指定用户
   * @description
   */
  export type InsGetApiV1UserInfoItemByIdQuery = Record<string, any>;
  export type InsGetApiV1UserInfoItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsGetApiV1UserInfoItemByIdBody = any;
  export type InsGetApiV1UserInfoItemByIdHeader = Record<string, any>;
  export type InsGetApiV1UserInfoItemByIdCookie = Record<string, any>;
  export type InsGetApiV1UserInfoItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.UserInfoDTO (可选) */
    data?: XinliModels.UserInfoDTO;
  };
  export type InsGetApiV1UserInfoItemByIdGeneric = {
    query: InsGetApiV1UserInfoItemByIdQuery;
    params: InsGetApiV1UserInfoItemByIdParams;
    data: InsGetApiV1UserInfoItemByIdBody;
    header: InsGetApiV1UserInfoItemByIdHeader;
    cookie: InsGetApiV1UserInfoItemByIdCookie;
    result: InsGetApiV1UserInfoItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/userInfo/item/{id}
   * @summary 删除
   * @description
   */
  export type InsDeleteApiV1UserInfoItemByIdQuery = Record<string, any>;
  export type InsDeleteApiV1UserInfoItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsDeleteApiV1UserInfoItemByIdBody = any;
  export type InsDeleteApiV1UserInfoItemByIdHeader = Record<string, any>;
  export type InsDeleteApiV1UserInfoItemByIdCookie = Record<string, any>;
  export type InsDeleteApiV1UserInfoItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1UserInfoItemByIdGeneric = {
    query: InsDeleteApiV1UserInfoItemByIdQuery;
    params: InsDeleteApiV1UserInfoItemByIdParams;
    data: InsDeleteApiV1UserInfoItemByIdBody;
    header: InsDeleteApiV1UserInfoItemByIdHeader;
    cookie: InsDeleteApiV1UserInfoItemByIdCookie;
    result: InsDeleteApiV1UserInfoItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/userInfo/getUserInfo
   * @summary 小程序获取登录用户信息
   * @description
   */
  export type InsGetApiV1UserInfoGetUserInfoQuery = Record<string, any>;
  export type InsGetApiV1UserInfoGetUserInfoParams = Record<string, any>;
  export type InsGetApiV1UserInfoGetUserInfoBody = any;
  export type InsGetApiV1UserInfoGetUserInfoHeader = Record<string, any>;
  export type InsGetApiV1UserInfoGetUserInfoCookie = Record<string, any>;
  export type InsGetApiV1UserInfoGetUserInfoResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.UserInfoDTO (可选) */
    data?: XinliModels.UserInfoDTO;
  };
  export type InsGetApiV1UserInfoGetUserInfoGeneric = {
    query: InsGetApiV1UserInfoGetUserInfoQuery;
    params: InsGetApiV1UserInfoGetUserInfoParams;
    data: InsGetApiV1UserInfoGetUserInfoBody;
    header: InsGetApiV1UserInfoGetUserInfoHeader;
    cookie: InsGetApiV1UserInfoGetUserInfoCookie;
    result: InsGetApiV1UserInfoGetUserInfoResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/userInfo/getAvaById/{id}
   * @summary 查询指定用户头像
   * @description
   */
  export type InsGetApiV1UserInfoGetAvaByIdByIdQuery = Record<string, any>;
  export type InsGetApiV1UserInfoGetAvaByIdByIdParams = {
    /** string */
    id: string;
  };
  export type InsGetApiV1UserInfoGetAvaByIdByIdBody = any;
  export type InsGetApiV1UserInfoGetAvaByIdByIdHeader = Record<string, any>;
  export type InsGetApiV1UserInfoGetAvaByIdByIdCookie = Record<string, any>;
  export type InsGetApiV1UserInfoGetAvaByIdByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** string (可选) */
    data?: string;
  };
  export type InsGetApiV1UserInfoGetAvaByIdByIdGeneric = {
    query: InsGetApiV1UserInfoGetAvaByIdByIdQuery;
    params: InsGetApiV1UserInfoGetAvaByIdByIdParams;
    data: InsGetApiV1UserInfoGetAvaByIdByIdBody;
    header: InsGetApiV1UserInfoGetAvaByIdByIdHeader;
    cookie: InsGetApiV1UserInfoGetAvaByIdByIdCookie;
    result: InsGetApiV1UserInfoGetAvaByIdByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/systemMessage/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type InsGetApiV1SystemMessagePageQuery = XinliModels.SystemMessagePageQuery;
  export type InsGetApiV1SystemMessagePageParams = Record<string, any>;
  export type InsGetApiV1SystemMessagePageBody = any;
  export type InsGetApiV1SystemMessagePageHeader = Record<string, any>;
  export type InsGetApiV1SystemMessagePageCookie = Record<string, any>;
  export type InsGetApiV1SystemMessagePageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSystemMessageDTO (可选) */
    data?: XinliModels.BasePageSystemMessageDTO;
  };
  export type InsGetApiV1SystemMessagePageGeneric = {
    query: InsGetApiV1SystemMessagePageQuery;
    params: InsGetApiV1SystemMessagePageParams;
    data: InsGetApiV1SystemMessagePageBody;
    header: InsGetApiV1SystemMessagePageHeader;
    cookie: InsGetApiV1SystemMessagePageCookie;
    result: InsGetApiV1SystemMessagePageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/systemMessage/item/{id}
   * @summary 查询
   * @description
   */
  export type InsGetApiV1SystemMessageItemByIdQuery = Record<string, any>;
  export type InsGetApiV1SystemMessageItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsGetApiV1SystemMessageItemByIdBody = any;
  export type InsGetApiV1SystemMessageItemByIdHeader = Record<string, any>;
  export type InsGetApiV1SystemMessageItemByIdCookie = Record<string, any>;
  export type InsGetApiV1SystemMessageItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SystemMessageDTO (可选) */
    data?: XinliModels.SystemMessageDTO;
  };
  export type InsGetApiV1SystemMessageItemByIdGeneric = {
    query: InsGetApiV1SystemMessageItemByIdQuery;
    params: InsGetApiV1SystemMessageItemByIdParams;
    data: InsGetApiV1SystemMessageItemByIdBody;
    header: InsGetApiV1SystemMessageItemByIdHeader;
    cookie: InsGetApiV1SystemMessageItemByIdCookie;
    result: InsGetApiV1SystemMessageItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/systemMessage/item/{id}
   * @summary 删除
   * @description
   */
  export type InsDeleteApiV1SystemMessageItemByIdQuery = Record<string, any>;
  export type InsDeleteApiV1SystemMessageItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsDeleteApiV1SystemMessageItemByIdBody = any;
  export type InsDeleteApiV1SystemMessageItemByIdHeader = Record<string, any>;
  export type InsDeleteApiV1SystemMessageItemByIdCookie = Record<string, any>;
  export type InsDeleteApiV1SystemMessageItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1SystemMessageItemByIdGeneric = {
    query: InsDeleteApiV1SystemMessageItemByIdQuery;
    params: InsDeleteApiV1SystemMessageItemByIdParams;
    data: InsDeleteApiV1SystemMessageItemByIdBody;
    header: InsDeleteApiV1SystemMessageItemByIdHeader;
    cookie: InsDeleteApiV1SystemMessageItemByIdCookie;
    result: InsDeleteApiV1SystemMessageItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveysParticipant/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type InsGetApiV1SurveysParticipantPageQuery = XinliModels.SurveysParticipantPageQuery;
  export type InsGetApiV1SurveysParticipantPageParams = Record<string, any>;
  export type InsGetApiV1SurveysParticipantPageBody = any;
  export type InsGetApiV1SurveysParticipantPageHeader = Record<string, any>;
  export type InsGetApiV1SurveysParticipantPageCookie = Record<string, any>;
  export type InsGetApiV1SurveysParticipantPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSurveysParticipantDTO (可选) */
    data?: XinliModels.BasePageSurveysParticipantDTO;
  };
  export type InsGetApiV1SurveysParticipantPageGeneric = {
    query: InsGetApiV1SurveysParticipantPageQuery;
    params: InsGetApiV1SurveysParticipantPageParams;
    data: InsGetApiV1SurveysParticipantPageBody;
    header: InsGetApiV1SurveysParticipantPageHeader;
    cookie: InsGetApiV1SurveysParticipantPageCookie;
    result: InsGetApiV1SurveysParticipantPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveysParticipant/item/{id}
   * @summary 查询
   * @description
   */
  export type InsGetApiV1SurveysParticipantItemByIdQuery = Record<string, any>;
  export type InsGetApiV1SurveysParticipantItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsGetApiV1SurveysParticipantItemByIdBody = any;
  export type InsGetApiV1SurveysParticipantItemByIdHeader = Record<string, any>;
  export type InsGetApiV1SurveysParticipantItemByIdCookie = Record<string, any>;
  export type InsGetApiV1SurveysParticipantItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SurveysParticipantDTO (可选) */
    data?: XinliModels.SurveysParticipantDTO;
  };
  export type InsGetApiV1SurveysParticipantItemByIdGeneric = {
    query: InsGetApiV1SurveysParticipantItemByIdQuery;
    params: InsGetApiV1SurveysParticipantItemByIdParams;
    data: InsGetApiV1SurveysParticipantItemByIdBody;
    header: InsGetApiV1SurveysParticipantItemByIdHeader;
    cookie: InsGetApiV1SurveysParticipantItemByIdCookie;
    result: InsGetApiV1SurveysParticipantItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveysParticipant/item/{id}
   * @summary 删除
   * @description
   */
  export type InsDeleteApiV1SurveysParticipantItemByIdQuery = Record<string, any>;
  export type InsDeleteApiV1SurveysParticipantItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsDeleteApiV1SurveysParticipantItemByIdBody = any;
  export type InsDeleteApiV1SurveysParticipantItemByIdHeader = Record<string, any>;
  export type InsDeleteApiV1SurveysParticipantItemByIdCookie = Record<string, any>;
  export type InsDeleteApiV1SurveysParticipantItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1SurveysParticipantItemByIdGeneric = {
    query: InsDeleteApiV1SurveysParticipantItemByIdQuery;
    params: InsDeleteApiV1SurveysParticipantItemByIdParams;
    data: InsDeleteApiV1SurveysParticipantItemByIdBody;
    header: InsDeleteApiV1SurveysParticipantItemByIdHeader;
    cookie: InsDeleteApiV1SurveysParticipantItemByIdCookie;
    result: InsDeleteApiV1SurveysParticipantItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveys/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type InsGetApiV1SurveysPageQuery = XinliModels.SurveysPageQuery;
  export type InsGetApiV1SurveysPageParams = Record<string, any>;
  export type InsGetApiV1SurveysPageBody = any;
  export type InsGetApiV1SurveysPageHeader = Record<string, any>;
  export type InsGetApiV1SurveysPageCookie = Record<string, any>;
  export type InsGetApiV1SurveysPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSurveysDTO (可选) */
    data?: XinliModels.BasePageSurveysDTO;
  };
  export type InsGetApiV1SurveysPageGeneric = {
    query: InsGetApiV1SurveysPageQuery;
    params: InsGetApiV1SurveysPageParams;
    data: InsGetApiV1SurveysPageBody;
    header: InsGetApiV1SurveysPageHeader;
    cookie: InsGetApiV1SurveysPageCookie;
    result: InsGetApiV1SurveysPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveys/item/{id}
   * @summary 查询
   * @description
   */
  export type InsGetApiV1SurveysItemByIdQuery = Record<string, any>;
  export type InsGetApiV1SurveysItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsGetApiV1SurveysItemByIdBody = any;
  export type InsGetApiV1SurveysItemByIdHeader = Record<string, any>;
  export type InsGetApiV1SurveysItemByIdCookie = Record<string, any>;
  export type InsGetApiV1SurveysItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SurveyDetails (可选) */
    data?: XinliModels.SurveyDetails;
  };
  export type InsGetApiV1SurveysItemByIdGeneric = {
    query: InsGetApiV1SurveysItemByIdQuery;
    params: InsGetApiV1SurveysItemByIdParams;
    data: InsGetApiV1SurveysItemByIdBody;
    header: InsGetApiV1SurveysItemByIdHeader;
    cookie: InsGetApiV1SurveysItemByIdCookie;
    result: InsGetApiV1SurveysItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveys/item/{id}
   * @summary 删除
   * @description
   */
  export type InsDeleteApiV1SurveysItemByIdQuery = Record<string, any>;
  export type InsDeleteApiV1SurveysItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsDeleteApiV1SurveysItemByIdBody = any;
  export type InsDeleteApiV1SurveysItemByIdHeader = Record<string, any>;
  export type InsDeleteApiV1SurveysItemByIdCookie = Record<string, any>;
  export type InsDeleteApiV1SurveysItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1SurveysItemByIdGeneric = {
    query: InsDeleteApiV1SurveysItemByIdQuery;
    params: InsDeleteApiV1SurveysItemByIdParams;
    data: InsDeleteApiV1SurveysItemByIdBody;
    header: InsDeleteApiV1SurveysItemByIdHeader;
    cookie: InsDeleteApiV1SurveysItemByIdCookie;
    result: InsDeleteApiV1SurveysItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveys/category/status/{id}/{status}
   * @summary 禁用/启用
   * @description
   */
  export type InsGetApiV1SurveysCategoryStatusByIdByStatusQuery = Record<string, any>;
  export type InsGetApiV1SurveysCategoryStatusByIdByStatusParams = {
    /** string */
    id: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status: "ENABLE" | "DISABLE";
  };
  export type InsGetApiV1SurveysCategoryStatusByIdByStatusBody = any;
  export type InsGetApiV1SurveysCategoryStatusByIdByStatusHeader = Record<string, any>;
  export type InsGetApiV1SurveysCategoryStatusByIdByStatusCookie = Record<string, any>;
  export type InsGetApiV1SurveysCategoryStatusByIdByStatusResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsGetApiV1SurveysCategoryStatusByIdByStatusGeneric = {
    query: InsGetApiV1SurveysCategoryStatusByIdByStatusQuery;
    params: InsGetApiV1SurveysCategoryStatusByIdByStatusParams;
    data: InsGetApiV1SurveysCategoryStatusByIdByStatusBody;
    header: InsGetApiV1SurveysCategoryStatusByIdByStatusHeader;
    cookie: InsGetApiV1SurveysCategoryStatusByIdByStatusCookie;
    result: InsGetApiV1SurveysCategoryStatusByIdByStatusResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveys/category/page
   * @summary 分页查询
   * @description
   */
  export type InsGetApiV1SurveysCategoryPageQuery = XinliModels.SurveysCategoryPageQuery;
  export type InsGetApiV1SurveysCategoryPageParams = Record<string, any>;
  export type InsGetApiV1SurveysCategoryPageBody = any;
  export type InsGetApiV1SurveysCategoryPageHeader = Record<string, any>;
  export type InsGetApiV1SurveysCategoryPageCookie = Record<string, any>;
  export type InsGetApiV1SurveysCategoryPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSurveysCategoryDto (可选) */
    data?: XinliModels.BasePageSurveysCategoryDto;
  };
  export type InsGetApiV1SurveysCategoryPageGeneric = {
    query: InsGetApiV1SurveysCategoryPageQuery;
    params: InsGetApiV1SurveysCategoryPageParams;
    data: InsGetApiV1SurveysCategoryPageBody;
    header: InsGetApiV1SurveysCategoryPageHeader;
    cookie: InsGetApiV1SurveysCategoryPageCookie;
    result: InsGetApiV1SurveysCategoryPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveys/category/getTopBranch
   * @summary 获取顶层节点数据
   * @description
   */
  export type InsGetApiV1SurveysCategoryGetTopBranchQuery = XinliModels.SurveysCategoryPageQuery;
  export type InsGetApiV1SurveysCategoryGetTopBranchParams = Record<string, any>;
  export type InsGetApiV1SurveysCategoryGetTopBranchBody = any;
  export type InsGetApiV1SurveysCategoryGetTopBranchHeader = Record<string, any>;
  export type InsGetApiV1SurveysCategoryGetTopBranchCookie = Record<string, any>;
  export type InsGetApiV1SurveysCategoryGetTopBranchResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SurveysCategoryDto[];
  };
  export type InsGetApiV1SurveysCategoryGetTopBranchGeneric = {
    query: InsGetApiV1SurveysCategoryGetTopBranchQuery;
    params: InsGetApiV1SurveysCategoryGetTopBranchParams;
    data: InsGetApiV1SurveysCategoryGetTopBranchBody;
    header: InsGetApiV1SurveysCategoryGetTopBranchHeader;
    cookie: InsGetApiV1SurveysCategoryGetTopBranchCookie;
    result: InsGetApiV1SurveysCategoryGetTopBranchResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveys/category/getChildBranch
   * @summary 获取子节点数据
   * @description
   */
  export type InsGetApiV1SurveysCategoryGetChildBranchQuery = {
    /** string */
    id: string;
  };
  export type InsGetApiV1SurveysCategoryGetChildBranchParams = Record<string, any>;
  export type InsGetApiV1SurveysCategoryGetChildBranchBody = any;
  export type InsGetApiV1SurveysCategoryGetChildBranchHeader = Record<string, any>;
  export type InsGetApiV1SurveysCategoryGetChildBranchCookie = Record<string, any>;
  export type InsGetApiV1SurveysCategoryGetChildBranchResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SurveysCategoryDto[];
  };
  export type InsGetApiV1SurveysCategoryGetChildBranchGeneric = {
    query: InsGetApiV1SurveysCategoryGetChildBranchQuery;
    params: InsGetApiV1SurveysCategoryGetChildBranchParams;
    data: InsGetApiV1SurveysCategoryGetChildBranchBody;
    header: InsGetApiV1SurveysCategoryGetChildBranchHeader;
    cookie: InsGetApiV1SurveysCategoryGetChildBranchCookie;
    result: InsGetApiV1SurveysCategoryGetChildBranchResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/questions/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type InsGetApiV1QuestionsPageQuery = XinliModels.QuestionsPageQuery;
  export type InsGetApiV1QuestionsPageParams = Record<string, any>;
  export type InsGetApiV1QuestionsPageBody = any;
  export type InsGetApiV1QuestionsPageHeader = Record<string, any>;
  export type InsGetApiV1QuestionsPageCookie = Record<string, any>;
  export type InsGetApiV1QuestionsPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageQuestionsDTO (可选) */
    data?: XinliModels.BasePageQuestionsDTO;
  };
  export type InsGetApiV1QuestionsPageGeneric = {
    query: InsGetApiV1QuestionsPageQuery;
    params: InsGetApiV1QuestionsPageParams;
    data: InsGetApiV1QuestionsPageBody;
    header: InsGetApiV1QuestionsPageHeader;
    cookie: InsGetApiV1QuestionsPageCookie;
    result: InsGetApiV1QuestionsPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/questions/item/{id}
   * @summary 查询
   * @description
   */
  export type InsGetApiV1QuestionsItemByIdQuery = Record<string, any>;
  export type InsGetApiV1QuestionsItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsGetApiV1QuestionsItemByIdBody = any;
  export type InsGetApiV1QuestionsItemByIdHeader = Record<string, any>;
  export type InsGetApiV1QuestionsItemByIdCookie = Record<string, any>;
  export type InsGetApiV1QuestionsItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.QuestionsDTO (可选) */
    data?: XinliModels.QuestionsDTO;
  };
  export type InsGetApiV1QuestionsItemByIdGeneric = {
    query: InsGetApiV1QuestionsItemByIdQuery;
    params: InsGetApiV1QuestionsItemByIdParams;
    data: InsGetApiV1QuestionsItemByIdBody;
    header: InsGetApiV1QuestionsItemByIdHeader;
    cookie: InsGetApiV1QuestionsItemByIdCookie;
    result: InsGetApiV1QuestionsItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/questions/item/{id}
   * @summary 删除
   * @description
   */
  export type InsDeleteApiV1QuestionsItemByIdQuery = Record<string, any>;
  export type InsDeleteApiV1QuestionsItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsDeleteApiV1QuestionsItemByIdBody = any;
  export type InsDeleteApiV1QuestionsItemByIdHeader = Record<string, any>;
  export type InsDeleteApiV1QuestionsItemByIdCookie = Record<string, any>;
  export type InsDeleteApiV1QuestionsItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1QuestionsItemByIdGeneric = {
    query: InsDeleteApiV1QuestionsItemByIdQuery;
    params: InsDeleteApiV1QuestionsItemByIdParams;
    data: InsDeleteApiV1QuestionsItemByIdBody;
    header: InsDeleteApiV1QuestionsItemByIdHeader;
    cookie: InsDeleteApiV1QuestionsItemByIdCookie;
    result: InsDeleteApiV1QuestionsItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/precondition/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type InsGetApiV1PreconditionPageQuery = XinliModels.PreconditionPageQuery;
  export type InsGetApiV1PreconditionPageParams = Record<string, any>;
  export type InsGetApiV1PreconditionPageBody = any;
  export type InsGetApiV1PreconditionPageHeader = Record<string, any>;
  export type InsGetApiV1PreconditionPageCookie = Record<string, any>;
  export type InsGetApiV1PreconditionPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePagePreconditionDTO (可选) */
    data?: XinliModels.BasePagePreconditionDTO;
  };
  export type InsGetApiV1PreconditionPageGeneric = {
    query: InsGetApiV1PreconditionPageQuery;
    params: InsGetApiV1PreconditionPageParams;
    data: InsGetApiV1PreconditionPageBody;
    header: InsGetApiV1PreconditionPageHeader;
    cookie: InsGetApiV1PreconditionPageCookie;
    result: InsGetApiV1PreconditionPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/precondition/item/{id}
   * @summary 查询
   * @description
   */
  export type InsGetApiV1PreconditionItemByIdQuery = Record<string, any>;
  export type InsGetApiV1PreconditionItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsGetApiV1PreconditionItemByIdBody = any;
  export type InsGetApiV1PreconditionItemByIdHeader = Record<string, any>;
  export type InsGetApiV1PreconditionItemByIdCookie = Record<string, any>;
  export type InsGetApiV1PreconditionItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.PreconditionDTO (可选) */
    data?: XinliModels.PreconditionDTO;
  };
  export type InsGetApiV1PreconditionItemByIdGeneric = {
    query: InsGetApiV1PreconditionItemByIdQuery;
    params: InsGetApiV1PreconditionItemByIdParams;
    data: InsGetApiV1PreconditionItemByIdBody;
    header: InsGetApiV1PreconditionItemByIdHeader;
    cookie: InsGetApiV1PreconditionItemByIdCookie;
    result: InsGetApiV1PreconditionItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/precondition/item/{id}
   * @summary 删除
   * @description
   */
  export type InsDeleteApiV1PreconditionItemByIdQuery = Record<string, any>;
  export type InsDeleteApiV1PreconditionItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsDeleteApiV1PreconditionItemByIdBody = any;
  export type InsDeleteApiV1PreconditionItemByIdHeader = Record<string, any>;
  export type InsDeleteApiV1PreconditionItemByIdCookie = Record<string, any>;
  export type InsDeleteApiV1PreconditionItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1PreconditionItemByIdGeneric = {
    query: InsDeleteApiV1PreconditionItemByIdQuery;
    params: InsDeleteApiV1PreconditionItemByIdParams;
    data: InsDeleteApiV1PreconditionItemByIdBody;
    header: InsDeleteApiV1PreconditionItemByIdHeader;
    cookie: InsDeleteApiV1PreconditionItemByIdCookie;
    result: InsDeleteApiV1PreconditionItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/options/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type InsGetApiV1OptionsPageQuery = XinliModels.OptionsPageQuery;
  export type InsGetApiV1OptionsPageParams = Record<string, any>;
  export type InsGetApiV1OptionsPageBody = any;
  export type InsGetApiV1OptionsPageHeader = Record<string, any>;
  export type InsGetApiV1OptionsPageCookie = Record<string, any>;
  export type InsGetApiV1OptionsPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageOptionsDTO (可选) */
    data?: XinliModels.BasePageOptionsDTO;
  };
  export type InsGetApiV1OptionsPageGeneric = {
    query: InsGetApiV1OptionsPageQuery;
    params: InsGetApiV1OptionsPageParams;
    data: InsGetApiV1OptionsPageBody;
    header: InsGetApiV1OptionsPageHeader;
    cookie: InsGetApiV1OptionsPageCookie;
    result: InsGetApiV1OptionsPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/options/item/{id}
   * @summary 查询
   * @description
   */
  export type InsGetApiV1OptionsItemByIdQuery = Record<string, any>;
  export type InsGetApiV1OptionsItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsGetApiV1OptionsItemByIdBody = any;
  export type InsGetApiV1OptionsItemByIdHeader = Record<string, any>;
  export type InsGetApiV1OptionsItemByIdCookie = Record<string, any>;
  export type InsGetApiV1OptionsItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.OptionsDTO (可选) */
    data?: XinliModels.OptionsDTO;
  };
  export type InsGetApiV1OptionsItemByIdGeneric = {
    query: InsGetApiV1OptionsItemByIdQuery;
    params: InsGetApiV1OptionsItemByIdParams;
    data: InsGetApiV1OptionsItemByIdBody;
    header: InsGetApiV1OptionsItemByIdHeader;
    cookie: InsGetApiV1OptionsItemByIdCookie;
    result: InsGetApiV1OptionsItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/options/item/{id}
   * @summary 删除
   * @description
   */
  export type InsDeleteApiV1OptionsItemByIdQuery = Record<string, any>;
  export type InsDeleteApiV1OptionsItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsDeleteApiV1OptionsItemByIdBody = any;
  export type InsDeleteApiV1OptionsItemByIdHeader = Record<string, any>;
  export type InsDeleteApiV1OptionsItemByIdCookie = Record<string, any>;
  export type InsDeleteApiV1OptionsItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1OptionsItemByIdGeneric = {
    query: InsDeleteApiV1OptionsItemByIdQuery;
    params: InsDeleteApiV1OptionsItemByIdParams;
    data: InsDeleteApiV1OptionsItemByIdBody;
    header: InsDeleteApiV1OptionsItemByIdHeader;
    cookie: InsDeleteApiV1OptionsItemByIdCookie;
    result: InsDeleteApiV1OptionsItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/menus/page
   * @summary 分页查询
   * @description 菜单分页查询
   */
  export type InsGetApiV1MenusPageQuery = XinliModels.MenusPageQuery;
  export type InsGetApiV1MenusPageParams = Record<string, any>;
  export type InsGetApiV1MenusPageBody = any;
  export type InsGetApiV1MenusPageHeader = Record<string, any>;
  export type InsGetApiV1MenusPageCookie = Record<string, any>;
  export type InsGetApiV1MenusPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageMenusDTO (可选) */
    data?: XinliModels.BasePageMenusDTO;
  };
  export type InsGetApiV1MenusPageGeneric = {
    query: InsGetApiV1MenusPageQuery;
    params: InsGetApiV1MenusPageParams;
    data: InsGetApiV1MenusPageBody;
    header: InsGetApiV1MenusPageHeader;
    cookie: InsGetApiV1MenusPageCookie;
    result: InsGetApiV1MenusPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/menus/getByRoleId
   * @summary 获取角色权限
   * @description
   */
  export type InsGetApiV1MenusGetByRoleIdQuery = {
    /** string */
    roleId: string;
  };
  export type InsGetApiV1MenusGetByRoleIdParams = Record<string, any>;
  export type InsGetApiV1MenusGetByRoleIdBody = any;
  export type InsGetApiV1MenusGetByRoleIdHeader = Record<string, any>;
  export type InsGetApiV1MenusGetByRoleIdCookie = Record<string, any>;
  export type InsGetApiV1MenusGetByRoleIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.MenusDTO[];
  };
  export type InsGetApiV1MenusGetByRoleIdGeneric = {
    query: InsGetApiV1MenusGetByRoleIdQuery;
    params: InsGetApiV1MenusGetByRoleIdParams;
    data: InsGetApiV1MenusGetByRoleIdBody;
    header: InsGetApiV1MenusGetByRoleIdHeader;
    cookie: InsGetApiV1MenusGetByRoleIdCookie;
    result: InsGetApiV1MenusGetByRoleIdResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/menus/getByAccountId
   * @summary 获取登录账号菜单功能权限
   * @description
   */
  export type InsGetApiV1MenusGetByAccountIdQuery = Record<string, any>;
  export type InsGetApiV1MenusGetByAccountIdParams = Record<string, any>;
  export type InsGetApiV1MenusGetByAccountIdBody = any;
  export type InsGetApiV1MenusGetByAccountIdHeader = Record<string, any>;
  export type InsGetApiV1MenusGetByAccountIdCookie = Record<string, any>;
  export type InsGetApiV1MenusGetByAccountIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.MenusDTO[];
  };
  export type InsGetApiV1MenusGetByAccountIdGeneric = {
    query: InsGetApiV1MenusGetByAccountIdQuery;
    params: InsGetApiV1MenusGetByAccountIdParams;
    data: InsGetApiV1MenusGetByAccountIdBody;
    header: InsGetApiV1MenusGetByAccountIdHeader;
    cookie: InsGetApiV1MenusGetByAccountIdCookie;
    result: InsGetApiV1MenusGetByAccountIdResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/institution/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type InsGetApiV1InstitutionPageQuery = XinliModels.InstitutionPageQuery;
  export type InsGetApiV1InstitutionPageParams = Record<string, any>;
  export type InsGetApiV1InstitutionPageBody = any;
  export type InsGetApiV1InstitutionPageHeader = Record<string, any>;
  export type InsGetApiV1InstitutionPageCookie = Record<string, any>;
  export type InsGetApiV1InstitutionPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageInstitutionDTO (可选) */
    data?: XinliModels.BasePageInstitutionDTO;
  };
  export type InsGetApiV1InstitutionPageGeneric = {
    query: InsGetApiV1InstitutionPageQuery;
    params: InsGetApiV1InstitutionPageParams;
    data: InsGetApiV1InstitutionPageBody;
    header: InsGetApiV1InstitutionPageHeader;
    cookie: InsGetApiV1InstitutionPageCookie;
    result: InsGetApiV1InstitutionPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/informationQuestions/questionList/{surveyId}
   * @summary 根据量表id查询问题和选项
   * @description
   */
  export type InsGetApiV1InformationQuestionsQuestionListBySurveyIdQuery = Record<string, any>;
  export type InsGetApiV1InformationQuestionsQuestionListBySurveyIdParams = {
    /** string */
    surveyId: string;
  };
  export type InsGetApiV1InformationQuestionsQuestionListBySurveyIdBody = any;
  export type InsGetApiV1InformationQuestionsQuestionListBySurveyIdHeader = Record<string, any>;
  export type InsGetApiV1InformationQuestionsQuestionListBySurveyIdCookie = Record<string, any>;
  export type InsGetApiV1InformationQuestionsQuestionListBySurveyIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.InformationQuestionsDTO[];
  };
  export type InsGetApiV1InformationQuestionsQuestionListBySurveyIdGeneric = {
    query: InsGetApiV1InformationQuestionsQuestionListBySurveyIdQuery;
    params: InsGetApiV1InformationQuestionsQuestionListBySurveyIdParams;
    data: InsGetApiV1InformationQuestionsQuestionListBySurveyIdBody;
    header: InsGetApiV1InformationQuestionsQuestionListBySurveyIdHeader;
    cookie: InsGetApiV1InformationQuestionsQuestionListBySurveyIdCookie;
    result: InsGetApiV1InformationQuestionsQuestionListBySurveyIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/informationQuestions/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type InsGetApiV1InformationQuestionsPageQuery = XinliModels.InformationQuestionsPageQuery;
  export type InsGetApiV1InformationQuestionsPageParams = Record<string, any>;
  export type InsGetApiV1InformationQuestionsPageBody = any;
  export type InsGetApiV1InformationQuestionsPageHeader = Record<string, any>;
  export type InsGetApiV1InformationQuestionsPageCookie = Record<string, any>;
  export type InsGetApiV1InformationQuestionsPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageInformationQuestionsDTO (可选) */
    data?: XinliModels.BasePageInformationQuestionsDTO;
  };
  export type InsGetApiV1InformationQuestionsPageGeneric = {
    query: InsGetApiV1InformationQuestionsPageQuery;
    params: InsGetApiV1InformationQuestionsPageParams;
    data: InsGetApiV1InformationQuestionsPageBody;
    header: InsGetApiV1InformationQuestionsPageHeader;
    cookie: InsGetApiV1InformationQuestionsPageCookie;
    result: InsGetApiV1InformationQuestionsPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/informationQuestions/item/{id}
   * @summary 查询
   * @description
   */
  export type InsGetApiV1InformationQuestionsItemByIdQuery = Record<string, any>;
  export type InsGetApiV1InformationQuestionsItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsGetApiV1InformationQuestionsItemByIdBody = any;
  export type InsGetApiV1InformationQuestionsItemByIdHeader = Record<string, any>;
  export type InsGetApiV1InformationQuestionsItemByIdCookie = Record<string, any>;
  export type InsGetApiV1InformationQuestionsItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.InformationQuestionsDTO (可选) */
    data?: XinliModels.InformationQuestionsDTO;
  };
  export type InsGetApiV1InformationQuestionsItemByIdGeneric = {
    query: InsGetApiV1InformationQuestionsItemByIdQuery;
    params: InsGetApiV1InformationQuestionsItemByIdParams;
    data: InsGetApiV1InformationQuestionsItemByIdBody;
    header: InsGetApiV1InformationQuestionsItemByIdHeader;
    cookie: InsGetApiV1InformationQuestionsItemByIdCookie;
    result: InsGetApiV1InformationQuestionsItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/informationCollection/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type InsGetApiV1InformationCollectionPageQuery = XinliModels.InformationCollectionPageQuery;
  export type InsGetApiV1InformationCollectionPageParams = Record<string, any>;
  export type InsGetApiV1InformationCollectionPageBody = any;
  export type InsGetApiV1InformationCollectionPageHeader = Record<string, any>;
  export type InsGetApiV1InformationCollectionPageCookie = Record<string, any>;
  export type InsGetApiV1InformationCollectionPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageInformationCollectionDTO (可选) */
    data?: XinliModels.BasePageInformationCollectionDTO;
  };
  export type InsGetApiV1InformationCollectionPageGeneric = {
    query: InsGetApiV1InformationCollectionPageQuery;
    params: InsGetApiV1InformationCollectionPageParams;
    data: InsGetApiV1InformationCollectionPageBody;
    header: InsGetApiV1InformationCollectionPageHeader;
    cookie: InsGetApiV1InformationCollectionPageCookie;
    result: InsGetApiV1InformationCollectionPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/file/download
   * @summary 下载文件
   * @description
   */
  export type InsGetApiV1FileDownloadQuery = {
    /** string */
    path: string;
  };
  export type InsGetApiV1FileDownloadParams = Record<string, any>;
  export type InsGetApiV1FileDownloadBody = any;
  export type InsGetApiV1FileDownloadHeader = Record<string, any>;
  export type InsGetApiV1FileDownloadCookie = Record<string, any>;
  export type InsGetApiV1FileDownloadResponse = any;
  export type InsGetApiV1FileDownloadGeneric = {
    query: InsGetApiV1FileDownloadQuery;
    params: InsGetApiV1FileDownloadParams;
    data: InsGetApiV1FileDownloadBody;
    header: InsGetApiV1FileDownloadHeader;
    cookie: InsGetApiV1FileDownloadCookie;
    result: InsGetApiV1FileDownloadResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/doctor/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type InsGetApiV1DoctorPageQuery = XinliModels.DoctorPageQuery;
  export type InsGetApiV1DoctorPageParams = Record<string, any>;
  export type InsGetApiV1DoctorPageBody = any;
  export type InsGetApiV1DoctorPageHeader = Record<string, any>;
  export type InsGetApiV1DoctorPageCookie = Record<string, any>;
  export type InsGetApiV1DoctorPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageDoctorDTO (可选) */
    data?: XinliModels.BasePageDoctorDTO;
  };
  export type InsGetApiV1DoctorPageGeneric = {
    query: InsGetApiV1DoctorPageQuery;
    params: InsGetApiV1DoctorPageParams;
    data: InsGetApiV1DoctorPageBody;
    header: InsGetApiV1DoctorPageHeader;
    cookie: InsGetApiV1DoctorPageCookie;
    result: InsGetApiV1DoctorPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/dict/page
   * @summary 分页查询
   * @description 字典类型分页查询
   */
  export type InsGetApiV1DictPageQuery = XinliModels.SysDictTypePageQuery;
  export type InsGetApiV1DictPageParams = Record<string, any>;
  export type InsGetApiV1DictPageBody = any;
  export type InsGetApiV1DictPageHeader = Record<string, any>;
  export type InsGetApiV1DictPageCookie = Record<string, any>;
  export type InsGetApiV1DictPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSysDictTypeDTO (可选) */
    data?: XinliModels.BasePageSysDictTypeDTO;
  };
  export type InsGetApiV1DictPageGeneric = {
    query: InsGetApiV1DictPageQuery;
    params: InsGetApiV1DictPageParams;
    data: InsGetApiV1DictPageBody;
    header: InsGetApiV1DictPageHeader;
    cookie: InsGetApiV1DictPageCookie;
    result: InsGetApiV1DictPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/dict/data/page
   * @summary 分页查询
   * @description 字典类型分页查询
   */
  export type InsGetApiV1DictDataPageQuery = XinliModels.SysDictDataPageQuery;
  export type InsGetApiV1DictDataPageParams = Record<string, any>;
  export type InsGetApiV1DictDataPageBody = any;
  export type InsGetApiV1DictDataPageHeader = Record<string, any>;
  export type InsGetApiV1DictDataPageCookie = Record<string, any>;
  export type InsGetApiV1DictDataPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSysDictDataDTO (可选) */
    data?: XinliModels.BasePageSysDictDataDTO;
  };
  export type InsGetApiV1DictDataPageGeneric = {
    query: InsGetApiV1DictDataPageQuery;
    params: InsGetApiV1DictDataPageParams;
    data: InsGetApiV1DictDataPageBody;
    header: InsGetApiV1DictDataPageHeader;
    cookie: InsGetApiV1DictDataPageCookie;
    result: InsGetApiV1DictDataPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/course/type/page
   * @summary 分页查询
   * @description
   */
  export type InsGetApiV1CourseTypePageQuery = XinliModels.CourseTypePageQuery;
  export type InsGetApiV1CourseTypePageParams = Record<string, any>;
  export type InsGetApiV1CourseTypePageBody = any;
  export type InsGetApiV1CourseTypePageHeader = Record<string, any>;
  export type InsGetApiV1CourseTypePageCookie = Record<string, any>;
  export type InsGetApiV1CourseTypePageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageCourseTypeDto (可选) */
    data?: XinliModels.BasePageCourseTypeDto;
  };
  export type InsGetApiV1CourseTypePageGeneric = {
    query: InsGetApiV1CourseTypePageQuery;
    params: InsGetApiV1CourseTypePageParams;
    data: InsGetApiV1CourseTypePageBody;
    header: InsGetApiV1CourseTypePageHeader;
    cookie: InsGetApiV1CourseTypePageCookie;
    result: InsGetApiV1CourseTypePageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/course/resources/page
   * @summary 分页查询
   * @description
   */
  export type InsGetApiV1CourseResourcesPageQuery = XinliModels.CourseResourcesPageQuery;
  export type InsGetApiV1CourseResourcesPageParams = Record<string, any>;
  export type InsGetApiV1CourseResourcesPageBody = any;
  export type InsGetApiV1CourseResourcesPageHeader = Record<string, any>;
  export type InsGetApiV1CourseResourcesPageCookie = Record<string, any>;
  export type InsGetApiV1CourseResourcesPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageCourseResourcesDto (可选) */
    data?: XinliModels.BasePageCourseResourcesDto;
  };
  export type InsGetApiV1CourseResourcesPageGeneric = {
    query: InsGetApiV1CourseResourcesPageQuery;
    params: InsGetApiV1CourseResourcesPageParams;
    data: InsGetApiV1CourseResourcesPageBody;
    header: InsGetApiV1CourseResourcesPageHeader;
    cookie: InsGetApiV1CourseResourcesPageCookie;
    result: InsGetApiV1CourseResourcesPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/config/allEnums
   * @summary 获取所有枚举信息
   * @description
   */
  export type InsGetApiV1ConfigAllEnumsQuery = Record<string, any>;
  export type InsGetApiV1ConfigAllEnumsParams = Record<string, any>;
  export type InsGetApiV1ConfigAllEnumsBody = any;
  export type InsGetApiV1ConfigAllEnumsHeader = Record<string, any>;
  export type InsGetApiV1ConfigAllEnumsCookie = Record<string, any>;
  export type InsGetApiV1ConfigAllEnumsResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** object (可选) */
    data?: Record<string, Record<string, any>>;
  };
  export type InsGetApiV1ConfigAllEnumsGeneric = {
    query: InsGetApiV1ConfigAllEnumsQuery;
    params: InsGetApiV1ConfigAllEnumsParams;
    data: InsGetApiV1ConfigAllEnumsBody;
    header: InsGetApiV1ConfigAllEnumsHeader;
    cookie: InsGetApiV1ConfigAllEnumsCookie;
    result: InsGetApiV1ConfigAllEnumsResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/category/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type InsGetApiV1CategoryPageQuery = XinliModels.CategoryPageQuery;
  export type InsGetApiV1CategoryPageParams = Record<string, any>;
  export type InsGetApiV1CategoryPageBody = any;
  export type InsGetApiV1CategoryPageHeader = Record<string, any>;
  export type InsGetApiV1CategoryPageCookie = Record<string, any>;
  export type InsGetApiV1CategoryPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageCategoryDTO (可选) */
    data?: XinliModels.BasePageCategoryDTO;
  };
  export type InsGetApiV1CategoryPageGeneric = {
    query: InsGetApiV1CategoryPageQuery;
    params: InsGetApiV1CategoryPageParams;
    data: InsGetApiV1CategoryPageBody;
    header: InsGetApiV1CategoryPageHeader;
    cookie: InsGetApiV1CategoryPageCookie;
    result: InsGetApiV1CategoryPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/category/item/{id}
   * @summary 查询
   * @description
   */
  export type InsGetApiV1CategoryItemByIdQuery = Record<string, any>;
  export type InsGetApiV1CategoryItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsGetApiV1CategoryItemByIdBody = any;
  export type InsGetApiV1CategoryItemByIdHeader = Record<string, any>;
  export type InsGetApiV1CategoryItemByIdCookie = Record<string, any>;
  export type InsGetApiV1CategoryItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.CategoryDTO (可选) */
    data?: XinliModels.CategoryDTO;
  };
  export type InsGetApiV1CategoryItemByIdGeneric = {
    query: InsGetApiV1CategoryItemByIdQuery;
    params: InsGetApiV1CategoryItemByIdParams;
    data: InsGetApiV1CategoryItemByIdBody;
    header: InsGetApiV1CategoryItemByIdHeader;
    cookie: InsGetApiV1CategoryItemByIdCookie;
    result: InsGetApiV1CategoryItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/category/item/{id}
   * @summary 删除
   * @description
   */
  export type InsDeleteApiV1CategoryItemByIdQuery = Record<string, any>;
  export type InsDeleteApiV1CategoryItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsDeleteApiV1CategoryItemByIdBody = any;
  export type InsDeleteApiV1CategoryItemByIdHeader = Record<string, any>;
  export type InsDeleteApiV1CategoryItemByIdCookie = Record<string, any>;
  export type InsDeleteApiV1CategoryItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1CategoryItemByIdGeneric = {
    query: InsDeleteApiV1CategoryItemByIdQuery;
    params: InsDeleteApiV1CategoryItemByIdParams;
    data: InsDeleteApiV1CategoryItemByIdBody;
    header: InsDeleteApiV1CategoryItemByIdHeader;
    cookie: InsDeleteApiV1CategoryItemByIdCookie;
    result: InsDeleteApiV1CategoryItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answers/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type InsGetApiV1AnswersPageQuery = XinliModels.AnswersPageQuery;
  export type InsGetApiV1AnswersPageParams = Record<string, any>;
  export type InsGetApiV1AnswersPageBody = any;
  export type InsGetApiV1AnswersPageHeader = Record<string, any>;
  export type InsGetApiV1AnswersPageCookie = Record<string, any>;
  export type InsGetApiV1AnswersPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageAnswersDTO (可选) */
    data?: XinliModels.BasePageAnswersDTO;
  };
  export type InsGetApiV1AnswersPageGeneric = {
    query: InsGetApiV1AnswersPageQuery;
    params: InsGetApiV1AnswersPageParams;
    data: InsGetApiV1AnswersPageBody;
    header: InsGetApiV1AnswersPageHeader;
    cookie: InsGetApiV1AnswersPageCookie;
    result: InsGetApiV1AnswersPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answers/item/{id}
   * @summary 查询
   * @description
   */
  export type InsGetApiV1AnswersItemByIdQuery = Record<string, any>;
  export type InsGetApiV1AnswersItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsGetApiV1AnswersItemByIdBody = any;
  export type InsGetApiV1AnswersItemByIdHeader = Record<string, any>;
  export type InsGetApiV1AnswersItemByIdCookie = Record<string, any>;
  export type InsGetApiV1AnswersItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AnswersDTO (可选) */
    data?: XinliModels.AnswersDTO;
  };
  export type InsGetApiV1AnswersItemByIdGeneric = {
    query: InsGetApiV1AnswersItemByIdQuery;
    params: InsGetApiV1AnswersItemByIdParams;
    data: InsGetApiV1AnswersItemByIdBody;
    header: InsGetApiV1AnswersItemByIdHeader;
    cookie: InsGetApiV1AnswersItemByIdCookie;
    result: InsGetApiV1AnswersItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answers/item/{id}
   * @summary 删除
   * @description
   */
  export type InsDeleteApiV1AnswersItemByIdQuery = Record<string, any>;
  export type InsDeleteApiV1AnswersItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsDeleteApiV1AnswersItemByIdBody = any;
  export type InsDeleteApiV1AnswersItemByIdHeader = Record<string, any>;
  export type InsDeleteApiV1AnswersItemByIdCookie = Record<string, any>;
  export type InsDeleteApiV1AnswersItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1AnswersItemByIdGeneric = {
    query: InsDeleteApiV1AnswersItemByIdQuery;
    params: InsDeleteApiV1AnswersItemByIdParams;
    data: InsDeleteApiV1AnswersItemByIdBody;
    header: InsDeleteApiV1AnswersItemByIdHeader;
    cookie: InsDeleteApiV1AnswersItemByIdCookie;
    result: InsDeleteApiV1AnswersItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answerScoreRanges/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type InsGetApiV1AnswerScoreRangesPageQuery = XinliModels.AnswerScoreRangesPageQuery;
  export type InsGetApiV1AnswerScoreRangesPageParams = Record<string, any>;
  export type InsGetApiV1AnswerScoreRangesPageBody = any;
  export type InsGetApiV1AnswerScoreRangesPageHeader = Record<string, any>;
  export type InsGetApiV1AnswerScoreRangesPageCookie = Record<string, any>;
  export type InsGetApiV1AnswerScoreRangesPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageAnswerScoreRangesDTO (可选) */
    data?: XinliModels.BasePageAnswerScoreRangesDTO;
  };
  export type InsGetApiV1AnswerScoreRangesPageGeneric = {
    query: InsGetApiV1AnswerScoreRangesPageQuery;
    params: InsGetApiV1AnswerScoreRangesPageParams;
    data: InsGetApiV1AnswerScoreRangesPageBody;
    header: InsGetApiV1AnswerScoreRangesPageHeader;
    cookie: InsGetApiV1AnswerScoreRangesPageCookie;
    result: InsGetApiV1AnswerScoreRangesPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answerScoreRanges/item/{id}
   * @summary 查询
   * @description
   */
  export type InsGetApiV1AnswerScoreRangesItemByIdQuery = Record<string, any>;
  export type InsGetApiV1AnswerScoreRangesItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsGetApiV1AnswerScoreRangesItemByIdBody = any;
  export type InsGetApiV1AnswerScoreRangesItemByIdHeader = Record<string, any>;
  export type InsGetApiV1AnswerScoreRangesItemByIdCookie = Record<string, any>;
  export type InsGetApiV1AnswerScoreRangesItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AnswerScoreRangesDTO (可选) */
    data?: XinliModels.AnswerScoreRangesDTO;
  };
  export type InsGetApiV1AnswerScoreRangesItemByIdGeneric = {
    query: InsGetApiV1AnswerScoreRangesItemByIdQuery;
    params: InsGetApiV1AnswerScoreRangesItemByIdParams;
    data: InsGetApiV1AnswerScoreRangesItemByIdBody;
    header: InsGetApiV1AnswerScoreRangesItemByIdHeader;
    cookie: InsGetApiV1AnswerScoreRangesItemByIdCookie;
    result: InsGetApiV1AnswerScoreRangesItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/answerScoreRanges/item/{id}
   * @summary 删除
   * @description
   */
  export type InsDeleteApiV1AnswerScoreRangesItemByIdQuery = Record<string, any>;
  export type InsDeleteApiV1AnswerScoreRangesItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsDeleteApiV1AnswerScoreRangesItemByIdBody = any;
  export type InsDeleteApiV1AnswerScoreRangesItemByIdHeader = Record<string, any>;
  export type InsDeleteApiV1AnswerScoreRangesItemByIdCookie = Record<string, any>;
  export type InsDeleteApiV1AnswerScoreRangesItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1AnswerScoreRangesItemByIdGeneric = {
    query: InsDeleteApiV1AnswerScoreRangesItemByIdQuery;
    params: InsDeleteApiV1AnswerScoreRangesItemByIdParams;
    data: InsDeleteApiV1AnswerScoreRangesItemByIdBody;
    header: InsDeleteApiV1AnswerScoreRangesItemByIdHeader;
    cookie: InsDeleteApiV1AnswerScoreRangesItemByIdCookie;
    result: InsDeleteApiV1AnswerScoreRangesItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/account/info/page
   * @summary 分页查询
   * @description 账号分页查询
   */
  export type InsGetApiV1AccountInfoPageQuery = XinliModels.AccountInfoPageQuery;
  export type InsGetApiV1AccountInfoPageParams = Record<string, any>;
  export type InsGetApiV1AccountInfoPageBody = any;
  export type InsGetApiV1AccountInfoPageHeader = Record<string, any>;
  export type InsGetApiV1AccountInfoPageCookie = Record<string, any>;
  export type InsGetApiV1AccountInfoPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageAccountInfoDTO (可选) */
    data?: XinliModels.BasePageAccountInfoDTO;
  };
  export type InsGetApiV1AccountInfoPageGeneric = {
    query: InsGetApiV1AccountInfoPageQuery;
    params: InsGetApiV1AccountInfoPageParams;
    data: InsGetApiV1AccountInfoPageBody;
    header: InsGetApiV1AccountInfoPageHeader;
    cookie: InsGetApiV1AccountInfoPageCookie;
    result: InsGetApiV1AccountInfoPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/account/info/item/{id}
   * @summary 根据id获取账号信息
   * @description
   */
  export type InsGetApiV1AccountInfoItemByIdQuery = Record<string, any>;
  export type InsGetApiV1AccountInfoItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsGetApiV1AccountInfoItemByIdBody = any;
  export type InsGetApiV1AccountInfoItemByIdHeader = Record<string, any>;
  export type InsGetApiV1AccountInfoItemByIdCookie = Record<string, any>;
  export type InsGetApiV1AccountInfoItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AccountInfoDTO (可选) */
    data?: XinliModels.AccountInfoDTO;
  };
  export type InsGetApiV1AccountInfoItemByIdGeneric = {
    query: InsGetApiV1AccountInfoItemByIdQuery;
    params: InsGetApiV1AccountInfoItemByIdParams;
    data: InsGetApiV1AccountInfoItemByIdBody;
    header: InsGetApiV1AccountInfoItemByIdHeader;
    cookie: InsGetApiV1AccountInfoItemByIdCookie;
    result: InsGetApiV1AccountInfoItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/account/info/item/{id}
   * @summary 删除账号
   * @description
   */
  export type InsDeleteApiV1AccountInfoItemByIdQuery = Record<string, any>;
  export type InsDeleteApiV1AccountInfoItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsDeleteApiV1AccountInfoItemByIdBody = any;
  export type InsDeleteApiV1AccountInfoItemByIdHeader = Record<string, any>;
  export type InsDeleteApiV1AccountInfoItemByIdCookie = Record<string, any>;
  export type InsDeleteApiV1AccountInfoItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1AccountInfoItemByIdGeneric = {
    query: InsDeleteApiV1AccountInfoItemByIdQuery;
    params: InsDeleteApiV1AccountInfoItemByIdParams;
    data: InsDeleteApiV1AccountInfoItemByIdBody;
    header: InsDeleteApiV1AccountInfoItemByIdHeader;
    cookie: InsDeleteApiV1AccountInfoItemByIdCookie;
    result: InsDeleteApiV1AccountInfoItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/account/info/getAccountInfo
   * @summary 获取登录账号信息
   * @description
   */
  export type InsGetApiV1AccountInfoGetAccountInfoQuery = Record<string, any>;
  export type InsGetApiV1AccountInfoGetAccountInfoParams = Record<string, any>;
  export type InsGetApiV1AccountInfoGetAccountInfoBody = any;
  export type InsGetApiV1AccountInfoGetAccountInfoHeader = Record<string, any>;
  export type InsGetApiV1AccountInfoGetAccountInfoCookie = Record<string, any>;
  export type InsGetApiV1AccountInfoGetAccountInfoResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AccountInfoDTO (可选) */
    data?: XinliModels.AccountInfoDTO;
  };
  export type InsGetApiV1AccountInfoGetAccountInfoGeneric = {
    query: InsGetApiV1AccountInfoGetAccountInfoQuery;
    params: InsGetApiV1AccountInfoGetAccountInfoParams;
    data: InsGetApiV1AccountInfoGetAccountInfoBody;
    header: InsGetApiV1AccountInfoGetAccountInfoHeader;
    cookie: InsGetApiV1AccountInfoGetAccountInfoCookie;
    result: InsGetApiV1AccountInfoGetAccountInfoResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/account/getAccountInfo
   * @summary 获取登录账号信息
   * @description
   */
  export type InsGetApiV1AccountGetAccountInfoQuery = Record<string, any>;
  export type InsGetApiV1AccountGetAccountInfoParams = Record<string, any>;
  export type InsGetApiV1AccountGetAccountInfoBody = any;
  export type InsGetApiV1AccountGetAccountInfoHeader = Record<string, any>;
  export type InsGetApiV1AccountGetAccountInfoCookie = Record<string, any>;
  export type InsGetApiV1AccountGetAccountInfoResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AccountInfoDTO (可选) */
    data?: XinliModels.AccountInfoDTO;
  };
  export type InsGetApiV1AccountGetAccountInfoGeneric = {
    query: InsGetApiV1AccountGetAccountInfoQuery;
    params: InsGetApiV1AccountGetAccountInfoParams;
    data: InsGetApiV1AccountGetAccountInfoBody;
    header: InsGetApiV1AccountGetAccountInfoHeader;
    cookie: InsGetApiV1AccountGetAccountInfoCookie;
    result: InsGetApiV1AccountGetAccountInfoResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveys/list
   * @summary 批量删除
   * @description
   */
  export type InsDeleteApiV1SurveysListQuery = Record<string, any>;
  export type InsDeleteApiV1SurveysListParams = Record<string, any>;
  export type InsDeleteApiV1SurveysListBody = string[];
  export type InsDeleteApiV1SurveysListHeader = Record<string, any>;
  export type InsDeleteApiV1SurveysListCookie = Record<string, any>;
  export type InsDeleteApiV1SurveysListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1SurveysListGeneric = {
    query: InsDeleteApiV1SurveysListQuery;
    params: InsDeleteApiV1SurveysListParams;
    data: InsDeleteApiV1SurveysListBody;
    header: InsDeleteApiV1SurveysListHeader;
    cookie: InsDeleteApiV1SurveysListCookie;
    result: InsDeleteApiV1SurveysListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/surveys/category/item/{id}
   * @summary 删除
   * @description
   */
  export type InsDeleteApiV1SurveysCategoryItemByIdQuery = Record<string, any>;
  export type InsDeleteApiV1SurveysCategoryItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsDeleteApiV1SurveysCategoryItemByIdBody = any;
  export type InsDeleteApiV1SurveysCategoryItemByIdHeader = Record<string, any>;
  export type InsDeleteApiV1SurveysCategoryItemByIdCookie = Record<string, any>;
  export type InsDeleteApiV1SurveysCategoryItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1SurveysCategoryItemByIdGeneric = {
    query: InsDeleteApiV1SurveysCategoryItemByIdQuery;
    params: InsDeleteApiV1SurveysCategoryItemByIdParams;
    data: InsDeleteApiV1SurveysCategoryItemByIdBody;
    header: InsDeleteApiV1SurveysCategoryItemByIdHeader;
    cookie: InsDeleteApiV1SurveysCategoryItemByIdCookie;
    result: InsDeleteApiV1SurveysCategoryItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/informationCollection/list
   * @summary 批量删除
   * @description
   */
  export type InsDeleteApiV1InformationCollectionListQuery = Record<string, any>;
  export type InsDeleteApiV1InformationCollectionListParams = Record<string, any>;
  export type InsDeleteApiV1InformationCollectionListBody = string[];
  export type InsDeleteApiV1InformationCollectionListHeader = Record<string, any>;
  export type InsDeleteApiV1InformationCollectionListCookie = Record<string, any>;
  export type InsDeleteApiV1InformationCollectionListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1InformationCollectionListGeneric = {
    query: InsDeleteApiV1InformationCollectionListQuery;
    params: InsDeleteApiV1InformationCollectionListParams;
    data: InsDeleteApiV1InformationCollectionListBody;
    header: InsDeleteApiV1InformationCollectionListHeader;
    cookie: InsDeleteApiV1InformationCollectionListCookie;
    result: InsDeleteApiV1InformationCollectionListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/informationCollection/item/{id}
   * @summary 删除
   * @description
   */
  export type InsDeleteApiV1InformationCollectionItemByIdQuery = Record<string, any>;
  export type InsDeleteApiV1InformationCollectionItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsDeleteApiV1InformationCollectionItemByIdBody = any;
  export type InsDeleteApiV1InformationCollectionItemByIdHeader = Record<string, any>;
  export type InsDeleteApiV1InformationCollectionItemByIdCookie = Record<string, any>;
  export type InsDeleteApiV1InformationCollectionItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1InformationCollectionItemByIdGeneric = {
    query: InsDeleteApiV1InformationCollectionItemByIdQuery;
    params: InsDeleteApiV1InformationCollectionItemByIdParams;
    data: InsDeleteApiV1InformationCollectionItemByIdBody;
    header: InsDeleteApiV1InformationCollectionItemByIdHeader;
    cookie: InsDeleteApiV1InformationCollectionItemByIdCookie;
    result: InsDeleteApiV1InformationCollectionItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/doctor/list
   * @summary 批量删除
   * @description
   */
  export type InsDeleteApiV1DoctorListQuery = Record<string, any>;
  export type InsDeleteApiV1DoctorListParams = Record<string, any>;
  export type InsDeleteApiV1DoctorListBody = string[];
  export type InsDeleteApiV1DoctorListHeader = Record<string, any>;
  export type InsDeleteApiV1DoctorListCookie = Record<string, any>;
  export type InsDeleteApiV1DoctorListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1DoctorListGeneric = {
    query: InsDeleteApiV1DoctorListQuery;
    params: InsDeleteApiV1DoctorListParams;
    data: InsDeleteApiV1DoctorListBody;
    header: InsDeleteApiV1DoctorListHeader;
    cookie: InsDeleteApiV1DoctorListCookie;
    result: InsDeleteApiV1DoctorListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/doctor/item/{id}
   * @summary 删除
   * @description
   */
  export type InsDeleteApiV1DoctorItemByIdQuery = Record<string, any>;
  export type InsDeleteApiV1DoctorItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsDeleteApiV1DoctorItemByIdBody = any;
  export type InsDeleteApiV1DoctorItemByIdHeader = Record<string, any>;
  export type InsDeleteApiV1DoctorItemByIdCookie = Record<string, any>;
  export type InsDeleteApiV1DoctorItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1DoctorItemByIdGeneric = {
    query: InsDeleteApiV1DoctorItemByIdQuery;
    params: InsDeleteApiV1DoctorItemByIdParams;
    data: InsDeleteApiV1DoctorItemByIdBody;
    header: InsDeleteApiV1DoctorItemByIdHeader;
    cookie: InsDeleteApiV1DoctorItemByIdCookie;
    result: InsDeleteApiV1DoctorItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/course/type/item/{id}
   * @summary 删除课程
   * @description
   */
  export type InsDeleteApiV1CourseTypeItemByIdQuery = Record<string, any>;
  export type InsDeleteApiV1CourseTypeItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsDeleteApiV1CourseTypeItemByIdBody = any;
  export type InsDeleteApiV1CourseTypeItemByIdHeader = Record<string, any>;
  export type InsDeleteApiV1CourseTypeItemByIdCookie = Record<string, any>;
  export type InsDeleteApiV1CourseTypeItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1CourseTypeItemByIdGeneric = {
    query: InsDeleteApiV1CourseTypeItemByIdQuery;
    params: InsDeleteApiV1CourseTypeItemByIdParams;
    data: InsDeleteApiV1CourseTypeItemByIdBody;
    header: InsDeleteApiV1CourseTypeItemByIdHeader;
    cookie: InsDeleteApiV1CourseTypeItemByIdCookie;
    result: InsDeleteApiV1CourseTypeItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/course/resources/item/{id}
   * @summary 删除
   * @description
   */
  export type InsDeleteApiV1CourseResourcesItemByIdQuery = Record<string, any>;
  export type InsDeleteApiV1CourseResourcesItemByIdParams = {
    /** string */
    id: string;
  };
  export type InsDeleteApiV1CourseResourcesItemByIdBody = any;
  export type InsDeleteApiV1CourseResourcesItemByIdHeader = Record<string, any>;
  export type InsDeleteApiV1CourseResourcesItemByIdCookie = Record<string, any>;
  export type InsDeleteApiV1CourseResourcesItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1CourseResourcesItemByIdGeneric = {
    query: InsDeleteApiV1CourseResourcesItemByIdQuery;
    params: InsDeleteApiV1CourseResourcesItemByIdParams;
    data: InsDeleteApiV1CourseResourcesItemByIdBody;
    header: InsDeleteApiV1CourseResourcesItemByIdHeader;
    cookie: InsDeleteApiV1CourseResourcesItemByIdCookie;
    result: InsDeleteApiV1CourseResourcesItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /ins/api/v1/account/info/list
   * @summary 删除账号信息
   * @description
   */
  export type InsDeleteApiV1AccountInfoListQuery = Record<string, any>;
  export type InsDeleteApiV1AccountInfoListParams = Record<string, any>;
  export type InsDeleteApiV1AccountInfoListBody = string[];
  export type InsDeleteApiV1AccountInfoListHeader = Record<string, any>;
  export type InsDeleteApiV1AccountInfoListCookie = Record<string, any>;
  export type InsDeleteApiV1AccountInfoListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InsDeleteApiV1AccountInfoListGeneric = {
    query: InsDeleteApiV1AccountInfoListQuery;
    params: InsDeleteApiV1AccountInfoListParams;
    data: InsDeleteApiV1AccountInfoListBody;
    header: InsDeleteApiV1AccountInfoListHeader;
    cookie: InsDeleteApiV1AccountInfoListCookie;
    result: InsDeleteApiV1AccountInfoListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };
}
