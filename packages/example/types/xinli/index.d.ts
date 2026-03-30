import * as tsTypes from "./types";
import type { ApiFunctionGenerate } from "@itmanyong/un-api";
export {};
declare module "@xinli" {
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | ins | putApiV1UserInfoItem | /ins/api/v1/userInfo/item | PUT | 修改用户 |
   * | ins | postApiV1UserInfoItem | /ins/api/v1/userInfo/item | POST | 新增用户 |
   * | ins | deleteApiV1UserInfoItem | /ins/api/v1/userInfo/item | DELETE | 批量删除 |
   * | ins | putApiV1SystemMessageList | /ins/api/v1/systemMessage/list | PUT | 批量修改 |
   * | ins | postApiV1SystemMessageList | /ins/api/v1/systemMessage/list | POST | 批量新增 |
   * | ins | deleteApiV1SystemMessageList | /ins/api/v1/systemMessage/list | DELETE | 批量删除 |
   * | ins | putApiV1SystemMessageItem | /ins/api/v1/systemMessage/item | PUT | 修改 |
   * | ins | postApiV1SystemMessageItem | /ins/api/v1/systemMessage/item | POST | 新增 |
   * | ins | putApiV1SurveysParticipantList | /ins/api/v1/surveysParticipant/list | PUT | 批量修改 |
   * | ins | postApiV1SurveysParticipantList | /ins/api/v1/surveysParticipant/list | POST | 批量新增 |
   * | ins | deleteApiV1SurveysParticipantList | /ins/api/v1/surveysParticipant/list | DELETE | 批量删除 |
   * | ins | putApiV1SurveysParticipantItem | /ins/api/v1/surveysParticipant/item | PUT | 修改 |
   * | ins | postApiV1SurveysParticipantItem | /ins/api/v1/surveysParticipant/item | POST | 新增 |
   * | ins | putApiV1SurveysItem | /ins/api/v1/surveys/item | PUT | 修改 |
   * | ins | postApiV1SurveysItem | /ins/api/v1/surveys/item | POST | 新增 |
   * | ins | putApiV1SurveysCategoryItem | /ins/api/v1/surveys/category/item | PUT | 修改 |
   * | ins | postApiV1SurveysCategoryItem | /ins/api/v1/surveys/category/item | POST | 添加 |
   * | ins | deleteApiV1SurveysCategoryItem | /ins/api/v1/surveys/category/item | DELETE | 批量删除 |
   * | ins | putApiV1QuestionsUpdateStatusById | /ins/api/v1/questions/updateStatus/{id} | PUT | 修改状态 |
   * | ins | putApiV1QuestionsList | /ins/api/v1/questions/list | PUT | 批量修改（量表的题） |
   * | ins | postApiV1QuestionsList | /ins/api/v1/questions/list | POST | 批量新增 |
   * | ins | deleteApiV1QuestionsList | /ins/api/v1/questions/list | DELETE | 批量删除 |
   * | ins | putApiV1QuestionsItem | /ins/api/v1/questions/item | PUT | 修改（题库的题） |
   * | ins | postApiV1QuestionsItem | /ins/api/v1/questions/item | POST | 新增 |
   * | ins | putApiV1PreconditionList | /ins/api/v1/precondition/list | PUT | 批量修改 |
   * | ins | postApiV1PreconditionList | /ins/api/v1/precondition/list | POST | 批量新增 |
   * | ins | deleteApiV1PreconditionList | /ins/api/v1/precondition/list | DELETE | 批量删除 |
   * | ins | putApiV1PreconditionItem | /ins/api/v1/precondition/item | PUT | 修改 |
   * | ins | postApiV1PreconditionItem | /ins/api/v1/precondition/item | POST | 新增 |
   * | ins | putApiV1OptionsList | /ins/api/v1/options/list | PUT | 批量修改 |
   * | ins | postApiV1OptionsList | /ins/api/v1/options/list | POST | 批量新增 |
   * | ins | deleteApiV1OptionsList | /ins/api/v1/options/list | DELETE | 批量删除 |
   * | ins | putApiV1OptionsItem | /ins/api/v1/options/item | PUT | 修改 |
   * | ins | postApiV1OptionsItem | /ins/api/v1/options/item | POST | 新增 |
   * | ins | putApiV1InstitutionItem | /ins/api/v1/institution/item | PUT | 修改 |
   * | ins | putApiV1InformationQuestionsList | /ins/api/v1/informationQuestions/list | PUT | 批量修改 |
   * | ins | postApiV1InformationQuestionsList | /ins/api/v1/informationQuestions/list | POST | 批量新增 |
   * | ins | deleteApiV1InformationQuestionsList | /ins/api/v1/informationQuestions/list | DELETE | 批量删除 |
   * | ins | putApiV1InformationQuestionsItem | /ins/api/v1/informationQuestions/item | PUT | 修改 |
   * | ins | postApiV1InformationQuestionsItem | /ins/api/v1/informationQuestions/item | POST | 新增 |
   * | ins | putApiV1InformationCollectionItem | /ins/api/v1/informationCollection/item | PUT | 修改 |
   * | ins | postApiV1InformationCollectionItem | /ins/api/v1/informationCollection/item | POST | 新增 |
   * | ins | putApiV1DoctorItem | /ins/api/v1/doctor/item | PUT | 修改 |
   * | ins | postApiV1DoctorItem | /ins/api/v1/doctor/item | POST | 新增 |
   * | ins | putApiV1CourseTypeItem | /ins/api/v1/course/type/item | PUT | 修改课程 |
   * | ins | postApiV1CourseTypeItem | /ins/api/v1/course/type/item | POST | 添加课程分类 |
   * | ins | deleteApiV1CourseTypeItem | /ins/api/v1/course/type/item | DELETE | 批量删除课程 |
   * | ins | putApiV1CourseResourcesItem | /ins/api/v1/course/resources/item | PUT | 修改 |
   * | ins | postApiV1CourseResourcesItem | /ins/api/v1/course/resources/item | POST | 添加 |
   * | ins | deleteApiV1CourseResourcesItem | /ins/api/v1/course/resources/item | DELETE | 批量删除 |
   * | ins | putApiV1CategoryList | /ins/api/v1/category/list | PUT | 批量修改 |
   * | ins | postApiV1CategoryList | /ins/api/v1/category/list | POST | 批量新增 |
   * | ins | deleteApiV1CategoryList | /ins/api/v1/category/list | DELETE | 批量删除 |
   * | ins | putApiV1CategoryItem | /ins/api/v1/category/item | PUT | 修改 |
   * | ins | postApiV1CategoryItem | /ins/api/v1/category/item | POST | 新增 |
   * | ins | putApiV1AnswersList | /ins/api/v1/answers/list | PUT | 批量修改 |
   * | ins | postApiV1AnswersList | /ins/api/v1/answers/list | POST | 批量新增 |
   * | ins | deleteApiV1AnswersList | /ins/api/v1/answers/list | DELETE | 批量删除 |
   * | ins | putApiV1AnswersItem | /ins/api/v1/answers/item | PUT | 修改 |
   * | ins | postApiV1AnswersItem | /ins/api/v1/answers/item | POST | 新增 |
   * | ins | putApiV1AnswerScoreRangesList | /ins/api/v1/answerScoreRanges/list | PUT | 批量修改 |
   * | ins | postApiV1AnswerScoreRangesList | /ins/api/v1/answerScoreRanges/list | POST | 批量新增 |
   * | ins | deleteApiV1AnswerScoreRangesList | /ins/api/v1/answerScoreRanges/list | DELETE | 批量删除 |
   * | ins | putApiV1AnswerScoreRangesItem | /ins/api/v1/answerScoreRanges/item | PUT | 修改 |
   * | ins | postApiV1AnswerScoreRangesItem | /ins/api/v1/answerScoreRanges/item | POST | 新增 |
   * | ins | putApiV1AccountItem | /ins/api/v1/account/item | PUT | 修改账号信息 |
   * | ins | putApiV1AccountInfoStatusById | /ins/api/v1/account/info/status/{id} | PUT | 修改状态 |
   * | ins | putApiV1AccountInfoPassword | /ins/api/v1/account/info/password | PUT | 修改密码 |
   * | ins | putApiV1AccountInfoItem | /ins/api/v1/account/info/item | PUT | 修改账号信息 |
   * | ins | postApiV1AccountInfoItem | /ins/api/v1/account/info/item | POST | 新增账号信息 |
   * | ins | postApiV1UserInfoGetUserNameById | /ins/api/v1/userInfo/getUserNameById | POST | 根据用户id查询用户名 |
   * | ins | postApiV1SystemMessageListQuery | /ins/api/v1/systemMessage/list/query | POST | 批量查询 |
   * | ins | postApiV1SurveysParticipantListQuery | /ins/api/v1/surveysParticipant/list/query | POST | 批量查询 |
   * | ins | postApiV1QuestionsListQuery | /ins/api/v1/questions/list/query | POST | 批量查询 |
   * | ins | postApiV1PreconditionListQuery | /ins/api/v1/precondition/list/query | POST | 批量查询 |
   * | ins | postApiV1OptionsListQuery | /ins/api/v1/options/list/query | POST | 批量查询 |
   * | ins | postApiV1InformationQuestionsListQuery | /ins/api/v1/informationQuestions/list/query | POST | 批量查询 |
   * | ins | postApiV1InformationCollectionListQuery | /ins/api/v1/informationCollection/list/query | POST | 批量查询 |
   * | ins | postApiV1FileList | /ins/api/v1/file/list | POST | 批量上传文件（FormData） |
   * | ins | postApiV1FileListBase64 | /ins/api/v1/file/list/base64 | POST | 批量上传文件（Base64） |
   * | ins | postApiV1FileItem | /ins/api/v1/file/item | POST | 上传文件（FormData） |
   * | ins | postApiV1DoctorPutStatusByIdByStatus | /ins/api/v1/doctor/putStatus/{id}/{status} | POST | 修改状态 |
   * | ins | postApiV1DoctorEnterAudit | /ins/api/v1/doctor/enterAudit | POST | 医生入驻审核 |
   * | ins | postApiV1CategoryListQuery | /ins/api/v1/category/list/query | POST | 批量查询 |
   * | ins | postApiV1AnswersListQuery | /ins/api/v1/answers/list/query | POST | 批量查询 |
   * | ins | postApiV1AnswerScoreRangesListQuery | /ins/api/v1/answerScoreRanges/list/query | POST | 批量查询 |
   * | ins | postApiV1AccountLogin | /ins/api/v1/account/login | POST | 登录 |
   * | ins | postApiV1AccountInfoLogin | /ins/api/v1/account/info/login | POST | 登录 |
   * | ins | postApiV1AccountInfoGetUserNameById | /ins/api/v1/account/info/getUserNameById | POST | 根据账号id查询userName |
   * | ins | getApiV1UserInfoPage | /ins/api/v1/userInfo/page | GET | 分页查询 |
   * | ins | getApiV1UserInfoItemById | /ins/api/v1/userInfo/item/{id} | GET | 查询指定用户 |
   * | ins | deleteApiV1UserInfoItemById | /ins/api/v1/userInfo/item/{id} | DELETE | 删除 |
   * | ins | getApiV1UserInfoGetUserInfo | /ins/api/v1/userInfo/getUserInfo | GET | 小程序获取登录用户信息 |
   * | ins | getApiV1UserInfoGetAvaByIdById | /ins/api/v1/userInfo/getAvaById/{id} | GET | 查询指定用户头像 |
   * | ins | getApiV1SystemMessagePage | /ins/api/v1/systemMessage/page | GET | 多条件组合分页查询 |
   * | ins | getApiV1SystemMessageItemById | /ins/api/v1/systemMessage/item/{id} | GET | 查询 |
   * | ins | deleteApiV1SystemMessageItemById | /ins/api/v1/systemMessage/item/{id} | DELETE | 删除 |
   * | ins | getApiV1SurveysParticipantPage | /ins/api/v1/surveysParticipant/page | GET | 多条件组合分页查询 |
   * | ins | getApiV1SurveysParticipantItemById | /ins/api/v1/surveysParticipant/item/{id} | GET | 查询 |
   * | ins | deleteApiV1SurveysParticipantItemById | /ins/api/v1/surveysParticipant/item/{id} | DELETE | 删除 |
   * | ins | getApiV1SurveysPage | /ins/api/v1/surveys/page | GET | 多条件组合分页查询 |
   * | ins | getApiV1SurveysItemById | /ins/api/v1/surveys/item/{id} | GET | 查询 |
   * | ins | deleteApiV1SurveysItemById | /ins/api/v1/surveys/item/{id} | DELETE | 删除 |
   * | ins | getApiV1SurveysCategoryStatusByIdByStatus | /ins/api/v1/surveys/category/status/{id}/{status} | GET | 禁用/启用 |
   * | ins | getApiV1SurveysCategoryPage | /ins/api/v1/surveys/category/page | GET | 分页查询 |
   * | ins | getApiV1SurveysCategoryGetTopBranch | /ins/api/v1/surveys/category/getTopBranch | GET | 获取顶层节点数据 |
   * | ins | getApiV1SurveysCategoryGetChildBranch | /ins/api/v1/surveys/category/getChildBranch | GET | 获取子节点数据 |
   * | ins | getApiV1QuestionsPage | /ins/api/v1/questions/page | GET | 多条件组合分页查询 |
   * | ins | getApiV1QuestionsItemById | /ins/api/v1/questions/item/{id} | GET | 查询 |
   * | ins | deleteApiV1QuestionsItemById | /ins/api/v1/questions/item/{id} | DELETE | 删除 |
   * | ins | getApiV1PreconditionPage | /ins/api/v1/precondition/page | GET | 多条件组合分页查询 |
   * | ins | getApiV1PreconditionItemById | /ins/api/v1/precondition/item/{id} | GET | 查询 |
   * | ins | deleteApiV1PreconditionItemById | /ins/api/v1/precondition/item/{id} | DELETE | 删除 |
   * | ins | getApiV1OptionsPage | /ins/api/v1/options/page | GET | 多条件组合分页查询 |
   * | ins | getApiV1OptionsItemById | /ins/api/v1/options/item/{id} | GET | 查询 |
   * | ins | deleteApiV1OptionsItemById | /ins/api/v1/options/item/{id} | DELETE | 删除 |
   * | ins | getApiV1MenusPage | /ins/api/v1/menus/page | GET | 分页查询 |
   * | ins | getApiV1MenusGetByRoleId | /ins/api/v1/menus/getByRoleId | GET | 获取角色权限 |
   * | ins | getApiV1MenusGetByAccountId | /ins/api/v1/menus/getByAccountId | GET | 获取登录账号菜单功能权限 |
   * | ins | getApiV1InstitutionPage | /ins/api/v1/institution/page | GET | 多条件组合分页查询 |
   * | ins | getApiV1InformationQuestionsQuestionListBySurveyId | /ins/api/v1/informationQuestions/questionList/{surveyId} | GET | 根据量表id查询问题和选项 |
   * | ins | getApiV1InformationQuestionsPage | /ins/api/v1/informationQuestions/page | GET | 多条件组合分页查询 |
   * | ins | getApiV1InformationQuestionsItemById | /ins/api/v1/informationQuestions/item/{id} | GET | 查询 |
   * | ins | getApiV1InformationCollectionPage | /ins/api/v1/informationCollection/page | GET | 多条件组合分页查询 |
   * | ins | getApiV1FileDownload | /ins/api/v1/file/download | GET | 下载文件 |
   * | ins | getApiV1DoctorPage | /ins/api/v1/doctor/page | GET | 多条件组合分页查询 |
   * | ins | getApiV1DictPage | /ins/api/v1/dict/page | GET | 分页查询 |
   * | ins | getApiV1DictDataPage | /ins/api/v1/dict/data/page | GET | 分页查询 |
   * | ins | getApiV1CourseTypePage | /ins/api/v1/course/type/page | GET | 分页查询 |
   * | ins | getApiV1CourseResourcesPage | /ins/api/v1/course/resources/page | GET | 分页查询 |
   * | ins | getApiV1ConfigAllEnums | /ins/api/v1/config/allEnums | GET | 获取所有枚举信息 |
   * | ins | getApiV1CategoryPage | /ins/api/v1/category/page | GET | 多条件组合分页查询 |
   * | ins | getApiV1CategoryItemById | /ins/api/v1/category/item/{id} | GET | 查询 |
   * | ins | deleteApiV1CategoryItemById | /ins/api/v1/category/item/{id} | DELETE | 删除 |
   * | ins | getApiV1AnswersPage | /ins/api/v1/answers/page | GET | 多条件组合分页查询 |
   * | ins | getApiV1AnswersItemById | /ins/api/v1/answers/item/{id} | GET | 查询 |
   * | ins | deleteApiV1AnswersItemById | /ins/api/v1/answers/item/{id} | DELETE | 删除 |
   * | ins | getApiV1AnswerScoreRangesPage | /ins/api/v1/answerScoreRanges/page | GET | 多条件组合分页查询 |
   * | ins | getApiV1AnswerScoreRangesItemById | /ins/api/v1/answerScoreRanges/item/{id} | GET | 查询 |
   * | ins | deleteApiV1AnswerScoreRangesItemById | /ins/api/v1/answerScoreRanges/item/{id} | DELETE | 删除 |
   * | ins | getApiV1AccountInfoPage | /ins/api/v1/account/info/page | GET | 分页查询 |
   * | ins | getApiV1AccountInfoItemById | /ins/api/v1/account/info/item/{id} | GET | 根据id获取账号信息 |
   * | ins | deleteApiV1AccountInfoItemById | /ins/api/v1/account/info/item/{id} | DELETE | 删除账号 |
   * | ins | getApiV1AccountInfoGetAccountInfo | /ins/api/v1/account/info/getAccountInfo | GET | 获取登录账号信息 |
   * | ins | getApiV1AccountGetAccountInfo | /ins/api/v1/account/getAccountInfo | GET | 获取登录账号信息 |
   * | ins | deleteApiV1SurveysList | /ins/api/v1/surveys/list | DELETE | 批量删除 |
   * | ins | deleteApiV1SurveysCategoryItemById | /ins/api/v1/surveys/category/item/{id} | DELETE | 删除 |
   * | ins | deleteApiV1InformationCollectionList | /ins/api/v1/informationCollection/list | DELETE | 批量删除 |
   * | ins | deleteApiV1InformationCollectionItemById | /ins/api/v1/informationCollection/item/{id} | DELETE | 删除 |
   * | ins | deleteApiV1DoctorList | /ins/api/v1/doctor/list | DELETE | 批量删除 |
   * | ins | deleteApiV1DoctorItemById | /ins/api/v1/doctor/item/{id} | DELETE | 删除 |
   * | ins | deleteApiV1CourseTypeItemById | /ins/api/v1/course/type/item/{id} | DELETE | 删除课程 |
   * | ins | deleteApiV1CourseResourcesItemById | /ins/api/v1/course/resources/item/{id} | DELETE | 删除 |
   * | ins | deleteApiV1AccountInfoList | /ins/api/v1/account/info/list | DELETE | 删除账号信息 |
   */
  export const apiIns: {
    /**
     * @api ins | putApiV1UserInfoItem | /ins/api/v1/userInfo/item | PUT | 修改用户
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 账号ids
     *   accountIds?: string;
     *   // string (可选) - 微信id
     *   openId?: string;
     *   // string (可选) - 名称
     *   name?: string;
     *   // string (可选) - 昵称
     *   nickName?: string;
     *   // number (可选) - 年龄 | 格式: int32
     *   age?: number;
     *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
     *   sex?: "MAN" | "WOMAN" | "UNKNOWN";
     *   // string (可选) - 电话
     *   phone?: string;
     *   // string (可选) - 密码
     *   password?: string;
     *   // string (可选) - 头像
     *   avatarPicPath?: string;
     *   // string (可选) - 身份证
     *   idNumber?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1UserInfoItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1UserInfoItemGeneric>;
    /**
     * @api ins | postApiV1UserInfoItem | /ins/api/v1/userInfo/item | POST | 新增用户
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 账号id
     *   accountIds?: string;
     *   // string (可选) - 微信id
     *   openId?: string;
     *   // string - 姓名
     *   name: string;
     *   // string (可选) - 昵称
     *   nickName?: string;
     *   // number (可选) - 年龄 | 格式: int32
     *   age?: number;
     *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
     *   sex?: "MAN" | "WOMAN" | "UNKNOWN";
     *   // string - 电话
     *   phone: string;
     *   // boolean (可选) - 是否为会员
     *   isVip?: boolean;
     *   // string (可选) - 密码
     *   password?: string;
     *   // string (可选) - 头像
     *   avatarPicPath?: string;
     *   // string (可选) - 身份证
     *   idNumber?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.UserInfoDTO (可选)
     *   data?: XinliModels.UserInfoDTO;
     * }
     * ```
     */
    postApiV1UserInfoItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1UserInfoItemGeneric>;
    /**
     * @api ins | deleteApiV1UserInfoItem | /ins/api/v1/userInfo/item | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1UserInfoItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1UserInfoItemGeneric>;
    /**
     * @api ins | putApiV1SystemMessageList | /ins/api/v1/systemMessage/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateSystemMessage[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1SystemMessageList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1SystemMessageListGeneric>;
    /**
     * @api ins | postApiV1SystemMessageList | /ins/api/v1/systemMessage/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.SystemMessageDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SystemMessageDTO[];
     * }
     * ```
     */
    postApiV1SystemMessageList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1SystemMessageListGeneric>;
    /**
     * @api ins | deleteApiV1SystemMessageList | /ins/api/v1/systemMessage/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1SystemMessageList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1SystemMessageListGeneric>;
    /**
     * @api ins | putApiV1SystemMessageItem | /ins/api/v1/systemMessage/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 用户ID
     *   userId?: string;
     *   // "{"desc":"系统消息","name":"SYSTEM"}" (可选) - 消息类型，枚举：MessageType | 可选值: "{\"desc\":\"系统消息\",\"name\":\"SYSTEM\"}"
     *   messageType?: "SYSTEM";
     *   // string (可选) - 消息内容
     *   content?: string;
     *   // "{"desc":"已发送","name":"SEND"}" | "{"desc":"已读","name":"READ"}" | "{"desc":"未读","name":"UNREAD"}" (可选) - 已读状态，枚举：MessageStatus | 可选值: "{\"desc\":\"已发送\",\"name\":\"SEND\"}", "{\"desc\":\"已读\",\"name\":\"READ\"}", "{\"desc\":\"未读\",\"name\":\"UNREAD\"}"
     *   status?: "SEND" | "READ" | "UNREAD";
     *   // string (可选) - 消息已读时间 | 格式: date-time
     *   readTime?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1SystemMessageItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1SystemMessageItemGeneric>;
    /**
     * @api ins | postApiV1SystemMessageItem | /ins/api/v1/systemMessage/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 用户ID
     *   userId?: string;
     *   // "{"desc":"系统消息","name":"SYSTEM"}" (可选) - 消息类型，枚举：MessageType | 可选值: "{\"desc\":\"系统消息\",\"name\":\"SYSTEM\"}"
     *   messageType?: "SYSTEM";
     *   // string (可选) - 消息内容
     *   content?: string;
     *   // "{"desc":"已发送","name":"SEND"}" | "{"desc":"已读","name":"READ"}" | "{"desc":"未读","name":"UNREAD"}" (可选) - 已读状态，枚举：MessageStatus | 可选值: "{\"desc\":\"已发送\",\"name\":\"SEND\"}", "{\"desc\":\"已读\",\"name\":\"READ\"}", "{\"desc\":\"未读\",\"name\":\"UNREAD\"}"
     *   status?: "SEND" | "READ" | "UNREAD";
     *   // string (可选) - 消息已读时间 | 格式: date-time
     *   readTime?: string;
     *   // string (可选)
     *   userName?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SystemMessageDTO (可选)
     *   data?: XinliModels.SystemMessageDTO;
     * }
     * ```
     */
    postApiV1SystemMessageItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1SystemMessageItemGeneric>;
    /**
     * @api ins | putApiV1SurveysParticipantList | /ins/api/v1/surveysParticipant/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateSurveysParticipant[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1SurveysParticipantList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1SurveysParticipantListGeneric>;
    /**
     * @api ins | postApiV1SurveysParticipantList | /ins/api/v1/surveysParticipant/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.SurveysParticipantDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SurveysParticipantDTO[];
     * }
     * ```
     */
    postApiV1SurveysParticipantList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1SurveysParticipantListGeneric>;
    /**
     * @api ins | deleteApiV1SurveysParticipantList | /ins/api/v1/surveysParticipant/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1SurveysParticipantList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1SurveysParticipantListGeneric>;
    /**
     * @api ins | putApiV1SurveysParticipantItem | /ins/api/v1/surveysParticipant/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // string (可选) - 参测人员手机号
     *   phone?: string;
     *   // string (可选) - 参测人员称呼
     *   name?: string;
     *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 参测人员性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
     *   sex?: "MAN" | "WOMAN" | "UNKNOWN";
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1SurveysParticipantItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1SurveysParticipantItemGeneric>;
    /**
     * @api ins | postApiV1SurveysParticipantItem | /ins/api/v1/surveysParticipant/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // string (可选) - 参测人员手机号
     *   phone?: string;
     *   // string (可选) - 参测人员称呼
     *   name?: string;
     *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 参测人员性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
     *   sex?: "MAN" | "WOMAN" | "UNKNOWN";
     *   // "{"desc":"待测评","name":"WAIT"}" | "{"desc":"已完成","name":"COMPLETE"}" | "{"desc":"未完成","name":"NOT_COMPLETE"}" (可选) - 参与状态 | 可选值: "{\"desc\":\"待测评\",\"name\":\"WAIT\"}", "{\"desc\":\"已完成\",\"name\":\"COMPLETE\"}", "{\"desc\":\"未完成\",\"name\":\"NOT_COMPLETE\"}"
     *   status?: "WAIT" | "COMPLETE" | "NOT_COMPLETE";
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SurveysParticipantDTO (可选)
     *   data?: XinliModels.SurveysParticipantDTO;
     * }
     * ```
     */
    postApiV1SurveysParticipantItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1SurveysParticipantItemGeneric>;
    /**
     * @api ins | putApiV1SurveysItem | /ins/api/v1/surveys/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 机构ID
     *   institutionId?: string;
     *   // string (可选) - 量表标题
     *   title?: string;
     *   // string (可选) - 量表描述
     *   description?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 量表状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // number (可选) - 推荐等级 | 格式: int32
     *   isRec?: number;
     *   // string (可选) - 开始日期 | 格式: date-time
     *   openTime?: string;
     *   // string (可选) - 截止日期 | 格式: date-time
     *   closeTime?: string;
     *   // "{"desc":"完全开放","name":"FULLY_OPEN"}" | "{"desc":"机构内开放","name":"INSTITUTION_OPEN"}" | "{"desc":"固定人员开放","name":"FIXED_PERSONNEL_OPEN"}" | "{"desc":"量表码开放","name":"CODE_BASED_OPEN"}" (可选) - 量表开放类型，枚举：SurveyOpenType | 可选值: "{\"desc\":\"完全开放\",\"name\":\"FULLY_OPEN\"}", "{\"desc\":\"机构内开放\",\"name\":\"INSTITUTION_OPEN\"}", "{\"desc\":\"固定人员开放\",\"name\":\"FIXED_PERSONNEL_OPEN\"}", "{\"desc\":\"量表码开放\",\"name\":\"CODE_BASED_OPEN\"}"
     *   openType?: "FULLY_OPEN" | "INSTITUTION_OPEN" | "FIXED_PERSONNEL_OPEN" | "CODE_BASED_OPEN";
     *   // string (可选) - 量表码
     *   code?: string;
     *   // number (可选) - 预警分数 | 格式: int32
     *   warningScore?: number;
     *   // string (可选) - 量表图片
     *   image?: string;
     *   // boolean (可选) - 是否允许重复测试
     *   isRepetition?: boolean;
     *   // string (可选) - 类型
     *   category?: string;
     *   // boolean (可选) - 是否推荐
     *   isRecommended?: boolean;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1SurveysItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1SurveysItemGeneric>;
    /**
     * @api ins | postApiV1SurveysItem | /ins/api/v1/surveys/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 机构ID
     *   institutionId?: string;
     *   // string (可选) - 量表标题
     *   title?: string;
     *   // string (可选) - 量表描述
     *   description?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 量表状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // number (可选) - 推荐等级 | 格式: int32
     *   isRec?: number;
     *   // string (可选) - 开始日期 | 格式: date-time
     *   openTime?: string;
     *   // string (可选) - 截止日期 | 格式: date-time
     *   closeTime?: string;
     *   // "{"desc":"完全开放","name":"FULLY_OPEN"}" | "{"desc":"机构内开放","name":"INSTITUTION_OPEN"}" | "{"desc":"固定人员开放","name":"FIXED_PERSONNEL_OPEN"}" | "{"desc":"量表码开放","name":"CODE_BASED_OPEN"}" (可选) - 量表开放类型，枚举：SurveyOpenType | 可选值: "{\"desc\":\"完全开放\",\"name\":\"FULLY_OPEN\"}", "{\"desc\":\"机构内开放\",\"name\":\"INSTITUTION_OPEN\"}", "{\"desc\":\"固定人员开放\",\"name\":\"FIXED_PERSONNEL_OPEN\"}", "{\"desc\":\"量表码开放\",\"name\":\"CODE_BASED_OPEN\"}"
     *   openType?: "FULLY_OPEN" | "INSTITUTION_OPEN" | "FIXED_PERSONNEL_OPEN" | "CODE_BASED_OPEN";
     *   // string (可选) - 量表码
     *   code?: string;
     *   // number (可选) - 预警分数 | 格式: int32
     *   warningScore?: number;
     *   // string (可选) - 量表图片
     *   image?: string;
     *   // boolean (可选) - 是否允许重复测试
     *   isRepetition?: boolean;
     *   // string (可选)
     *   insName?: string;
     *   // boolean (可选) - 是否推荐
     *   isRecommended?: boolean;
     *   // string - 类型
     *   category: string;
     *   // string (可选) - 类型名字
     *   categoryName?: string;
     *   // array (可选) - 条件
     *   preconditionDtoList?: XinliModels.PreconditionDTO[];
     *   // "{"desc":"待测评","name":"WAIT"}" | "{"desc":"已完成","name":"COMPLETE"}" | "{"desc":"未完成","name":"NOT_COMPLETE"}" (可选) - 参与状态 | 可选值: "{\"desc\":\"待测评\",\"name\":\"WAIT\"}", "{\"desc\":\"已完成\",\"name\":\"COMPLETE\"}", "{\"desc\":\"未完成\",\"name\":\"NOT_COMPLETE\"}"
     *   joinStatus?: "WAIT" | "COMPLETE" | "NOT_COMPLETE";
     *   // number (可选) - 参与人数 | 格式: int32
     *   joinNum?: number;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SurveysDTO (可选)
     *   data?: XinliModels.SurveysDTO;
     * }
     * ```
     */
    postApiV1SurveysItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1SurveysItemGeneric>;
    /**
     * @api ins | putApiV1SurveysCategoryItem | /ins/api/v1/surveys/category/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 名字
     *   title: string;
     *   // number (可选) - 排序 | 格式: int32
     *   sort?: number;
     *   // string (可选) - 机构id
     *   institutionId?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status: "ENABLE" | "DISABLE";
     *   // string (可选)
     *   pid?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1SurveysCategoryItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1SurveysCategoryItemGeneric>;
    /**
     * @api ins | postApiV1SurveysCategoryItem | /ins/api/v1/surveys/category/item | POST | 添加
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 名字
     *   title: string;
     *   // number (可选) - 排序 | 格式: int32
     *   sort?: number;
     *   // string (可选) - 机构id
     *   institutionId?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status: "ENABLE" | "DISABLE";
     *   // string (可选)
     *   pid?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SurveysCategoryDto (可选)
     *   data?: XinliModels.SurveysCategoryDto;
     * }
     * ```
     */
    postApiV1SurveysCategoryItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1SurveysCategoryItemGeneric>;
    /**
     * @api ins | deleteApiV1SurveysCategoryItem | /ins/api/v1/surveys/category/item | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1SurveysCategoryItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1SurveysCategoryItemGeneric>;
    /**
     * @api ins | putApiV1QuestionsUpdateStatusById | /ins/api/v1/questions/updateStatus/{id} | PUT | 修改状态
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1QuestionsUpdateStatusById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1QuestionsUpdateStatusByIdGeneric>;
    /**
     * @api ins | putApiV1QuestionsList | /ins/api/v1/questions/list | PUT | 批量修改（量表的题）
     * @body
     * ```ts
     * XinliModels.QuestionsDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1QuestionsList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1QuestionsListGeneric>;
    /**
     * @api ins | postApiV1QuestionsList | /ins/api/v1/questions/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.QuestionsDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.QuestionsDTO[];
     * }
     * ```
     */
    postApiV1QuestionsList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1QuestionsListGeneric>;
    /**
     * @api ins | deleteApiV1QuestionsList | /ins/api/v1/questions/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1QuestionsList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1QuestionsListGeneric>;
    /**
     * @api ins | putApiV1QuestionsItem | /ins/api/v1/questions/item | PUT | 修改（题库的题）
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // "{"desc":"题库","name":"BANK"}" | "{"desc":"量表","name":"SURVEY"}" (可选) - 题库、量表，枚举：QuestionSourceType | 可选值: "{\"desc\":\"题库\",\"name\":\"BANK\"}", "{\"desc\":\"量表\",\"name\":\"SURVEY\"}"
     *   sourceType?: "BANK" | "SURVEY";
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}"
     *   questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";
     *   // string (可选) - 问题文本
     *   questionText?: string;
     *   // number (可选) - 排序 | 格式: int32
     *   order?: number;
     *   // boolean (可选) - 是否必填
     *   required?: boolean;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // string (可选) - 分类ID
     *   categoryId?: string;
     *   // string (可选) - code
     *   code?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1QuestionsItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1QuestionsItemGeneric>;
    /**
     * @api ins | postApiV1QuestionsItem | /ins/api/v1/questions/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // "{"desc":"题库","name":"BANK"}" | "{"desc":"量表","name":"SURVEY"}" (可选) - 题库、量表，枚举：QuestionSourceType | 可选值: "{\"desc\":\"题库\",\"name\":\"BANK\"}", "{\"desc\":\"量表\",\"name\":\"SURVEY\"}"
     *   sourceType?: "BANK" | "SURVEY";
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}"
     *   questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";
     *   // string (可选) - 问题文本
     *   questionText?: string;
     *   // number (可选) - 排序 | 格式: int32
     *   order?: number;
     *   // boolean (可选) - 是否必填
     *   required?: boolean;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // string (可选) - 分类ID
     *   categoryId?: string;
     *   // string (可选) - 分类名字
     *   categoryName?: string;
     *   // string (可选) - code
     *   code?: string;
     *   // string (可选)
     *   surveysTitle?: string;
     *   // array (可选)
     *   optionList?: XinliModels.OptionsDTO[];
     *   // array (可选)
     *   preconditionList?: XinliModels.PreconditionDTO[];
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.QuestionsDTO (可选)
     *   data?: XinliModels.QuestionsDTO;
     * }
     * ```
     */
    postApiV1QuestionsItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1QuestionsItemGeneric>;
    /**
     * @api ins | putApiV1PreconditionList | /ins/api/v1/precondition/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdatePrecondition[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1PreconditionList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1PreconditionListGeneric>;
    /**
     * @api ins | postApiV1PreconditionList | /ins/api/v1/precondition/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.PreconditionDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.PreconditionDTO[];
     * }
     * ```
     */
    postApiV1PreconditionList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1PreconditionListGeneric>;
    /**
     * @api ins | deleteApiV1PreconditionList | /ins/api/v1/precondition/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1PreconditionList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1PreconditionListGeneric>;
    /**
     * @api ins | putApiV1PreconditionItem | /ins/api/v1/precondition/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // "{"desc":"问题","name":"QUESTION"}" | "{"desc":"选项","name":"OPTION"}" (可选) - 类型，枚举：SourceType | 可选值: "{\"desc\":\"问题\",\"name\":\"QUESTION\"}", "{\"desc\":\"选项\",\"name\":\"OPTION\"}"
     *   sourceType?: "QUESTION" | "OPTION";
     *   // "{"desc":"当前总得分","name":"TOTAL"}" | "{"desc":"某些题总得分（全部满足）","name":"SUM_SCORE"}" | "{"desc":"某些题总得分（满足一个）","name":"SUM_SCORE_OR"}" | "{"desc":"某些题得了多少分（全部满足）","name":"INDIVIDUAL_SCORES"}" | "{"desc":"某些题得了多少分（满足一个）","name":"INDIVIDUAL_SCORES_OR"}" | "{"desc":"某些题选了某些项（全部满足）","name":"SELECTED_OPTIONS"}" | "{"desc":"某些题选了某些项（满足一个）","name":"SELECTED_CERTAIN_OPTIONS"}" (可选) - 前置条件类型，枚举：ConditionType | 可选值: "{\"desc\":\"当前总得分\",\"name\":\"TOTAL\"}", "{\"desc\":\"某些题总得分（全部满足）\",\"name\":\"SUM_SCORE\"}", "{\"desc\":\"某些题总得分（满足一个）\",\"name\":\"SUM_SCORE_OR\"}", "{\"desc\":\"某些题得了多少分（全部满足）\",\"name\":\"INDIVIDUAL_SCORES\"}", "{\"desc\":\"某些题得了多少分（满足一个）\",\"name\":\"INDIVIDUAL_SCORES_OR\"}", "{\"desc\":\"某些题选了某些项（全部满足）\",\"name\":\"SELECTED_OPTIONS\"}", "{\"desc\":\"某些题选了某些项（满足一个）\",\"name\":\"SELECTED_CERTAIN_OPTIONS\"}"
     *   conditionType?: "TOTAL" | "SUM_SCORE" | "SUM_SCORE_OR" | "INDIVIDUAL_SCORES" | "INDIVIDUAL_SCORES_OR" | "SELECTED_OPTIONS" | "SELECTED_CERTAIN_OPTIONS";
     *   // "{"desc":"大于","name":"GT"}" | "{"desc":"小于","name":"LT"}" | "{"desc":"等于","name":"EQ"}" | "{"desc":"包含","name":"IN"}" | "{"desc":"不包含","name":"NOT_IN"}" | "{"desc":"至少包含一个","name":"ANY_IN"}" | "{"desc":"至少不包含一个","name":"ANY_NOT_IN"}" (可选) - 条件，枚举：Condition | 可选值: "{\"desc\":\"大于\",\"name\":\"GT\"}", "{\"desc\":\"小于\",\"name\":\"LT\"}", "{\"desc\":\"等于\",\"name\":\"EQ\"}", "{\"desc\":\"包含\",\"name\":\"IN\"}", "{\"desc\":\"不包含\",\"name\":\"NOT_IN\"}", "{\"desc\":\"至少包含一个\",\"name\":\"ANY_IN\"}", "{\"desc\":\"至少不包含一个\",\"name\":\"ANY_NOT_IN\"}"
     *   condition?: "GT" | "LT" | "EQ" | "IN" | "NOT_IN" | "ANY_IN" | "ANY_NOT_IN";
     *   // number (可选) - 条件值（用于总得分和指定题得分） | 格式: int32
     *   value?: number;
     *   // string (可选) - 指定选项值（用于指定题选项的条件）
     *   optionValue?: string;
     *   // string (可选) - 绑定问题或选项code
     *   parentCode?: string;
     *   // string (可选) - 目标问题code
     *   questionCode?: string;
     *   // string (可选)
     *   surveysId?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1PreconditionItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1PreconditionItemGeneric>;
    /**
     * @api ins | postApiV1PreconditionItem | /ins/api/v1/precondition/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // "{"desc":"问题","name":"QUESTION"}" | "{"desc":"选项","name":"OPTION"}" (可选) - 类型，枚举：SourceType | 可选值: "{\"desc\":\"问题\",\"name\":\"QUESTION\"}", "{\"desc\":\"选项\",\"name\":\"OPTION\"}"
     *   sourceType?: "QUESTION" | "OPTION";
     *   // "{"desc":"当前总得分","name":"TOTAL"}" | "{"desc":"某些题总得分（全部满足）","name":"SUM_SCORE"}" | "{"desc":"某些题总得分（满足一个）","name":"SUM_SCORE_OR"}" | "{"desc":"某些题得了多少分（全部满足）","name":"INDIVIDUAL_SCORES"}" | "{"desc":"某些题得了多少分（满足一个）","name":"INDIVIDUAL_SCORES_OR"}" | "{"desc":"某些题选了某些项（全部满足）","name":"SELECTED_OPTIONS"}" | "{"desc":"某些题选了某些项（满足一个）","name":"SELECTED_CERTAIN_OPTIONS"}" (可选) - 前置条件类型，枚举：ConditionType | 可选值: "{\"desc\":\"当前总得分\",\"name\":\"TOTAL\"}", "{\"desc\":\"某些题总得分（全部满足）\",\"name\":\"SUM_SCORE\"}", "{\"desc\":\"某些题总得分（满足一个）\",\"name\":\"SUM_SCORE_OR\"}", "{\"desc\":\"某些题得了多少分（全部满足）\",\"name\":\"INDIVIDUAL_SCORES\"}", "{\"desc\":\"某些题得了多少分（满足一个）\",\"name\":\"INDIVIDUAL_SCORES_OR\"}", "{\"desc\":\"某些题选了某些项（全部满足）\",\"name\":\"SELECTED_OPTIONS\"}", "{\"desc\":\"某些题选了某些项（满足一个）\",\"name\":\"SELECTED_CERTAIN_OPTIONS\"}"
     *   conditionType?: "TOTAL" | "SUM_SCORE" | "SUM_SCORE_OR" | "INDIVIDUAL_SCORES" | "INDIVIDUAL_SCORES_OR" | "SELECTED_OPTIONS" | "SELECTED_CERTAIN_OPTIONS";
     *   // "{"desc":"大于","name":"GT"}" | "{"desc":"小于","name":"LT"}" | "{"desc":"等于","name":"EQ"}" | "{"desc":"包含","name":"IN"}" | "{"desc":"不包含","name":"NOT_IN"}" | "{"desc":"至少包含一个","name":"ANY_IN"}" | "{"desc":"至少不包含一个","name":"ANY_NOT_IN"}" (可选) - 条件，枚举：Condition | 可选值: "{\"desc\":\"大于\",\"name\":\"GT\"}", "{\"desc\":\"小于\",\"name\":\"LT\"}", "{\"desc\":\"等于\",\"name\":\"EQ\"}", "{\"desc\":\"包含\",\"name\":\"IN\"}", "{\"desc\":\"不包含\",\"name\":\"NOT_IN\"}", "{\"desc\":\"至少包含一个\",\"name\":\"ANY_IN\"}", "{\"desc\":\"至少不包含一个\",\"name\":\"ANY_NOT_IN\"}"
     *   condition?: "GT" | "LT" | "EQ" | "IN" | "NOT_IN" | "ANY_IN" | "ANY_NOT_IN";
     *   // number (可选) - 条件值（用于总得分和指定题得分） | 格式: int32
     *   value?: number;
     *   // string (可选) - 指定选项值（用于指定题选项的条件）
     *   optionValue?: string;
     *   // string (可选) - 绑定问题或选项code
     *   parentCode?: string;
     *   // string (可选) - 目标问题code
     *   questionCode?: string;
     *   // string (可选)
     *   surveysId?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.PreconditionDTO (可选)
     *   data?: XinliModels.PreconditionDTO;
     * }
     * ```
     */
    postApiV1PreconditionItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1PreconditionItemGeneric>;
    /**
     * @api ins | putApiV1OptionsList | /ins/api/v1/options/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateOptions[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1OptionsList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1OptionsListGeneric>;
    /**
     * @api ins | postApiV1OptionsList | /ins/api/v1/options/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.OptionsDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.OptionsDTO[];
     * }
     * ```
     */
    postApiV1OptionsList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1OptionsListGeneric>;
    /**
     * @api ins | deleteApiV1OptionsList | /ins/api/v1/options/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1OptionsList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1OptionsListGeneric>;
    /**
     * @api ins | putApiV1OptionsItem | /ins/api/v1/options/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // "{"desc":"问题","name":"QUESTION"}" | "{"desc":"信息收集","name":"INFORMATION"}" (可选) - 类型，枚举：OptionsType | 可选值: "{\"desc\":\"问题\",\"name\":\"QUESTION\"}", "{\"desc\":\"信息收集\",\"name\":\"INFORMATION\"}"
     *   type?: "QUESTION" | "INFORMATION";
     *   // string (可选) - 选项文本（如 A、B、C）
     *   label?: string;
     *   // string (可选) - 选项对应的值
     *   value?: string;
     *   // number (可选) - 选项分数 | 格式: int32
     *   score?: number;
     *   // string (可选) - 问题code
     *   questionCode?: string;
     *   // string (可选) - code
     *   code?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1OptionsItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1OptionsItemGeneric>;
    /**
     * @api ins | postApiV1OptionsItem | /ins/api/v1/options/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // "{"desc":"问题","name":"QUESTION"}" | "{"desc":"信息收集","name":"INFORMATION"}" (可选) - 类型，枚举：OptionsType | 可选值: "{\"desc\":\"问题\",\"name\":\"QUESTION\"}", "{\"desc\":\"信息收集\",\"name\":\"INFORMATION\"}"
     *   type?: "QUESTION" | "INFORMATION";
     *   // string (可选) - 选项文本（如 A、B、C）
     *   label?: string;
     *   // string (可选) - 选项对应的值
     *   value?: string;
     *   // number (可选) - 选项分数 | 格式: int32
     *   score?: number;
     *   // string (可选) - 问题code
     *   questionCode?: string;
     *   // string (可选) - code
     *   code?: string;
     *   // number (可选) - 格式: int32
     *   sort?: number;
     *   // array (可选)
     *   preconditionList?: XinliModels.PreconditionDTO[];
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.OptionsDTO (可选)
     *   data?: XinliModels.OptionsDTO;
     * }
     * ```
     */
    postApiV1OptionsItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1OptionsItemGeneric>;
    /**
     * @api ins | putApiV1InstitutionItem | /ins/api/v1/institution/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 账号id
     *   accountId?: string;
     *   // string (可选) - 机构名称
     *   insName?: string;
     *   // string (可选) - 机构地址
     *   address?: string;
     *   // string (可选) - 联系人
     *   contactPerson?: string;
     *   // string (可选) - 联系电话
     *   contactPhone?: string;
     *   // string (可选) - 机构图片
     *   images?: string;
     *   // "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" (可选) - 审核状态：待审核、审核通过、审核失败 | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}"
     *   auditStatus?: "WAIT" | "PASS" | "FAIL";
     *   // string (可选) - 审核意见
     *   reason?: string;
     *   // number (可选) - 最大人数 | 格式: int32
     *   maxNumber?: number;
     *   // string (可选) - 城市编码
     *   parentCode?: string;
     *   // boolean (可选) - 是否签署
     *   isSign?: boolean;
     *   // string (可选) - 机构码
     *   code?: string;
     *   // string (可选) - 机构介绍
     *   introduce?: string;
     *   // string (可选) - 业务范围
     *   business?: string;
     *   // string (可选) - 身份证正面
     *   idCardFont?: string;
     *   // string (可选) - 身份证反面
     *   idCardBack?: string;
     *   // string (可选) - 资格证书
     *   qualifications?: string;
     *   // string (可选)
     *   userId?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1InstitutionItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1InstitutionItemGeneric>;
    /**
     * @api ins | putApiV1InformationQuestionsList | /ins/api/v1/informationQuestions/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.InformationQuestionsDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1InformationQuestionsList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1InformationQuestionsListGeneric>;
    /**
     * @api ins | postApiV1InformationQuestionsList | /ins/api/v1/informationQuestions/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.InformationQuestionsDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.InformationQuestionsDTO[];
     * }
     * ```
     */
    postApiV1InformationQuestionsList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1InformationQuestionsListGeneric>;
    /**
     * @api ins | deleteApiV1InformationQuestionsList | /ins/api/v1/informationQuestions/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1InformationQuestionsList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1InformationQuestionsListGeneric>;
    /**
     * @api ins | putApiV1InformationQuestionsItem | /ins/api/v1/informationQuestions/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // number (可选) - 排序 | 格式: int32
     *   order?: number;
     *   // "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}"
     *   questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";
     *   // string (可选) - 问题文本
     *   questionText?: string;
     *   // boolean (可选) - 是否必填
     *   required?: boolean;
     *   // string (可选) - code
     *   code?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1InformationQuestionsItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1InformationQuestionsItemGeneric>;
    /**
     * @api ins | postApiV1InformationQuestionsItem | /ins/api/v1/informationQuestions/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // number (可选) - 排序 | 格式: int32
     *   order?: number;
     *   // "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}"
     *   questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";
     *   // string (可选) - 问题文本
     *   questionText?: string;
     *   // boolean (可选) - 是否必填
     *   required?: boolean;
     *   // string (可选) - code
     *   code?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // array (可选)
     *   optionList?: XinliModels.OptionsDTO[];
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.InformationQuestionsDTO (可选)
     *   data?: XinliModels.InformationQuestionsDTO;
     * }
     * ```
     */
    postApiV1InformationQuestionsItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1InformationQuestionsItemGeneric>;
    /**
     * @api ins | putApiV1InformationCollectionItem | /ins/api/v1/informationCollection/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 用户ID
     *   userId?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // string (可选) - 填写的内容
     *   responseContent?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1InformationCollectionItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1InformationCollectionItemGeneric>;
    /**
     * @api ins | postApiV1InformationCollectionItem | /ins/api/v1/informationCollection/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 用户ID
     *   userId?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // string (可选) - 填写的内容
     *   responseContent?: string;
     *   // string (可选) - 量表标题
     *   title?: string;
     *   // string (可选) - 用户名
     *   userName?: string;
     *   // array (可选) - 传入对象
     *   contentList?: XinliModels.Content[];
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.InformationCollectionDTO (可选)
     *   data?: XinliModels.InformationCollectionDTO;
     * }
     * ```
     */
    postApiV1InformationCollectionItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1InformationCollectionItemGeneric>;
    /**
     * @api ins | putApiV1DoctorItem | /ins/api/v1/doctor/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 医师姓名
     *   name?: string;
     *   // string (可选) - 绑定的机构ID
     *   institutionId?: string;
     *   // boolean (可选) - 是否在线
     *   isOnline?: boolean;
     *   // string (可选) - 医生标签
     *   label?: string;
     *   // string (可选) - 医师等级
     *   level?: string;
     *   // string (可选) - 擅长领域
     *   specialty?: string;
     *   // string (可选) - 个人简介
     *   introduction?: string;
     *   // number (可选) - 咨询费用
     *   serviceFee?: number;
     *   // string (可选) - 地址
     *   address?: string;
     *   // number (可选) - 服务时长 | 格式: int32
     *   serviceHours?: number;
     *   // number (可选) - 服务次数 | 格式: int32
     *   serviceCount?: number;
     *   // string (可选) - 入行时间
     *   entryTime?: string;
     *   // number (可选) - 在线时长 | 格式: int32
     *   onlineHours?: number;
     *   // string (可选) - 下线时间 | 格式: date-time
     *   logoutTime?: string;
     *   // string (可选) - 登录时间 | 格式: date-time
     *   loginTime?: string;
     *   // string (可选) - 审核意见
     *   reason?: string;
     *   // string - 身份证正面
     *   idCardFont: string;
     *   // string - 身份证反面
     *   idCardBack: string;
     *   // string (可选) - 证书-允许传多个,逗号分隔
     *   qualifications?: string;
     *   // string - 电话
     *   phone: string;
     *   // string (可选) - 头像
     *   avatar?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1DoctorItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1DoctorItemGeneric>;
    /**
     * @api ins | postApiV1DoctorItem | /ins/api/v1/doctor/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 医师姓名
     *   name: string;
     *   // string - 身份证号
     *   idCard: string;
     *   // string - 电话
     *   phone: string;
     *   // string - 职务
     *   job: string;
     *   // string - 擅长领域
     *   specialty: string;
     *   // string (可选) - 绑定的机构ID
     *   institutionId?: string;
     *   // string (可选) - 地址
     *   address?: string;
     *   // string - 个人简介
     *   introduction: string;
     *   // string - 身份证正面
     *   idCardFont: string;
     *   // string - 身份证反面
     *   idCardBack: string;
     *   // string (可选) - 证书-允许传多个,逗号分隔
     *   qualifications?: string;
     *   // number - 咨询费用
     *   serviceFee: number;
     *   // "{"desc":"系统","name":"SYSTEM"}" | "{"desc":"个人","name":"PERSONAL"}" (可选) - 申请类型 | 可选值: "{\"desc\":\"系统\",\"name\":\"SYSTEM\"}", "{\"desc\":\"个人\",\"name\":\"PERSONAL\"}"
     *   applicationType?: "SYSTEM" | "PERSONAL";
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // boolean (可选) - 是否在线
     *   isOnline?: boolean;
     *   // "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" (可选) - 申请审核状态，枚举：AuditStatus | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}"
     *   auditStatus?: "WAIT" | "PASS" | "FAIL";
     *   // string (可选) - 医生标签
     *   label?: string;
     *   // string (可选) - 医师等级
     *   level?: string;
     *   // number (可选) - 服务时长 | 格式: int32
     *   serviceHours?: number;
     *   // number (可选) - 服务次数 | 格式: int32
     *   serviceCount?: number;
     *   // string - 入行时间
     *   entryTime: string;
     *   // number (可选) - 在线时长 | 格式: int32
     *   onlineHours?: number;
     *   // string (可选) - 下线时间 | 格式: date-time
     *   logoutTime?: string;
     *   // string (可选) - 登录时间 | 格式: date-time
     *   loginTime?: string;
     *   // string (可选) - 申请人ID
     *   userId?: string;
     *   // string (可选) - 审核意见
     *   reason?: string;
     *   // string (可选) - 密码
     *   userPassword?: string;
     *   // string (可选)
     *   institutionName?: string;
     *   // string (可选) - 头像
     *   avatar?: string;
     *   // string (可选) - 角色id - 管端添加必填，审核通过必填
     *   roleIds?: string;
     *   // string (可选) - 账号id - 后端处理
     *   accountId?: string;
     *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
     *   sex: "MAN" | "WOMAN" | "UNKNOWN";
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.DoctorDTO (可选)
     *   data?: XinliModels.DoctorDTO;
     * }
     * ```
     */
    postApiV1DoctorItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1DoctorItemGeneric>;
    /**
     * @api ins | putApiV1CourseTypeItem | /ins/api/v1/course/type/item | PUT | 修改课程
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 标题
     *   title: string;
     *   // string (可选) - 机构id
     *   institutionId?: string;
     *   // number (可选) - 排序 | 格式: int32
     *   sort?: number;
     *   // string (可选)
     *   pid?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1CourseTypeItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1CourseTypeItemGeneric>;
    /**
     * @api ins | postApiV1CourseTypeItem | /ins/api/v1/course/type/item | POST | 添加课程分类
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 标题
     *   title: string;
     *   // string (可选) - 机构id
     *   institutionId?: string;
     *   // number (可选) - 排序 | 格式: int32
     *   sort?: number;
     *   // string (可选)
     *   pid?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.CourseTypeDto (可选)
     *   data?: XinliModels.CourseTypeDto;
     * }
     * ```
     */
    postApiV1CourseTypeItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1CourseTypeItemGeneric>;
    /**
     * @api ins | deleteApiV1CourseTypeItem | /ins/api/v1/course/type/item | DELETE | 批量删除课程
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1CourseTypeItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1CourseTypeItemGeneric>;
    /**
     * @api ins | putApiV1CourseResourcesItem | /ins/api/v1/course/resources/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 课程id
     *   courseId: string;
     *   // string - 课时标题
     *   title: string;
     *   // string (可选) - 课时介绍
     *   description?: string;
     *   // number (可选) - 时长 | 格式: double
     *   duration?: number;
     *   // string (可选) - 附件
     *   annex?: string;
     *   // string - 资源地址
     *   resourceUrl: string;
     *   // string (可选) - 机构id
     *   institutionId?: string;
     *   // boolean - 是否开放
     *   isOpen: boolean;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1CourseResourcesItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1CourseResourcesItemGeneric>;
    /**
     * @api ins | postApiV1CourseResourcesItem | /ins/api/v1/course/resources/item | POST | 添加
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 课程id
     *   courseId: string;
     *   // string - 课时标题
     *   title: string;
     *   // string (可选) - 课时介绍
     *   description?: string;
     *   // number (可选) - 时长 | 格式: double
     *   duration?: number;
     *   // string (可选) - 附件
     *   annex?: string;
     *   // string - 资源地址
     *   resourceUrl: string;
     *   // string (可选) - 机构id
     *   institutionId?: string;
     *   // boolean - 是否开放
     *   isOpen: boolean;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.CourseResourcesDto (可选)
     *   data?: XinliModels.CourseResourcesDto;
     * }
     * ```
     */
    postApiV1CourseResourcesItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1CourseResourcesItemGeneric>;
    /**
     * @api ins | deleteApiV1CourseResourcesItem | /ins/api/v1/course/resources/item | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1CourseResourcesItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1CourseResourcesItemGeneric>;
    /**
     * @api ins | putApiV1CategoryList | /ins/api/v1/category/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateCategory[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1CategoryList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1CategoryListGeneric>;
    /**
     * @api ins | postApiV1CategoryList | /ins/api/v1/category/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.CategoryDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.CategoryDTO[];
     * }
     * ```
     */
    postApiV1CategoryList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1CategoryListGeneric>;
    /**
     * @api ins | deleteApiV1CategoryList | /ins/api/v1/category/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1CategoryList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1CategoryListGeneric>;
    /**
     * @api ins | putApiV1CategoryItem | /ins/api/v1/category/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 名称
     *   name?: string;
     *   // string (可选) - 描述
     *   description?: string;
     *   // string (可选) - 父id
     *   parentId?: string;
     *   // string (可选) - 所属机构ID
     *   institutionId?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1CategoryItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1CategoryItemGeneric>;
    /**
     * @api ins | postApiV1CategoryItem | /ins/api/v1/category/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 名称
     *   name?: string;
     *   // string (可选) - 描述
     *   description?: string;
     *   // string (可选) - 父id
     *   parentId?: string;
     *   // string (可选) - 所属机构ID
     *   institutionId?: string;
     *   // string (可选) - 机构名称
     *   insName?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.CategoryDTO (可选)
     *   data?: XinliModels.CategoryDTO;
     * }
     * ```
     */
    postApiV1CategoryItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1CategoryItemGeneric>;
    /**
     * @api ins | putApiV1AnswersList | /ins/api/v1/answers/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateAnswers[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1AnswersList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1AnswersListGeneric>;
    /**
     * @api ins | postApiV1AnswersList | /ins/api/v1/answers/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.AnswersDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.AnswersDTO[];
     * }
     * ```
     */
    postApiV1AnswersList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1AnswersListGeneric>;
    /**
     * @api ins | deleteApiV1AnswersList | /ins/api/v1/answers/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1AnswersList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1AnswersListGeneric>;
    /**
     * @api ins | putApiV1AnswersItem | /ins/api/v1/answers/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 用户ID
     *   userId?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // number (可选) - 总分数 | 格式: int32
     *   totalScore?: number;
     *   // string (可选) - 回答详细内容
     *   answer?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1AnswersItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1AnswersItemGeneric>;
    /**
     * @api ins | postApiV1AnswersItem | /ins/api/v1/answers/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 用户ID
     *   userId?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // number (可选) - 总分数 | 格式: int32
     *   totalScore?: number;
     *   // string (可选) - 回答详细内容
     *   answer?: string;
     *   // string (可选) - 用户名
     *   userName?: string;
     *   // string (可选) - 量表标题
     *   title?: string;
     *   // string (可选) - 维度
     *   dimension?: string;
     *   // string (可选) - 测评结论
     *   conclusion?: string;
     *   // string (可选) - 结论解析
     *   analysis?: string;
     *   // string (可选) - 建议
     *   recommendation?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AnswersDTO (可选)
     *   data?: XinliModels.AnswersDTO;
     * }
     * ```
     */
    postApiV1AnswersItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1AnswersItemGeneric>;
    /**
     * @api ins | putApiV1AnswerScoreRangesList | /ins/api/v1/answerScoreRanges/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateAnswerScoreRanges[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1AnswerScoreRangesList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1AnswerScoreRangesListGeneric>;
    /**
     * @api ins | postApiV1AnswerScoreRangesList | /ins/api/v1/answerScoreRanges/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.AnswerScoreRangesDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.AnswerScoreRangesDTO[];
     * }
     * ```
     */
    postApiV1AnswerScoreRangesList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1AnswerScoreRangesListGeneric>;
    /**
     * @api ins | deleteApiV1AnswerScoreRangesList | /ins/api/v1/answerScoreRanges/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1AnswerScoreRangesList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1AnswerScoreRangesListGeneric>;
    /**
     * @api ins | putApiV1AnswerScoreRangesItem | /ins/api/v1/answerScoreRanges/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // string (可选) - 维度
     *   dimension?: string;
     *   // number (可选) - 分数区间最小值 | 格式: int32
     *   minScore?: number;
     *   // number (可选) - 分数区间最大值 | 格式: int32
     *   maxScore?: number;
     *   // string (可选) - 测评结论
     *   conclusion?: string;
     *   // string (可选) - 结论解析
     *   analysis?: string;
     *   // string (可选) - 建议
     *   recommendation?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1AnswerScoreRangesItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1AnswerScoreRangesItemGeneric>;
    /**
     * @api ins | postApiV1AnswerScoreRangesItem | /ins/api/v1/answerScoreRanges/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // string (可选) - 维度
     *   dimension?: string;
     *   // number (可选) - 分数区间最小值 | 格式: int32
     *   minScore?: number;
     *   // number (可选) - 分数区间最大值 | 格式: int32
     *   maxScore?: number;
     *   // string (可选) - 测评结论
     *   conclusion?: string;
     *   // string (可选) - 结论解析
     *   analysis?: string;
     *   // string (可选) - 建议
     *   recommendation?: string;
     *   // string (可选) - 量表标题
     *   title?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AnswerScoreRangesDTO (可选)
     *   data?: XinliModels.AnswerScoreRangesDTO;
     * }
     * ```
     */
    postApiV1AnswerScoreRangesItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1AnswerScoreRangesItemGeneric>;
    /**
     * @api ins | putApiV1AccountItem | /ins/api/v1/account/item | PUT | 修改账号信息
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 角色ids
     *   roleIds?: string;
     *   // string (可选) - 用户名
     *   userName?: string;
     *   // "{"desc":"管理","name":"ADMIN"}" | "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" | "{"desc":"用户","name":"USER"}" (可选) - 类型(超管,商家) | 可选值: "{\"desc\":\"管理\",\"name\":\"ADMIN\"}", "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}", "{\"desc\":\"用户\",\"name\":\"USER\"}"
     *   type?: "ADMIN" | "INSTITUTION" | "DOCTOR" | "USER";
     *   // string (可选) - 昵称
     *   nickName?: string;
     *   // string (可选) - 电话
     *   phone?: string;
     *   // string (可选) - 身份证号
     *   idNumber?: string;
     *   // string (可选) - 头像路径
     *   avatarPicPath?: string;
     *   // string (可选) - 菜单ids
     *   menuIds?: string;
     *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
     *   sex?: "MAN" | "WOMAN" | "UNKNOWN";
     *   // number (可选) - 年龄 | 格式: int32
     *   age?: number;
     *   // string (可选) - 描述
     *   desc?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1AccountItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1AccountItemGeneric>;
    /**
     * @api ins | putApiV1AccountInfoStatusById | /ins/api/v1/account/info/status/{id} | PUT | 修改状态
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1AccountInfoStatusById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1AccountInfoStatusByIdGeneric>;
    /**
     * @api ins | putApiV1AccountInfoPassword | /ins/api/v1/account/info/password | PUT | 修改密码
     * @body
     * ```ts
     * {
     *   // string - 用户名
     *   username: string;
     *   // string - 用户密码
     *   password: string;
     *   // string (可选) - ras密码
     *   rsaPassword?: string;
     *   // string (可选)
     *   code?: string;
     *   // string (可选) - 商家id
     *   storeId?: string;
     *   // string (可选)
     *   openId?: string;
     *   // number (可选) - 格式: int32
     *   remainCount?: number;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1AccountInfoPassword: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1AccountInfoPasswordGeneric>;
    /**
     * @api ins | putApiV1AccountInfoItem | /ins/api/v1/account/info/item | PUT | 修改账号信息
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 角色ids
     *   roleIds?: string;
     *   // string (可选) - 用户名
     *   userName?: string;
     *   // "{"desc":"管理","name":"ADMIN"}" | "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" | "{"desc":"用户","name":"USER"}" (可选) - 类型(超管,商家) | 可选值: "{\"desc\":\"管理\",\"name\":\"ADMIN\"}", "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}", "{\"desc\":\"用户\",\"name\":\"USER\"}"
     *   type?: "ADMIN" | "INSTITUTION" | "DOCTOR" | "USER";
     *   // string (可选) - 昵称
     *   nickName?: string;
     *   // string (可选) - 电话
     *   phone?: string;
     *   // string (可选) - 身份证号
     *   idNumber?: string;
     *   // string (可选) - 头像路径
     *   avatarPicPath?: string;
     *   // string (可选) - 菜单ids
     *   menuIds?: string;
     *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
     *   sex?: "MAN" | "WOMAN" | "UNKNOWN";
     *   // number (可选) - 年龄 | 格式: int32
     *   age?: number;
     *   // string (可选) - 描述
     *   desc?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putApiV1AccountInfoItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPutApiV1AccountInfoItemGeneric>;
    /**
     * @api ins | postApiV1AccountInfoItem | /ins/api/v1/account/info/item | POST | 新增账号信息
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 角色ids
     *   roleIds: string;
     *   // string - 用户名
     *   userName: string;
     *   // string - 用户密码
     *   userPassword: string;
     *   // "{"desc":"管理","name":"ADMIN"}" | "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" | "{"desc":"用户","name":"USER"}" - 类型(超管,商家) | 可选值: "{\"desc\":\"管理\",\"name\":\"ADMIN\"}", "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}", "{\"desc\":\"用户\",\"name\":\"USER\"}"
     *   type: "ADMIN" | "INSTITUTION" | "DOCTOR" | "USER";
     *   // string - 昵称
     *   nickName: string;
     *   // string (可选) - 电话
     *   phone?: string;
     *   // string (可选) - 身份证号
     *   idNumber?: string;
     *   // string (可选) - 最后登录时间 | 格式: date-time
     *   lastLoginTime?: string;
     *   // string (可选) - 最后登录ip
     *   lastLoginIp?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 账号状态(启用,禁用) | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // number (可选) - 登录错误次数 | 格式: int32
     *   loginErrorCount?: number;
     *   // string (可选) - 登录错误时间 | 格式: date-time
     *   loginErrorTime?: string;
     *   // string (可选) - 头像路径
     *   avatarPicPath?: string;
     *   // string (可选) - 菜单ids
     *   menuIds?: string;
     *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
     *   sex?: "MAN" | "WOMAN" | "UNKNOWN";
     *   // number (可选) - 年龄 | 格式: int32
     *   age?: number;
     *   // string (可选) - 描述
     *   desc?: string;
     *   // array (可选) - 角色名称
     *   roleName?: string[];
     *   // boolean (可选)
     *   lock?: boolean;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AccountInfoDTO (可选)
     *   data?: XinliModels.AccountInfoDTO;
     * }
     * ```
     */
    postApiV1AccountInfoItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1AccountInfoItemGeneric>;
    /**
     * @api ins | postApiV1UserInfoGetUserNameById | /ins/api/v1/userInfo/getUserNameById | POST | 根据用户id查询用户名
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // object (可选)
     *   data?: Record<string, string>;
     * }
     * ```
     */
    postApiV1UserInfoGetUserNameById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1UserInfoGetUserNameByIdGeneric>;
    /**
     * @api ins | postApiV1SystemMessageListQuery | /ins/api/v1/systemMessage/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SystemMessageDTO[];
     * }
     * ```
     */
    postApiV1SystemMessageListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1SystemMessageListQueryGeneric>;
    /**
     * @api ins | postApiV1SurveysParticipantListQuery | /ins/api/v1/surveysParticipant/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SurveysParticipantDTO[];
     * }
     * ```
     */
    postApiV1SurveysParticipantListQuery: ApiFunctionGenerate<
      RequestInit,
      Response,
      tsTypes.InsModels.InsPostApiV1SurveysParticipantListQueryGeneric
    >;
    /**
     * @api ins | postApiV1QuestionsListQuery | /ins/api/v1/questions/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.QuestionsDTO[];
     * }
     * ```
     */
    postApiV1QuestionsListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1QuestionsListQueryGeneric>;
    /**
     * @api ins | postApiV1PreconditionListQuery | /ins/api/v1/precondition/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.PreconditionDTO[];
     * }
     * ```
     */
    postApiV1PreconditionListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1PreconditionListQueryGeneric>;
    /**
     * @api ins | postApiV1OptionsListQuery | /ins/api/v1/options/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.OptionsDTO[];
     * }
     * ```
     */
    postApiV1OptionsListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1OptionsListQueryGeneric>;
    /**
     * @api ins | postApiV1InformationQuestionsListQuery | /ins/api/v1/informationQuestions/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.InformationQuestionsDTO[];
     * }
     * ```
     */
    postApiV1InformationQuestionsListQuery: ApiFunctionGenerate<
      RequestInit,
      Response,
      tsTypes.InsModels.InsPostApiV1InformationQuestionsListQueryGeneric
    >;
    /**
     * @api ins | postApiV1InformationCollectionListQuery | /ins/api/v1/informationCollection/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.InformationCollectionDTO[];
     * }
     * ```
     */
    postApiV1InformationCollectionListQuery: ApiFunctionGenerate<
      RequestInit,
      Response,
      tsTypes.InsModels.InsPostApiV1InformationCollectionListQueryGeneric
    >;
    /**
     * @api ins | postApiV1FileList | /ins/api/v1/file/list | POST | 批量上传文件（FormData）
     * @query
     * ```ts
     * {
     *   // array
     *   files: string[];
     *   // string
     *   parentPath: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.UploadResultDTO[];
     * }
     * ```
     */
    postApiV1FileList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1FileListGeneric>;
    /**
     * @api ins | postApiV1FileListBase64 | /ins/api/v1/file/list/base64 | POST | 批量上传文件（Base64）
     * @body
     * ```ts
     * XinliModels.UploadBase64DTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.UploadResultDTO[];
     * }
     * ```
     */
    postApiV1FileListBase64: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1FileListBase64Generic>;
    /**
     * @api ins | postApiV1FileItem | /ins/api/v1/file/item | POST | 上传文件（FormData）
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
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.UploadResultDTO (可选)
     *   data?: XinliModels.UploadResultDTO;
     * }
     * ```
     */
    postApiV1FileItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1FileItemGeneric>;
    /**
     * @api ins | postApiV1DoctorPutStatusByIdByStatus | /ins/api/v1/doctor/putStatus/{id}/{status} | POST | 修改状态
     * @params
     * ```ts
     * {
     *   // string
     *   id: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status: "ENABLE" | "DISABLE";
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    postApiV1DoctorPutStatusByIdByStatus: ApiFunctionGenerate<
      RequestInit,
      Response,
      tsTypes.InsModels.InsPostApiV1DoctorPutStatusByIdByStatusGeneric
    >;
    /**
     * @api ins | postApiV1DoctorEnterAudit | /ins/api/v1/doctor/enterAudit | POST | 医生入驻审核
     * @body
     * ```ts
     * {
     *   // string - 医生id
     *   doctorId: string;
     *   // "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" - 审核状态 | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}"
     *   auditStatus: "WAIT" | "PASS" | "FAIL";
     *   // string (可选) - 密码 - 审核状态为通过是必传，并且密码是rsa加密后的
     *   password?: string;
     *   // number (可选) - 咨询费用 - 不传默认为0
     *   serviceFee?: number;
     *   // string (可选) - 角色id - 审核状态为通过是必传
     *   roleIds?: string;
     *   // string (可选) - 理由
     *   reason?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    postApiV1DoctorEnterAudit: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1DoctorEnterAuditGeneric>;
    /**
     * @api ins | postApiV1CategoryListQuery | /ins/api/v1/category/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.CategoryDTO[];
     * }
     * ```
     */
    postApiV1CategoryListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1CategoryListQueryGeneric>;
    /**
     * @api ins | postApiV1AnswersListQuery | /ins/api/v1/answers/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.AnswersDTO[];
     * }
     * ```
     */
    postApiV1AnswersListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1AnswersListQueryGeneric>;
    /**
     * @api ins | postApiV1AnswerScoreRangesListQuery | /ins/api/v1/answerScoreRanges/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.AnswerScoreRangesDTO[];
     * }
     * ```
     */
    postApiV1AnswerScoreRangesListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1AnswerScoreRangesListQueryGeneric>;
    /**
     * @api ins | postApiV1AccountLogin | /ins/api/v1/account/login | POST | 登录
     * @body
     * ```ts
     * {
     *   // string - 用户名
     *   username: string;
     *   // string - 用户密码
     *   password: string;
     *   // string (可选) - ras密码
     *   rsaPassword?: string;
     *   // string (可选)
     *   code?: string;
     *   // string (可选) - 商家id
     *   storeId?: string;
     *   // string (可选)
     *   openId?: string;
     *   // number (可选) - 格式: int32
     *   remainCount?: number;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // string (可选)
     *   data?: string;
     * }
     * ```
     */
    postApiV1AccountLogin: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1AccountLoginGeneric>;
    /**
     * @api ins | postApiV1AccountInfoLogin | /ins/api/v1/account/info/login | POST | 登录
     * @body
     * ```ts
     * {
     *   // string - 用户名
     *   username: string;
     *   // string - 用户密码
     *   password: string;
     *   // string (可选) - ras密码
     *   rsaPassword?: string;
     *   // string (可选)
     *   code?: string;
     *   // string (可选) - 商家id
     *   storeId?: string;
     *   // string (可选)
     *   openId?: string;
     *   // number (可选) - 格式: int32
     *   remainCount?: number;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // string (可选)
     *   data?: string;
     * }
     * ```
     */
    postApiV1AccountInfoLogin: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1AccountInfoLoginGeneric>;
    /**
     * @api ins | postApiV1AccountInfoGetUserNameById | /ins/api/v1/account/info/getUserNameById | POST | 根据账号id查询userName
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // object (可选)
     *   data?: Record<string, string>;
     * }
     * ```
     */
    postApiV1AccountInfoGetUserNameById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsPostApiV1AccountInfoGetUserNameByIdGeneric>;
    /**
     * @api ins | getApiV1UserInfoPage | /ins/api/v1/userInfo/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.UserInfoPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageUserInfoDTO (可选)
     *   data?: XinliModels.BasePageUserInfoDTO;
     * }
     * ```
     */
    getApiV1UserInfoPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1UserInfoPageGeneric>;
    /**
     * @api ins | getApiV1UserInfoItemById | /ins/api/v1/userInfo/item/{id} | GET | 查询指定用户
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.UserInfoDTO (可选)
     *   data?: XinliModels.UserInfoDTO;
     * }
     * ```
     */
    getApiV1UserInfoItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1UserInfoItemByIdGeneric>;
    /**
     * @api ins | deleteApiV1UserInfoItemById | /ins/api/v1/userInfo/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1UserInfoItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1UserInfoItemByIdGeneric>;
    /**
     * @api ins | getApiV1UserInfoGetUserInfo | /ins/api/v1/userInfo/getUserInfo | GET | 小程序获取登录用户信息
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.UserInfoDTO (可选)
     *   data?: XinliModels.UserInfoDTO;
     * }
     * ```
     */
    getApiV1UserInfoGetUserInfo: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1UserInfoGetUserInfoGeneric>;
    /**
     * @api ins | getApiV1UserInfoGetAvaByIdById | /ins/api/v1/userInfo/getAvaById/{id} | GET | 查询指定用户头像
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // string (可选)
     *   data?: string;
     * }
     * ```
     */
    getApiV1UserInfoGetAvaByIdById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1UserInfoGetAvaByIdByIdGeneric>;
    /**
     * @api ins | getApiV1SystemMessagePage | /ins/api/v1/systemMessage/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.SystemMessagePageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageSystemMessageDTO (可选)
     *   data?: XinliModels.BasePageSystemMessageDTO;
     * }
     * ```
     */
    getApiV1SystemMessagePage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1SystemMessagePageGeneric>;
    /**
     * @api ins | getApiV1SystemMessageItemById | /ins/api/v1/systemMessage/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SystemMessageDTO (可选)
     *   data?: XinliModels.SystemMessageDTO;
     * }
     * ```
     */
    getApiV1SystemMessageItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1SystemMessageItemByIdGeneric>;
    /**
     * @api ins | deleteApiV1SystemMessageItemById | /ins/api/v1/systemMessage/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1SystemMessageItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1SystemMessageItemByIdGeneric>;
    /**
     * @api ins | getApiV1SurveysParticipantPage | /ins/api/v1/surveysParticipant/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.SurveysParticipantPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageSurveysParticipantDTO (可选)
     *   data?: XinliModels.BasePageSurveysParticipantDTO;
     * }
     * ```
     */
    getApiV1SurveysParticipantPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1SurveysParticipantPageGeneric>;
    /**
     * @api ins | getApiV1SurveysParticipantItemById | /ins/api/v1/surveysParticipant/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SurveysParticipantDTO (可选)
     *   data?: XinliModels.SurveysParticipantDTO;
     * }
     * ```
     */
    getApiV1SurveysParticipantItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1SurveysParticipantItemByIdGeneric>;
    /**
     * @api ins | deleteApiV1SurveysParticipantItemById | /ins/api/v1/surveysParticipant/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1SurveysParticipantItemById: ApiFunctionGenerate<
      RequestInit,
      Response,
      tsTypes.InsModels.InsDeleteApiV1SurveysParticipantItemByIdGeneric
    >;
    /**
     * @api ins | getApiV1SurveysPage | /ins/api/v1/surveys/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.SurveysPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageSurveysDTO (可选)
     *   data?: XinliModels.BasePageSurveysDTO;
     * }
     * ```
     */
    getApiV1SurveysPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1SurveysPageGeneric>;
    /**
     * @api ins | getApiV1SurveysItemById | /ins/api/v1/surveys/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SurveyDetails (可选)
     *   data?: XinliModels.SurveyDetails;
     * }
     * ```
     */
    getApiV1SurveysItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1SurveysItemByIdGeneric>;
    /**
     * @api ins | deleteApiV1SurveysItemById | /ins/api/v1/surveys/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1SurveysItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1SurveysItemByIdGeneric>;
    /**
     * @api ins | getApiV1SurveysCategoryStatusByIdByStatus | /ins/api/v1/surveys/category/status/{id}/{status} | GET | 禁用/启用
     * @params
     * ```ts
     * {
     *   // string
     *   id: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status: "ENABLE" | "DISABLE";
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    getApiV1SurveysCategoryStatusByIdByStatus: ApiFunctionGenerate<
      RequestInit,
      Response,
      tsTypes.InsModels.InsGetApiV1SurveysCategoryStatusByIdByStatusGeneric
    >;
    /**
     * @api ins | getApiV1SurveysCategoryPage | /ins/api/v1/surveys/category/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.SurveysCategoryPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageSurveysCategoryDto (可选)
     *   data?: XinliModels.BasePageSurveysCategoryDto;
     * }
     * ```
     */
    getApiV1SurveysCategoryPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1SurveysCategoryPageGeneric>;
    /**
     * @api ins | getApiV1SurveysCategoryGetTopBranch | /ins/api/v1/surveys/category/getTopBranch | GET | 获取顶层节点数据
     * @query
     * ```ts
     * XinliModels.SurveysCategoryPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SurveysCategoryDto[];
     * }
     * ```
     */
    getApiV1SurveysCategoryGetTopBranch: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1SurveysCategoryGetTopBranchGeneric>;
    /**
     * @api ins | getApiV1SurveysCategoryGetChildBranch | /ins/api/v1/surveys/category/getChildBranch | GET | 获取子节点数据
     * @query
     * ```ts
     * {
     *   // string
     *   id: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SurveysCategoryDto[];
     * }
     * ```
     */
    getApiV1SurveysCategoryGetChildBranch: ApiFunctionGenerate<
      RequestInit,
      Response,
      tsTypes.InsModels.InsGetApiV1SurveysCategoryGetChildBranchGeneric
    >;
    /**
     * @api ins | getApiV1QuestionsPage | /ins/api/v1/questions/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.QuestionsPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageQuestionsDTO (可选)
     *   data?: XinliModels.BasePageQuestionsDTO;
     * }
     * ```
     */
    getApiV1QuestionsPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1QuestionsPageGeneric>;
    /**
     * @api ins | getApiV1QuestionsItemById | /ins/api/v1/questions/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.QuestionsDTO (可选)
     *   data?: XinliModels.QuestionsDTO;
     * }
     * ```
     */
    getApiV1QuestionsItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1QuestionsItemByIdGeneric>;
    /**
     * @api ins | deleteApiV1QuestionsItemById | /ins/api/v1/questions/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1QuestionsItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1QuestionsItemByIdGeneric>;
    /**
     * @api ins | getApiV1PreconditionPage | /ins/api/v1/precondition/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.PreconditionPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePagePreconditionDTO (可选)
     *   data?: XinliModels.BasePagePreconditionDTO;
     * }
     * ```
     */
    getApiV1PreconditionPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1PreconditionPageGeneric>;
    /**
     * @api ins | getApiV1PreconditionItemById | /ins/api/v1/precondition/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.PreconditionDTO (可选)
     *   data?: XinliModels.PreconditionDTO;
     * }
     * ```
     */
    getApiV1PreconditionItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1PreconditionItemByIdGeneric>;
    /**
     * @api ins | deleteApiV1PreconditionItemById | /ins/api/v1/precondition/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1PreconditionItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1PreconditionItemByIdGeneric>;
    /**
     * @api ins | getApiV1OptionsPage | /ins/api/v1/options/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.OptionsPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageOptionsDTO (可选)
     *   data?: XinliModels.BasePageOptionsDTO;
     * }
     * ```
     */
    getApiV1OptionsPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1OptionsPageGeneric>;
    /**
     * @api ins | getApiV1OptionsItemById | /ins/api/v1/options/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.OptionsDTO (可选)
     *   data?: XinliModels.OptionsDTO;
     * }
     * ```
     */
    getApiV1OptionsItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1OptionsItemByIdGeneric>;
    /**
     * @api ins | deleteApiV1OptionsItemById | /ins/api/v1/options/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1OptionsItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1OptionsItemByIdGeneric>;
    /**
     * @api ins | getApiV1MenusPage | /ins/api/v1/menus/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.MenusPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageMenusDTO (可选)
     *   data?: XinliModels.BasePageMenusDTO;
     * }
     * ```
     */
    getApiV1MenusPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1MenusPageGeneric>;
    /**
     * @api ins | getApiV1MenusGetByRoleId | /ins/api/v1/menus/getByRoleId | GET | 获取角色权限
     * @query
     * ```ts
     * {
     *   // string
     *   roleId: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.MenusDTO[];
     * }
     * ```
     */
    getApiV1MenusGetByRoleId: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1MenusGetByRoleIdGeneric>;
    /**
     * @api ins | getApiV1MenusGetByAccountId | /ins/api/v1/menus/getByAccountId | GET | 获取登录账号菜单功能权限
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.MenusDTO[];
     * }
     * ```
     */
    getApiV1MenusGetByAccountId: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1MenusGetByAccountIdGeneric>;
    /**
     * @api ins | getApiV1InstitutionPage | /ins/api/v1/institution/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.InstitutionPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageInstitutionDTO (可选)
     *   data?: XinliModels.BasePageInstitutionDTO;
     * }
     * ```
     */
    getApiV1InstitutionPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1InstitutionPageGeneric>;
    /**
     * @api ins | getApiV1InformationQuestionsQuestionListBySurveyId | /ins/api/v1/informationQuestions/questionList/{surveyId} | GET | 根据量表id查询问题和选项
     * @params
     * ```ts
     * {
     *   // string
     *   surveyId: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.InformationQuestionsDTO[];
     * }
     * ```
     */
    getApiV1InformationQuestionsQuestionListBySurveyId: ApiFunctionGenerate<
      RequestInit,
      Response,
      tsTypes.InsModels.InsGetApiV1InformationQuestionsQuestionListBySurveyIdGeneric
    >;
    /**
     * @api ins | getApiV1InformationQuestionsPage | /ins/api/v1/informationQuestions/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.InformationQuestionsPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageInformationQuestionsDTO (可选)
     *   data?: XinliModels.BasePageInformationQuestionsDTO;
     * }
     * ```
     */
    getApiV1InformationQuestionsPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1InformationQuestionsPageGeneric>;
    /**
     * @api ins | getApiV1InformationQuestionsItemById | /ins/api/v1/informationQuestions/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.InformationQuestionsDTO (可选)
     *   data?: XinliModels.InformationQuestionsDTO;
     * }
     * ```
     */
    getApiV1InformationQuestionsItemById: ApiFunctionGenerate<
      RequestInit,
      Response,
      tsTypes.InsModels.InsGetApiV1InformationQuestionsItemByIdGeneric
    >;
    /**
     * @api ins | getApiV1InformationCollectionPage | /ins/api/v1/informationCollection/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.InformationCollectionPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageInformationCollectionDTO (可选)
     *   data?: XinliModels.BasePageInformationCollectionDTO;
     * }
     * ```
     */
    getApiV1InformationCollectionPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1InformationCollectionPageGeneric>;
    /**
     * @api ins | getApiV1FileDownload | /ins/api/v1/file/download | GET | 下载文件
     * @query
     * ```ts
     * {
     *   // string
     *   path: string;
     * }
     * ```
     */
    getApiV1FileDownload: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1FileDownloadGeneric>;
    /**
     * @api ins | getApiV1DoctorPage | /ins/api/v1/doctor/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.DoctorPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageDoctorDTO (可选)
     *   data?: XinliModels.BasePageDoctorDTO;
     * }
     * ```
     */
    getApiV1DoctorPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1DoctorPageGeneric>;
    /**
     * @api ins | getApiV1DictPage | /ins/api/v1/dict/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.SysDictTypePageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageSysDictTypeDTO (可选)
     *   data?: XinliModels.BasePageSysDictTypeDTO;
     * }
     * ```
     */
    getApiV1DictPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1DictPageGeneric>;
    /**
     * @api ins | getApiV1DictDataPage | /ins/api/v1/dict/data/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.SysDictDataPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageSysDictDataDTO (可选)
     *   data?: XinliModels.BasePageSysDictDataDTO;
     * }
     * ```
     */
    getApiV1DictDataPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1DictDataPageGeneric>;
    /**
     * @api ins | getApiV1CourseTypePage | /ins/api/v1/course/type/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.CourseTypePageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageCourseTypeDto (可选)
     *   data?: XinliModels.BasePageCourseTypeDto;
     * }
     * ```
     */
    getApiV1CourseTypePage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1CourseTypePageGeneric>;
    /**
     * @api ins | getApiV1CourseResourcesPage | /ins/api/v1/course/resources/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.CourseResourcesPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageCourseResourcesDto (可选)
     *   data?: XinliModels.BasePageCourseResourcesDto;
     * }
     * ```
     */
    getApiV1CourseResourcesPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1CourseResourcesPageGeneric>;
    /**
     * @api ins | getApiV1ConfigAllEnums | /ins/api/v1/config/allEnums | GET | 获取所有枚举信息
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // object (可选)
     *   data?: Record<string, Record<string, any>>;
     * }
     * ```
     */
    getApiV1ConfigAllEnums: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1ConfigAllEnumsGeneric>;
    /**
     * @api ins | getApiV1CategoryPage | /ins/api/v1/category/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.CategoryPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageCategoryDTO (可选)
     *   data?: XinliModels.BasePageCategoryDTO;
     * }
     * ```
     */
    getApiV1CategoryPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1CategoryPageGeneric>;
    /**
     * @api ins | getApiV1CategoryItemById | /ins/api/v1/category/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.CategoryDTO (可选)
     *   data?: XinliModels.CategoryDTO;
     * }
     * ```
     */
    getApiV1CategoryItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1CategoryItemByIdGeneric>;
    /**
     * @api ins | deleteApiV1CategoryItemById | /ins/api/v1/category/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1CategoryItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1CategoryItemByIdGeneric>;
    /**
     * @api ins | getApiV1AnswersPage | /ins/api/v1/answers/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.AnswersPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageAnswersDTO (可选)
     *   data?: XinliModels.BasePageAnswersDTO;
     * }
     * ```
     */
    getApiV1AnswersPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1AnswersPageGeneric>;
    /**
     * @api ins | getApiV1AnswersItemById | /ins/api/v1/answers/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AnswersDTO (可选)
     *   data?: XinliModels.AnswersDTO;
     * }
     * ```
     */
    getApiV1AnswersItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1AnswersItemByIdGeneric>;
    /**
     * @api ins | deleteApiV1AnswersItemById | /ins/api/v1/answers/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1AnswersItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1AnswersItemByIdGeneric>;
    /**
     * @api ins | getApiV1AnswerScoreRangesPage | /ins/api/v1/answerScoreRanges/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.AnswerScoreRangesPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageAnswerScoreRangesDTO (可选)
     *   data?: XinliModels.BasePageAnswerScoreRangesDTO;
     * }
     * ```
     */
    getApiV1AnswerScoreRangesPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1AnswerScoreRangesPageGeneric>;
    /**
     * @api ins | getApiV1AnswerScoreRangesItemById | /ins/api/v1/answerScoreRanges/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AnswerScoreRangesDTO (可选)
     *   data?: XinliModels.AnswerScoreRangesDTO;
     * }
     * ```
     */
    getApiV1AnswerScoreRangesItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1AnswerScoreRangesItemByIdGeneric>;
    /**
     * @api ins | deleteApiV1AnswerScoreRangesItemById | /ins/api/v1/answerScoreRanges/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1AnswerScoreRangesItemById: ApiFunctionGenerate<
      RequestInit,
      Response,
      tsTypes.InsModels.InsDeleteApiV1AnswerScoreRangesItemByIdGeneric
    >;
    /**
     * @api ins | getApiV1AccountInfoPage | /ins/api/v1/account/info/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.AccountInfoPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageAccountInfoDTO (可选)
     *   data?: XinliModels.BasePageAccountInfoDTO;
     * }
     * ```
     */
    getApiV1AccountInfoPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1AccountInfoPageGeneric>;
    /**
     * @api ins | getApiV1AccountInfoItemById | /ins/api/v1/account/info/item/{id} | GET | 根据id获取账号信息
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AccountInfoDTO (可选)
     *   data?: XinliModels.AccountInfoDTO;
     * }
     * ```
     */
    getApiV1AccountInfoItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1AccountInfoItemByIdGeneric>;
    /**
     * @api ins | deleteApiV1AccountInfoItemById | /ins/api/v1/account/info/item/{id} | DELETE | 删除账号
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1AccountInfoItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1AccountInfoItemByIdGeneric>;
    /**
     * @api ins | getApiV1AccountInfoGetAccountInfo | /ins/api/v1/account/info/getAccountInfo | GET | 获取登录账号信息
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AccountInfoDTO (可选)
     *   data?: XinliModels.AccountInfoDTO;
     * }
     * ```
     */
    getApiV1AccountInfoGetAccountInfo: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1AccountInfoGetAccountInfoGeneric>;
    /**
     * @api ins | getApiV1AccountGetAccountInfo | /ins/api/v1/account/getAccountInfo | GET | 获取登录账号信息
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AccountInfoDTO (可选)
     *   data?: XinliModels.AccountInfoDTO;
     * }
     * ```
     */
    getApiV1AccountGetAccountInfo: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsGetApiV1AccountGetAccountInfoGeneric>;
    /**
     * @api ins | deleteApiV1SurveysList | /ins/api/v1/surveys/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1SurveysList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1SurveysListGeneric>;
    /**
     * @api ins | deleteApiV1SurveysCategoryItemById | /ins/api/v1/surveys/category/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1SurveysCategoryItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1SurveysCategoryItemByIdGeneric>;
    /**
     * @api ins | deleteApiV1InformationCollectionList | /ins/api/v1/informationCollection/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1InformationCollectionList: ApiFunctionGenerate<
      RequestInit,
      Response,
      tsTypes.InsModels.InsDeleteApiV1InformationCollectionListGeneric
    >;
    /**
     * @api ins | deleteApiV1InformationCollectionItemById | /ins/api/v1/informationCollection/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1InformationCollectionItemById: ApiFunctionGenerate<
      RequestInit,
      Response,
      tsTypes.InsModels.InsDeleteApiV1InformationCollectionItemByIdGeneric
    >;
    /**
     * @api ins | deleteApiV1DoctorList | /ins/api/v1/doctor/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1DoctorList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1DoctorListGeneric>;
    /**
     * @api ins | deleteApiV1DoctorItemById | /ins/api/v1/doctor/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1DoctorItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1DoctorItemByIdGeneric>;
    /**
     * @api ins | deleteApiV1CourseTypeItemById | /ins/api/v1/course/type/item/{id} | DELETE | 删除课程
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1CourseTypeItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1CourseTypeItemByIdGeneric>;
    /**
     * @api ins | deleteApiV1CourseResourcesItemById | /ins/api/v1/course/resources/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1CourseResourcesItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1CourseResourcesItemByIdGeneric>;
    /**
     * @api ins | deleteApiV1AccountInfoList | /ins/api/v1/account/info/list | DELETE | 删除账号信息
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteApiV1AccountInfoList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InsModels.InsDeleteApiV1AccountInfoListGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | userInfo | putItem | /userInfo/item | PUT | 修改用户 |
   * | userInfo | postItem | /userInfo/item | POST | 新增用户 |
   * | userInfo | deleteItem | /userInfo/item | DELETE | 批量删除 |
   * | userInfo | postGetUserNameById | /userInfo/getUserNameById | POST | 根据用户id查询用户名 |
   * | userInfo | getPage | /userInfo/page | GET | 分页查询 |
   * | userInfo | getItemById | /userInfo/item/{id} | GET | 查询指定用户 |
   * | userInfo | deleteItemById | /userInfo/item/{id} | DELETE | 删除 |
   * | userInfo | getGetUserInfo | /userInfo/getUserInfo | GET | 小程序获取登录用户信息 |
   * | userInfo | getGetAvaByIdById | /userInfo/getAvaById/{id} | GET | 查询指定用户头像 |
   */
  export const apiUserInfo: {
    /**
     * @api userInfo | putItem | /userInfo/item | PUT | 修改用户
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 账号ids
     *   accountIds?: string;
     *   // string (可选) - 微信id
     *   openId?: string;
     *   // string (可选) - 名称
     *   name?: string;
     *   // string (可选) - 昵称
     *   nickName?: string;
     *   // number (可选) - 年龄 | 格式: int32
     *   age?: number;
     *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
     *   sex?: "MAN" | "WOMAN" | "UNKNOWN";
     *   // string (可选) - 电话
     *   phone?: string;
     *   // string (可选) - 密码
     *   password?: string;
     *   // string (可选) - 头像
     *   avatarPicPath?: string;
     *   // string (可选) - 身份证
     *   idNumber?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserInfoModels.UserInfoPutItemGeneric>;
    /**
     * @api userInfo | postItem | /userInfo/item | POST | 新增用户
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 账号id
     *   accountIds?: string;
     *   // string (可选) - 微信id
     *   openId?: string;
     *   // string - 姓名
     *   name: string;
     *   // string (可选) - 昵称
     *   nickName?: string;
     *   // number (可选) - 年龄 | 格式: int32
     *   age?: number;
     *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
     *   sex?: "MAN" | "WOMAN" | "UNKNOWN";
     *   // string - 电话
     *   phone: string;
     *   // boolean (可选) - 是否为会员
     *   isVip?: boolean;
     *   // string (可选) - 密码
     *   password?: string;
     *   // string (可选) - 头像
     *   avatarPicPath?: string;
     *   // string (可选) - 身份证
     *   idNumber?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.UserInfoDTO (可选)
     *   data?: XinliModels.UserInfoDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserInfoModels.UserInfoPostItemGeneric>;
    /**
     * @api userInfo | deleteItem | /userInfo/item | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserInfoModels.UserInfoDeleteItemGeneric>;
    /**
     * @api userInfo | postGetUserNameById | /userInfo/getUserNameById | POST | 根据用户id查询用户名
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // object (可选)
     *   data?: Record<string, string>;
     * }
     * ```
     */
    postGetUserNameById: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserInfoModels.UserInfoPostGetUserNameByIdGeneric>;
    /**
     * @api userInfo | getPage | /userInfo/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.UserInfoPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageUserInfoDTO (可选)
     *   data?: XinliModels.BasePageUserInfoDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserInfoModels.UserInfoGetPageGeneric>;
    /**
     * @api userInfo | getItemById | /userInfo/item/{id} | GET | 查询指定用户
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.UserInfoDTO (可选)
     *   data?: XinliModels.UserInfoDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserInfoModels.UserInfoGetItemByIdGeneric>;
    /**
     * @api userInfo | deleteItemById | /userInfo/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserInfoModels.UserInfoDeleteItemByIdGeneric>;
    /**
     * @api userInfo | getGetUserInfo | /userInfo/getUserInfo | GET | 小程序获取登录用户信息
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.UserInfoDTO (可选)
     *   data?: XinliModels.UserInfoDTO;
     * }
     * ```
     */
    getGetUserInfo: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserInfoModels.UserInfoGetGetUserInfoGeneric>;
    /**
     * @api userInfo | getGetAvaByIdById | /userInfo/getAvaById/{id} | GET | 查询指定用户头像
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // string (可选)
     *   data?: string;
     * }
     * ```
     */
    getGetAvaByIdById: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserInfoModels.UserInfoGetGetAvaByIdByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | systemMessage | putList | /systemMessage/list | PUT | 批量修改 |
   * | systemMessage | postList | /systemMessage/list | POST | 批量新增 |
   * | systemMessage | deleteList | /systemMessage/list | DELETE | 批量删除 |
   * | systemMessage | putItem | /systemMessage/item | PUT | 修改 |
   * | systemMessage | postItem | /systemMessage/item | POST | 新增 |
   * | systemMessage | postListQuery | /systemMessage/list/query | POST | 批量查询 |
   * | systemMessage | getPage | /systemMessage/page | GET | 多条件组合分页查询 |
   * | systemMessage | getItemById | /systemMessage/item/{id} | GET | 查询 |
   * | systemMessage | deleteItemById | /systemMessage/item/{id} | DELETE | 删除 |
   */
  export const apiSystemMessage: {
    /**
     * @api systemMessage | putList | /systemMessage/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateSystemMessage[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.SystemMessageModels.SystemMessagePutListGeneric>;
    /**
     * @api systemMessage | postList | /systemMessage/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.SystemMessageDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SystemMessageDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.SystemMessageModels.SystemMessagePostListGeneric>;
    /**
     * @api systemMessage | deleteList | /systemMessage/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.SystemMessageModels.SystemMessageDeleteListGeneric>;
    /**
     * @api systemMessage | putItem | /systemMessage/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 用户ID
     *   userId?: string;
     *   // "{"desc":"系统消息","name":"SYSTEM"}" (可选) - 消息类型，枚举：MessageType | 可选值: "{\"desc\":\"系统消息\",\"name\":\"SYSTEM\"}"
     *   messageType?: "SYSTEM";
     *   // string (可选) - 消息内容
     *   content?: string;
     *   // "{"desc":"已发送","name":"SEND"}" | "{"desc":"已读","name":"READ"}" | "{"desc":"未读","name":"UNREAD"}" (可选) - 已读状态，枚举：MessageStatus | 可选值: "{\"desc\":\"已发送\",\"name\":\"SEND\"}", "{\"desc\":\"已读\",\"name\":\"READ\"}", "{\"desc\":\"未读\",\"name\":\"UNREAD\"}"
     *   status?: "SEND" | "READ" | "UNREAD";
     *   // string (可选) - 消息已读时间 | 格式: date-time
     *   readTime?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.SystemMessageModels.SystemMessagePutItemGeneric>;
    /**
     * @api systemMessage | postItem | /systemMessage/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 用户ID
     *   userId?: string;
     *   // "{"desc":"系统消息","name":"SYSTEM"}" (可选) - 消息类型，枚举：MessageType | 可选值: "{\"desc\":\"系统消息\",\"name\":\"SYSTEM\"}"
     *   messageType?: "SYSTEM";
     *   // string (可选) - 消息内容
     *   content?: string;
     *   // "{"desc":"已发送","name":"SEND"}" | "{"desc":"已读","name":"READ"}" | "{"desc":"未读","name":"UNREAD"}" (可选) - 已读状态，枚举：MessageStatus | 可选值: "{\"desc\":\"已发送\",\"name\":\"SEND\"}", "{\"desc\":\"已读\",\"name\":\"READ\"}", "{\"desc\":\"未读\",\"name\":\"UNREAD\"}"
     *   status?: "SEND" | "READ" | "UNREAD";
     *   // string (可选) - 消息已读时间 | 格式: date-time
     *   readTime?: string;
     *   // string (可选)
     *   userName?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SystemMessageDTO (可选)
     *   data?: XinliModels.SystemMessageDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.SystemMessageModels.SystemMessagePostItemGeneric>;
    /**
     * @api systemMessage | postListQuery | /systemMessage/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SystemMessageDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.SystemMessageModels.SystemMessagePostListQueryGeneric>;
    /**
     * @api systemMessage | getPage | /systemMessage/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.SystemMessagePageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageSystemMessageDTO (可选)
     *   data?: XinliModels.BasePageSystemMessageDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.SystemMessageModels.SystemMessageGetPageGeneric>;
    /**
     * @api systemMessage | getItemById | /systemMessage/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SystemMessageDTO (可选)
     *   data?: XinliModels.SystemMessageDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.SystemMessageModels.SystemMessageGetItemByIdGeneric>;
    /**
     * @api systemMessage | deleteItemById | /systemMessage/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.SystemMessageModels.SystemMessageDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | surveysParticipant | putList | /surveysParticipant/list | PUT | 批量修改 |
   * | surveysParticipant | postList | /surveysParticipant/list | POST | 批量新增 |
   * | surveysParticipant | deleteList | /surveysParticipant/list | DELETE | 批量删除 |
   * | surveysParticipant | putItem | /surveysParticipant/item | PUT | 修改 |
   * | surveysParticipant | postItem | /surveysParticipant/item | POST | 新增 |
   * | surveysParticipant | postListQuery | /surveysParticipant/list/query | POST | 批量查询 |
   * | surveysParticipant | getPage | /surveysParticipant/page | GET | 多条件组合分页查询 |
   * | surveysParticipant | getItemById | /surveysParticipant/item/{id} | GET | 查询 |
   * | surveysParticipant | deleteItemById | /surveysParticipant/item/{id} | DELETE | 删除 |
   */
  export const apiSurveysParticipant: {
    /**
     * @api surveysParticipant | putList | /surveysParticipant/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateSurveysParticipant[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysParticipantModels.SurveysParticipantPutListGeneric>;
    /**
     * @api surveysParticipant | postList | /surveysParticipant/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.SurveysParticipantDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SurveysParticipantDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysParticipantModels.SurveysParticipantPostListGeneric>;
    /**
     * @api surveysParticipant | deleteList | /surveysParticipant/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysParticipantModels.SurveysParticipantDeleteListGeneric>;
    /**
     * @api surveysParticipant | putItem | /surveysParticipant/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // string (可选) - 参测人员手机号
     *   phone?: string;
     *   // string (可选) - 参测人员称呼
     *   name?: string;
     *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 参测人员性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
     *   sex?: "MAN" | "WOMAN" | "UNKNOWN";
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysParticipantModels.SurveysParticipantPutItemGeneric>;
    /**
     * @api surveysParticipant | postItem | /surveysParticipant/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // string (可选) - 参测人员手机号
     *   phone?: string;
     *   // string (可选) - 参测人员称呼
     *   name?: string;
     *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 参测人员性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
     *   sex?: "MAN" | "WOMAN" | "UNKNOWN";
     *   // "{"desc":"待测评","name":"WAIT"}" | "{"desc":"已完成","name":"COMPLETE"}" | "{"desc":"未完成","name":"NOT_COMPLETE"}" (可选) - 参与状态 | 可选值: "{\"desc\":\"待测评\",\"name\":\"WAIT\"}", "{\"desc\":\"已完成\",\"name\":\"COMPLETE\"}", "{\"desc\":\"未完成\",\"name\":\"NOT_COMPLETE\"}"
     *   status?: "WAIT" | "COMPLETE" | "NOT_COMPLETE";
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SurveysParticipantDTO (可选)
     *   data?: XinliModels.SurveysParticipantDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysParticipantModels.SurveysParticipantPostItemGeneric>;
    /**
     * @api surveysParticipant | postListQuery | /surveysParticipant/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SurveysParticipantDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysParticipantModels.SurveysParticipantPostListQueryGeneric>;
    /**
     * @api surveysParticipant | getPage | /surveysParticipant/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.SurveysParticipantPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageSurveysParticipantDTO (可选)
     *   data?: XinliModels.BasePageSurveysParticipantDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysParticipantModels.SurveysParticipantGetPageGeneric>;
    /**
     * @api surveysParticipant | getItemById | /surveysParticipant/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SurveysParticipantDTO (可选)
     *   data?: XinliModels.SurveysParticipantDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysParticipantModels.SurveysParticipantGetItemByIdGeneric>;
    /**
     * @api surveysParticipant | deleteItemById | /surveysParticipant/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysParticipantModels.SurveysParticipantDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | surveys | putList | /surveys/list | PUT | 批量修改 |
   * | surveys | postList | /surveys/list | POST | 批量新增 |
   * | surveys | deleteList | /surveys/list | DELETE | 批量删除 |
   * | surveys | putItem | /surveys/item | PUT | 修改 |
   * | surveys | postItem | /surveys/item | POST | 新增 |
   * | surveys | putCategoryItem | /surveys/category/item | PUT | 修改 |
   * | surveys | postCategoryItem | /surveys/category/item | POST | 添加 |
   * | surveys | deleteCategoryItem | /surveys/category/item | DELETE | 批量删除 |
   * | surveys | postListQuery | /surveys/list/query | POST | 批量查询 |
   * | surveys | getPage | /surveys/page | GET | 多条件组合分页查询 |
   * | surveys | getItemById | /surveys/item/{id} | GET | 查询 |
   * | surveys | deleteItemById | /surveys/item/{id} | DELETE | 删除 |
   * | surveys | getCategoryStatusByIdByStatus | /surveys/category/status/{id}/{status} | GET | 禁用/启用 |
   * | surveys | getCategoryPage | /surveys/category/page | GET | 分页查询 |
   * | surveys | getCategoryGetTopBranch | /surveys/category/getTopBranch | GET | 获取顶层节点数据 |
   * | surveys | getCategoryGetChildBranch | /surveys/category/getChildBranch | GET | 获取子节点数据 |
   * | surveys | deleteCategoryItemById | /surveys/category/item/{id} | DELETE | 删除 |
   */
  export const apiSurveys: {
    /**
     * @api surveys | putList | /surveys/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateSurveys[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysPutListGeneric>;
    /**
     * @api surveys | postList | /surveys/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.SurveysDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SurveysDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysPostListGeneric>;
    /**
     * @api surveys | deleteList | /surveys/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysDeleteListGeneric>;
    /**
     * @api surveys | putItem | /surveys/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 机构ID
     *   institutionId?: string;
     *   // string (可选) - 量表标题
     *   title?: string;
     *   // string (可选) - 量表描述
     *   description?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 量表状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // number (可选) - 推荐等级 | 格式: int32
     *   isRec?: number;
     *   // string (可选) - 开始日期 | 格式: date-time
     *   openTime?: string;
     *   // string (可选) - 截止日期 | 格式: date-time
     *   closeTime?: string;
     *   // "{"desc":"完全开放","name":"FULLY_OPEN"}" | "{"desc":"机构内开放","name":"INSTITUTION_OPEN"}" | "{"desc":"固定人员开放","name":"FIXED_PERSONNEL_OPEN"}" | "{"desc":"量表码开放","name":"CODE_BASED_OPEN"}" (可选) - 量表开放类型，枚举：SurveyOpenType | 可选值: "{\"desc\":\"完全开放\",\"name\":\"FULLY_OPEN\"}", "{\"desc\":\"机构内开放\",\"name\":\"INSTITUTION_OPEN\"}", "{\"desc\":\"固定人员开放\",\"name\":\"FIXED_PERSONNEL_OPEN\"}", "{\"desc\":\"量表码开放\",\"name\":\"CODE_BASED_OPEN\"}"
     *   openType?: "FULLY_OPEN" | "INSTITUTION_OPEN" | "FIXED_PERSONNEL_OPEN" | "CODE_BASED_OPEN";
     *   // string (可选) - 量表码
     *   code?: string;
     *   // number (可选) - 预警分数 | 格式: int32
     *   warningScore?: number;
     *   // string (可选) - 量表图片
     *   image?: string;
     *   // boolean (可选) - 是否允许重复测试
     *   isRepetition?: boolean;
     *   // string (可选) - 类型
     *   category?: string;
     *   // boolean (可选) - 是否推荐
     *   isRecommended?: boolean;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysPutItemGeneric>;
    /**
     * @api surveys | postItem | /surveys/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 机构ID
     *   institutionId?: string;
     *   // string (可选) - 量表标题
     *   title?: string;
     *   // string (可选) - 量表描述
     *   description?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 量表状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // number (可选) - 推荐等级 | 格式: int32
     *   isRec?: number;
     *   // string (可选) - 开始日期 | 格式: date-time
     *   openTime?: string;
     *   // string (可选) - 截止日期 | 格式: date-time
     *   closeTime?: string;
     *   // "{"desc":"完全开放","name":"FULLY_OPEN"}" | "{"desc":"机构内开放","name":"INSTITUTION_OPEN"}" | "{"desc":"固定人员开放","name":"FIXED_PERSONNEL_OPEN"}" | "{"desc":"量表码开放","name":"CODE_BASED_OPEN"}" (可选) - 量表开放类型，枚举：SurveyOpenType | 可选值: "{\"desc\":\"完全开放\",\"name\":\"FULLY_OPEN\"}", "{\"desc\":\"机构内开放\",\"name\":\"INSTITUTION_OPEN\"}", "{\"desc\":\"固定人员开放\",\"name\":\"FIXED_PERSONNEL_OPEN\"}", "{\"desc\":\"量表码开放\",\"name\":\"CODE_BASED_OPEN\"}"
     *   openType?: "FULLY_OPEN" | "INSTITUTION_OPEN" | "FIXED_PERSONNEL_OPEN" | "CODE_BASED_OPEN";
     *   // string (可选) - 量表码
     *   code?: string;
     *   // number (可选) - 预警分数 | 格式: int32
     *   warningScore?: number;
     *   // string (可选) - 量表图片
     *   image?: string;
     *   // boolean (可选) - 是否允许重复测试
     *   isRepetition?: boolean;
     *   // string (可选)
     *   insName?: string;
     *   // boolean (可选) - 是否推荐
     *   isRecommended?: boolean;
     *   // string - 类型
     *   category: string;
     *   // string (可选) - 类型名字
     *   categoryName?: string;
     *   // array (可选) - 条件
     *   preconditionDtoList?: XinliModels.PreconditionDTO[];
     *   // "{"desc":"待测评","name":"WAIT"}" | "{"desc":"已完成","name":"COMPLETE"}" | "{"desc":"未完成","name":"NOT_COMPLETE"}" (可选) - 参与状态 | 可选值: "{\"desc\":\"待测评\",\"name\":\"WAIT\"}", "{\"desc\":\"已完成\",\"name\":\"COMPLETE\"}", "{\"desc\":\"未完成\",\"name\":\"NOT_COMPLETE\"}"
     *   joinStatus?: "WAIT" | "COMPLETE" | "NOT_COMPLETE";
     *   // number (可选) - 参与人数 | 格式: int32
     *   joinNum?: number;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SurveysDTO (可选)
     *   data?: XinliModels.SurveysDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysPostItemGeneric>;
    /**
     * @api surveys | putCategoryItem | /surveys/category/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 名字
     *   title: string;
     *   // number (可选) - 排序 | 格式: int32
     *   sort?: number;
     *   // string (可选) - 机构id
     *   institutionId?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status: "ENABLE" | "DISABLE";
     *   // string (可选)
     *   pid?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putCategoryItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysPutCategoryItemGeneric>;
    /**
     * @api surveys | postCategoryItem | /surveys/category/item | POST | 添加
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 名字
     *   title: string;
     *   // number (可选) - 排序 | 格式: int32
     *   sort?: number;
     *   // string (可选) - 机构id
     *   institutionId?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status: "ENABLE" | "DISABLE";
     *   // string (可选)
     *   pid?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SurveysCategoryDto (可选)
     *   data?: XinliModels.SurveysCategoryDto;
     * }
     * ```
     */
    postCategoryItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysPostCategoryItemGeneric>;
    /**
     * @api surveys | deleteCategoryItem | /surveys/category/item | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteCategoryItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysDeleteCategoryItemGeneric>;
    /**
     * @api surveys | postListQuery | /surveys/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SurveysDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysPostListQueryGeneric>;
    /**
     * @api surveys | getPage | /surveys/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.SurveysPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageSurveysDTO (可选)
     *   data?: XinliModels.BasePageSurveysDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysGetPageGeneric>;
    /**
     * @api surveys | getItemById | /surveys/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SurveyDetails (可选)
     *   data?: XinliModels.SurveyDetails;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysGetItemByIdGeneric>;
    /**
     * @api surveys | deleteItemById | /surveys/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysDeleteItemByIdGeneric>;
    /**
     * @api surveys | getCategoryStatusByIdByStatus | /surveys/category/status/{id}/{status} | GET | 禁用/启用
     * @params
     * ```ts
     * {
     *   // string
     *   id: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status: "ENABLE" | "DISABLE";
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    getCategoryStatusByIdByStatus: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysGetCategoryStatusByIdByStatusGeneric>;
    /**
     * @api surveys | getCategoryPage | /surveys/category/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.SurveysCategoryPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageSurveysCategoryDto (可选)
     *   data?: XinliModels.BasePageSurveysCategoryDto;
     * }
     * ```
     */
    getCategoryPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysGetCategoryPageGeneric>;
    /**
     * @api surveys | getCategoryGetTopBranch | /surveys/category/getTopBranch | GET | 获取顶层节点数据
     * @query
     * ```ts
     * XinliModels.SurveysCategoryPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SurveysCategoryDto[];
     * }
     * ```
     */
    getCategoryGetTopBranch: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysGetCategoryGetTopBranchGeneric>;
    /**
     * @api surveys | getCategoryGetChildBranch | /surveys/category/getChildBranch | GET | 获取子节点数据
     * @query
     * ```ts
     * {
     *   // string
     *   id: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SurveysCategoryDto[];
     * }
     * ```
     */
    getCategoryGetChildBranch: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysGetCategoryGetChildBranchGeneric>;
    /**
     * @api surveys | deleteCategoryItemById | /surveys/category/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteCategoryItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.SurveysModels.SurveysDeleteCategoryItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | role | putStatusById | /role/status/{id} | PUT | 修改状态 |
   * | role | putItem | /role/item | PUT | 修改角色 |
   * | role | postItem | /role/item | POST | 新增角色 |
   * | role | postListQuery | /role/list/query | POST | 批量查询 |
   * | role | getPage | /role/page | GET | 分页查询 |
   * | role | deleteList | /role/list | DELETE | 删除角色 |
   * | role | deleteItemById | /role/item/{id} | DELETE | 删除角色 |
   */
  export const apiRole: {
    /**
     * @api role | putStatusById | /role/status/{id} | PUT | 修改状态
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putStatusById: ApiFunctionGenerate<RequestInit, Response, tsTypes.RoleModels.RolePutStatusByIdGeneric>;
    /**
     * @api role | putItem | /role/item | PUT | 修改角色
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 角色名称
     *   roleName?: string;
     *   // string (可选) - 角色编码
     *   roleCode?: string;
     *   // string (可选) - 菜单ids
     *   menuIds?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.RoleModels.RolePutItemGeneric>;
    /**
     * @api role | postItem | /role/item | POST | 新增角色
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 角色名称
     *   roleName: string;
     *   // string - 角色编码
     *   roleCode: string;
     *   // string - 菜单ids
     *   menuIds: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态：启用/禁用 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.RoleDTO (可选)
     *   data?: XinliModels.RoleDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.RoleModels.RolePostItemGeneric>;
    /**
     * @api role | postListQuery | /role/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.RoleDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.RoleModels.RolePostListQueryGeneric>;
    /**
     * @api role | getPage | /role/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.RolePageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageRoleDTO (可选)
     *   data?: XinliModels.BasePageRoleDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.RoleModels.RoleGetPageGeneric>;
    /**
     * @api role | deleteList | /role/list | DELETE | 删除角色
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.RoleModels.RoleDeleteListGeneric>;
    /**
     * @api role | deleteItemById | /role/item/{id} | DELETE | 删除角色
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.RoleModels.RoleDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | questions | putUpdateStatusById | /questions/updateStatus/{id} | PUT | 修改状态 |
   * | questions | putList | /questions/list | PUT | 批量修改（量表的题） |
   * | questions | postList | /questions/list | POST | 批量新增 |
   * | questions | deleteList | /questions/list | DELETE | 批量删除 |
   * | questions | putItem | /questions/item | PUT | 修改（题库的题） |
   * | questions | postItem | /questions/item | POST | 新增 |
   * | questions | postListQuery | /questions/list/query | POST | 批量查询 |
   * | questions | getPage | /questions/page | GET | 多条件组合分页查询 |
   * | questions | getItemById | /questions/item/{id} | GET | 查询 |
   * | questions | deleteItemById | /questions/item/{id} | DELETE | 删除 |
   */
  export const apiQuestions: {
    /**
     * @api questions | putUpdateStatusById | /questions/updateStatus/{id} | PUT | 修改状态
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putUpdateStatusById: ApiFunctionGenerate<RequestInit, Response, tsTypes.QuestionsModels.QuestionsPutUpdateStatusByIdGeneric>;
    /**
     * @api questions | putList | /questions/list | PUT | 批量修改（量表的题）
     * @body
     * ```ts
     * XinliModels.QuestionsDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.QuestionsModels.QuestionsPutListGeneric>;
    /**
     * @api questions | postList | /questions/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.QuestionsDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.QuestionsDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.QuestionsModels.QuestionsPostListGeneric>;
    /**
     * @api questions | deleteList | /questions/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.QuestionsModels.QuestionsDeleteListGeneric>;
    /**
     * @api questions | putItem | /questions/item | PUT | 修改（题库的题）
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // "{"desc":"题库","name":"BANK"}" | "{"desc":"量表","name":"SURVEY"}" (可选) - 题库、量表，枚举：QuestionSourceType | 可选值: "{\"desc\":\"题库\",\"name\":\"BANK\"}", "{\"desc\":\"量表\",\"name\":\"SURVEY\"}"
     *   sourceType?: "BANK" | "SURVEY";
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}"
     *   questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";
     *   // string (可选) - 问题文本
     *   questionText?: string;
     *   // number (可选) - 排序 | 格式: int32
     *   order?: number;
     *   // boolean (可选) - 是否必填
     *   required?: boolean;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // string (可选) - 分类ID
     *   categoryId?: string;
     *   // string (可选) - code
     *   code?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.QuestionsModels.QuestionsPutItemGeneric>;
    /**
     * @api questions | postItem | /questions/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // "{"desc":"题库","name":"BANK"}" | "{"desc":"量表","name":"SURVEY"}" (可选) - 题库、量表，枚举：QuestionSourceType | 可选值: "{\"desc\":\"题库\",\"name\":\"BANK\"}", "{\"desc\":\"量表\",\"name\":\"SURVEY\"}"
     *   sourceType?: "BANK" | "SURVEY";
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}"
     *   questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";
     *   // string (可选) - 问题文本
     *   questionText?: string;
     *   // number (可选) - 排序 | 格式: int32
     *   order?: number;
     *   // boolean (可选) - 是否必填
     *   required?: boolean;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // string (可选) - 分类ID
     *   categoryId?: string;
     *   // string (可选) - 分类名字
     *   categoryName?: string;
     *   // string (可选) - code
     *   code?: string;
     *   // string (可选)
     *   surveysTitle?: string;
     *   // array (可选)
     *   optionList?: XinliModels.OptionsDTO[];
     *   // array (可选)
     *   preconditionList?: XinliModels.PreconditionDTO[];
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.QuestionsDTO (可选)
     *   data?: XinliModels.QuestionsDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.QuestionsModels.QuestionsPostItemGeneric>;
    /**
     * @api questions | postListQuery | /questions/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.QuestionsDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.QuestionsModels.QuestionsPostListQueryGeneric>;
    /**
     * @api questions | getPage | /questions/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.QuestionsPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageQuestionsDTO (可选)
     *   data?: XinliModels.BasePageQuestionsDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.QuestionsModels.QuestionsGetPageGeneric>;
    /**
     * @api questions | getItemById | /questions/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.QuestionsDTO (可选)
     *   data?: XinliModels.QuestionsDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.QuestionsModels.QuestionsGetItemByIdGeneric>;
    /**
     * @api questions | deleteItemById | /questions/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.QuestionsModels.QuestionsDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | precondition | putList | /precondition/list | PUT | 批量修改 |
   * | precondition | postList | /precondition/list | POST | 批量新增 |
   * | precondition | deleteList | /precondition/list | DELETE | 批量删除 |
   * | precondition | putItem | /precondition/item | PUT | 修改 |
   * | precondition | postItem | /precondition/item | POST | 新增 |
   * | precondition | postListQuery | /precondition/list/query | POST | 批量查询 |
   * | precondition | getPage | /precondition/page | GET | 多条件组合分页查询 |
   * | precondition | getItemById | /precondition/item/{id} | GET | 查询 |
   * | precondition | deleteItemById | /precondition/item/{id} | DELETE | 删除 |
   */
  export const apiPrecondition: {
    /**
     * @api precondition | putList | /precondition/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdatePrecondition[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.PreconditionModels.PreconditionPutListGeneric>;
    /**
     * @api precondition | postList | /precondition/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.PreconditionDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.PreconditionDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.PreconditionModels.PreconditionPostListGeneric>;
    /**
     * @api precondition | deleteList | /precondition/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.PreconditionModels.PreconditionDeleteListGeneric>;
    /**
     * @api precondition | putItem | /precondition/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // "{"desc":"问题","name":"QUESTION"}" | "{"desc":"选项","name":"OPTION"}" (可选) - 类型，枚举：SourceType | 可选值: "{\"desc\":\"问题\",\"name\":\"QUESTION\"}", "{\"desc\":\"选项\",\"name\":\"OPTION\"}"
     *   sourceType?: "QUESTION" | "OPTION";
     *   // "{"desc":"当前总得分","name":"TOTAL"}" | "{"desc":"某些题总得分（全部满足）","name":"SUM_SCORE"}" | "{"desc":"某些题总得分（满足一个）","name":"SUM_SCORE_OR"}" | "{"desc":"某些题得了多少分（全部满足）","name":"INDIVIDUAL_SCORES"}" | "{"desc":"某些题得了多少分（满足一个）","name":"INDIVIDUAL_SCORES_OR"}" | "{"desc":"某些题选了某些项（全部满足）","name":"SELECTED_OPTIONS"}" | "{"desc":"某些题选了某些项（满足一个）","name":"SELECTED_CERTAIN_OPTIONS"}" (可选) - 前置条件类型，枚举：ConditionType | 可选值: "{\"desc\":\"当前总得分\",\"name\":\"TOTAL\"}", "{\"desc\":\"某些题总得分（全部满足）\",\"name\":\"SUM_SCORE\"}", "{\"desc\":\"某些题总得分（满足一个）\",\"name\":\"SUM_SCORE_OR\"}", "{\"desc\":\"某些题得了多少分（全部满足）\",\"name\":\"INDIVIDUAL_SCORES\"}", "{\"desc\":\"某些题得了多少分（满足一个）\",\"name\":\"INDIVIDUAL_SCORES_OR\"}", "{\"desc\":\"某些题选了某些项（全部满足）\",\"name\":\"SELECTED_OPTIONS\"}", "{\"desc\":\"某些题选了某些项（满足一个）\",\"name\":\"SELECTED_CERTAIN_OPTIONS\"}"
     *   conditionType?: "TOTAL" | "SUM_SCORE" | "SUM_SCORE_OR" | "INDIVIDUAL_SCORES" | "INDIVIDUAL_SCORES_OR" | "SELECTED_OPTIONS" | "SELECTED_CERTAIN_OPTIONS";
     *   // "{"desc":"大于","name":"GT"}" | "{"desc":"小于","name":"LT"}" | "{"desc":"等于","name":"EQ"}" | "{"desc":"包含","name":"IN"}" | "{"desc":"不包含","name":"NOT_IN"}" | "{"desc":"至少包含一个","name":"ANY_IN"}" | "{"desc":"至少不包含一个","name":"ANY_NOT_IN"}" (可选) - 条件，枚举：Condition | 可选值: "{\"desc\":\"大于\",\"name\":\"GT\"}", "{\"desc\":\"小于\",\"name\":\"LT\"}", "{\"desc\":\"等于\",\"name\":\"EQ\"}", "{\"desc\":\"包含\",\"name\":\"IN\"}", "{\"desc\":\"不包含\",\"name\":\"NOT_IN\"}", "{\"desc\":\"至少包含一个\",\"name\":\"ANY_IN\"}", "{\"desc\":\"至少不包含一个\",\"name\":\"ANY_NOT_IN\"}"
     *   condition?: "GT" | "LT" | "EQ" | "IN" | "NOT_IN" | "ANY_IN" | "ANY_NOT_IN";
     *   // number (可选) - 条件值（用于总得分和指定题得分） | 格式: int32
     *   value?: number;
     *   // string (可选) - 指定选项值（用于指定题选项的条件）
     *   optionValue?: string;
     *   // string (可选) - 绑定问题或选项code
     *   parentCode?: string;
     *   // string (可选) - 目标问题code
     *   questionCode?: string;
     *   // string (可选)
     *   surveysId?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.PreconditionModels.PreconditionPutItemGeneric>;
    /**
     * @api precondition | postItem | /precondition/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // "{"desc":"问题","name":"QUESTION"}" | "{"desc":"选项","name":"OPTION"}" (可选) - 类型，枚举：SourceType | 可选值: "{\"desc\":\"问题\",\"name\":\"QUESTION\"}", "{\"desc\":\"选项\",\"name\":\"OPTION\"}"
     *   sourceType?: "QUESTION" | "OPTION";
     *   // "{"desc":"当前总得分","name":"TOTAL"}" | "{"desc":"某些题总得分（全部满足）","name":"SUM_SCORE"}" | "{"desc":"某些题总得分（满足一个）","name":"SUM_SCORE_OR"}" | "{"desc":"某些题得了多少分（全部满足）","name":"INDIVIDUAL_SCORES"}" | "{"desc":"某些题得了多少分（满足一个）","name":"INDIVIDUAL_SCORES_OR"}" | "{"desc":"某些题选了某些项（全部满足）","name":"SELECTED_OPTIONS"}" | "{"desc":"某些题选了某些项（满足一个）","name":"SELECTED_CERTAIN_OPTIONS"}" (可选) - 前置条件类型，枚举：ConditionType | 可选值: "{\"desc\":\"当前总得分\",\"name\":\"TOTAL\"}", "{\"desc\":\"某些题总得分（全部满足）\",\"name\":\"SUM_SCORE\"}", "{\"desc\":\"某些题总得分（满足一个）\",\"name\":\"SUM_SCORE_OR\"}", "{\"desc\":\"某些题得了多少分（全部满足）\",\"name\":\"INDIVIDUAL_SCORES\"}", "{\"desc\":\"某些题得了多少分（满足一个）\",\"name\":\"INDIVIDUAL_SCORES_OR\"}", "{\"desc\":\"某些题选了某些项（全部满足）\",\"name\":\"SELECTED_OPTIONS\"}", "{\"desc\":\"某些题选了某些项（满足一个）\",\"name\":\"SELECTED_CERTAIN_OPTIONS\"}"
     *   conditionType?: "TOTAL" | "SUM_SCORE" | "SUM_SCORE_OR" | "INDIVIDUAL_SCORES" | "INDIVIDUAL_SCORES_OR" | "SELECTED_OPTIONS" | "SELECTED_CERTAIN_OPTIONS";
     *   // "{"desc":"大于","name":"GT"}" | "{"desc":"小于","name":"LT"}" | "{"desc":"等于","name":"EQ"}" | "{"desc":"包含","name":"IN"}" | "{"desc":"不包含","name":"NOT_IN"}" | "{"desc":"至少包含一个","name":"ANY_IN"}" | "{"desc":"至少不包含一个","name":"ANY_NOT_IN"}" (可选) - 条件，枚举：Condition | 可选值: "{\"desc\":\"大于\",\"name\":\"GT\"}", "{\"desc\":\"小于\",\"name\":\"LT\"}", "{\"desc\":\"等于\",\"name\":\"EQ\"}", "{\"desc\":\"包含\",\"name\":\"IN\"}", "{\"desc\":\"不包含\",\"name\":\"NOT_IN\"}", "{\"desc\":\"至少包含一个\",\"name\":\"ANY_IN\"}", "{\"desc\":\"至少不包含一个\",\"name\":\"ANY_NOT_IN\"}"
     *   condition?: "GT" | "LT" | "EQ" | "IN" | "NOT_IN" | "ANY_IN" | "ANY_NOT_IN";
     *   // number (可选) - 条件值（用于总得分和指定题得分） | 格式: int32
     *   value?: number;
     *   // string (可选) - 指定选项值（用于指定题选项的条件）
     *   optionValue?: string;
     *   // string (可选) - 绑定问题或选项code
     *   parentCode?: string;
     *   // string (可选) - 目标问题code
     *   questionCode?: string;
     *   // string (可选)
     *   surveysId?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.PreconditionDTO (可选)
     *   data?: XinliModels.PreconditionDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.PreconditionModels.PreconditionPostItemGeneric>;
    /**
     * @api precondition | postListQuery | /precondition/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.PreconditionDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.PreconditionModels.PreconditionPostListQueryGeneric>;
    /**
     * @api precondition | getPage | /precondition/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.PreconditionPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePagePreconditionDTO (可选)
     *   data?: XinliModels.BasePagePreconditionDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.PreconditionModels.PreconditionGetPageGeneric>;
    /**
     * @api precondition | getItemById | /precondition/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.PreconditionDTO (可选)
     *   data?: XinliModels.PreconditionDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.PreconditionModels.PreconditionGetItemByIdGeneric>;
    /**
     * @api precondition | deleteItemById | /precondition/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.PreconditionModels.PreconditionDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | options | putList | /options/list | PUT | 批量修改 |
   * | options | postList | /options/list | POST | 批量新增 |
   * | options | deleteList | /options/list | DELETE | 批量删除 |
   * | options | putItem | /options/item | PUT | 修改 |
   * | options | postItem | /options/item | POST | 新增 |
   * | options | postListQuery | /options/list/query | POST | 批量查询 |
   * | options | getPage | /options/page | GET | 多条件组合分页查询 |
   * | options | getItemById | /options/item/{id} | GET | 查询 |
   * | options | deleteItemById | /options/item/{id} | DELETE | 删除 |
   */
  export const apiOptions: {
    /**
     * @api options | putList | /options/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateOptions[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.OptionsModels.OptionsPutListGeneric>;
    /**
     * @api options | postList | /options/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.OptionsDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.OptionsDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.OptionsModels.OptionsPostListGeneric>;
    /**
     * @api options | deleteList | /options/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.OptionsModels.OptionsDeleteListGeneric>;
    /**
     * @api options | putItem | /options/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // "{"desc":"问题","name":"QUESTION"}" | "{"desc":"信息收集","name":"INFORMATION"}" (可选) - 类型，枚举：OptionsType | 可选值: "{\"desc\":\"问题\",\"name\":\"QUESTION\"}", "{\"desc\":\"信息收集\",\"name\":\"INFORMATION\"}"
     *   type?: "QUESTION" | "INFORMATION";
     *   // string (可选) - 选项文本（如 A、B、C）
     *   label?: string;
     *   // string (可选) - 选项对应的值
     *   value?: string;
     *   // number (可选) - 选项分数 | 格式: int32
     *   score?: number;
     *   // string (可选) - 问题code
     *   questionCode?: string;
     *   // string (可选) - code
     *   code?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.OptionsModels.OptionsPutItemGeneric>;
    /**
     * @api options | postItem | /options/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // "{"desc":"问题","name":"QUESTION"}" | "{"desc":"信息收集","name":"INFORMATION"}" (可选) - 类型，枚举：OptionsType | 可选值: "{\"desc\":\"问题\",\"name\":\"QUESTION\"}", "{\"desc\":\"信息收集\",\"name\":\"INFORMATION\"}"
     *   type?: "QUESTION" | "INFORMATION";
     *   // string (可选) - 选项文本（如 A、B、C）
     *   label?: string;
     *   // string (可选) - 选项对应的值
     *   value?: string;
     *   // number (可选) - 选项分数 | 格式: int32
     *   score?: number;
     *   // string (可选) - 问题code
     *   questionCode?: string;
     *   // string (可选) - code
     *   code?: string;
     *   // number (可选) - 格式: int32
     *   sort?: number;
     *   // array (可选)
     *   preconditionList?: XinliModels.PreconditionDTO[];
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.OptionsDTO (可选)
     *   data?: XinliModels.OptionsDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.OptionsModels.OptionsPostItemGeneric>;
    /**
     * @api options | postListQuery | /options/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.OptionsDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.OptionsModels.OptionsPostListQueryGeneric>;
    /**
     * @api options | getPage | /options/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.OptionsPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageOptionsDTO (可选)
     *   data?: XinliModels.BasePageOptionsDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.OptionsModels.OptionsGetPageGeneric>;
    /**
     * @api options | getItemById | /options/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.OptionsDTO (可选)
     *   data?: XinliModels.OptionsDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.OptionsModels.OptionsGetItemByIdGeneric>;
    /**
     * @api options | deleteItemById | /options/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.OptionsModels.OptionsDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | menus | putItem | /menus/item | PUT | 修改菜单 |
   * | menus | postItem | /menus/item | POST | 新增菜单 |
   * | menus | postListQuery | /menus/list/query | POST | 批量查询 |
   * | menus | getPage | /menus/page | GET | 分页查询 |
   * | menus | getGetByRoleId | /menus/getByRoleId | GET | 获取角色权限 |
   * | menus | getGetByAccountId | /menus/getByAccountId | GET | 获取登录账号菜单功能权限 |
   * | menus | deleteList | /menus/list | DELETE | 删除菜单 |
   * | menus | deleteItemById | /menus/item/{id} | DELETE | 删除 |
   */
  export const apiMenus: {
    /**
     * @api menus | putItem | /menus/item | PUT | 修改菜单
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 菜单名称
     *   name?: string;
     *   // "{"desc":"菜单","name":"MENU"}" | "{"desc":"按钮","name":"FEATURE"}" | "{"desc":"目录","name":"GROUP"}" | "{"desc":"功能","name":"FUNCTION"}" (可选) - 类型(菜单,功能) | 可选值: "{\"desc\":\"菜单\",\"name\":\"MENU\"}", "{\"desc\":\"按钮\",\"name\":\"FEATURE\"}", "{\"desc\":\"目录\",\"name\":\"GROUP\"}", "{\"desc\":\"功能\",\"name\":\"FUNCTION\"}"
     *   type?: "MENU" | "FEATURE" | "GROUP" | "FUNCTION";
     *   // string (可选) - 功能编码
     *   code?: string;
     *   // string (可选) - 父id
     *   parentId?: string;
     *   // string (可选) - 页面url地址
     *   urlAddress?: string;
     *   // string (可选) - 图标
     *   icon?: string;
     *   // number (可选) - 排序 | 格式: int32
     *   sort?: number;
     *   // string (可选) - 路径
     *   path?: string;
     *   // string (可选) - 标题
     *   title?: string;
     *   // string (可选) - 渲染组件
     *   component?: string;
     *   // string (可选) - 父级名称
     *   parentName?: string;
     *   // string (可选) - 重定向路径
     *   redirect?: string;
     *   // number (可选) - 权重 | 格式: int32
     *   weight?: number;
     *   // boolean (可选) - 是否隐藏
     *   isHidden?: boolean;
     *   // boolean (可选) - 是否缓存
     *   isCache?: boolean;
     *   // boolean (可选) - 是否禁用
     *   isDisabled?: boolean;
     *   // boolean (可选) - 是否内联
     *   isInline?: boolean;
     *   // "{"desc":"无","name":"NONE"}" | "{"desc":"组件","name":"COMPONENT"}" | "{"desc":"外链","name":"OUT_LINK"}" | "{"desc":"内链","name":"INNER_LINK"}" (可选) - 打开方式 | 可选值: "{\"desc\":\"无\",\"name\":\"NONE\"}", "{\"desc\":\"组件\",\"name\":\"COMPONENT\"}", "{\"desc\":\"外链\",\"name\":\"OUT_LINK\"}", "{\"desc\":\"内链\",\"name\":\"INNER_LINK\"}"
     *   openType?: "NONE" | "COMPONENT" | "OUT_LINK" | "INNER_LINK";
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.MenusModels.MenusPutItemGeneric>;
    /**
     * @api menus | postItem | /menus/item | POST | 新增菜单
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 菜单名称
     *   name?: string;
     *   // "{"desc":"菜单","name":"MENU"}" | "{"desc":"按钮","name":"FEATURE"}" | "{"desc":"目录","name":"GROUP"}" | "{"desc":"功能","name":"FUNCTION"}" - 类型(菜单,功能) | 可选值: "{\"desc\":\"菜单\",\"name\":\"MENU\"}", "{\"desc\":\"按钮\",\"name\":\"FEATURE\"}", "{\"desc\":\"目录\",\"name\":\"GROUP\"}", "{\"desc\":\"功能\",\"name\":\"FUNCTION\"}"
     *   type: "MENU" | "FEATURE" | "GROUP" | "FUNCTION";
     *   // string (可选) - 功能编码
     *   code?: string;
     *   // string (可选) - 父id
     *   parentId?: string;
     *   // string (可选) - 页面url地址
     *   urlAddress?: string;
     *   // string (可选) - 图标
     *   icon?: string;
     *   // number - 排序 | 格式: int32
     *   sort: number;
     *   // string (可选) - 路径
     *   path?: string;
     *   // string - 标题
     *   title: string;
     *   // string (可选) - 渲染组件
     *   component?: string;
     *   // string - 父级名称
     *   parentName: string;
     *   // string (可选) - 重定向路径
     *   redirect?: string;
     *   // number - 权重 | 格式: int32
     *   weight: number;
     *   // boolean - 是否隐藏
     *   isHidden: boolean;
     *   // boolean - 是否缓存
     *   isCache: boolean;
     *   // boolean - 是否禁用
     *   isDisabled: boolean;
     *   // boolean - 是否内联
     *   isInline: boolean;
     *   // "{"desc":"无","name":"NONE"}" | "{"desc":"组件","name":"COMPONENT"}" | "{"desc":"外链","name":"OUT_LINK"}" | "{"desc":"内链","name":"INNER_LINK"}" (可选) - 打开方式 | 可选值: "{\"desc\":\"无\",\"name\":\"NONE\"}", "{\"desc\":\"组件\",\"name\":\"COMPONENT\"}", "{\"desc\":\"外链\",\"name\":\"OUT_LINK\"}", "{\"desc\":\"内链\",\"name\":\"INNER_LINK\"}"
     *   openType?: "NONE" | "COMPONENT" | "OUT_LINK" | "INNER_LINK";
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.MenusDTO (可选)
     *   data?: XinliModels.MenusDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.MenusModels.MenusPostItemGeneric>;
    /**
     * @api menus | postListQuery | /menus/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.MenusDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.MenusModels.MenusPostListQueryGeneric>;
    /**
     * @api menus | getPage | /menus/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.MenusPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageMenusDTO (可选)
     *   data?: XinliModels.BasePageMenusDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.MenusModels.MenusGetPageGeneric>;
    /**
     * @api menus | getGetByRoleId | /menus/getByRoleId | GET | 获取角色权限
     * @query
     * ```ts
     * {
     *   // string
     *   roleId: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.MenusDTO[];
     * }
     * ```
     */
    getGetByRoleId: ApiFunctionGenerate<RequestInit, Response, tsTypes.MenusModels.MenusGetGetByRoleIdGeneric>;
    /**
     * @api menus | getGetByAccountId | /menus/getByAccountId | GET | 获取登录账号菜单功能权限
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.MenusDTO[];
     * }
     * ```
     */
    getGetByAccountId: ApiFunctionGenerate<RequestInit, Response, tsTypes.MenusModels.MenusGetGetByAccountIdGeneric>;
    /**
     * @api menus | deleteList | /menus/list | DELETE | 删除菜单
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.MenusModels.MenusDeleteListGeneric>;
    /**
     * @api menus | deleteItemById | /menus/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.MenusModels.MenusDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | levelConfig | putList | /levelConfig/list | PUT | 批量修改 |
   * | levelConfig | postList | /levelConfig/list | POST | 批量新增 |
   * | levelConfig | deleteList | /levelConfig/list | DELETE | 批量删除 |
   * | levelConfig | putItem | /levelConfig/item | PUT | 修改 |
   * | levelConfig | postItem | /levelConfig/item | POST | 新增 |
   * | levelConfig | postListQuery | /levelConfig/list/query | POST | 批量查询 |
   * | levelConfig | getPage | /levelConfig/page | GET | 多条件组合分页查询 |
   * | levelConfig | getItemById | /levelConfig/item/{id} | GET | 查询 |
   * | levelConfig | deleteItemById | /levelConfig/item/{id} | DELETE | 删除 |
   */
  export const apiLevelConfig: {
    /**
     * @api levelConfig | putList | /levelConfig/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateLevelConfig[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.LevelConfigModels.LevelConfigPutListGeneric>;
    /**
     * @api levelConfig | postList | /levelConfig/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.LevelConfigDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.LevelConfigDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.LevelConfigModels.LevelConfigPostListGeneric>;
    /**
     * @api levelConfig | deleteList | /levelConfig/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.LevelConfigModels.LevelConfigDeleteListGeneric>;
    /**
     * @api levelConfig | putItem | /levelConfig/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 医师等级
     *   level?: string;
     *   // number (可选) - 服务时长 | 格式: int32
     *   serviceHours?: number;
     *   // number (可选) - 服务次数 | 格式: int32
     *   serviceCount?: number;
     *   // number (可选) - 从业年限 | 格式: int32
     *   workingYears?: number;
     *   // number (可选) - 在线时长 | 格式: int32
     *   onlineHours?: number;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.LevelConfigModels.LevelConfigPutItemGeneric>;
    /**
     * @api levelConfig | postItem | /levelConfig/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 医师等级
     *   level?: string;
     *   // number (可选) - 服务时长 | 格式: int32
     *   serviceHours?: number;
     *   // number (可选) - 服务次数 | 格式: int32
     *   serviceCount?: number;
     *   // number (可选) - 从业年限 | 格式: int32
     *   workingYears?: number;
     *   // number (可选) - 在线时长 | 格式: int32
     *   onlineHours?: number;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.LevelConfigDTO (可选)
     *   data?: XinliModels.LevelConfigDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.LevelConfigModels.LevelConfigPostItemGeneric>;
    /**
     * @api levelConfig | postListQuery | /levelConfig/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.LevelConfigDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.LevelConfigModels.LevelConfigPostListQueryGeneric>;
    /**
     * @api levelConfig | getPage | /levelConfig/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.LevelConfigPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageLevelConfigDTO (可选)
     *   data?: XinliModels.BasePageLevelConfigDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.LevelConfigModels.LevelConfigGetPageGeneric>;
    /**
     * @api levelConfig | getItemById | /levelConfig/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.LevelConfigDTO (可选)
     *   data?: XinliModels.LevelConfigDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.LevelConfigModels.LevelConfigGetItemByIdGeneric>;
    /**
     * @api levelConfig | deleteItemById | /levelConfig/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.LevelConfigModels.LevelConfigDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | institution | putItem | /institution/item | PUT | 修改 |
   * | institution | postItem | /institution/item | POST | 新增 |
   * | institution | postEnterAudit | /institution/enterAudit | POST | 机构入驻审核 |
   * | institution | getPage | /institution/page | GET | 多条件组合分页查询 |
   * | institution | getGetPasswordById | /institution/getPassword/{id} | GET | 获取机构密码 |
   * | institution | deleteList | /institution/list | DELETE | 批量删除 |
   * | institution | deleteItemById | /institution/item/{id} | DELETE | 删除 |
   */
  export const apiInstitution: {
    /**
     * @api institution | putItem | /institution/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 账号id
     *   accountId?: string;
     *   // string (可选) - 机构名称
     *   insName?: string;
     *   // string (可选) - 机构地址
     *   address?: string;
     *   // string (可选) - 联系人
     *   contactPerson?: string;
     *   // string (可选) - 联系电话
     *   contactPhone?: string;
     *   // string (可选) - 机构图片
     *   images?: string;
     *   // "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" (可选) - 审核状态：待审核、审核通过、审核失败 | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}"
     *   auditStatus?: "WAIT" | "PASS" | "FAIL";
     *   // string (可选) - 审核意见
     *   reason?: string;
     *   // number (可选) - 最大人数 | 格式: int32
     *   maxNumber?: number;
     *   // string (可选) - 城市编码
     *   parentCode?: string;
     *   // boolean (可选) - 是否签署
     *   isSign?: boolean;
     *   // string (可选) - 机构码
     *   code?: string;
     *   // string (可选) - 机构介绍
     *   introduce?: string;
     *   // string (可选) - 业务范围
     *   business?: string;
     *   // string (可选) - 身份证正面
     *   idCardFont?: string;
     *   // string (可选) - 身份证反面
     *   idCardBack?: string;
     *   // string (可选) - 资格证书
     *   qualifications?: string;
     *   // string (可选)
     *   userId?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InstitutionModels.InstitutionPutItemGeneric>;
    /**
     * @api institution | postItem | /institution/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 账号id
     *   accountId?: string;
     *   // string (可选) - 机构名称
     *   insName?: string;
     *   // string (可选) - 机构地址
     *   address?: string;
     *   // string (可选) - 联系人
     *   contactPerson?: string;
     *   // string (可选) - 联系电话
     *   contactPhone?: string;
     *   // string (可选) - 机构图片
     *   images?: string;
     *   // "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" (可选) - 审核状态：待审核、审核通过、审核失败 | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}"
     *   auditStatus?: "WAIT" | "PASS" | "FAIL";
     *   // string (可选) - 审核意见
     *   reason?: string;
     *   // number (可选) - 最大人数 | 格式: int32
     *   maxNumber?: number;
     *   // string (可选) - 城市编码
     *   parentCode?: string;
     *   // boolean (可选) - 是否签署
     *   isSign?: boolean;
     *   // string (可选) - 申请人ID
     *   userId?: string;
     *   // string (可选) - 账号
     *   userName?: string;
     *   // string (可选) - 密码 - 机构入驻是密码RSA加密
     *   userPassword?: string;
     *   // string (可选) - 机构码
     *   code?: string;
     *   // string - 机构介绍
     *   introduce: string;
     *   // string - 业务范围
     *   business: string;
     *   // string (可选)
     *   roleIds?: string;
     *   // string - 身份证正面
     *   idCardFont: string;
     *   // string - 身份证反面
     *   idCardBack: string;
     *   // string (可选) - 资格证书
     *   qualifications?: string;
     *   // "{"desc":"系统","name":"SYSTEM"}" | "{"desc":"个人","name":"PERSONAL"}" (可选) - 审核类型 | 可选值: "{\"desc\":\"系统\",\"name\":\"SYSTEM\"}", "{\"desc\":\"个人\",\"name\":\"PERSONAL\"}"
     *   applicationType?: "SYSTEM" | "PERSONAL";
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.InstitutionDTO (可选)
     *   data?: XinliModels.InstitutionDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InstitutionModels.InstitutionPostItemGeneric>;
    /**
     * @api institution | postEnterAudit | /institution/enterAudit | POST | 机构入驻审核
     * @body
     * ```ts
     * {
     *   // string - 机构id
     *   institutionId: string;
     *   // "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" - 审核状态 | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}"
     *   auditStatus: "WAIT" | "PASS" | "FAIL";
     *   // string (可选) - 账号 - 审核状态为通过是必传
     *   userName?: string;
     *   // string (可选) - 密码 - 审核状态为通过是必传，并且密码是rsa加密后的
     *   password?: string;
     *   // string (可选) - 角色id - 审核状态为通过是必传
     *   roleIds?: string;
     *   // string (可选) - 理由
     *   reason?: string;
     *   // string - 机构码
     *   code: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    postEnterAudit: ApiFunctionGenerate<RequestInit, Response, tsTypes.InstitutionModels.InstitutionPostEnterAuditGeneric>;
    /**
     * @api institution | getPage | /institution/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.InstitutionPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageInstitutionDTO (可选)
     *   data?: XinliModels.BasePageInstitutionDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InstitutionModels.InstitutionGetPageGeneric>;
    /**
     * @api institution | getGetPasswordById | /institution/getPassword/{id} | GET | 获取机构密码
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // string (可选)
     *   data?: string;
     * }
     * ```
     */
    getGetPasswordById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InstitutionModels.InstitutionGetGetPasswordByIdGeneric>;
    /**
     * @api institution | deleteList | /institution/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InstitutionModels.InstitutionDeleteListGeneric>;
    /**
     * @api institution | deleteItemById | /institution/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InstitutionModels.InstitutionDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | informationQuestions | putList | /informationQuestions/list | PUT | 批量修改 |
   * | informationQuestions | postList | /informationQuestions/list | POST | 批量新增 |
   * | informationQuestions | deleteList | /informationQuestions/list | DELETE | 批量删除 |
   * | informationQuestions | putItem | /informationQuestions/item | PUT | 修改 |
   * | informationQuestions | postItem | /informationQuestions/item | POST | 新增 |
   * | informationQuestions | postListQuery | /informationQuestions/list/query | POST | 批量查询 |
   * | informationQuestions | getQuestionListBySurveyId | /informationQuestions/questionList/{surveyId} | GET | 根据量表id查询问题和选项 |
   * | informationQuestions | getPage | /informationQuestions/page | GET | 多条件组合分页查询 |
   * | informationQuestions | getItemById | /informationQuestions/item/{id} | GET | 查询 |
   */
  export const apiInformationQuestions: {
    /**
     * @api informationQuestions | putList | /informationQuestions/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.InformationQuestionsDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationQuestionsModels.InformationQuestionsPutListGeneric>;
    /**
     * @api informationQuestions | postList | /informationQuestions/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.InformationQuestionsDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.InformationQuestionsDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationQuestionsModels.InformationQuestionsPostListGeneric>;
    /**
     * @api informationQuestions | deleteList | /informationQuestions/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationQuestionsModels.InformationQuestionsDeleteListGeneric>;
    /**
     * @api informationQuestions | putItem | /informationQuestions/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // number (可选) - 排序 | 格式: int32
     *   order?: number;
     *   // "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}"
     *   questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";
     *   // string (可选) - 问题文本
     *   questionText?: string;
     *   // boolean (可选) - 是否必填
     *   required?: boolean;
     *   // string (可选) - code
     *   code?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationQuestionsModels.InformationQuestionsPutItemGeneric>;
    /**
     * @api informationQuestions | postItem | /informationQuestions/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // number (可选) - 排序 | 格式: int32
     *   order?: number;
     *   // "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}"
     *   questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";
     *   // string (可选) - 问题文本
     *   questionText?: string;
     *   // boolean (可选) - 是否必填
     *   required?: boolean;
     *   // string (可选) - code
     *   code?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // array (可选)
     *   optionList?: XinliModels.OptionsDTO[];
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.InformationQuestionsDTO (可选)
     *   data?: XinliModels.InformationQuestionsDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationQuestionsModels.InformationQuestionsPostItemGeneric>;
    /**
     * @api informationQuestions | postListQuery | /informationQuestions/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.InformationQuestionsDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationQuestionsModels.InformationQuestionsPostListQueryGeneric>;
    /**
     * @api informationQuestions | getQuestionListBySurveyId | /informationQuestions/questionList/{surveyId} | GET | 根据量表id查询问题和选项
     * @params
     * ```ts
     * {
     *   // string
     *   surveyId: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.InformationQuestionsDTO[];
     * }
     * ```
     */
    getQuestionListBySurveyId: ApiFunctionGenerate<
      RequestInit,
      Response,
      tsTypes.InformationQuestionsModels.InformationQuestionsGetQuestionListBySurveyIdGeneric
    >;
    /**
     * @api informationQuestions | getPage | /informationQuestions/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.InformationQuestionsPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageInformationQuestionsDTO (可选)
     *   data?: XinliModels.BasePageInformationQuestionsDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationQuestionsModels.InformationQuestionsGetPageGeneric>;
    /**
     * @api informationQuestions | getItemById | /informationQuestions/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.InformationQuestionsDTO (可选)
     *   data?: XinliModels.InformationQuestionsDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationQuestionsModels.InformationQuestionsGetItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | informationCollection | putList | /informationCollection/list | PUT | 批量修改 |
   * | informationCollection | postList | /informationCollection/list | POST | 批量新增 |
   * | informationCollection | deleteList | /informationCollection/list | DELETE | 批量删除 |
   * | informationCollection | putItem | /informationCollection/item | PUT | 修改 |
   * | informationCollection | postItem | /informationCollection/item | POST | 新增 |
   * | informationCollection | postListQuery | /informationCollection/list/query | POST | 批量查询 |
   * | informationCollection | getPage | /informationCollection/page | GET | 多条件组合分页查询 |
   * | informationCollection | getItemById | /informationCollection/item/{id} | GET | 查询 |
   * | informationCollection | deleteItemById | /informationCollection/item/{id} | DELETE | 删除 |
   */
  export const apiInformationCollection: {
    /**
     * @api informationCollection | putList | /informationCollection/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateInformationCollection[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationCollectionModels.InformationCollectionPutListGeneric>;
    /**
     * @api informationCollection | postList | /informationCollection/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.InformationCollectionDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.InformationCollectionDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationCollectionModels.InformationCollectionPostListGeneric>;
    /**
     * @api informationCollection | deleteList | /informationCollection/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationCollectionModels.InformationCollectionDeleteListGeneric>;
    /**
     * @api informationCollection | putItem | /informationCollection/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 用户ID
     *   userId?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // string (可选) - 填写的内容
     *   responseContent?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationCollectionModels.InformationCollectionPutItemGeneric>;
    /**
     * @api informationCollection | postItem | /informationCollection/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 用户ID
     *   userId?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // string (可选) - 填写的内容
     *   responseContent?: string;
     *   // string (可选) - 量表标题
     *   title?: string;
     *   // string (可选) - 用户名
     *   userName?: string;
     *   // array (可选) - 传入对象
     *   contentList?: XinliModels.Content[];
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.InformationCollectionDTO (可选)
     *   data?: XinliModels.InformationCollectionDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationCollectionModels.InformationCollectionPostItemGeneric>;
    /**
     * @api informationCollection | postListQuery | /informationCollection/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.InformationCollectionDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationCollectionModels.InformationCollectionPostListQueryGeneric>;
    /**
     * @api informationCollection | getPage | /informationCollection/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.InformationCollectionPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageInformationCollectionDTO (可选)
     *   data?: XinliModels.BasePageInformationCollectionDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationCollectionModels.InformationCollectionGetPageGeneric>;
    /**
     * @api informationCollection | getItemById | /informationCollection/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.InformationCollectionDTO (可选)
     *   data?: XinliModels.InformationCollectionDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationCollectionModels.InformationCollectionGetItemByIdGeneric>;
    /**
     * @api informationCollection | deleteItemById | /informationCollection/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.InformationCollectionModels.InformationCollectionDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | feedback | putList | /feedback/list | PUT | 批量修改 |
   * | feedback | postList | /feedback/list | POST | 批量新增 |
   * | feedback | deleteList | /feedback/list | DELETE | 批量删除 |
   * | feedback | putItem | /feedback/item | PUT | 修改 |
   * | feedback | postItem | /feedback/item | POST | 新增 |
   * | feedback | postListQuery | /feedback/list/query | POST | 批量查询 |
   * | feedback | getPage | /feedback/page | GET | 多条件组合分页查询 |
   * | feedback | getItemById | /feedback/item/{id} | GET | 查询 |
   * | feedback | deleteItemById | /feedback/item/{id} | DELETE | 删除 |
   */
  export const apiFeedback: {
    /**
     * @api feedback | putList | /feedback/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateFeedback[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.FeedbackModels.FeedbackPutListGeneric>;
    /**
     * @api feedback | postList | /feedback/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.FeedbackDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.FeedbackDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.FeedbackModels.FeedbackPostListGeneric>;
    /**
     * @api feedback | deleteList | /feedback/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.FeedbackModels.FeedbackDeleteListGeneric>;
    /**
     * @api feedback | putItem | /feedback/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 受理人id
     *   accountId?: string;
     *   // string (可选) - 用户ID，提交反馈的用户
     *   userId?: string;
     *   // "{"desc":"待处理","name":"PENDING"}" | "{"desc":"已受理","name":"ACCEPTED"}" | "{"desc":"已关闭","name":"CLOSED"}" (可选) - 反馈状态，枚举：FeedbackStatus | 可选值: "{\"desc\":\"待处理\",\"name\":\"PENDING\"}", "{\"desc\":\"已受理\",\"name\":\"ACCEPTED\"}", "{\"desc\":\"已关闭\",\"name\":\"CLOSED\"}"
     *   status?: "PENDING" | "ACCEPTED" | "CLOSED";
     *   // string (可选) - 反馈内容
     *   description?: string;
     *   // string (可选) - 受理时间 | 格式: date-time
     *   acceptedTime?: string;
     *   // string (可选) - 受理回复
     *   reply?: string;
     *   // string (可选) - 反馈类型
     *   type?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.FeedbackModels.FeedbackPutItemGeneric>;
    /**
     * @api feedback | postItem | /feedback/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 受理人id
     *   accountId?: string;
     *   // string (可选) - 用户ID，提交反馈的用户
     *   userId?: string;
     *   // "{"desc":"待处理","name":"PENDING"}" | "{"desc":"已受理","name":"ACCEPTED"}" | "{"desc":"已关闭","name":"CLOSED"}" (可选) - 反馈状态，枚举：FeedbackStatus | 可选值: "{\"desc\":\"待处理\",\"name\":\"PENDING\"}", "{\"desc\":\"已受理\",\"name\":\"ACCEPTED\"}", "{\"desc\":\"已关闭\",\"name\":\"CLOSED\"}"
     *   status?: "PENDING" | "ACCEPTED" | "CLOSED";
     *   // string (可选) - 反馈内容
     *   description?: string;
     *   // string (可选) - 受理时间 | 格式: date-time
     *   acceptedTime?: string;
     *   // string (可选) - 受理回复
     *   reply?: string;
     *   // string - 反馈类型
     *   type: string;
     *   // string (可选)
     *   accountName?: string;
     *   // string (可选)
     *   userName?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.FeedbackDTO (可选)
     *   data?: XinliModels.FeedbackDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.FeedbackModels.FeedbackPostItemGeneric>;
    /**
     * @api feedback | postListQuery | /feedback/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.FeedbackDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.FeedbackModels.FeedbackPostListQueryGeneric>;
    /**
     * @api feedback | getPage | /feedback/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.FeedbackPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageFeedbackDTO (可选)
     *   data?: XinliModels.BasePageFeedbackDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.FeedbackModels.FeedbackGetPageGeneric>;
    /**
     * @api feedback | getItemById | /feedback/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.FeedbackDTO (可选)
     *   data?: XinliModels.FeedbackDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.FeedbackModels.FeedbackGetItemByIdGeneric>;
    /**
     * @api feedback | deleteItemById | /feedback/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.FeedbackModels.FeedbackDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | doctor | putItem | /doctor/item | PUT | 修改 |
   * | doctor | postItem | /doctor/item | POST | 新增 |
   * | doctor | postPutStatusByIdByStatus | /doctor/putStatus/{id}/{status} | POST | 修改状态 |
   * | doctor | postEnterAudit | /doctor/enterAudit | POST | 医生入驻审核 |
   * | doctor | getPage | /doctor/page | GET | 多条件组合分页查询 |
   * | doctor | deleteList | /doctor/list | DELETE | 批量删除 |
   * | doctor | deleteItemById | /doctor/item/{id} | DELETE | 删除 |
   */
  export const apiDoctor: {
    /**
     * @api doctor | putItem | /doctor/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 医师姓名
     *   name?: string;
     *   // string (可选) - 绑定的机构ID
     *   institutionId?: string;
     *   // boolean (可选) - 是否在线
     *   isOnline?: boolean;
     *   // string (可选) - 医生标签
     *   label?: string;
     *   // string (可选) - 医师等级
     *   level?: string;
     *   // string (可选) - 擅长领域
     *   specialty?: string;
     *   // string (可选) - 个人简介
     *   introduction?: string;
     *   // number (可选) - 咨询费用
     *   serviceFee?: number;
     *   // string (可选) - 地址
     *   address?: string;
     *   // number (可选) - 服务时长 | 格式: int32
     *   serviceHours?: number;
     *   // number (可选) - 服务次数 | 格式: int32
     *   serviceCount?: number;
     *   // string (可选) - 入行时间
     *   entryTime?: string;
     *   // number (可选) - 在线时长 | 格式: int32
     *   onlineHours?: number;
     *   // string (可选) - 下线时间 | 格式: date-time
     *   logoutTime?: string;
     *   // string (可选) - 登录时间 | 格式: date-time
     *   loginTime?: string;
     *   // string (可选) - 审核意见
     *   reason?: string;
     *   // string - 身份证正面
     *   idCardFont: string;
     *   // string - 身份证反面
     *   idCardBack: string;
     *   // string (可选) - 证书-允许传多个,逗号分隔
     *   qualifications?: string;
     *   // string - 电话
     *   phone: string;
     *   // string (可选) - 头像
     *   avatar?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.DoctorModels.DoctorPutItemGeneric>;
    /**
     * @api doctor | postItem | /doctor/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 医师姓名
     *   name: string;
     *   // string - 身份证号
     *   idCard: string;
     *   // string - 电话
     *   phone: string;
     *   // string - 职务
     *   job: string;
     *   // string - 擅长领域
     *   specialty: string;
     *   // string (可选) - 绑定的机构ID
     *   institutionId?: string;
     *   // string (可选) - 地址
     *   address?: string;
     *   // string - 个人简介
     *   introduction: string;
     *   // string - 身份证正面
     *   idCardFont: string;
     *   // string - 身份证反面
     *   idCardBack: string;
     *   // string (可选) - 证书-允许传多个,逗号分隔
     *   qualifications?: string;
     *   // number - 咨询费用
     *   serviceFee: number;
     *   // "{"desc":"系统","name":"SYSTEM"}" | "{"desc":"个人","name":"PERSONAL"}" (可选) - 申请类型 | 可选值: "{\"desc\":\"系统\",\"name\":\"SYSTEM\"}", "{\"desc\":\"个人\",\"name\":\"PERSONAL\"}"
     *   applicationType?: "SYSTEM" | "PERSONAL";
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // boolean (可选) - 是否在线
     *   isOnline?: boolean;
     *   // "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" (可选) - 申请审核状态，枚举：AuditStatus | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}"
     *   auditStatus?: "WAIT" | "PASS" | "FAIL";
     *   // string (可选) - 医生标签
     *   label?: string;
     *   // string (可选) - 医师等级
     *   level?: string;
     *   // number (可选) - 服务时长 | 格式: int32
     *   serviceHours?: number;
     *   // number (可选) - 服务次数 | 格式: int32
     *   serviceCount?: number;
     *   // string - 入行时间
     *   entryTime: string;
     *   // number (可选) - 在线时长 | 格式: int32
     *   onlineHours?: number;
     *   // string (可选) - 下线时间 | 格式: date-time
     *   logoutTime?: string;
     *   // string (可选) - 登录时间 | 格式: date-time
     *   loginTime?: string;
     *   // string (可选) - 申请人ID
     *   userId?: string;
     *   // string (可选) - 审核意见
     *   reason?: string;
     *   // string (可选) - 密码
     *   userPassword?: string;
     *   // string (可选)
     *   institutionName?: string;
     *   // string (可选) - 头像
     *   avatar?: string;
     *   // string (可选) - 角色id - 管端添加必填，审核通过必填
     *   roleIds?: string;
     *   // string (可选) - 账号id - 后端处理
     *   accountId?: string;
     *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
     *   sex: "MAN" | "WOMAN" | "UNKNOWN";
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.DoctorDTO (可选)
     *   data?: XinliModels.DoctorDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.DoctorModels.DoctorPostItemGeneric>;
    /**
     * @api doctor | postPutStatusByIdByStatus | /doctor/putStatus/{id}/{status} | POST | 修改状态
     * @params
     * ```ts
     * {
     *   // string
     *   id: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" - 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status: "ENABLE" | "DISABLE";
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    postPutStatusByIdByStatus: ApiFunctionGenerate<RequestInit, Response, tsTypes.DoctorModels.DoctorPostPutStatusByIdByStatusGeneric>;
    /**
     * @api doctor | postEnterAudit | /doctor/enterAudit | POST | 医生入驻审核
     * @body
     * ```ts
     * {
     *   // string - 医生id
     *   doctorId: string;
     *   // "{"desc":"待审核","name":"WAIT"}" | "{"desc":"审核通过","name":"PASS"}" | "{"desc":"审核失败","name":"FAIL"}" - 审核状态 | 可选值: "{\"desc\":\"待审核\",\"name\":\"WAIT\"}", "{\"desc\":\"审核通过\",\"name\":\"PASS\"}", "{\"desc\":\"审核失败\",\"name\":\"FAIL\"}"
     *   auditStatus: "WAIT" | "PASS" | "FAIL";
     *   // string (可选) - 密码 - 审核状态为通过是必传，并且密码是rsa加密后的
     *   password?: string;
     *   // number (可选) - 咨询费用 - 不传默认为0
     *   serviceFee?: number;
     *   // string (可选) - 角色id - 审核状态为通过是必传
     *   roleIds?: string;
     *   // string (可选) - 理由
     *   reason?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    postEnterAudit: ApiFunctionGenerate<RequestInit, Response, tsTypes.DoctorModels.DoctorPostEnterAuditGeneric>;
    /**
     * @api doctor | getPage | /doctor/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.DoctorPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageDoctorDTO (可选)
     *   data?: XinliModels.BasePageDoctorDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.DoctorModels.DoctorGetPageGeneric>;
    /**
     * @api doctor | deleteList | /doctor/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.DoctorModels.DoctorDeleteListGeneric>;
    /**
     * @api doctor | deleteItemById | /doctor/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.DoctorModels.DoctorDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | dict | putStatusById | /dict/status/{id} | PUT | 修改状态 |
   * | dict | putItem | /dict/item | PUT | 修改字典类型 |
   * | dict | postItem | /dict/item | POST | 新增字典类型 |
   * | dict | putDataStatusById | /dict/data/status/{id} | PUT | 修改状态 |
   * | dict | putDataItem | /dict/data/item | PUT | 修改字典数据 |
   * | dict | postDataItem | /dict/data/item | POST | 新增字典数据 |
   * | dict | getPage | /dict/page | GET | 分页查询 |
   * | dict | getDataPage | /dict/data/page | GET | 分页查询 |
   * | dict | deleteList | /dict/list | DELETE | 删除字典类型 |
   * | dict | deleteItemById | /dict/item/{id} | DELETE | 删除 |
   * | dict | deleteDataList | /dict/data/list | DELETE | 删除字典数据 |
   * | dict | deleteDataItemById | /dict/data/item/{id} | DELETE | 删除字典数据 |
   */
  export const apiDict: {
    /**
     * @api dict | putStatusById | /dict/status/{id} | PUT | 修改状态
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putStatusById: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictModels.DictPutStatusByIdGeneric>;
    /**
     * @api dict | putItem | /dict/item | PUT | 修改字典类型
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 格式: date-time
     *   updateTime?: string;
     *   // string (可选) - 字典名称
     *   name?: string;
     *   // string (可选) - 字典类型
     *   code?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // string (可选) - 备注
     *   remark?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictModels.DictPutItemGeneric>;
    /**
     * @api dict | postItem | /dict/item | POST | 新增字典类型
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 格式: date-time
     *   updateTime?: string;
     *   // string - 字典名称
     *   name: string;
     *   // string - 字典类型
     *   code: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // string (可选) - 备注
     *   remark?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SysDictTypeDTO (可选)
     *   data?: XinliModels.SysDictTypeDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictModels.DictPostItemGeneric>;
    /**
     * @api dict | putDataStatusById | /dict/data/status/{id} | PUT | 修改状态
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putDataStatusById: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictModels.DictPutDataStatusByIdGeneric>;
    /**
     * @api dict | putDataItem | /dict/data/item | PUT | 修改字典数据
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 格式: date-time
     *   updateTime?: string;
     *   // string (可选) - 父id
     *   parentId?: string;
     *   // string (可选) - 字典名称
     *   name?: string;
     *   // number (可选) - 字典排序 | 格式: int32
     *   dictSort?: number;
     *   // string (可选) - 字典键值
     *   code?: string;
     *   // string (可选) - 颜色
     *   color?: string;
     *   // string (可选) - 标识
     *   logo?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // string (可选) - 备注
     *   remark?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putDataItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictModels.DictPutDataItemGeneric>;
    /**
     * @api dict | postDataItem | /dict/data/item | POST | 新增字典数据
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 格式: date-time
     *   updateTime?: string;
     *   // string (可选) - 父id
     *   parentId?: string;
     *   // string (可选) - 字典名称
     *   name?: string;
     *   // number (可选) - 字典排序 | 格式: int32
     *   dictSort?: number;
     *   // string (可选) - 字典键值
     *   code?: string;
     *   // string (可选) - 颜色
     *   color?: string;
     *   // string (可选) - 标识
     *   logo?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态 | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // string (可选) - 备注
     *   remark?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SysDictDataDTO (可选)
     *   data?: XinliModels.SysDictDataDTO;
     * }
     * ```
     */
    postDataItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictModels.DictPostDataItemGeneric>;
    /**
     * @api dict | getPage | /dict/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.SysDictTypePageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageSysDictTypeDTO (可选)
     *   data?: XinliModels.BasePageSysDictTypeDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictModels.DictGetPageGeneric>;
    /**
     * @api dict | getDataPage | /dict/data/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.SysDictDataPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageSysDictDataDTO (可选)
     *   data?: XinliModels.BasePageSysDictDataDTO;
     * }
     * ```
     */
    getDataPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictModels.DictGetDataPageGeneric>;
    /**
     * @api dict | deleteList | /dict/list | DELETE | 删除字典类型
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictModels.DictDeleteListGeneric>;
    /**
     * @api dict | deleteItemById | /dict/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictModels.DictDeleteItemByIdGeneric>;
    /**
     * @api dict | deleteDataList | /dict/data/list | DELETE | 删除字典数据
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteDataList: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictModels.DictDeleteDataListGeneric>;
    /**
     * @api dict | deleteDataItemById | /dict/data/item/{id} | DELETE | 删除字典数据
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteDataItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.DictModels.DictDeleteDataItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | course | putTypeItem | /course/type/item | PUT | 修改课程 |
   * | course | postTypeItem | /course/type/item | POST | 添加课程分类 |
   * | course | deleteTypeItem | /course/type/item | DELETE | 批量删除课程 |
   * | course | putResourcesItem | /course/resources/item | PUT | 修改 |
   * | course | postResourcesItem | /course/resources/item | POST | 添加 |
   * | course | deleteResourcesItem | /course/resources/item | DELETE | 批量删除 |
   * | course | putItem | /course/item | PUT | 修改课程 |
   * | course | postItem | /course/item | POST | 添加课程 |
   * | course | deleteItem | /course/item | DELETE | 批量删除课程 |
   * | course | getTypePage | /course/type/page | GET | 分页查询 |
   * | course | getResourcesPage | /course/resources/page | GET | 分页查询 |
   * | course | getPage | /course/page | GET | 分页查询 |
   * | course | deleteTypeItemById | /course/type/item/{id} | DELETE | 删除课程 |
   * | course | deleteResourcesItemById | /course/resources/item/{id} | DELETE | 删除 |
   * | course | deleteItemById | /course/item/{id} | DELETE | 删除课程 |
   */
  export const apiCourse: {
    /**
     * @api course | putTypeItem | /course/type/item | PUT | 修改课程
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 标题
     *   title: string;
     *   // string (可选) - 机构id
     *   institutionId?: string;
     *   // number (可选) - 排序 | 格式: int32
     *   sort?: number;
     *   // string (可选)
     *   pid?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putTypeItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.CourseModels.CoursePutTypeItemGeneric>;
    /**
     * @api course | postTypeItem | /course/type/item | POST | 添加课程分类
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 标题
     *   title: string;
     *   // string (可选) - 机构id
     *   institutionId?: string;
     *   // number (可选) - 排序 | 格式: int32
     *   sort?: number;
     *   // string (可选)
     *   pid?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.CourseTypeDto (可选)
     *   data?: XinliModels.CourseTypeDto;
     * }
     * ```
     */
    postTypeItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.CourseModels.CoursePostTypeItemGeneric>;
    /**
     * @api course | deleteTypeItem | /course/type/item | DELETE | 批量删除课程
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteTypeItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.CourseModels.CourseDeleteTypeItemGeneric>;
    /**
     * @api course | putResourcesItem | /course/resources/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 课程id
     *   courseId: string;
     *   // string - 课时标题
     *   title: string;
     *   // string (可选) - 课时介绍
     *   description?: string;
     *   // number (可选) - 时长 | 格式: double
     *   duration?: number;
     *   // string (可选) - 附件
     *   annex?: string;
     *   // string - 资源地址
     *   resourceUrl: string;
     *   // string (可选) - 机构id
     *   institutionId?: string;
     *   // boolean - 是否开放
     *   isOpen: boolean;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putResourcesItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.CourseModels.CoursePutResourcesItemGeneric>;
    /**
     * @api course | postResourcesItem | /course/resources/item | POST | 添加
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 课程id
     *   courseId: string;
     *   // string - 课时标题
     *   title: string;
     *   // string (可选) - 课时介绍
     *   description?: string;
     *   // number (可选) - 时长 | 格式: double
     *   duration?: number;
     *   // string (可选) - 附件
     *   annex?: string;
     *   // string - 资源地址
     *   resourceUrl: string;
     *   // string (可选) - 机构id
     *   institutionId?: string;
     *   // boolean - 是否开放
     *   isOpen: boolean;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.CourseResourcesDto (可选)
     *   data?: XinliModels.CourseResourcesDto;
     * }
     * ```
     */
    postResourcesItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.CourseModels.CoursePostResourcesItemGeneric>;
    /**
     * @api course | deleteResourcesItem | /course/resources/item | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteResourcesItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.CourseModels.CourseDeleteResourcesItemGeneric>;
    /**
     * @api course | putItem | /course/item | PUT | 修改课程
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 课程标题
     *   title: string;
     *   // string (可选) - 课程说明
     *   description?: string;
     *   // number - 价格
     *   price: number;
     *   // boolean - 是否启用
     *   isActive: boolean;
     *   // boolean - 是否推荐
     *   isRec: boolean;
     *   // boolean - 是否置顶
     *   isTop: boolean;
     *   // string (可选) - 开售时间 | 格式: date-time
     *   startTime?: string;
     *   // string (可选) - 截至时间 | 格式: date-time
     *   endTime?: string;
     *   // number (可选) - 课程销量 | 格式: int32
     *   salesCount?: number;
     *   // number (可选) - 课程销售额
     *   salesAmount?: number;
     *   // string - 课程类型
     *   type: string;
     *   // string (可选) - 机构id
     *   institutionId?: string;
     *   // string (可选) - 封面
     *   coverImg?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.CourseModels.CoursePutItemGeneric>;
    /**
     * @api course | postItem | /course/item | POST | 添加课程
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 课程标题
     *   title: string;
     *   // string (可选) - 课程说明
     *   description?: string;
     *   // number - 价格
     *   price: number;
     *   // boolean - 是否启用
     *   isActive: boolean;
     *   // boolean - 是否推荐
     *   isRec: boolean;
     *   // boolean - 是否置顶
     *   isTop: boolean;
     *   // string (可选) - 开售时间 | 格式: date-time
     *   startTime?: string;
     *   // string (可选) - 截至时间 | 格式: date-time
     *   endTime?: string;
     *   // number (可选) - 课程销量 | 格式: int32
     *   salesCount?: number;
     *   // number (可选) - 课程销售额
     *   salesAmount?: number;
     *   // string - 课程类型
     *   type: string;
     *   // string (可选) - 机构id
     *   institutionId?: string;
     *   // string (可选) - 封面
     *   coverImg?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.CourseDto (可选)
     *   data?: XinliModels.CourseDto;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.CourseModels.CoursePostItemGeneric>;
    /**
     * @api course | deleteItem | /course/item | DELETE | 批量删除课程
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.CourseModels.CourseDeleteItemGeneric>;
    /**
     * @api course | getTypePage | /course/type/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.CourseTypePageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageCourseTypeDto (可选)
     *   data?: XinliModels.BasePageCourseTypeDto;
     * }
     * ```
     */
    getTypePage: ApiFunctionGenerate<RequestInit, Response, tsTypes.CourseModels.CourseGetTypePageGeneric>;
    /**
     * @api course | getResourcesPage | /course/resources/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.CourseResourcesPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageCourseResourcesDto (可选)
     *   data?: XinliModels.BasePageCourseResourcesDto;
     * }
     * ```
     */
    getResourcesPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.CourseModels.CourseGetResourcesPageGeneric>;
    /**
     * @api course | getPage | /course/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.CoursePageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageCourseDto (可选)
     *   data?: XinliModels.BasePageCourseDto;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.CourseModels.CourseGetPageGeneric>;
    /**
     * @api course | deleteTypeItemById | /course/type/item/{id} | DELETE | 删除课程
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteTypeItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.CourseModels.CourseDeleteTypeItemByIdGeneric>;
    /**
     * @api course | deleteResourcesItemById | /course/resources/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteResourcesItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.CourseModels.CourseDeleteResourcesItemByIdGeneric>;
    /**
     * @api course | deleteItemById | /course/item/{id} | DELETE | 删除课程
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.CourseModels.CourseDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | config | putList | /config/list | PUT | 批量修改系统配置表 |
   * | config | postList | /config/list | POST | 批量新增系统配置表 |
   * | config | deleteList | /config/list | DELETE | 删除系统配置 |
   * | config | putItem | /config/item | PUT | 修改系统配置 |
   * | config | postItem | /config/item | POST | 新增系统配置 |
   * | config | postSaveStoreCity | /config/saveStoreCity | POST | 商家配置设置-城市 |
   * | config | postSaveBasicInfo | /config/saveBasicInfo | POST | 基础信息设置 |
   * | config | postListQuery | /config/list/query | POST | 批量查询系统配置表 |
   * | config | getPage | /config/page | GET | 系统配置分页查询 |
   * | config | getGetStoreCity | /config/getStoreCity | GET | 商家配置查询-城市 |
   * | config | getGetIsMaintenance | /config/getIsMaintenance | GET | 获取是否维护 |
   * | config | getGetBasicInfo | /config/getBasicInfo | GET | 基础信息查询 |
   * | config | getAllEnums | /config/allEnums | GET | 获取所有枚举信息 |
   */
  export const apiConfig: {
    /**
     * @api config | putList | /config/list | PUT | 批量修改系统配置表
     * @body
     * ```ts
     * XinliModels.UpdateSysConfig[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigPutListGeneric>;
    /**
     * @api config | postList | /config/list | POST | 批量新增系统配置表
     * @body
     * ```ts
     * XinliModels.SysConfigDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SysConfigDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigPostListGeneric>;
    /**
     * @api config | deleteList | /config/list | DELETE | 删除系统配置
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigDeleteListGeneric>;
    /**
     * @api config | putItem | /config/item | PUT | 修改系统配置
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 格式: date-time
     *   updateTime?: string;
     *   // number (可选) - 配置类型 | 格式: int32
     *   type?: number;
     *   // string (可选) - name
     *   name?: string;
     *   // string (可选) - content
     *   content?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigPutItemGeneric>;
    /**
     * @api config | postItem | /config/item | POST | 新增系统配置
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 格式: date-time
     *   updateTime?: string;
     *   // number (可选) - 配置类型 | 格式: int32
     *   type?: number;
     *   // string (可选) - name
     *   name?: string;
     *   // string (可选) - content
     *   content?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SysConfigDTO (可选)
     *   data?: XinliModels.SysConfigDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigPostItemGeneric>;
    /**
     * @api config | postSaveStoreCity | /config/saveStoreCity | POST | 商家配置设置-城市
     * @body
     * ```ts
     * XinliModels.SysConfigStoreCity[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    postSaveStoreCity: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigPostSaveStoreCityGeneric>;
    /**
     * @api config | postSaveBasicInfo | /config/saveBasicInfo | POST | 基础信息设置
     * @body
     * ```ts
     * {
     *   // string (可选) - 站点名称
     *   siteName?: string;
     *   // string (可选) - 备案号
     *   recordNumber?: string;
     *   // string (可选) - 版本号
     *   version?: string;
     *   // string (可选) - logo
     *   logo?: string;
     *   // string (可选) - 小程序appid
     *   appId?: string;
     *   // string (可选) - 小程序app-secret
     *   appSecret?: string;
     *   // string (可选) - 腾讯地图定位key
     *   mapLocationKey?: string;
     *   // string (可选) - 商家默认评分
     *   defaultRating?: string;
     *   // string (可选) - 小程序分享标题
     *   shareTitle?: string;
     *   // string (可选) - 小程序分享图片
     *   shareImage?: string;
     *   // string (可选) - 订单付款时长(分钟)
     *   paymentDuration?: string;
     *   // string (可选) - 订单结算时长(小时)
     *   settlementDuration?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    postSaveBasicInfo: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigPostSaveBasicInfoGeneric>;
    /**
     * @api config | postListQuery | /config/list/query | POST | 批量查询系统配置表
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SysConfigDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigPostListQueryGeneric>;
    /**
     * @api config | getPage | /config/page | GET | 系统配置分页查询
     * @query
     * ```ts
     * XinliModels.SysConfigPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageSysConfigDTO (可选)
     *   data?: XinliModels.BasePageSysConfigDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigGetPageGeneric>;
    /**
     * @api config | getGetStoreCity | /config/getStoreCity | GET | 商家配置查询-城市
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.SysConfigStoreCity[];
     * }
     * ```
     */
    getGetStoreCity: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigGetGetStoreCityGeneric>;
    /**
     * @api config | getGetIsMaintenance | /config/getIsMaintenance | GET | 获取是否维护
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // string (可选)
     *   data?: string;
     * }
     * ```
     */
    getGetIsMaintenance: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigGetGetIsMaintenanceGeneric>;
    /**
     * @api config | getGetBasicInfo | /config/getBasicInfo | GET | 基础信息查询
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.SysConfigBasicInfo (可选)
     *   data?: XinliModels.SysConfigBasicInfo;
     * }
     * ```
     */
    getGetBasicInfo: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigGetGetBasicInfoGeneric>;
    /**
     * @api config | getAllEnums | /config/allEnums | GET | 获取所有枚举信息
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // object (可选)
     *   data?: Record<string, Record<string, any>>;
     * }
     * ```
     */
    getAllEnums: ApiFunctionGenerate<RequestInit, Response, tsTypes.ConfigModels.ConfigGetAllEnumsGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | category | putList | /category/list | PUT | 批量修改 |
   * | category | postList | /category/list | POST | 批量新增 |
   * | category | deleteList | /category/list | DELETE | 批量删除 |
   * | category | putItem | /category/item | PUT | 修改 |
   * | category | postItem | /category/item | POST | 新增 |
   * | category | postListQuery | /category/list/query | POST | 批量查询 |
   * | category | getPage | /category/page | GET | 多条件组合分页查询 |
   * | category | getItemById | /category/item/{id} | GET | 查询 |
   * | category | deleteItemById | /category/item/{id} | DELETE | 删除 |
   */
  export const apiCategory: {
    /**
     * @api category | putList | /category/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateCategory[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.CategoryModels.CategoryPutListGeneric>;
    /**
     * @api category | postList | /category/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.CategoryDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.CategoryDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.CategoryModels.CategoryPostListGeneric>;
    /**
     * @api category | deleteList | /category/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.CategoryModels.CategoryDeleteListGeneric>;
    /**
     * @api category | putItem | /category/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 名称
     *   name?: string;
     *   // string (可选) - 描述
     *   description?: string;
     *   // string (可选) - 父id
     *   parentId?: string;
     *   // string (可选) - 所属机构ID
     *   institutionId?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.CategoryModels.CategoryPutItemGeneric>;
    /**
     * @api category | postItem | /category/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 名称
     *   name?: string;
     *   // string (可选) - 描述
     *   description?: string;
     *   // string (可选) - 父id
     *   parentId?: string;
     *   // string (可选) - 所属机构ID
     *   institutionId?: string;
     *   // string (可选) - 机构名称
     *   insName?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.CategoryDTO (可选)
     *   data?: XinliModels.CategoryDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.CategoryModels.CategoryPostItemGeneric>;
    /**
     * @api category | postListQuery | /category/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.CategoryDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.CategoryModels.CategoryPostListQueryGeneric>;
    /**
     * @api category | getPage | /category/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.CategoryPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageCategoryDTO (可选)
     *   data?: XinliModels.BasePageCategoryDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.CategoryModels.CategoryGetPageGeneric>;
    /**
     * @api category | getItemById | /category/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.CategoryDTO (可选)
     *   data?: XinliModels.CategoryDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.CategoryModels.CategoryGetItemByIdGeneric>;
    /**
     * @api category | deleteItemById | /category/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.CategoryModels.CategoryDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | banner | putList | /banner/list | PUT | 批量修改 |
   * | banner | postList | /banner/list | POST | 批量新增 |
   * | banner | deleteList | /banner/list | DELETE | 批量删除 |
   * | banner | putItem | /banner/item | PUT | 修改 |
   * | banner | postItem | /banner/item | POST | 新增 |
   * | banner | postListQuery | /banner/list/query | POST | 批量查询 |
   * | banner | getPage | /banner/page | GET | 多条件组合分页查询 |
   * | banner | getItemById | /banner/item/{id} | GET | 查询 |
   * | banner | deleteItemById | /banner/item/{id} | DELETE | 删除 |
   */
  export const apiBanner: {
    /**
     * @api banner | putList | /banner/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateBanner[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.BannerModels.BannerPutListGeneric>;
    /**
     * @api banner | postList | /banner/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.BannerDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.BannerDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.BannerModels.BannerPostListGeneric>;
    /**
     * @api banner | deleteList | /banner/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.BannerModels.BannerDeleteListGeneric>;
    /**
     * @api banner | putItem | /banner/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - banner图的URL
     *   imageUrl?: string;
     *   // string (可选) - 跳转链接URL
     *   linkUrl?: string;
     *   // string (可选) - banner的详细说明文本
     *   description?: string;
     *   // number (可选) - 排序 | 格式: int32
     *   order?: number;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.BannerModels.BannerPutItemGeneric>;
    /**
     * @api banner | postItem | /banner/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - banner图的URL
     *   imageUrl?: string;
     *   // string (可选) - 跳转链接URL
     *   linkUrl?: string;
     *   // string (可选) - banner的详细说明文本
     *   description?: string;
     *   // number (可选) - 排序 | 格式: int32
     *   order?: number;
     *   // "{"desc":"普通","name":"NORMAL"}" | "{"desc":"内联","name":"N_LIAN"}" | "{"desc":"外联","name":"W_LIAN"}" - 类型 | 可选值: "{\"desc\":\"普通\",\"name\":\"NORMAL\"}", "{\"desc\":\"内联\",\"name\":\"N_LIAN\"}", "{\"desc\":\"外联\",\"name\":\"W_LIAN\"}"
     *   type: "NORMAL" | "N_LIAN" | "W_LIAN";
     *   // string (可选) - 内容
     *   content?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BannerDTO (可选)
     *   data?: XinliModels.BannerDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.BannerModels.BannerPostItemGeneric>;
    /**
     * @api banner | postListQuery | /banner/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.BannerDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.BannerModels.BannerPostListQueryGeneric>;
    /**
     * @api banner | getPage | /banner/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.BannerPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageBannerDTO (可选)
     *   data?: XinliModels.BasePageBannerDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.BannerModels.BannerGetPageGeneric>;
    /**
     * @api banner | getItemById | /banner/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BannerDTO (可选)
     *   data?: XinliModels.BannerDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.BannerModels.BannerGetItemByIdGeneric>;
    /**
     * @api banner | deleteItemById | /banner/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.BannerModels.BannerDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | auditLog | putList | /auditLog/list | PUT | 批量修改审核 |
   * | auditLog | postList | /auditLog/list | POST | 批量新增审核 |
   * | auditLog | deleteList | /auditLog/list | DELETE | 批量删除审核 |
   * | auditLog | putItem | /auditLog/item | PUT | 修改审核 |
   * | auditLog | postItem | /auditLog/item | POST | 新增审核 |
   * | auditLog | postListQuery | /auditLog/list/query | POST | 批量查询审核 |
   * | auditLog | getPage | /auditLog/page | GET | 多条件组合分页查询 |
   * | auditLog | getItemById | /auditLog/item/{id} | GET | 查询审核 |
   * | auditLog | deleteItemById | /auditLog/item/{id} | DELETE | 删除审核 |
   * | auditLog | getGetPassword | /auditLog/getPassword | GET | 查看账号密码 |
   */
  export const apiAuditLog: {
    /**
     * @api auditLog | putList | /auditLog/list | PUT | 批量修改审核
     * @body
     * ```ts
     * XinliModels.UpdateAuditLog[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuditLogModels.AuditLogPutListGeneric>;
    /**
     * @api auditLog | postList | /auditLog/list | POST | 批量新增审核
     * @body
     * ```ts
     * XinliModels.AuditLogDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.AuditLogDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuditLogModels.AuditLogPostListGeneric>;
    /**
     * @api auditLog | deleteList | /auditLog/list | DELETE | 批量删除审核
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuditLogModels.AuditLogDeleteListGeneric>;
    /**
     * @api auditLog | putItem | /auditLog/item | PUT | 修改审核
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 申请ID
     *   applicantId?: string;
     *   // string (可选) - 审核ID
     *   auditorId?: string;
     *   // string (可选) - 内容
     *   content?: string;
     *   // "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" (可选) - 审核类型，枚举：AuditLogType | 可选值: "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}"
     *   type?: "INSTITUTION" | "DOCTOR";
     *   // string (可选) - 审核意见
     *   reason?: string;
     *   // string (可选)
     *   userName?: string;
     *   // string (可选)
     *   userPassword?: string;
     *   // number (可选) - 格式: int32
     *   count?: number;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuditLogModels.AuditLogPutItemGeneric>;
    /**
     * @api auditLog | postItem | /auditLog/item | POST | 新增审核
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 申请id
     *   applicantId?: string;
     *   // string (可选) - 审核id
     *   auditorId?: string;
     *   // string (可选) - 内容
     *   content?: string;
     *   // "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" (可选) - 审核类型，枚举：AuditLogType | 可选值: "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}"
     *   type?: "INSTITUTION" | "DOCTOR";
     *   // string (可选) - 审核意见
     *   reason?: string;
     *   // string (可选) - 申请name
     *   applicantName?: string;
     *   // string (可选) - 审核name
     *   auditorName?: string;
     *   // string (可选)
     *   userName?: string;
     *   // string (可选)
     *   userPassword?: string;
     *   // number (可选) - 格式: int32
     *   count?: number;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AuditLogDTO (可选)
     *   data?: XinliModels.AuditLogDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuditLogModels.AuditLogPostItemGeneric>;
    /**
     * @api auditLog | postListQuery | /auditLog/list/query | POST | 批量查询审核
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.AuditLogDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuditLogModels.AuditLogPostListQueryGeneric>;
    /**
     * @api auditLog | getPage | /auditLog/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.AuditLogPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageAuditLogDTO (可选)
     *   data?: XinliModels.BasePageAuditLogDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuditLogModels.AuditLogGetPageGeneric>;
    /**
     * @api auditLog | getItemById | /auditLog/item/{id} | GET | 查询审核
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AuditLogDTO (可选)
     *   data?: XinliModels.AuditLogDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuditLogModels.AuditLogGetItemByIdGeneric>;
    /**
     * @api auditLog | deleteItemById | /auditLog/item/{id} | DELETE | 删除审核
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuditLogModels.AuditLogDeleteItemByIdGeneric>;
    /**
     * @api auditLog | getGetPassword | /auditLog/getPassword | GET | 查看账号密码
     * @query
     * ```ts
     * {
     *   // string
     *   id: string;
     *   // string
     *   appId: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.UsernamePassword (可选)
     *   data?: XinliModels.UsernamePassword;
     * }
     * ```
     */
    getGetPassword: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuditLogModels.AuditLogGetGetPasswordGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | article | putUpdateStatusById | /article/updateStatus/{id} | PUT | 修改状态 |
   * | article | putList | /article/list | PUT | 批量修改 |
   * | article | postList | /article/list | POST | 批量新增 |
   * | article | deleteList | /article/list | DELETE | 批量删除 |
   * | article | putItem | /article/item | PUT | 修改 |
   * | article | postItem | /article/item | POST | 新增 |
   * | article | postListQuery | /article/list/query | POST | 批量查询 |
   * | article | getPage | /article/page | GET | 多条件组合分页查询 |
   * | article | getItemById | /article/item/{id} | GET | 查询 |
   * | article | deleteItemById | /article/item/{id} | DELETE | 删除 |
   */
  export const apiArticle: {
    /**
     * @api article | putUpdateStatusById | /article/updateStatus/{id} | PUT | 修改状态
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putUpdateStatusById: ApiFunctionGenerate<RequestInit, Response, tsTypes.ArticleModels.ArticlePutUpdateStatusByIdGeneric>;
    /**
     * @api article | putList | /article/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateArticle[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.ArticleModels.ArticlePutListGeneric>;
    /**
     * @api article | postList | /article/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.ArticleDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.ArticleDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.ArticleModels.ArticlePostListGeneric>;
    /**
     * @api article | deleteList | /article/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.ArticleModels.ArticleDeleteListGeneric>;
    /**
     * @api article | putItem | /article/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 文章标题
     *   title?: string;
     *   // string (可选) - 文章内容（富文本）
     *   content?: string;
     *   // string (可选) - 文章分类
     *   type?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 文章状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // string (可选) - 副标题
     *   subhead?: string;
     *   // number (可选) - 浏览量 | 格式: int32
     *   pageViews?: number;
     *   // string (可选) - 附件
     *   annex?: string;
     *   // string (可选) - 图片
     *   image?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.ArticleModels.ArticlePutItemGeneric>;
    /**
     * @api article | postItem | /article/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 文章标题
     *   title?: string;
     *   // string (可选) - 文章内容（富文本）
     *   content?: string;
     *   // string (可选) - 文章分类
     *   type?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 文章状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // string (可选) - 副标题
     *   subhead?: string;
     *   // number (可选) - 浏览量 | 格式: int32
     *   pageViews?: number;
     *   // string (可选) - 文章分类名字
     *   typeName?: string;
     *   // string (可选) - 附件
     *   annex?: string;
     *   // string (可选) - 图片
     *   image?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.ArticleDTO (可选)
     *   data?: XinliModels.ArticleDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.ArticleModels.ArticlePostItemGeneric>;
    /**
     * @api article | postListQuery | /article/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.ArticleDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.ArticleModels.ArticlePostListQueryGeneric>;
    /**
     * @api article | getPage | /article/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.ArticlePageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageArticleDTO (可选)
     *   data?: XinliModels.BasePageArticleDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.ArticleModels.ArticleGetPageGeneric>;
    /**
     * @api article | getItemById | /article/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.ArticleDTO (可选)
     *   data?: XinliModels.ArticleDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.ArticleModels.ArticleGetItemByIdGeneric>;
    /**
     * @api article | deleteItemById | /article/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.ArticleModels.ArticleDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | answers | putList | /answers/list | PUT | 批量修改 |
   * | answers | postList | /answers/list | POST | 批量新增 |
   * | answers | deleteList | /answers/list | DELETE | 批量删除 |
   * | answers | putItem | /answers/item | PUT | 修改 |
   * | answers | postItem | /answers/item | POST | 新增 |
   * | answers | postListQuery | /answers/list/query | POST | 批量查询 |
   * | answers | getPage | /answers/page | GET | 多条件组合分页查询 |
   * | answers | getItemById | /answers/item/{id} | GET | 查询 |
   * | answers | deleteItemById | /answers/item/{id} | DELETE | 删除 |
   */
  export const apiAnswers: {
    /**
     * @api answers | putList | /answers/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateAnswers[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswersModels.AnswersPutListGeneric>;
    /**
     * @api answers | postList | /answers/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.AnswersDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.AnswersDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswersModels.AnswersPostListGeneric>;
    /**
     * @api answers | deleteList | /answers/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswersModels.AnswersDeleteListGeneric>;
    /**
     * @api answers | putItem | /answers/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 用户ID
     *   userId?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // number (可选) - 总分数 | 格式: int32
     *   totalScore?: number;
     *   // string (可选) - 回答详细内容
     *   answer?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswersModels.AnswersPutItemGeneric>;
    /**
     * @api answers | postItem | /answers/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 用户ID
     *   userId?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // number (可选) - 总分数 | 格式: int32
     *   totalScore?: number;
     *   // string (可选) - 回答详细内容
     *   answer?: string;
     *   // string (可选) - 用户名
     *   userName?: string;
     *   // string (可选) - 量表标题
     *   title?: string;
     *   // string (可选) - 维度
     *   dimension?: string;
     *   // string (可选) - 测评结论
     *   conclusion?: string;
     *   // string (可选) - 结论解析
     *   analysis?: string;
     *   // string (可选) - 建议
     *   recommendation?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AnswersDTO (可选)
     *   data?: XinliModels.AnswersDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswersModels.AnswersPostItemGeneric>;
    /**
     * @api answers | postListQuery | /answers/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.AnswersDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswersModels.AnswersPostListQueryGeneric>;
    /**
     * @api answers | getPage | /answers/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.AnswersPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageAnswersDTO (可选)
     *   data?: XinliModels.BasePageAnswersDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswersModels.AnswersGetPageGeneric>;
    /**
     * @api answers | getItemById | /answers/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AnswersDTO (可选)
     *   data?: XinliModels.AnswersDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswersModels.AnswersGetItemByIdGeneric>;
    /**
     * @api answers | deleteItemById | /answers/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswersModels.AnswersDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | answerScoreRanges | putList | /answerScoreRanges/list | PUT | 批量修改 |
   * | answerScoreRanges | postList | /answerScoreRanges/list | POST | 批量新增 |
   * | answerScoreRanges | deleteList | /answerScoreRanges/list | DELETE | 批量删除 |
   * | answerScoreRanges | putItem | /answerScoreRanges/item | PUT | 修改 |
   * | answerScoreRanges | postItem | /answerScoreRanges/item | POST | 新增 |
   * | answerScoreRanges | postListQuery | /answerScoreRanges/list/query | POST | 批量查询 |
   * | answerScoreRanges | getPage | /answerScoreRanges/page | GET | 多条件组合分页查询 |
   * | answerScoreRanges | getItemById | /answerScoreRanges/item/{id} | GET | 查询 |
   * | answerScoreRanges | deleteItemById | /answerScoreRanges/item/{id} | DELETE | 删除 |
   */
  export const apiAnswerScoreRanges: {
    /**
     * @api answerScoreRanges | putList | /answerScoreRanges/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateAnswerScoreRanges[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswerScoreRangesModels.AnswerScoreRangesPutListGeneric>;
    /**
     * @api answerScoreRanges | postList | /answerScoreRanges/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.AnswerScoreRangesDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.AnswerScoreRangesDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswerScoreRangesModels.AnswerScoreRangesPostListGeneric>;
    /**
     * @api answerScoreRanges | deleteList | /answerScoreRanges/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswerScoreRangesModels.AnswerScoreRangesDeleteListGeneric>;
    /**
     * @api answerScoreRanges | putItem | /answerScoreRanges/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // string (可选) - 维度
     *   dimension?: string;
     *   // number (可选) - 分数区间最小值 | 格式: int32
     *   minScore?: number;
     *   // number (可选) - 分数区间最大值 | 格式: int32
     *   maxScore?: number;
     *   // string (可选) - 测评结论
     *   conclusion?: string;
     *   // string (可选) - 结论解析
     *   analysis?: string;
     *   // string (可选) - 建议
     *   recommendation?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswerScoreRangesModels.AnswerScoreRangesPutItemGeneric>;
    /**
     * @api answerScoreRanges | postItem | /answerScoreRanges/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 量表ID
     *   surveysId?: string;
     *   // string (可选) - 维度
     *   dimension?: string;
     *   // number (可选) - 分数区间最小值 | 格式: int32
     *   minScore?: number;
     *   // number (可选) - 分数区间最大值 | 格式: int32
     *   maxScore?: number;
     *   // string (可选) - 测评结论
     *   conclusion?: string;
     *   // string (可选) - 结论解析
     *   analysis?: string;
     *   // string (可选) - 建议
     *   recommendation?: string;
     *   // string (可选) - 量表标题
     *   title?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AnswerScoreRangesDTO (可选)
     *   data?: XinliModels.AnswerScoreRangesDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswerScoreRangesModels.AnswerScoreRangesPostItemGeneric>;
    /**
     * @api answerScoreRanges | postListQuery | /answerScoreRanges/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.AnswerScoreRangesDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswerScoreRangesModels.AnswerScoreRangesPostListQueryGeneric>;
    /**
     * @api answerScoreRanges | getPage | /answerScoreRanges/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.AnswerScoreRangesPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageAnswerScoreRangesDTO (可选)
     *   data?: XinliModels.BasePageAnswerScoreRangesDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswerScoreRangesModels.AnswerScoreRangesGetPageGeneric>;
    /**
     * @api answerScoreRanges | getItemById | /answerScoreRanges/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AnswerScoreRangesDTO (可选)
     *   data?: XinliModels.AnswerScoreRangesDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswerScoreRangesModels.AnswerScoreRangesGetItemByIdGeneric>;
    /**
     * @api answerScoreRanges | deleteItemById | /answerScoreRanges/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnswerScoreRangesModels.AnswerScoreRangesDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | announcement | putUpdateStatusById | /announcement/updateStatus/{id} | PUT | 修改状态 |
   * | announcement | putList | /announcement/list | PUT | 批量修改 |
   * | announcement | postList | /announcement/list | POST | 批量新增 |
   * | announcement | deleteList | /announcement/list | DELETE | 批量删除 |
   * | announcement | putItem | /announcement/item | PUT | 修改 |
   * | announcement | postItem | /announcement/item | POST | 新增 |
   * | announcement | postListQuery | /announcement/list/query | POST | 批量查询 |
   * | announcement | getPage | /announcement/page | GET | 多条件组合分页查询 |
   * | announcement | getItemById | /announcement/item/{id} | GET | 查询 |
   * | announcement | deleteItemById | /announcement/item/{id} | DELETE | 删除 |
   */
  export const apiAnnouncement: {
    /**
     * @api announcement | putUpdateStatusById | /announcement/updateStatus/{id} | PUT | 修改状态
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putUpdateStatusById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnnouncementModels.AnnouncementPutUpdateStatusByIdGeneric>;
    /**
     * @api announcement | putList | /announcement/list | PUT | 批量修改
     * @body
     * ```ts
     * XinliModels.UpdateAnnouncement[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putList: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnnouncementModels.AnnouncementPutListGeneric>;
    /**
     * @api announcement | postList | /announcement/list | POST | 批量新增
     * @body
     * ```ts
     * XinliModels.AnnouncementDTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.AnnouncementDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnnouncementModels.AnnouncementPostListGeneric>;
    /**
     * @api announcement | deleteList | /announcement/list | DELETE | 批量删除
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnnouncementModels.AnnouncementDeleteListGeneric>;
    /**
     * @api announcement | putItem | /announcement/item | PUT | 修改
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 公告标题
     *   title?: string;
     *   // string (可选) - 公告内容（富文本）
     *   content?: string;
     *   // boolean (可选) - 是否开启，1为开启，0为关闭
     *   isActive?: boolean;
     *   // string (可选) - 公告有效期的开始时间 | 格式: date-time
     *   startTime?: string;
     *   // string (可选) - 公告有效期的结束时间 | 格式: date-time
     *   endTime?: string;
     *   // number (可选) - 置顶优先级 | 格式: int32
     *   isTop?: number;
     *   // string (可选) - 公告分类
     *   type?: string;
     *   // string (可选) - 公告图片
     *   image?: string;
     *   // string (可选) - 副标题
     *   subhead?: string;
     *   // string (可选) - 附件
     *   annex?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnnouncementModels.AnnouncementPutItemGeneric>;
    /**
     * @api announcement | postItem | /announcement/item | POST | 新增
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 公告标题
     *   title?: string;
     *   // string (可选) - 公告内容（富文本）
     *   content?: string;
     *   // boolean (可选) - 是否开启，1为开启，0为关闭
     *   isActive?: boolean;
     *   // string (可选) - 公告有效期的开始时间 | 格式: date-time
     *   startTime?: string;
     *   // string (可选) - 公告有效期的结束时间 | 格式: date-time
     *   endTime?: string;
     *   // number (可选) - 置顶优先级 | 格式: int32
     *   isTop?: number;
     *   // string (可选) - 公告分类
     *   type?: string;
     *   // string (可选) - 公告图片
     *   image?: string;
     *   // string (可选) - 副标题
     *   subhead?: string;
     *   // string (可选) - 附件
     *   annex?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AnnouncementDTO (可选)
     *   data?: XinliModels.AnnouncementDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnnouncementModels.AnnouncementPostItemGeneric>;
    /**
     * @api announcement | postListQuery | /announcement/list/query | POST | 批量查询
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.AnnouncementDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnnouncementModels.AnnouncementPostListQueryGeneric>;
    /**
     * @api announcement | getPage | /announcement/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.AnnouncementPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageAnnouncementDTO (可选)
     *   data?: XinliModels.BasePageAnnouncementDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnnouncementModels.AnnouncementGetPageGeneric>;
    /**
     * @api announcement | getItemById | /announcement/item/{id} | GET | 查询
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AnnouncementDTO (可选)
     *   data?: XinliModels.AnnouncementDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnnouncementModels.AnnouncementGetItemByIdGeneric>;
    /**
     * @api announcement | deleteItemById | /announcement/item/{id} | DELETE | 删除
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AnnouncementModels.AnnouncementDeleteItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | account | putStatusById | /account/status/{id} | PUT | 修改状态 |
   * | account | putPassword | /account/password | PUT | 修改密码 |
   * | account | putItem | /account/item | PUT | 修改账号信息 |
   * | account | postItem | /account/item | POST | 新增账号信息 |
   * | account | postLogin | /account/login | POST | 登录 |
   * | account | postGetUserNameById | /account/getUserNameById | POST | 根据账号id查询userName |
   * | account | getPage | /account/page | GET | 分页查询 |
   * | account | getItemById | /account/item/{id} | GET | 根据id获取账号信息 |
   * | account | deleteItemById | /account/item/{id} | DELETE | 删除账号 |
   * | account | getGetAccountInfo | /account/getAccountInfo | GET | 获取登录账号信息 |
   * | account | deleteList | /account/list | DELETE | 删除账号信息 |
   */
  export const apiAccount: {
    /**
     * @api account | putStatusById | /account/status/{id} | PUT | 修改状态
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putStatusById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AccountModels.AccountPutStatusByIdGeneric>;
    /**
     * @api account | putPassword | /account/password | PUT | 修改密码
     * @body
     * ```ts
     * {
     *   // string - 用户名
     *   username: string;
     *   // string - 用户密码
     *   password: string;
     *   // string (可选) - ras密码
     *   rsaPassword?: string;
     *   // string (可选)
     *   code?: string;
     *   // string (可选) - 商家id
     *   storeId?: string;
     *   // string (可选)
     *   openId?: string;
     *   // number (可选) - 格式: int32
     *   remainCount?: number;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putPassword: ApiFunctionGenerate<RequestInit, Response, tsTypes.AccountModels.AccountPutPasswordGeneric>;
    /**
     * @api account | putItem | /account/item | PUT | 修改账号信息
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string (可选) - 角色ids
     *   roleIds?: string;
     *   // string (可选) - 用户名
     *   userName?: string;
     *   // "{"desc":"管理","name":"ADMIN"}" | "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" | "{"desc":"用户","name":"USER"}" (可选) - 类型(超管,商家) | 可选值: "{\"desc\":\"管理\",\"name\":\"ADMIN\"}", "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}", "{\"desc\":\"用户\",\"name\":\"USER\"}"
     *   type?: "ADMIN" | "INSTITUTION" | "DOCTOR" | "USER";
     *   // string (可选) - 昵称
     *   nickName?: string;
     *   // string (可选) - 电话
     *   phone?: string;
     *   // string (可选) - 身份证号
     *   idNumber?: string;
     *   // string (可选) - 头像路径
     *   avatarPicPath?: string;
     *   // string (可选) - 菜单ids
     *   menuIds?: string;
     *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
     *   sex?: "MAN" | "WOMAN" | "UNKNOWN";
     *   // number (可选) - 年龄 | 格式: int32
     *   age?: number;
     *   // string (可选) - 描述
     *   desc?: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    putItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.AccountModels.AccountPutItemGeneric>;
    /**
     * @api account | postItem | /account/item | POST | 新增账号信息
     * @body
     * ```ts
     * {
     *   // string (可选)
     *   id?: string;
     *   // string (可选) - 格式: date-time
     *   createTime?: string;
     *   // string - 角色ids
     *   roleIds: string;
     *   // string - 用户名
     *   userName: string;
     *   // string - 用户密码
     *   userPassword: string;
     *   // "{"desc":"管理","name":"ADMIN"}" | "{"desc":"机构","name":"INSTITUTION"}" | "{"desc":"医生","name":"DOCTOR"}" | "{"desc":"用户","name":"USER"}" - 类型(超管,商家) | 可选值: "{\"desc\":\"管理\",\"name\":\"ADMIN\"}", "{\"desc\":\"机构\",\"name\":\"INSTITUTION\"}", "{\"desc\":\"医生\",\"name\":\"DOCTOR\"}", "{\"desc\":\"用户\",\"name\":\"USER\"}"
     *   type: "ADMIN" | "INSTITUTION" | "DOCTOR" | "USER";
     *   // string - 昵称
     *   nickName: string;
     *   // string (可选) - 电话
     *   phone?: string;
     *   // string (可选) - 身份证号
     *   idNumber?: string;
     *   // string (可选) - 最后登录时间 | 格式: date-time
     *   lastLoginTime?: string;
     *   // string (可选) - 最后登录ip
     *   lastLoginIp?: string;
     *   // "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 账号状态(启用,禁用) | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}"
     *   status?: "ENABLE" | "DISABLE";
     *   // number (可选) - 登录错误次数 | 格式: int32
     *   loginErrorCount?: number;
     *   // string (可选) - 登录错误时间 | 格式: date-time
     *   loginErrorTime?: string;
     *   // string (可选) - 头像路径
     *   avatarPicPath?: string;
     *   // string (可选) - 菜单ids
     *   menuIds?: string;
     *   // "{"desc":"男","name":"MAN"}" | "{"desc":"女","name":"WOMAN"}" | "{"desc":"未知","name":"UNKNOWN"}" (可选) - 性别 | 可选值: "{\"desc\":\"男\",\"name\":\"MAN\"}", "{\"desc\":\"女\",\"name\":\"WOMAN\"}", "{\"desc\":\"未知\",\"name\":\"UNKNOWN\"}"
     *   sex?: "MAN" | "WOMAN" | "UNKNOWN";
     *   // number (可选) - 年龄 | 格式: int32
     *   age?: number;
     *   // string (可选) - 描述
     *   desc?: string;
     *   // array (可选) - 角色名称
     *   roleName?: string[];
     *   // boolean (可选)
     *   lock?: boolean;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AccountInfoDTO (可选)
     *   data?: XinliModels.AccountInfoDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.AccountModels.AccountPostItemGeneric>;
    /**
     * @api account | postLogin | /account/login | POST | 登录
     * @body
     * ```ts
     * {
     *   // string - 用户名
     *   username: string;
     *   // string - 用户密码
     *   password: string;
     *   // string (可选) - ras密码
     *   rsaPassword?: string;
     *   // string (可选)
     *   code?: string;
     *   // string (可选) - 商家id
     *   storeId?: string;
     *   // string (可选)
     *   openId?: string;
     *   // number (可选) - 格式: int32
     *   remainCount?: number;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // string (可选)
     *   data?: string;
     * }
     * ```
     */
    postLogin: ApiFunctionGenerate<RequestInit, Response, tsTypes.AccountModels.AccountPostLoginGeneric>;
    /**
     * @api account | postGetUserNameById | /account/getUserNameById | POST | 根据账号id查询userName
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // object (可选)
     *   data?: Record<string, string>;
     * }
     * ```
     */
    postGetUserNameById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AccountModels.AccountPostGetUserNameByIdGeneric>;
    /**
     * @api account | getPage | /account/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.AccountInfoPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageAccountInfoDTO (可选)
     *   data?: XinliModels.BasePageAccountInfoDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.AccountModels.AccountGetPageGeneric>;
    /**
     * @api account | getItemById | /account/item/{id} | GET | 根据id获取账号信息
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AccountInfoDTO (可选)
     *   data?: XinliModels.AccountInfoDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AccountModels.AccountGetItemByIdGeneric>;
    /**
     * @api account | deleteItemById | /account/item/{id} | DELETE | 删除账号
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.AccountModels.AccountDeleteItemByIdGeneric>;
    /**
     * @api account | getGetAccountInfo | /account/getAccountInfo | GET | 获取登录账号信息
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AccountInfoDTO (可选)
     *   data?: XinliModels.AccountInfoDTO;
     * }
     * ```
     */
    getGetAccountInfo: ApiFunctionGenerate<RequestInit, Response, tsTypes.AccountModels.AccountGetGetAccountInfoGeneric>;
    /**
     * @api account | deleteList | /account/list | DELETE | 删除账号信息
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // boolean (可选)
     *   data?: boolean;
     * }
     * ```
     */
    deleteList: ApiFunctionGenerate<RequestInit, Response, tsTypes.AccountModels.AccountDeleteListGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | logInfo | postListQuery | /logInfo/list/query | POST | 批量查询日志 |
   * | logInfo | getPage | /logInfo/page | GET | 多条件组合分页查询 |
   * | logInfo | getItemById | /logInfo/item/{id} | GET | 查询日志 |
   */
  export const apiLogInfo: {
    /**
     * @api logInfo | postListQuery | /logInfo/list/query | POST | 批量查询日志
     * @body
     * ```ts
     * string[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.LogInfoDTO[];
     * }
     * ```
     */
    postListQuery: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogInfoModels.LogInfoPostListQueryGeneric>;
    /**
     * @api logInfo | getPage | /logInfo/page | GET | 多条件组合分页查询
     * @query
     * ```ts
     * XinliModels.LogInfoPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageLogInfoDTO (可选)
     *   data?: XinliModels.BasePageLogInfoDTO;
     * }
     * ```
     */
    getPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogInfoModels.LogInfoGetPageGeneric>;
    /**
     * @api logInfo | getItemById | /logInfo/item/{id} | GET | 查询日志
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
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.LogInfoDTO (可选)
     *   data?: XinliModels.LogInfoDTO;
     * }
     * ```
     */
    getItemById: ApiFunctionGenerate<RequestInit, Response, tsTypes.LogInfoModels.LogInfoGetItemByIdGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | im | postLogin | /im/login | POST | 医生登录 |
   * | im | getLink | /im/link | GET | im连接 |
   * | im | getInfo | /im/info | GET | 当前登录信息 |
   */
  export const apiIm: {
    /**
     * @api im | postLogin | /im/login | POST | 医生登录
     * @body
     * ```ts
     * {
     *   // string - 用户名
     *   username: string;
     *   // string - 用户密码
     *   password: string;
     *   // string (可选) - ras密码
     *   rsaPassword?: string;
     *   // string (可选)
     *   code?: string;
     *   // string (可选) - 商家id
     *   storeId?: string;
     *   // string (可选)
     *   openId?: string;
     *   // number (可选) - 格式: int32
     *   remainCount?: number;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // string (可选)
     *   data?: string;
     * }
     * ```
     */
    postLogin: ApiFunctionGenerate<RequestInit, Response, tsTypes.ImModels.ImPostLoginGeneric>;
    /**
     * @api im | getLink | /im/link | GET | im连接
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.IMLinkDTO (可选)
     *   data?: XinliModels.IMLinkDTO;
     * }
     * ```
     */
    getLink: ApiFunctionGenerate<RequestInit, Response, tsTypes.ImModels.ImGetLinkGeneric>;
    /**
     * @api im | getInfo | /im/info | GET | 当前登录信息
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.AccountInfoDTO (可选)
     *   data?: XinliModels.AccountInfoDTO;
     * }
     * ```
     */
    getInfo: ApiFunctionGenerate<RequestInit, Response, tsTypes.ImModels.ImGetInfoGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | file | postList | /file/list | POST | 批量上传文件（FormData） |
   * | file | postListBase64 | /file/list/base64 | POST | 批量上传文件（Base64） |
   * | file | postItem | /file/item | POST | 上传文件（FormData） |
   * | file | postChunk | /file/chunk | POST | 分片上传 |
   * | file | getDownload | /file/download | GET | 下载文件 |
   */
  export const apiFile: {
    /**
     * @api file | postList | /file/list | POST | 批量上传文件（FormData）
     * @query
     * ```ts
     * {
     *   // array
     *   files: string[];
     *   // string
     *   parentPath: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.UploadResultDTO[];
     * }
     * ```
     */
    postList: ApiFunctionGenerate<RequestInit, Response, tsTypes.FileModels.FilePostListGeneric>;
    /**
     * @api file | postListBase64 | /file/list/base64 | POST | 批量上传文件（Base64）
     * @body
     * ```ts
     * XinliModels.UploadBase64DTO[]
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // array (可选)
     *   data?: XinliModels.UploadResultDTO[];
     * }
     * ```
     */
    postListBase64: ApiFunctionGenerate<RequestInit, Response, tsTypes.FileModels.FilePostListBase64Generic>;
    /**
     * @api file | postItem | /file/item | POST | 上传文件（FormData）
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
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.UploadResultDTO (可选)
     *   data?: XinliModels.UploadResultDTO;
     * }
     * ```
     */
    postItem: ApiFunctionGenerate<RequestInit, Response, tsTypes.FileModels.FilePostItemGeneric>;
    /**
     * @api file | postChunk | /file/chunk | POST | 分片上传
     * @query
     * ```ts
     * {
     *   // number - 格式: int32
     *   chunkNumber: number;
     *   // number - 格式: int32
     *   totalChunks: number;
     *   // string
     *   fileName: string;
     *   // string
     *   clientMd5: string;
     * }
     * ```
     * @body
     * ```ts
     * {
     *   // string - 格式: binary
     *   file: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.UploadResultDTO (可选)
     *   data?: XinliModels.UploadResultDTO;
     * }
     * ```
     */
    postChunk: ApiFunctionGenerate<RequestInit, Response, tsTypes.FileModels.FilePostChunkGeneric>;
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
   * | user | getCollectionPage | /user/collection/page | GET | 分页查询 |
   */
  export const apiUser: {
    /**
     * @api user | getCollectionPage | /user/collection/page | GET | 分页查询
     * @query
     * ```ts
     * XinliModels.UserCollectionPageQuery
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // XinliModels.BasePageUserCollectionDto (可选)
     *   data?: XinliModels.BasePageUserCollectionDto;
     * }
     * ```
     */
    getCollectionPage: ApiFunctionGenerate<RequestInit, Response, tsTypes.UserModels.UserGetCollectionPageGeneric>;
  };
  /**
   * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
   * | --- | --- | --- | --- | --- |
   * | auth | getGetKeyByAppId | /auth/getKey/{appId} | GET | 查询密钥 |
   */
  export const apiAuth: {
    /**
     * @api auth | getGetKeyByAppId | /auth/getKey/{appId} | GET | 查询密钥
     * @params
     * ```ts
     * {
     *   // string
     *   appId: string;
     * }
     * ```
     * @response
     * ```ts
     * {
     *   // number (可选) - 格式: int32
     *   code?: number;
     *   // string (可选)
     *   msg?: string;
     *   // string (可选)
     *   data?: string;
     * }
     * ```
     */
    getGetKeyByAppId: ApiFunctionGenerate<RequestInit, Response, tsTypes.AuthModels.AuthGetGetKeyByAppIdGeneric>;
  };
}
