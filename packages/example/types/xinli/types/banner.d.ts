import { XinliModels } from "./models";
export namespace BannerModels {
  /**
   * @url /banner/list
   * @summary 批量修改
   * @description
   */
  export type BannerPutListQuery = Record<string, any>;
  export type BannerPutListParams = Record<string, any>;
  export type BannerPutListBody = XinliModels.UpdateBanner[];
  export type BannerPutListHeader = Record<string, any>;
  export type BannerPutListCookie = Record<string, any>;
  export type BannerPutListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type BannerPutListGeneric = {
    query: BannerPutListQuery;
    params: BannerPutListParams;
    data: BannerPutListBody;
    header: BannerPutListHeader;
    cookie: BannerPutListCookie;
    result: BannerPutListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /banner/list
   * @summary 批量新增
   * @description
   */
  export type BannerPostListQuery = Record<string, any>;
  export type BannerPostListParams = Record<string, any>;
  export type BannerPostListBody = XinliModels.BannerDTO[];
  export type BannerPostListHeader = Record<string, any>;
  export type BannerPostListCookie = Record<string, any>;
  export type BannerPostListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.BannerDTO[];
  };
  export type BannerPostListGeneric = {
    query: BannerPostListQuery;
    params: BannerPostListParams;
    data: BannerPostListBody;
    header: BannerPostListHeader;
    cookie: BannerPostListCookie;
    result: BannerPostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /banner/list
   * @summary 批量删除
   * @description
   */
  export type BannerDeleteListQuery = Record<string, any>;
  export type BannerDeleteListParams = Record<string, any>;
  export type BannerDeleteListBody = string[];
  export type BannerDeleteListHeader = Record<string, any>;
  export type BannerDeleteListCookie = Record<string, any>;
  export type BannerDeleteListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type BannerDeleteListGeneric = {
    query: BannerDeleteListQuery;
    params: BannerDeleteListParams;
    data: BannerDeleteListBody;
    header: BannerDeleteListHeader;
    cookie: BannerDeleteListCookie;
    result: BannerDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /banner/item
   * @summary 修改
   * @description
   */
  export type BannerPutItemQuery = Record<string, any>;
  export type BannerPutItemParams = Record<string, any>;
  export type BannerPutItemBody = {
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
  export type BannerPutItemHeader = Record<string, any>;
  export type BannerPutItemCookie = Record<string, any>;
  export type BannerPutItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type BannerPutItemGeneric = {
    query: BannerPutItemQuery;
    params: BannerPutItemParams;
    data: BannerPutItemBody;
    header: BannerPutItemHeader;
    cookie: BannerPutItemCookie;
    result: BannerPutItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /banner/item
   * @summary 新增
   * @description
   */
  export type BannerPostItemQuery = Record<string, any>;
  export type BannerPostItemParams = Record<string, any>;
  export type BannerPostItemBody = {
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
  export type BannerPostItemHeader = Record<string, any>;
  export type BannerPostItemCookie = Record<string, any>;
  export type BannerPostItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BannerDTO (可选) */
    data?: XinliModels.BannerDTO;
  };
  export type BannerPostItemGeneric = {
    query: BannerPostItemQuery;
    params: BannerPostItemParams;
    data: BannerPostItemBody;
    header: BannerPostItemHeader;
    cookie: BannerPostItemCookie;
    result: BannerPostItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /banner/list/query
   * @summary 批量查询
   * @description
   */
  export type BannerPostListQueryQuery = Record<string, any>;
  export type BannerPostListQueryParams = Record<string, any>;
  export type BannerPostListQueryBody = string[];
  export type BannerPostListQueryHeader = Record<string, any>;
  export type BannerPostListQueryCookie = Record<string, any>;
  export type BannerPostListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.BannerDTO[];
  };
  export type BannerPostListQueryGeneric = {
    query: BannerPostListQueryQuery;
    params: BannerPostListQueryParams;
    data: BannerPostListQueryBody;
    header: BannerPostListQueryHeader;
    cookie: BannerPostListQueryCookie;
    result: BannerPostListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /banner/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type BannerGetPageQuery = XinliModels.BannerPageQuery;
  export type BannerGetPageParams = Record<string, any>;
  export type BannerGetPageBody = any;
  export type BannerGetPageHeader = Record<string, any>;
  export type BannerGetPageCookie = Record<string, any>;
  export type BannerGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageBannerDTO (可选) */
    data?: XinliModels.BasePageBannerDTO;
  };
  export type BannerGetPageGeneric = {
    query: BannerGetPageQuery;
    params: BannerGetPageParams;
    data: BannerGetPageBody;
    header: BannerGetPageHeader;
    cookie: BannerGetPageCookie;
    result: BannerGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /banner/item/{id}
   * @summary 查询
   * @description
   */
  export type BannerGetItemByIdQuery = Record<string, any>;
  export type BannerGetItemByIdParams = {
    /** string */
    id: string;
  };
  export type BannerGetItemByIdBody = any;
  export type BannerGetItemByIdHeader = Record<string, any>;
  export type BannerGetItemByIdCookie = Record<string, any>;
  export type BannerGetItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BannerDTO (可选) */
    data?: XinliModels.BannerDTO;
  };
  export type BannerGetItemByIdGeneric = {
    query: BannerGetItemByIdQuery;
    params: BannerGetItemByIdParams;
    data: BannerGetItemByIdBody;
    header: BannerGetItemByIdHeader;
    cookie: BannerGetItemByIdCookie;
    result: BannerGetItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /banner/item/{id}
   * @summary 删除
   * @description
   */
  export type BannerDeleteItemByIdQuery = Record<string, any>;
  export type BannerDeleteItemByIdParams = {
    /** string */
    id: string;
  };
  export type BannerDeleteItemByIdBody = any;
  export type BannerDeleteItemByIdHeader = Record<string, any>;
  export type BannerDeleteItemByIdCookie = Record<string, any>;
  export type BannerDeleteItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type BannerDeleteItemByIdGeneric = {
    query: BannerDeleteItemByIdQuery;
    params: BannerDeleteItemByIdParams;
    data: BannerDeleteItemByIdBody;
    header: BannerDeleteItemByIdHeader;
    cookie: BannerDeleteItemByIdCookie;
    result: BannerDeleteItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };
}
