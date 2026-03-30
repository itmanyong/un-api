import { XinliModels } from "./models";
export namespace SurveysParticipantModels {
  /**
   * @url /surveysParticipant/list
   * @summary 批量修改
   * @description
   */
  export type SurveysParticipantPutListQuery = Record<string, any>;
  export type SurveysParticipantPutListParams = Record<string, any>;
  export type SurveysParticipantPutListBody = XinliModels.UpdateSurveysParticipant[];
  export type SurveysParticipantPutListHeader = Record<string, any>;
  export type SurveysParticipantPutListCookie = Record<string, any>;
  export type SurveysParticipantPutListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type SurveysParticipantPutListGeneric = {
    query: SurveysParticipantPutListQuery;
    params: SurveysParticipantPutListParams;
    data: SurveysParticipantPutListBody;
    header: SurveysParticipantPutListHeader;
    cookie: SurveysParticipantPutListCookie;
    result: SurveysParticipantPutListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /surveysParticipant/list
   * @summary 批量新增
   * @description
   */
  export type SurveysParticipantPostListQuery = Record<string, any>;
  export type SurveysParticipantPostListParams = Record<string, any>;
  export type SurveysParticipantPostListBody = XinliModels.SurveysParticipantDTO[];
  export type SurveysParticipantPostListHeader = Record<string, any>;
  export type SurveysParticipantPostListCookie = Record<string, any>;
  export type SurveysParticipantPostListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SurveysParticipantDTO[];
  };
  export type SurveysParticipantPostListGeneric = {
    query: SurveysParticipantPostListQuery;
    params: SurveysParticipantPostListParams;
    data: SurveysParticipantPostListBody;
    header: SurveysParticipantPostListHeader;
    cookie: SurveysParticipantPostListCookie;
    result: SurveysParticipantPostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /surveysParticipant/list
   * @summary 批量删除
   * @description
   */
  export type SurveysParticipantDeleteListQuery = Record<string, any>;
  export type SurveysParticipantDeleteListParams = Record<string, any>;
  export type SurveysParticipantDeleteListBody = string[];
  export type SurveysParticipantDeleteListHeader = Record<string, any>;
  export type SurveysParticipantDeleteListCookie = Record<string, any>;
  export type SurveysParticipantDeleteListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type SurveysParticipantDeleteListGeneric = {
    query: SurveysParticipantDeleteListQuery;
    params: SurveysParticipantDeleteListParams;
    data: SurveysParticipantDeleteListBody;
    header: SurveysParticipantDeleteListHeader;
    cookie: SurveysParticipantDeleteListCookie;
    result: SurveysParticipantDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /surveysParticipant/item
   * @summary 修改
   * @description
   */
  export type SurveysParticipantPutItemQuery = Record<string, any>;
  export type SurveysParticipantPutItemParams = Record<string, any>;
  export type SurveysParticipantPutItemBody = {
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
  export type SurveysParticipantPutItemHeader = Record<string, any>;
  export type SurveysParticipantPutItemCookie = Record<string, any>;
  export type SurveysParticipantPutItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type SurveysParticipantPutItemGeneric = {
    query: SurveysParticipantPutItemQuery;
    params: SurveysParticipantPutItemParams;
    data: SurveysParticipantPutItemBody;
    header: SurveysParticipantPutItemHeader;
    cookie: SurveysParticipantPutItemCookie;
    result: SurveysParticipantPutItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /surveysParticipant/item
   * @summary 新增
   * @description
   */
  export type SurveysParticipantPostItemQuery = Record<string, any>;
  export type SurveysParticipantPostItemParams = Record<string, any>;
  export type SurveysParticipantPostItemBody = {
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
  export type SurveysParticipantPostItemHeader = Record<string, any>;
  export type SurveysParticipantPostItemCookie = Record<string, any>;
  export type SurveysParticipantPostItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SurveysParticipantDTO (可选) */
    data?: XinliModels.SurveysParticipantDTO;
  };
  export type SurveysParticipantPostItemGeneric = {
    query: SurveysParticipantPostItemQuery;
    params: SurveysParticipantPostItemParams;
    data: SurveysParticipantPostItemBody;
    header: SurveysParticipantPostItemHeader;
    cookie: SurveysParticipantPostItemCookie;
    result: SurveysParticipantPostItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /surveysParticipant/list/query
   * @summary 批量查询
   * @description
   */
  export type SurveysParticipantPostListQueryQuery = Record<string, any>;
  export type SurveysParticipantPostListQueryParams = Record<string, any>;
  export type SurveysParticipantPostListQueryBody = string[];
  export type SurveysParticipantPostListQueryHeader = Record<string, any>;
  export type SurveysParticipantPostListQueryCookie = Record<string, any>;
  export type SurveysParticipantPostListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.SurveysParticipantDTO[];
  };
  export type SurveysParticipantPostListQueryGeneric = {
    query: SurveysParticipantPostListQueryQuery;
    params: SurveysParticipantPostListQueryParams;
    data: SurveysParticipantPostListQueryBody;
    header: SurveysParticipantPostListQueryHeader;
    cookie: SurveysParticipantPostListQueryCookie;
    result: SurveysParticipantPostListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /surveysParticipant/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type SurveysParticipantGetPageQuery = XinliModels.SurveysParticipantPageQuery;
  export type SurveysParticipantGetPageParams = Record<string, any>;
  export type SurveysParticipantGetPageBody = any;
  export type SurveysParticipantGetPageHeader = Record<string, any>;
  export type SurveysParticipantGetPageCookie = Record<string, any>;
  export type SurveysParticipantGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageSurveysParticipantDTO (可选) */
    data?: XinliModels.BasePageSurveysParticipantDTO;
  };
  export type SurveysParticipantGetPageGeneric = {
    query: SurveysParticipantGetPageQuery;
    params: SurveysParticipantGetPageParams;
    data: SurveysParticipantGetPageBody;
    header: SurveysParticipantGetPageHeader;
    cookie: SurveysParticipantGetPageCookie;
    result: SurveysParticipantGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /surveysParticipant/item/{id}
   * @summary 查询
   * @description
   */
  export type SurveysParticipantGetItemByIdQuery = Record<string, any>;
  export type SurveysParticipantGetItemByIdParams = {
    /** string */
    id: string;
  };
  export type SurveysParticipantGetItemByIdBody = any;
  export type SurveysParticipantGetItemByIdHeader = Record<string, any>;
  export type SurveysParticipantGetItemByIdCookie = Record<string, any>;
  export type SurveysParticipantGetItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.SurveysParticipantDTO (可选) */
    data?: XinliModels.SurveysParticipantDTO;
  };
  export type SurveysParticipantGetItemByIdGeneric = {
    query: SurveysParticipantGetItemByIdQuery;
    params: SurveysParticipantGetItemByIdParams;
    data: SurveysParticipantGetItemByIdBody;
    header: SurveysParticipantGetItemByIdHeader;
    cookie: SurveysParticipantGetItemByIdCookie;
    result: SurveysParticipantGetItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /surveysParticipant/item/{id}
   * @summary 删除
   * @description
   */
  export type SurveysParticipantDeleteItemByIdQuery = Record<string, any>;
  export type SurveysParticipantDeleteItemByIdParams = {
    /** string */
    id: string;
  };
  export type SurveysParticipantDeleteItemByIdBody = any;
  export type SurveysParticipantDeleteItemByIdHeader = Record<string, any>;
  export type SurveysParticipantDeleteItemByIdCookie = Record<string, any>;
  export type SurveysParticipantDeleteItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type SurveysParticipantDeleteItemByIdGeneric = {
    query: SurveysParticipantDeleteItemByIdQuery;
    params: SurveysParticipantDeleteItemByIdParams;
    data: SurveysParticipantDeleteItemByIdBody;
    header: SurveysParticipantDeleteItemByIdHeader;
    cookie: SurveysParticipantDeleteItemByIdCookie;
    result: SurveysParticipantDeleteItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };
}
