export namespace XinliModels {
  /**
   * UpdateUserInfo
   */
  export type UpdateUserInfo = {
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

  /**
   * ResultBoolean
   */
  export type ResultBoolean = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };

  /**
   * UpdateSystemMessage
   */
  export type UpdateSystemMessage = {
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

  /**
   * UpdateSurveysParticipant
   */
  export type UpdateSurveysParticipant = {
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

  /**
   * UpdateSurveys
   */
  export type UpdateSurveys = {
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

  /**
   * SurveysCategoryDto
   */
  export type SurveysCategoryDto = {
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

  /**
   * OptionsDTO
   */
  export type OptionsDTO = {
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

  /**
   * PreconditionDTO
   */
  export type PreconditionDTO = {
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

  /**
   * QuestionsDTO
   */
  export type QuestionsDTO = {
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

  /**
   * UpdateQuestions
   */
  export type UpdateQuestions = {
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

  /**
   * UpdatePrecondition
   */
  export type UpdatePrecondition = {
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

  /**
   * UpdateOptions
   */
  export type UpdateOptions = {
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

  /**
   * UpdateInstitution
   */
  export type UpdateInstitution = {
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

  /**
   * InformationQuestionsDTO
   */
  export type InformationQuestionsDTO = {
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

  /**
   * UpdateInformationQuestions
   */
  export type UpdateInformationQuestions = {
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

  /**
   * UpdateInformationCollection
   */
  export type UpdateInformationCollection = {
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

  /**
   * UpdateDoctor
   */
  export type UpdateDoctor = {
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

  /**
   * CourseTypeDto
   */
  export type CourseTypeDto = {
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

  /**
   * CourseResourcesDto
   */
  export type CourseResourcesDto = {
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

  /**
   * UpdateCategory
   */
  export type UpdateCategory = {
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

  /**
   * UpdateAnswers
   */
  export type UpdateAnswers = {
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

  /**
   * UpdateAnswerScoreRanges
   */
  export type UpdateAnswerScoreRanges = {
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

  /**
   * UpdateAccount
   */
  export type UpdateAccount = {
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

  /**
   * UsernamePassword
   */
  export type UsernamePassword = {
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

  /**
   * UpdateRole
   */
  export type UpdateRole = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 角色名称 */
    roleName?: string;

    /** string (可选) - 角色编码 */
    roleCode?: string;

    /** string (可选) - 菜单ids */
    menuIds?: string;
  };

  /**
   * UpdateMenus
   */
  export type UpdateMenus = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 菜单名称 */
    name?: string;

    /** "{"desc":"菜单","name":"MENU"}" | "{"desc":"按钮","name":"FEATURE"}" | "{"desc":"目录","name":"GROUP"}" | "{"desc":"功能","name":"FUNCTION"}" (可选) - 类型(菜单,功能) | 可选值: "{\"desc\":\"菜单\",\"name\":\"MENU\"}", "{\"desc\":\"按钮\",\"name\":\"FEATURE\"}", "{\"desc\":\"目录\",\"name\":\"GROUP\"}", "{\"desc\":\"功能\",\"name\":\"FUNCTION\"}" */
    type?: "MENU" | "FEATURE" | "GROUP" | "FUNCTION";

    /** string (可选) - 功能编码 */
    code?: string;

    /** string (可选) - 父id */
    parentId?: string;

    /** string (可选) - 页面url地址 */
    urlAddress?: string;

    /** string (可选) - 图标 */
    icon?: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** string (可选) - 路径 */
    path?: string;

    /** string (可选) - 标题 */
    title?: string;

    /** string (可选) - 渲染组件 */
    component?: string;

    /** string (可选) - 父级名称 */
    parentName?: string;

    /** string (可选) - 重定向路径 */
    redirect?: string;

    /** number (可选) - 权重 | 格式: int32 */
    weight?: number;

    /** boolean (可选) - 是否隐藏 */
    isHidden?: boolean;

    /** boolean (可选) - 是否缓存 */
    isCache?: boolean;

    /** boolean (可选) - 是否禁用 */
    isDisabled?: boolean;

    /** boolean (可选) - 是否内联 */
    isInline?: boolean;

    /** "{"desc":"无","name":"NONE"}" | "{"desc":"组件","name":"COMPONENT"}" | "{"desc":"外链","name":"OUT_LINK"}" | "{"desc":"内链","name":"INNER_LINK"}" (可选) - 打开方式 | 可选值: "{\"desc\":\"无\",\"name\":\"NONE\"}", "{\"desc\":\"组件\",\"name\":\"COMPONENT\"}", "{\"desc\":\"外链\",\"name\":\"OUT_LINK\"}", "{\"desc\":\"内链\",\"name\":\"INNER_LINK\"}" */
    openType?: "NONE" | "COMPONENT" | "OUT_LINK" | "INNER_LINK";
  };

  /**
   * UpdateLevelConfig
   */
  export type UpdateLevelConfig = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 医师等级 */
    level?: string;

    /** number (可选) - 服务时长 | 格式: int32 */
    serviceHours?: number;

    /** number (可选) - 服务次数 | 格式: int32 */
    serviceCount?: number;

    /** number (可选) - 从业年限 | 格式: int32 */
    workingYears?: number;

    /** number (可选) - 在线时长 | 格式: int32 */
    onlineHours?: number;
  };

  /**
   * UpdateFeedback
   */
  export type UpdateFeedback = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 受理人id */
    accountId?: string;

    /** string (可选) - 用户ID，提交反馈的用户 */
    userId?: string;

    /** "{"desc":"待处理","name":"PENDING"}" | "{"desc":"已受理","name":"ACCEPTED"}" | "{"desc":"已关闭","name":"CLOSED"}" (可选) - 反馈状态，枚举：FeedbackStatus | 可选值: "{\"desc\":\"待处理\",\"name\":\"PENDING\"}", "{\"desc\":\"已受理\",\"name\":\"ACCEPTED\"}", "{\"desc\":\"已关闭\",\"name\":\"CLOSED\"}" */
    status?: "PENDING" | "ACCEPTED" | "CLOSED";

    /** string (可选) - 反馈内容 */
    description?: string;

    /** string (可选) - 受理时间 | 格式: date-time */
    acceptedTime?: string;

    /** string (可选) - 受理回复 */
    reply?: string;

    /** string (可选) - 反馈类型 */
    type?: string;
  };

  /**
   * UpdateSysDictType
   */
  export type UpdateSysDictType = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 格式: date-time */
    updateTime?: string;

    /** string (可选) - 字典名称 */
    name?: string;

    /** string (可选) - 字典类型 */
    code?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 备注 */
    remark?: string;
  };

  /**
   * UpdateSysDictData
   */
  export type UpdateSysDictData = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 格式: date-time */
    updateTime?: string;

    /** string (可选) - 父id */
    parentId?: string;

    /** string (可选) - 字典名称 */
    name?: string;

    /** number (可选) - 字典排序 | 格式: int32 */
    dictSort?: number;

    /** string (可选) - 字典键值 */
    code?: string;

    /** string (可选) - 颜色 */
    color?: string;

    /** string (可选) - 标识 */
    logo?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 备注 */
    remark?: string;
  };

  /**
   * CourseDto
   */
  export type CourseDto = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 课程标题 */
    title: string;

    /** string (可选) - 课程说明 */
    description?: string;

    /** number - 价格 */
    price: number;

    /** boolean - 是否启用 */
    isActive: boolean;

    /** boolean - 是否推荐 */
    isRec: boolean;

    /** boolean - 是否置顶 */
    isTop: boolean;

    /** string (可选) - 开售时间 | 格式: date-time */
    startTime?: string;

    /** string (可选) - 截至时间 | 格式: date-time */
    endTime?: string;

    /** number (可选) - 课程销量 | 格式: int32 */
    salesCount?: number;

    /** number (可选) - 课程销售额 */
    salesAmount?: number;

    /** string - 课程类型 */
    type: string;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** string (可选) - 封面 */
    coverImg?: string;
  };

  /**
   * UpdateSysConfig
   */
  export type UpdateSysConfig = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 格式: date-time */
    updateTime?: string;

    /** number (可选) - 配置类型 | 格式: int32 */
    type?: number;

    /** string (可选) - name */
    name?: string;

    /** string (可选) - content */
    content?: string;
  };

  /**
   * UpdateBanner
   */
  export type UpdateBanner = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - banner图的URL */
    imageUrl?: string;

    /** string (可选) - 跳转链接URL */
    linkUrl?: string;

    /** string (可选) - banner的详细说明文本 */
    description?: string;

    /** number (可选) - 排序 | 格式: int32 */
    order?: number;
  };

  /**
   * UpdateAuditLog
   */
  export type UpdateAuditLog = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 申请ID */
    applicantId?: string;

    /** string (可选) - 审核ID */
    auditorId?: string;

    /** string (可选) - 内容 */
    content?: string;

    /** "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" (可选) - 审核类型，枚举：AuditLogType | 可选值: "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}" */
    type?: "INSTITUTION" | "DOCTOR";

    /** string (可选) - 审核意见 */
    reason?: string;

    /** string (可选) */
    userName?: string;

    /** string (可选) */
    userPassword?: string;

    /** number (可选) - 格式: int32 */
    count?: number;
  };

  /**
   * UpdateArticle
   */
  export type UpdateArticle = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 文章标题 */
    title?: string;

    /** string (可选) - 文章内容（富文本） */
    content?: string;

    /** string (可选) - 文章分类 */
    type?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 文章状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 副标题 */
    subhead?: string;

    /** number (可选) - 浏览量 | 格式: int32 */
    pageViews?: number;

    /** string (可选) - 附件 */
    annex?: string;

    /** string (可选) - 图片 */
    image?: string;
  };

  /**
   * UpdateAnnouncement
   */
  export type UpdateAnnouncement = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 公告标题 */
    title?: string;

    /** string (可选) - 公告内容（富文本） */
    content?: string;

    /** boolean (可选) - 是否开启，1为开启，0为关闭 */
    isActive?: boolean;

    /** string (可选) - 公告有效期的开始时间 | 格式: date-time */
    startTime?: string;

    /** string (可选) - 公告有效期的结束时间 | 格式: date-time */
    endTime?: string;

    /** number (可选) - 置顶优先级 | 格式: int32 */
    isTop?: number;

    /** string (可选) - 公告分类 */
    type?: string;

    /** string (可选) - 公告图片 */
    image?: string;

    /** string (可选) - 副标题 */
    subhead?: string;

    /** string (可选) - 附件 */
    annex?: string;
  };

  /**
   * UserInfoDTO
   */
  export type UserInfoDTO = {
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

  /**
   * ResultUserInfoDTO
   */
  export type ResultUserInfoDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.UserInfoDTO (可选) */
    data?: XinliModels.UserInfoDTO;
  };

  /**
   * ResultMapStringString
   */
  export type ResultMapStringString = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** object (可选) */
    data?: Record<string, string>;
  };

  /**
   * SystemMessageDTO
   */
  export type SystemMessageDTO = {
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

  /**
   * ResultListSystemMessageDTO
   */
  export type ResultListSystemMessageDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SystemMessageDTO[];
  };

  /**
   * ResultSystemMessageDTO
   */
  export type ResultSystemMessageDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SystemMessageDTO (可选) */
    data?: XinliModels.SystemMessageDTO;
  };

  /**
   * SurveysParticipantDTO
   */
  export type SurveysParticipantDTO = {
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

  /**
   * ResultListSurveysParticipantDTO
   */
  export type ResultListSurveysParticipantDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SurveysParticipantDTO[];
  };

  /**
   * ResultSurveysParticipantDTO
   */
  export type ResultSurveysParticipantDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SurveysParticipantDTO (可选) */
    data?: XinliModels.SurveysParticipantDTO;
  };

  /**
   * SurveysDTO
   */
  export type SurveysDTO = {
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

  /**
   * ResultSurveysDTO
   */
  export type ResultSurveysDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SurveysDTO (可选) */
    data?: XinliModels.SurveysDTO;
  };

  /**
   * ResultSurveysCategoryDto
   */
  export type ResultSurveysCategoryDto = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SurveysCategoryDto (可选) */
    data?: XinliModels.SurveysCategoryDto;
  };

  /**
   * ResultListQuestionsDTO
   */
  export type ResultListQuestionsDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.QuestionsDTO[];
  };

  /**
   * ResultQuestionsDTO
   */
  export type ResultQuestionsDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.QuestionsDTO (可选) */
    data?: XinliModels.QuestionsDTO;
  };

  /**
   * ResultListPreconditionDTO
   */
  export type ResultListPreconditionDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.PreconditionDTO[];
  };

  /**
   * ResultPreconditionDTO
   */
  export type ResultPreconditionDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.PreconditionDTO (可选) */
    data?: XinliModels.PreconditionDTO;
  };

  /**
   * ResultListOptionsDTO
   */
  export type ResultListOptionsDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.OptionsDTO[];
  };

  /**
   * ResultOptionsDTO
   */
  export type ResultOptionsDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.OptionsDTO (可选) */
    data?: XinliModels.OptionsDTO;
  };

  /**
   * ResultListInformationQuestionsDTO
   */
  export type ResultListInformationQuestionsDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.InformationQuestionsDTO[];
  };

  /**
   * ResultInformationQuestionsDTO
   */
  export type ResultInformationQuestionsDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.InformationQuestionsDTO (可选) */
    data?: XinliModels.InformationQuestionsDTO;
  };

  /**
   * Content
   * @description 传入对象
   */
  export type Content = {
    /** string - 问题code */
    questionCode: string;

    /** XinliModels.QuestionsDTO (可选) */
    questionsDTO?: XinliModels.QuestionsDTO;

    /** array - 选项code */
    optionCodeList: string[];

    /** array (可选) - 选项对象 */
    optionsDTOList?: XinliModels.OptionsDTO[];

    /** string (可选) - 填写内容,type为TK时必传 */
    content?: string;

    /** "{"desc":"选择","name":"XZ"}" | "{"desc":"填空","name":"TK"}" - 类型 | 可选值: "{\"desc\":\"选择\",\"name\":\"XZ\"}", "{\"desc\":\"填空\",\"name\":\"TK\"}" */
    type: "XZ" | "TK";
  };

  /**
   * InformationCollectionDTO
   */
  export type InformationCollectionDTO = {
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

  /**
   * ResultListInformationCollectionDTO
   */
  export type ResultListInformationCollectionDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.InformationCollectionDTO[];
  };

  /**
   * ResultInformationCollectionDTO
   */
  export type ResultInformationCollectionDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.InformationCollectionDTO (可选) */
    data?: XinliModels.InformationCollectionDTO;
  };

  /**
   * ResultListUploadResultDTO
   */
  export type ResultListUploadResultDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.UploadResultDTO[];
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
   * UploadBase64DTO
   */
  export type UploadBase64DTO = {
    /** string (可选) - 父级目录 | 示例: "/face/big" */
    parentPath?: string;

    /** string (可选) - 自定义文件存储名 | 示例: "abc" */
    fileName?: string;

    /** string - 文件扩展名 | 示例: ".jpg" */
    ext: string;

    /** string - 文件base64字符串 */
    base64: string;
  };

  /**
   * ResultUploadResultDTO
   */
  export type ResultUploadResultDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.UploadResultDTO (可选) */
    data?: XinliModels.UploadResultDTO;
  };

  /**
   * DoctorDTO
   */
  export type DoctorDTO = {
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

  /**
   * ResultDoctorDTO
   */
  export type ResultDoctorDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.DoctorDTO (可选) */
    data?: XinliModels.DoctorDTO;
  };

  /**
   * DoctorEnterAuditDto
   */
  export type DoctorEnterAuditDto = {
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

  /**
   * ResultCourseTypeDto
   */
  export type ResultCourseTypeDto = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.CourseTypeDto (可选) */
    data?: XinliModels.CourseTypeDto;
  };

  /**
   * ResultCourseResourcesDto
   */
  export type ResultCourseResourcesDto = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.CourseResourcesDto (可选) */
    data?: XinliModels.CourseResourcesDto;
  };

  /**
   * CategoryDTO
   */
  export type CategoryDTO = {
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

  /**
   * ResultListCategoryDTO
   */
  export type ResultListCategoryDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.CategoryDTO[];
  };

  /**
   * ResultCategoryDTO
   */
  export type ResultCategoryDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.CategoryDTO (可选) */
    data?: XinliModels.CategoryDTO;
  };

  /**
   * AnswersDTO
   */
  export type AnswersDTO = {
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

  /**
   * ResultListAnswersDTO
   */
  export type ResultListAnswersDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.AnswersDTO[];
  };

  /**
   * ResultAnswersDTO
   */
  export type ResultAnswersDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AnswersDTO (可选) */
    data?: XinliModels.AnswersDTO;
  };

  /**
   * AnswerScoreRangesDTO
   */
  export type AnswerScoreRangesDTO = {
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

  /**
   * ResultListAnswerScoreRangesDTO
   */
  export type ResultListAnswerScoreRangesDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.AnswerScoreRangesDTO[];
  };

  /**
   * ResultAnswerScoreRangesDTO
   */
  export type ResultAnswerScoreRangesDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AnswerScoreRangesDTO (可选) */
    data?: XinliModels.AnswerScoreRangesDTO;
  };

  /**
   * ResultString
   */
  export type ResultString = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** string (可选) */
    data?: string;
  };

  /**
   * AccountInfoDTO
   */
  export type AccountInfoDTO = {
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

  /**
   * ResultAccountInfoDTO
   */
  export type ResultAccountInfoDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AccountInfoDTO (可选) */
    data?: XinliModels.AccountInfoDTO;
  };

  /**
   * ResultListSurveysDTO
   */
  export type ResultListSurveysDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SurveysDTO[];
  };

  /**
   * ResultListRoleDTO
   */
  export type ResultListRoleDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.RoleDTO[];
  };

  /**
   * RoleDTO
   */
  export type RoleDTO = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string - 角色名称 */
    roleName: string;

    /** string - 角色编码 */
    roleCode: string;

    /** string - 菜单ids */
    menuIds: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态：启用/禁用 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";
  };

  /**
   * ResultRoleDTO
   */
  export type ResultRoleDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.RoleDTO (可选) */
    data?: XinliModels.RoleDTO;
  };

  /**
   * MenusDTO
   */
  export type MenusDTO = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 菜单名称 */
    name?: string;

    /** "{"desc":"菜单","name":"MENU"}" | "{"desc":"按钮","name":"FEATURE"}" | "{"desc":"目录","name":"GROUP"}" | "{"desc":"功能","name":"FUNCTION"}" - 类型(菜单,功能) | 可选值: "{\"desc\":\"菜单\",\"name\":\"MENU\"}", "{\"desc\":\"按钮\",\"name\":\"FEATURE\"}", "{\"desc\":\"目录\",\"name\":\"GROUP\"}", "{\"desc\":\"功能\",\"name\":\"FUNCTION\"}" */
    type: "MENU" | "FEATURE" | "GROUP" | "FUNCTION";

    /** string (可选) - 功能编码 */
    code?: string;

    /** string (可选) - 父id */
    parentId?: string;

    /** string (可选) - 页面url地址 */
    urlAddress?: string;

    /** string (可选) - 图标 */
    icon?: string;

    /** number - 排序 | 格式: int32 */
    sort: number;

    /** string (可选) - 路径 */
    path?: string;

    /** string - 标题 */
    title: string;

    /** string (可选) - 渲染组件 */
    component?: string;

    /** string - 父级名称 */
    parentName: string;

    /** string (可选) - 重定向路径 */
    redirect?: string;

    /** number - 权重 | 格式: int32 */
    weight: number;

    /** boolean - 是否隐藏 */
    isHidden: boolean;

    /** boolean - 是否缓存 */
    isCache: boolean;

    /** boolean - 是否禁用 */
    isDisabled: boolean;

    /** boolean - 是否内联 */
    isInline: boolean;

    /** "{"desc":"无","name":"NONE"}" | "{"desc":"组件","name":"COMPONENT"}" | "{"desc":"外链","name":"OUT_LINK"}" | "{"desc":"内链","name":"INNER_LINK"}" (可选) - 打开方式 | 可选值: "{\"desc\":\"无\",\"name\":\"NONE\"}", "{\"desc\":\"组件\",\"name\":\"COMPONENT\"}", "{\"desc\":\"外链\",\"name\":\"OUT_LINK\"}", "{\"desc\":\"内链\",\"name\":\"INNER_LINK\"}" */
    openType?: "NONE" | "COMPONENT" | "OUT_LINK" | "INNER_LINK";
  };

  /**
   * ResultListMenusDTO
   */
  export type ResultListMenusDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.MenusDTO[];
  };

  /**
   * ResultMenusDTO
   */
  export type ResultMenusDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.MenusDTO (可选) */
    data?: XinliModels.MenusDTO;
  };

  /**
   * LogInfoDTO
   */
  export type LogInfoDTO = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** "{"desc":"登录","name":"LOGIN"}" | "{"desc":"异常","name":"EXCEPTION"}" | "{"desc":"操作","name":"OPERATION"}" (可选) - 类型(登录日志,操作日志,异常日志) | 可选值: "{\"desc\":\"登录\",\"name\":\"LOGIN\"}", "{\"desc\":\"异常\",\"name\":\"EXCEPTION\"}", "{\"desc\":\"操作\",\"name\":\"OPERATION\"}" */
    type?: "LOGIN" | "EXCEPTION" | "OPERATION";

    /** string (可选) - ip地址 */
    ipAddress?: string;

    /** string (可选) - 接口路径 */
    url?: string;

    /** string (可选) - 信息 */
    message?: string;
  };

  /**
   * ResultListLogInfoDTO
   */
  export type ResultListLogInfoDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.LogInfoDTO[];
  };

  /**
   * LevelConfigDTO
   */
  export type LevelConfigDTO = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 医师等级 */
    level?: string;

    /** number (可选) - 服务时长 | 格式: int32 */
    serviceHours?: number;

    /** number (可选) - 服务次数 | 格式: int32 */
    serviceCount?: number;

    /** number (可选) - 从业年限 | 格式: int32 */
    workingYears?: number;

    /** number (可选) - 在线时长 | 格式: int32 */
    onlineHours?: number;
  };

  /**
   * ResultListLevelConfigDTO
   */
  export type ResultListLevelConfigDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.LevelConfigDTO[];
  };

  /**
   * ResultLevelConfigDTO
   */
  export type ResultLevelConfigDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.LevelConfigDTO (可选) */
    data?: XinliModels.LevelConfigDTO;
  };

  /**
   * InstitutionDTO
   */
  export type InstitutionDTO = {
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

    /** string (可选) - 申请人ID */
    userId?: string;

    /** string (可选) - 账号 */
    userName?: string;

    /** string (可选) - 密码 - 机构入驻是密码RSA加密 */
    userPassword?: string;

    /** string (可选) - 机构码 */
    code?: string;

    /** string - 机构介绍 */
    introduce: string;

    /** string - 业务范围 */
    business: string;

    /** string (可选) */
    roleIds?: string;

    /** string - 身份证正面 */
    idCardFont: string;

    /** string - 身份证反面 */
    idCardBack: string;

    /** string (可选) - 资格证书 */
    qualifications?: string;

    /** "{"desc":"系统","name":"SYSTEM"}" | "{"desc":"个人","name":"PERSONAL"}" (可选) - 审核类型 | 可选值: "{\"desc\":\"系统\",\"name\":\"SYSTEM\"}", "{\"desc\":\"个人\",\"name\":\"PERSONAL\"}" */
    applicationType?: "SYSTEM" | "PERSONAL";
  };

  /**
   * ResultInstitutionDTO
   */
  export type ResultInstitutionDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.InstitutionDTO (可选) */
    data?: XinliModels.InstitutionDTO;
  };

  /**
   * InstitutionEnterAuditDto
   */
  export type InstitutionEnterAuditDto = {
    /** string - 机构id */
    institutionId: string;

    /** "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" - 审核状态 | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}" */
    auditStatus: "WAIT" | "PASS" | "FAIL";

    /** string (可选) - 账号 - 审核状态为通过是必传 */
    userName?: string;

    /** string (可选) - 密码 - 审核状态为通过是必传，并且密码是rsa加密后的 */
    password?: string;

    /** string (可选) - 角色id - 审核状态为通过是必传 */
    roleIds?: string;

    /** string (可选) - 理由 */
    reason?: string;

    /** string - 机构码 */
    code: string;
  };

  /**
   * FeedbackDTO
   */
  export type FeedbackDTO = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 受理人id */
    accountId?: string;

    /** string (可选) - 用户ID，提交反馈的用户 */
    userId?: string;

    /** "{"desc":"待处理","name":"PENDING"}" | "{"desc":"已受理","name":"ACCEPTED"}" | "{"desc":"已关闭","name":"CLOSED"}" (可选) - 反馈状态，枚举：FeedbackStatus | 可选值: "{\"desc\":\"待处理\",\"name\":\"PENDING\"}", "{\"desc\":\"已受理\",\"name\":\"ACCEPTED\"}", "{\"desc\":\"已关闭\",\"name\":\"CLOSED\"}" */
    status?: "PENDING" | "ACCEPTED" | "CLOSED";

    /** string (可选) - 反馈内容 */
    description?: string;

    /** string (可选) - 受理时间 | 格式: date-time */
    acceptedTime?: string;

    /** string (可选) - 受理回复 */
    reply?: string;

    /** string - 反馈类型 */
    type: string;

    /** string (可选) */
    accountName?: string;

    /** string (可选) */
    userName?: string;
  };

  /**
   * ResultListFeedbackDTO
   */
  export type ResultListFeedbackDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.FeedbackDTO[];
  };

  /**
   * ResultFeedbackDTO
   */
  export type ResultFeedbackDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.FeedbackDTO (可选) */
    data?: XinliModels.FeedbackDTO;
  };

  /**
   * SysDictTypeDTO
   */
  export type SysDictTypeDTO = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 格式: date-time */
    updateTime?: string;

    /** string - 字典名称 */
    name: string;

    /** string - 字典类型 */
    code: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 备注 */
    remark?: string;
  };

  /**
   * ResultSysDictTypeDTO
   */
  export type ResultSysDictTypeDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SysDictTypeDTO (可选) */
    data?: XinliModels.SysDictTypeDTO;
  };

  /**
   * SysDictDataDTO
   */
  export type SysDictDataDTO = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 格式: date-time */
    updateTime?: string;

    /** string (可选) - 父id */
    parentId?: string;

    /** string (可选) - 字典名称 */
    name?: string;

    /** number (可选) - 字典排序 | 格式: int32 */
    dictSort?: number;

    /** string (可选) - 字典键值 */
    code?: string;

    /** string (可选) - 颜色 */
    color?: string;

    /** string (可选) - 标识 */
    logo?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 备注 */
    remark?: string;
  };

  /**
   * ResultSysDictDataDTO
   */
  export type ResultSysDictDataDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SysDictDataDTO (可选) */
    data?: XinliModels.SysDictDataDTO;
  };

  /**
   * ResultCourseDto
   */
  export type ResultCourseDto = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.CourseDto (可选) */
    data?: XinliModels.CourseDto;
  };

  /**
   * SysConfigStoreCity
   * @description 商家配置-城市
   */
  export type SysConfigStoreCity = {
    /** string - 城市名称 */
    cityName: string;

    /** string - 城市编码 */
    cityCode: string;

    /** string (可选) - 父编码 */
    parentCode?: string;
  };

  /**
   * SysConfigBasicInfo
   * @description 基础信息
   */
  export type SysConfigBasicInfo = {
    /** string (可选) - 站点名称 */
    siteName?: string;

    /** string (可选) - 备案号 */
    recordNumber?: string;

    /** string (可选) - 版本号 */
    version?: string;

    /** string (可选) - logo */
    logo?: string;

    /** string (可选) - 小程序appid */
    appId?: string;

    /** string (可选) - 小程序app-secret */
    appSecret?: string;

    /** string (可选) - 腾讯地图定位key */
    mapLocationKey?: string;

    /** string (可选) - 商家默认评分 */
    defaultRating?: string;

    /** string (可选) - 小程序分享标题 */
    shareTitle?: string;

    /** string (可选) - 小程序分享图片 */
    shareImage?: string;

    /** string (可选) - 订单付款时长(分钟) */
    paymentDuration?: string;

    /** string (可选) - 订单结算时长(小时) */
    settlementDuration?: string;
  };

  /**
   * SysConfigDTO
   */
  export type SysConfigDTO = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 格式: date-time */
    updateTime?: string;

    /** number (可选) - 配置类型 | 格式: int32 */
    type?: number;

    /** string (可选) - name */
    name?: string;

    /** string (可选) - content */
    content?: string;
  };

  /**
   * ResultListSysConfigDTO
   */
  export type ResultListSysConfigDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SysConfigDTO[];
  };

  /**
   * ResultSysConfigDTO
   */
  export type ResultSysConfigDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SysConfigDTO (可选) */
    data?: XinliModels.SysConfigDTO;
  };

  /**
   * BannerDTO
   */
  export type BannerDTO = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - banner图的URL */
    imageUrl?: string;

    /** string (可选) - 跳转链接URL */
    linkUrl?: string;

    /** string (可选) - banner的详细说明文本 */
    description?: string;

    /** number (可选) - 排序 | 格式: int32 */
    order?: number;

    /** "{"desc":"普通","name":"NORMAL"}" | "{"desc":"内联","name":"N_LIAN"}" | "{"desc":"外联","name":"W_LIAN"}" - 类型 | 可选值: "{\"desc\":\"普通\",\"name\":\"NORMAL\"}", "{\"desc\":\"内联\",\"name\":\"N_LIAN\"}", "{\"desc\":\"外联\",\"name\":\"W_LIAN\"}" */
    type: "NORMAL" | "N_LIAN" | "W_LIAN";

    /** string (可选) - 内容 */
    content?: string;
  };

  /**
   * ResultListBannerDTO
   */
  export type ResultListBannerDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.BannerDTO[];
  };

  /**
   * ResultBannerDTO
   */
  export type ResultBannerDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BannerDTO (可选) */
    data?: XinliModels.BannerDTO;
  };

  /**
   * AuditLogDTO
   */
  export type AuditLogDTO = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 申请id */
    applicantId?: string;

    /** string (可选) - 审核id */
    auditorId?: string;

    /** string (可选) - 内容 */
    content?: string;

    /** "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" (可选) - 审核类型，枚举：AuditLogType | 可选值: "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}" */
    type?: "INSTITUTION" | "DOCTOR";

    /** string (可选) - 审核意见 */
    reason?: string;

    /** string (可选) - 申请name */
    applicantName?: string;

    /** string (可选) - 审核name */
    auditorName?: string;

    /** string (可选) */
    userName?: string;

    /** string (可选) */
    userPassword?: string;

    /** number (可选) - 格式: int32 */
    count?: number;
  };

  /**
   * ResultListAuditLogDTO
   */
  export type ResultListAuditLogDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.AuditLogDTO[];
  };

  /**
   * ResultAuditLogDTO
   */
  export type ResultAuditLogDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AuditLogDTO (可选) */
    data?: XinliModels.AuditLogDTO;
  };

  /**
   * ArticleDTO
   */
  export type ArticleDTO = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 文章标题 */
    title?: string;

    /** string (可选) - 文章内容（富文本） */
    content?: string;

    /** string (可选) - 文章分类 */
    type?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 文章状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 副标题 */
    subhead?: string;

    /** number (可选) - 浏览量 | 格式: int32 */
    pageViews?: number;

    /** string (可选) - 文章分类名字 */
    typeName?: string;

    /** string (可选) - 附件 */
    annex?: string;

    /** string (可选) - 图片 */
    image?: string;
  };

  /**
   * ResultListArticleDTO
   */
  export type ResultListArticleDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.ArticleDTO[];
  };

  /**
   * ResultArticleDTO
   */
  export type ResultArticleDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.ArticleDTO (可选) */
    data?: XinliModels.ArticleDTO;
  };

  /**
   * AnnouncementDTO
   */
  export type AnnouncementDTO = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 公告标题 */
    title?: string;

    /** string (可选) - 公告内容（富文本） */
    content?: string;

    /** boolean (可选) - 是否开启，1为开启，0为关闭 */
    isActive?: boolean;

    /** string (可选) - 公告有效期的开始时间 | 格式: date-time */
    startTime?: string;

    /** string (可选) - 公告有效期的结束时间 | 格式: date-time */
    endTime?: string;

    /** number (可选) - 置顶优先级 | 格式: int32 */
    isTop?: number;

    /** string (可选) - 公告分类 */
    type?: string;

    /** string (可选) - 公告图片 */
    image?: string;

    /** string (可选) - 副标题 */
    subhead?: string;

    /** string (可选) - 附件 */
    annex?: string;
  };

  /**
   * ResultListAnnouncementDTO
   */
  export type ResultListAnnouncementDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.AnnouncementDTO[];
  };

  /**
   * ResultAnnouncementDTO
   */
  export type ResultAnnouncementDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.AnnouncementDTO (可选) */
    data?: XinliModels.AnnouncementDTO;
  };

  /**
   * UserInfoPageQuery
   */
  export type UserInfoPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 账号id */
    accountId?: string;

    /** string (可选) - 微信id */
    openId?: string;

    /** number (可选) - 年龄 | 格式: int32 */
    age?: number;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";

    /** boolean (可选) - 是否为会员 */
    isVip?: boolean;

    /** string (可选) - 开始时间 | 格式: date-time */
    startTime?: string;

    /** string (可选) - 结束时间 | 格式: date-time */
    endTime?: string;

    /** string (可选) - 关键字,匹配name，nickName，phone，idNumber */
    keyword?: string;
  };

  /**
   * BasePageUserInfoDTO
   */
  export type BasePageUserInfoDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.UserInfoDTO[];
  };

  /**
   * ResultBasePageUserInfoDTO
   */
  export type ResultBasePageUserInfoDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageUserInfoDTO (可选) */
    data?: XinliModels.BasePageUserInfoDTO;
  };

  /**
   * SystemMessagePageQuery
   */
  export type SystemMessagePageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 用户ID */
    userId?: string;

    /** "{"desc":"系统消息","name":"SYSTEM"}" (可选) - 消息类型，枚举：MessageType | 可选值: "{\"desc\":\"系统消息\",\"name\":\"SYSTEM\"}" */
    messageType?: "SYSTEM";

    /** "{"desc":"已发送","name":"SEND"}" | "{"desc":"已读","name":"READ"}" | "{"desc":"未读","name":"UNREAD"}" (可选) - 已读状态，枚举：MessageStatus | 可选值: "{\"desc\":\"已发送\",\"name\":\"SEND\"}", "{\"desc\":\"已读\",\"name\":\"READ\"}", "{\"desc\":\"未读\",\"name\":\"UNREAD\"}" */
    status?: "SEND" | "READ" | "UNREAD";

    /** string (可选) - 匹配userName */
    keyword?: string;
  };

  /**
   * BasePageSystemMessageDTO
   */
  export type BasePageSystemMessageDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.SystemMessageDTO[];
  };

  /**
   * ResultBasePageSystemMessageDTO
   */
  export type ResultBasePageSystemMessageDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSystemMessageDTO (可选) */
    data?: XinliModels.BasePageSystemMessageDTO;
  };

  /**
   * SurveysParticipantPageQuery
   */
  export type SurveysParticipantPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 参测人员性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";

    /** string (可选) - 关键字，匹配name，phone */
    keyword?: string;
  };

  /**
   * BasePageSurveysParticipantDTO
   */
  export type BasePageSurveysParticipantDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.SurveysParticipantDTO[];
  };

  /**
   * ResultBasePageSurveysParticipantDTO
   */
  export type ResultBasePageSurveysParticipantDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSurveysParticipantDTO (可选) */
    data?: XinliModels.BasePageSurveysParticipantDTO;
  };

  /**
   * SurveysPageQuery
   */
  export type SurveysPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 关键字，匹配title，insName */
    keyword?: string;

    /** string (可选) - 机构ID */
    institutionId?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 量表状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 开始日期 | 格式: date-time */
    openTime?: string;

    /** string (可选) - 截止日期 | 格式: date-time */
    closeTime?: string;

    /** "{"desc":"完全开放","name":"FULLY_OPEN"}" | "{"desc":"机构内开放","name":"INSTITUTION_OPEN"}" | "{"desc":"固定人员开放","name":"FIXED_PERSONNEL_OPEN"}" | "{"desc":"量表码开放","name":"CODE_BASED_OPEN"}" (可选) - 量表开放类型，枚举：SurveyOpenType | 可选值: "{\"desc\":\"完全开放\",\"name\":\"FULLY_OPEN\"}", "{\"desc\":\"机构内开放\",\"name\":\"INSTITUTION_OPEN\"}", "{\"desc\":\"固定人员开放\",\"name\":\"FIXED_PERSONNEL_OPEN\"}", "{\"desc\":\"量表码开放\",\"name\":\"CODE_BASED_OPEN\"}" */
    openType?: "FULLY_OPEN" | "INSTITUTION_OPEN" | "FIXED_PERSONNEL_OPEN" | "CODE_BASED_OPEN";

    /** string (可选) - 量表码 */
    code?: string;

    /** number (可选) - 格式: int32 */
    isRec?: number;

    /** boolean (可选) - 是否推荐 */
    isRecommended?: boolean;

    /** string (可选) - 分类 */
    category?: string;
  };

  /**
   * BasePageSurveysDTO
   */
  export type BasePageSurveysDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.SurveysDTO[];
  };

  /**
   * ResultBasePageSurveysDTO
   */
  export type ResultBasePageSurveysDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSurveysDTO (可选) */
    data?: XinliModels.BasePageSurveysDTO;
  };

  /**
   * ResultSurveyDetails
   */
  export type ResultSurveyDetails = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SurveyDetails (可选) */
    data?: XinliModels.SurveyDetails;
  };

  /**
   * SurveyDetails
   */
  export type SurveyDetails = {
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

    /** array (可选) */
    questions?: XinliModels.QuestionsDTO[];
  };

  /**
   * SurveysCategoryPageQuery
   */
  export type SurveysCategoryPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 名字 */
    title?: string;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** number (可选) - 格式: int32 */
    pid?: number;
  };

  /**
   * BasePageSurveysCategoryDto
   */
  export type BasePageSurveysCategoryDto = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.SurveysCategoryDto[];
  };

  /**
   * ResultBasePageSurveysCategoryDto
   */
  export type ResultBasePageSurveysCategoryDto = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSurveysCategoryDto (可选) */
    data?: XinliModels.BasePageSurveysCategoryDto;
  };

  /**
   * ResultListSurveysCategoryDto
   */
  export type ResultListSurveysCategoryDto = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SurveysCategoryDto[];
  };

  /**
   * QuestionsPageQuery
   */
  export type QuestionsPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** "{"desc":"题库","name":"BANK"}" | "{"desc":"量表","name":"SURVEY"}" (可选) - 题库、量表，枚举：QuestionSourceType | 可选值: "{\"desc\":\"题库\",\"name\":\"BANK\"}", "{\"desc\":\"量表\",\"name\":\"SURVEY\"}" */
    sourceType?: "BANK" | "SURVEY";

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** string (可选) - 关键字，匹配surveysTitle，cateGoryName，questionText */
    keyword?: string;

    /** "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}" */
    questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 分类ID */
    categoryId?: string;

    /** string (可选) - 问题文本 */
    questionText?: string;

    /** string (可选) - 编号 */
    code?: string;

    /** number (可选) - 排序 | 格式: int32 */
    order?: number;

    /** boolean (可选) - 是否必填 */
    required?: boolean;
  };

  /**
   * BasePageQuestionsDTO
   */
  export type BasePageQuestionsDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.QuestionsDTO[];
  };

  /**
   * ResultBasePageQuestionsDTO
   */
  export type ResultBasePageQuestionsDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageQuestionsDTO (可选) */
    data?: XinliModels.BasePageQuestionsDTO;
  };

  /**
   * PreconditionPageQuery
   */
  export type PreconditionPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

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

  /**
   * BasePagePreconditionDTO
   */
  export type BasePagePreconditionDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.PreconditionDTO[];
  };

  /**
   * ResultBasePagePreconditionDTO
   */
  export type ResultBasePagePreconditionDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePagePreconditionDTO (可选) */
    data?: XinliModels.BasePagePreconditionDTO;
  };

  /**
   * OptionsPageQuery
   */
  export type OptionsPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

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

  /**
   * BasePageOptionsDTO
   */
  export type BasePageOptionsDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.OptionsDTO[];
  };

  /**
   * ResultBasePageOptionsDTO
   */
  export type ResultBasePageOptionsDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageOptionsDTO (可选) */
    data?: XinliModels.BasePageOptionsDTO;
  };

  /**
   * MenusPageQuery
   */
  export type MenusPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** "{"desc":"菜单","name":"MENU"}" | "{"desc":"按钮","name":"FEATURE"}" | "{"desc":"目录","name":"GROUP"}" | "{"desc":"功能","name":"FUNCTION"}" (可选) - 类型(菜单,功能) | 可选值: "{\"desc\":\"菜单\",\"name\":\"MENU\"}", "{\"desc\":\"按钮\",\"name\":\"FEATURE\"}", "{\"desc\":\"目录\",\"name\":\"GROUP\"}", "{\"desc\":\"功能\",\"name\":\"FUNCTION\"}" */
    type?: "MENU" | "FEATURE" | "GROUP" | "FUNCTION";

    /** string (可选) - 父id */
    parentId?: string;

    /** number (可选) - 排序 | 格式: int32 */
    sort?: number;

    /** number (可选) - 权重 | 格式: int32 */
    weight?: number;

    /** boolean (可选) - 是否隐藏 */
    isHidden?: boolean;

    /** boolean (可选) - 是否缓存 */
    isCache?: boolean;

    /** boolean (可选) - 是否禁用 */
    isDisabled?: boolean;

    /** boolean (可选) - 是否内联 */
    isInline?: boolean;

    /** string (可选) - 关键字，匹配name，code，parentName，urlAddress，title，component，icon */
    keyword?: string;
  };

  /**
   * BasePageMenusDTO
   */
  export type BasePageMenusDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.MenusDTO[];
  };

  /**
   * ResultBasePageMenusDTO
   */
  export type ResultBasePageMenusDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageMenusDTO (可选) */
    data?: XinliModels.BasePageMenusDTO;
  };

  /**
   * InstitutionPageQuery
   */
  export type InstitutionPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) - 机构id */
    id?: string;

    /** string (可选) - 关键字,匹配insName，address，contactPerson，contactPhone */
    keyword?: string;

    /** string (可选) - 账号id */
    accountId?: string;

    /** "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" (可选) - 审核状态：待审核、审核通过、审核失败 | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}" */
    auditStatus?: "WAIT" | "PASS" | "FAIL";

    /** string (可选) - 城市编码 */
    parentCode?: string;

    /** "{"desc":"系统","name":"SYSTEM"}" | "{"desc":"个人","name":"PERSONAL"}" (可选) - 审核类型 | 可选值: "{\"desc\":\"系统\",\"name\":\"SYSTEM\"}", "{\"desc\":\"个人\",\"name\":\"PERSONAL\"}" */
    applicationType?: "SYSTEM" | "PERSONAL";

    /** boolean (可选) - 是否签署 */
    isSign?: boolean;
  };

  /**
   * BasePageInstitutionDTO
   */
  export type BasePageInstitutionDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.InstitutionDTO[];
  };

  /**
   * ResultBasePageInstitutionDTO
   */
  export type ResultBasePageInstitutionDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageInstitutionDTO (可选) */
    data?: XinliModels.BasePageInstitutionDTO;
  };

  /**
   * InformationQuestionsPageQuery
   */
  export type InformationQuestionsPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}" */
    questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";
  };

  /**
   * BasePageInformationQuestionsDTO
   */
  export type BasePageInformationQuestionsDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.InformationQuestionsDTO[];
  };

  /**
   * ResultBasePageInformationQuestionsDTO
   */
  export type ResultBasePageInformationQuestionsDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageInformationQuestionsDTO (可选) */
    data?: XinliModels.BasePageInformationQuestionsDTO;
  };

  /**
   * InformationCollectionPageQuery
   */
  export type InformationCollectionPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 用户ID */
    userId?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** string (可选) - 匹配title，userName */
    keyword?: string;
  };

  /**
   * BasePageInformationCollectionDTO
   */
  export type BasePageInformationCollectionDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.InformationCollectionDTO[];
  };

  /**
   * ResultBasePageInformationCollectionDTO
   */
  export type ResultBasePageInformationCollectionDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageInformationCollectionDTO (可选) */
    data?: XinliModels.BasePageInformationCollectionDTO;
  };

  /**
   * DoctorPageQuery
   */
  export type DoctorPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 匹配name，label，level，specialty，institutionName */
    keyword?: string;

    /** string (可选) - 绑定的机构ID */
    institutionId?: string;

    /** boolean (可选) - 是否在线 */
    isOnline?: boolean;

    /** "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" (可选) - 申请审核状态，枚举：AuditStatus | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}" */
    auditStatus?: "WAIT" | "PASS" | "FAIL";

    /** string (可选) - 申请人ID */
    userId?: string;

    /** "{"desc":"系统","name":"SYSTEM"}" | "{"desc":"个人","name":"PERSONAL"}" (可选) - 申请类型 | 可选值: "{\"desc\":\"系统\",\"name\":\"SYSTEM\"}", "{\"desc\":\"个人\",\"name\":\"PERSONAL\"}" */
    applicationType?: "SYSTEM" | "PERSONAL";

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";
  };

  /**
   * BasePageDoctorDTO
   */
  export type BasePageDoctorDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.DoctorDTO[];
  };

  /**
   * ResultBasePageDoctorDTO
   */
  export type ResultBasePageDoctorDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageDoctorDTO (可选) */
    data?: XinliModels.BasePageDoctorDTO;
  };

  /**
   * SysDictTypePageQuery
   */
  export type SysDictTypePageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态（启用/停用） | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 匹配name,code */
    keyword?: string;
  };

  /**
   * BasePageSysDictTypeDTO
   */
  export type BasePageSysDictTypeDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.SysDictTypeDTO[];
  };

  /**
   * ResultBasePageSysDictTypeDTO
   */
  export type ResultBasePageSysDictTypeDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSysDictTypeDTO (可选) */
    data?: XinliModels.BasePageSysDictTypeDTO;
  };

  /**
   * SysDictDataPageQuery
   */
  export type SysDictDataPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 字典类型 */
    parentId?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 匹配name */
    keyword?: string;
  };

  /**
   * BasePageSysDictDataDTO
   */
  export type BasePageSysDictDataDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.SysDictDataDTO[];
  };

  /**
   * ResultBasePageSysDictDataDTO
   */
  export type ResultBasePageSysDictDataDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSysDictDataDTO (可选) */
    data?: XinliModels.BasePageSysDictDataDTO;
  };

  /**
   * CourseTypePageQuery
   */
  export type CourseTypePageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 标题 */
    title?: string;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** string (可选) */
    pid?: string;
  };

  /**
   * BasePageCourseTypeDto
   */
  export type BasePageCourseTypeDto = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.CourseTypeDto[];
  };

  /**
   * ResultBasePageCourseTypeDto
   */
  export type ResultBasePageCourseTypeDto = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageCourseTypeDto (可选) */
    data?: XinliModels.BasePageCourseTypeDto;
  };

  /**
   * CourseResourcesPageQuery
   */
  export type CourseResourcesPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 课程id */
    courseId?: string;

    /** string (可选) - 课时标题 */
    title?: string;

    /** number (可选) - 时长 | 格式: double */
    duration?: number;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** boolean (可选) - 是否开放 */
    isOpen?: boolean;

    /** string (可选) - 关键字 */
    keyword?: string;
  };

  /**
   * BasePageCourseResourcesDto
   */
  export type BasePageCourseResourcesDto = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.CourseResourcesDto[];
  };

  /**
   * ResultBasePageCourseResourcesDto
   */
  export type ResultBasePageCourseResourcesDto = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageCourseResourcesDto (可选) */
    data?: XinliModels.BasePageCourseResourcesDto;
  };

  /**
   * ResultMapStringObject
   */
  export type ResultMapStringObject = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** object (可选) */
    data?: Record<string, Record<string, any>>;
  };

  /**
   * CategoryPageQuery
   */
  export type CategoryPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 父id */
    parentId?: string;

    /** string (可选) - 所属机构ID */
    institutionId?: string;

    /** string (可选) - 匹配name，insName */
    keyword?: string;
  };

  /**
   * BasePageCategoryDTO
   */
  export type BasePageCategoryDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.CategoryDTO[];
  };

  /**
   * ResultBasePageCategoryDTO
   */
  export type ResultBasePageCategoryDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageCategoryDTO (可选) */
    data?: XinliModels.BasePageCategoryDTO;
  };

  /**
   * AnswersPageQuery
   */
  export type AnswersPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 用户ID */
    userId?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** string (可选) - 匹配userName，title */
    keyword?: string;
  };

  /**
   * BasePageAnswersDTO
   */
  export type BasePageAnswersDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.AnswersDTO[];
  };

  /**
   * ResultBasePageAnswersDTO
   */
  export type ResultBasePageAnswersDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageAnswersDTO (可选) */
    data?: XinliModels.BasePageAnswersDTO;
  };

  /**
   * AnswerScoreRangesPageQuery
   */
  export type AnswerScoreRangesPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** string (可选) - 匹配dimension，title */
    keyword?: string;
  };

  /**
   * BasePageAnswerScoreRangesDTO
   */
  export type BasePageAnswerScoreRangesDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.AnswerScoreRangesDTO[];
  };

  /**
   * ResultBasePageAnswerScoreRangesDTO
   */
  export type ResultBasePageAnswerScoreRangesDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageAnswerScoreRangesDTO (可选) */
    data?: XinliModels.BasePageAnswerScoreRangesDTO;
  };

  /**
   * AccountInfoPageQuery
   */
  export type AccountInfoPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** "{"desc":"管理","name":"ADMIN"}" | "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" | "{"desc":"用户","name":"USER"}" (可选) - 类型(超管,商家) | 可选值: "{\"desc\":\"管理\",\"name\":\"ADMIN\"}", "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}", "{\"desc\":\"用户\",\"name\":\"USER\"}" */
    type?: "ADMIN" | "INSTITUTION" | "DOCTOR" | "USER";

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 账号状态(启用,禁用) | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}" */
    sex?: "MAN" | "WOMAN" | "UNKNOWN";

    /** number (可选) - 年龄 | 格式: int32 */
    age?: number;

    /** string (可选) - 匹配userName，nickName，idNumber，phone，desc */
    keyword?: string;
  };

  /**
   * BasePageAccountInfoDTO
   */
  export type BasePageAccountInfoDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.AccountInfoDTO[];
  };

  /**
   * ResultBasePageAccountInfoDTO
   */
  export type ResultBasePageAccountInfoDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageAccountInfoDTO (可选) */
    data?: XinliModels.BasePageAccountInfoDTO;
  };

  /**
   * UserCollectionPageQuery
   */
  export type UserCollectionPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 用户id */
    userId?: string;

    /** string (可选) - 资源id */
    resourceId?: string;

    /** "{"desc":"医生","name":"DOCTOR"}" | "{"desc":"量表","name":"SURVEY"}" | "{"desc":"课程","name":"CLASS"}" | "{"desc":"直播","name":"LIVE"}" (可选) - 类型 | 可选值: "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}", "{\"desc\":\"量表\",\"name\":\"SURVEY\"}", "{\"desc\":\"课程\",\"name\":\"CLASS\"}", "{\"desc\":\"直播\",\"name\":\"LIVE\"}" */
    type?: "DOCTOR" | "SURVEY" | "CLASS" | "LIVE";

    /** string (可选) - 机构id */
    institutionId?: string;
  };

  /**
   * BasePageUserCollectionDto
   */
  export type BasePageUserCollectionDto = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.UserCollectionDto[];
  };

  /**
   * ResultBasePageUserCollectionDto
   */
  export type ResultBasePageUserCollectionDto = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageUserCollectionDto (可选) */
    data?: XinliModels.BasePageUserCollectionDto;
  };

  /**
   * UserCollectionDto
   */
  export type UserCollectionDto = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 用户id */
    userId?: string;

    /** string (可选) - 资源id */
    resourceId?: string;

    /** "{"desc":"医生","name":"DOCTOR"}" | "{"desc":"量表","name":"SURVEY"}" | "{"desc":"课程","name":"CLASS"}" | "{"desc":"直播","name":"LIVE"}" (可选) - 类型 | 可选值: "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}", "{\"desc\":\"量表\",\"name\":\"SURVEY\"}", "{\"desc\":\"课程\",\"name\":\"CLASS\"}", "{\"desc\":\"直播\",\"name\":\"LIVE\"}" */
    type?: "DOCTOR" | "SURVEY" | "CLASS" | "LIVE";

    /** string (可选) - 快照 */
    snapshot?: string;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** string (可选) - 用户名字-用于映射 */
    userName?: string;

    /** string (可选) - 机构名字-用于映射 */
    institutionName?: string;
  };

  /**
   * RolePageQuery
   */
  export type RolePageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态：启用/禁用 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 关键字，匹配roleName，roleCode */
    keyword?: string;
  };

  /**
   * BasePageRoleDTO
   */
  export type BasePageRoleDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.RoleDTO[];
  };

  /**
   * ResultBasePageRoleDTO
   */
  export type ResultBasePageRoleDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageRoleDTO (可选) */
    data?: XinliModels.BasePageRoleDTO;
  };

  /**
   * LogInfoPageQuery
   */
  export type LogInfoPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** "{"desc":"登录","name":"LOGIN"}" | "{"desc":"异常","name":"EXCEPTION"}" | "{"desc":"操作","name":"OPERATION"}" (可选) - 类型，1：登录日志2：操作日志3：异常日志 | 可选值: "{\"desc\":\"登录\",\"name\":\"LOGIN\"}", "{\"desc\":\"异常\",\"name\":\"EXCEPTION\"}", "{\"desc\":\"操作\",\"name\":\"OPERATION\"}" */
    type?: "LOGIN" | "EXCEPTION" | "OPERATION";
  };

  /**
   * BasePageLogInfoDTO
   */
  export type BasePageLogInfoDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.LogInfoDTO[];
  };

  /**
   * ResultBasePageLogInfoDTO
   */
  export type ResultBasePageLogInfoDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageLogInfoDTO (可选) */
    data?: XinliModels.BasePageLogInfoDTO;
  };

  /**
   * ResultLogInfoDTO
   */
  export type ResultLogInfoDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.LogInfoDTO (可选) */
    data?: XinliModels.LogInfoDTO;
  };

  /**
   * LevelConfigPageQuery
   */
  export type LevelConfigPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** number (可选) - 从业年限 | 格式: int32 */
    workingYears?: number;

    /** string (可选) - 关键字，匹配level */
    keyword?: string;
  };

  /**
   * BasePageLevelConfigDTO
   */
  export type BasePageLevelConfigDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.LevelConfigDTO[];
  };

  /**
   * ResultBasePageLevelConfigDTO
   */
  export type ResultBasePageLevelConfigDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageLevelConfigDTO (可选) */
    data?: XinliModels.BasePageLevelConfigDTO;
  };

  /**
   * IMLinkDTO
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
   * ResultIMLinkDTO
   */
  export type ResultIMLinkDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.IMLinkDTO (可选) */
    data?: XinliModels.IMLinkDTO;
  };

  /**
   * FeedbackPageQuery
   */
  export type FeedbackPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** "{"desc":"待处理","name":"PENDING"}" | "{"desc":"已受理","name":"ACCEPTED"}" | "{"desc":"已关闭","name":"CLOSED"}" (可选) - 反馈状态，枚举：FeedbackStatus | 可选值: "{\"desc\":\"待处理\",\"name\":\"PENDING\"}", "{\"desc\":\"已受理\",\"name\":\"ACCEPTED\"}", "{\"desc\":\"已关闭\",\"name\":\"CLOSED\"}" */
    status?: "PENDING" | "ACCEPTED" | "CLOSED";

    /** string (可选) - 反馈类型 */
    type?: string;

    /** string (可选) - 匹配accountName，userName */
    keyword?: string;
  };

  /**
   * BasePageFeedbackDTO
   */
  export type BasePageFeedbackDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.FeedbackDTO[];
  };

  /**
   * ResultBasePageFeedbackDTO
   */
  export type ResultBasePageFeedbackDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageFeedbackDTO (可选) */
    data?: XinliModels.BasePageFeedbackDTO;
  };

  /**
   * CoursePageQuery
   */
  export type CoursePageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 课程标题 */
    title?: string;

    /** string (可选) - 课程说明 */
    description?: string;

    /** number (可选) - 价格 */
    price?: number;

    /** boolean (可选) - 是否启用 */
    isActive?: boolean;

    /** boolean (可选) - 是否推荐 */
    isRec?: boolean;

    /** boolean (可选) - 是否置顶 */
    isTop?: boolean;

    /** string (可选) - 课程类型 */
    type?: string;

    /** string (可选) - 机构id */
    institutionId?: string;

    /** string (可选) - 关键字 */
    keyword?: string;
  };

  /**
   * BasePageCourseDto
   */
  export type BasePageCourseDto = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.CourseDto[];
  };

  /**
   * ResultBasePageCourseDto
   */
  export type ResultBasePageCourseDto = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageCourseDto (可选) */
    data?: XinliModels.BasePageCourseDto;
  };

  /**
   * SysConfigPageQuery
   */
  export type SysConfigPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** number (可选) - 配置类型 | 格式: int32 */
    type?: number;

    /** string (可选) - name */
    name?: string;

    /** string (可选) - 匹配value */
    keyword?: string;
  };

  /**
   * BasePageSysConfigDTO
   */
  export type BasePageSysConfigDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.SysConfigDTO[];
  };

  /**
   * ResultBasePageSysConfigDTO
   */
  export type ResultBasePageSysConfigDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSysConfigDTO (可选) */
    data?: XinliModels.BasePageSysConfigDTO;
  };

  /**
   * ResultListSysConfigStoreCity
   */
  export type ResultListSysConfigStoreCity = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SysConfigStoreCity[];
  };

  /**
   * ResultSysConfigBasicInfo
   */
  export type ResultSysConfigBasicInfo = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SysConfigBasicInfo (可选) */
    data?: XinliModels.SysConfigBasicInfo;
  };

  /**
   * BannerPageQuery
   */
  export type BannerPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - banner图的URL */
    imageUrl?: string;

    /** string (可选) - 跳转链接URL */
    linkUrl?: string;

    /** string (可选) - banner的详细说明文本 */
    description?: string;

    /** number (可选) - 排序 | 格式: int32 */
    order?: number;

    /** "{"desc":"普通","name":"NORMAL"}" | "{"desc":"内联","name":"N_LIAN"}" | "{"desc":"外联","name":"W_LIAN"}" (可选) - 类型 | 可选值: "{\"desc\":\"普通\",\"name\":\"NORMAL\"}", "{\"desc\":\"内联\",\"name\":\"N_LIAN\"}", "{\"desc\":\"外联\",\"name\":\"W_LIAN\"}" */
    type?: "NORMAL" | "N_LIAN" | "W_LIAN";
  };

  /**
   * BasePageBannerDTO
   */
  export type BasePageBannerDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.BannerDTO[];
  };

  /**
   * ResultBasePageBannerDTO
   */
  export type ResultBasePageBannerDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageBannerDTO (可选) */
    data?: XinliModels.BasePageBannerDTO;
  };

  /**
   * AuditLogPageQuery
   */
  export type AuditLogPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 申请ID */
    applicantId?: string;

    /** string (可选) - 审核ID */
    auditorId?: string;

    /** "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" - 审核类型，枚举：AuditLogType | 可选值: "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}" */
    type: "INSTITUTION" | "DOCTOR";

    /** string (可选) - 匹配applicantName，auditorName */
    keyword?: string;
  };

  /**
   * BasePageAuditLogDTO
   */
  export type BasePageAuditLogDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.AuditLogDTO[];
  };

  /**
   * ResultBasePageAuditLogDTO
   */
  export type ResultBasePageAuditLogDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageAuditLogDTO (可选) */
    data?: XinliModels.BasePageAuditLogDTO;
  };

  /**
   * ResultUsernamePassword
   */
  export type ResultUsernamePassword = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.UsernamePassword (可选) */
    data?: XinliModels.UsernamePassword;
  };

  /**
   * ArticlePageQuery
   */
  export type ArticlePageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 匹配subhead，title */
    keyword?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 文章状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** string (可选) - 类型 */
    type?: string;
  };

  /**
   * BasePageArticleDTO
   */
  export type BasePageArticleDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.ArticleDTO[];
  };

  /**
   * ResultBasePageArticleDTO
   */
  export type ResultBasePageArticleDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageArticleDTO (可选) */
    data?: XinliModels.BasePageArticleDTO;
  };

  /**
   * AnnouncementPageQuery
   */
  export type AnnouncementPageQuery = {
    /** number - 页码 | 格式: int32 */
    pageIndex: number;

    /** number (可选) - 页大小 | 格式: int32 */
    pageSize?: number;

    /** string (可选) */
    id?: string;

    /** string (可选) - 关键字，匹配title，subhead */
    keyword?: string;

    /** boolean (可选) - 是否开启，1为开启，0为关闭 */
    isActive?: boolean;

    /** "{"desc":"后台管理","name":"ADMIN"}" | "{"desc":"移动端","name":"APP"}" - 来源 | 可选值: "{\"desc\":\"后台管理\",\"name\":\"ADMIN\"}", "{\"desc\":\"移动端\",\"name\":\"APP\"}" */
    source: "ADMIN" | "APP";

    /** string (可选) - 公告分类 */
    type?: string;
  };

  /**
   * BasePageAnnouncementDTO
   */
  export type BasePageAnnouncementDTO = {
    /** number (可选) - 格式: int32 */
    total?: number;

    /** array (可选) */
    list?: XinliModels.AnnouncementDTO[];
  };

  /**
   * ResultBasePageAnnouncementDTO
   */
  export type ResultBasePageAnnouncementDTO = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageAnnouncementDTO (可选) */
    data?: XinliModels.BasePageAnnouncementDTO;
  };
}
