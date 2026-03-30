import { XinliModels } from "./models";
export namespace ArticleModels {
  /**
   * @url /article/updateStatus/{id}
   * @summary 修改状态
   * @description
   */
  export type ArticlePutUpdateStatusByIdQuery = Record<string, any>;
  export type ArticlePutUpdateStatusByIdParams = {
    /** string */
    id: string;
  };
  export type ArticlePutUpdateStatusByIdBody = any;
  export type ArticlePutUpdateStatusByIdHeader = Record<string, any>;
  export type ArticlePutUpdateStatusByIdCookie = Record<string, any>;
  export type ArticlePutUpdateStatusByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type ArticlePutUpdateStatusByIdGeneric = {
    query: ArticlePutUpdateStatusByIdQuery;
    params: ArticlePutUpdateStatusByIdParams;
    data: ArticlePutUpdateStatusByIdBody;
    header: ArticlePutUpdateStatusByIdHeader;
    cookie: ArticlePutUpdateStatusByIdCookie;
    result: ArticlePutUpdateStatusByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /article/list
   * @summary 批量修改
   * @description
   */
  export type ArticlePutListQuery = Record<string, any>;
  export type ArticlePutListParams = Record<string, any>;
  export type ArticlePutListBody = XinliModels.UpdateArticle[];
  export type ArticlePutListHeader = Record<string, any>;
  export type ArticlePutListCookie = Record<string, any>;
  export type ArticlePutListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type ArticlePutListGeneric = {
    query: ArticlePutListQuery;
    params: ArticlePutListParams;
    data: ArticlePutListBody;
    header: ArticlePutListHeader;
    cookie: ArticlePutListCookie;
    result: ArticlePutListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /article/list
   * @summary 批量新增
   * @description
   */
  export type ArticlePostListQuery = Record<string, any>;
  export type ArticlePostListParams = Record<string, any>;
  export type ArticlePostListBody = XinliModels.ArticleDTO[];
  export type ArticlePostListHeader = Record<string, any>;
  export type ArticlePostListCookie = Record<string, any>;
  export type ArticlePostListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.ArticleDTO[];
  };
  export type ArticlePostListGeneric = {
    query: ArticlePostListQuery;
    params: ArticlePostListParams;
    data: ArticlePostListBody;
    header: ArticlePostListHeader;
    cookie: ArticlePostListCookie;
    result: ArticlePostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /article/list
   * @summary 批量删除
   * @description
   */
  export type ArticleDeleteListQuery = Record<string, any>;
  export type ArticleDeleteListParams = Record<string, any>;
  export type ArticleDeleteListBody = string[];
  export type ArticleDeleteListHeader = Record<string, any>;
  export type ArticleDeleteListCookie = Record<string, any>;
  export type ArticleDeleteListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type ArticleDeleteListGeneric = {
    query: ArticleDeleteListQuery;
    params: ArticleDeleteListParams;
    data: ArticleDeleteListBody;
    header: ArticleDeleteListHeader;
    cookie: ArticleDeleteListCookie;
    result: ArticleDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /article/item
   * @summary 修改
   * @description
   */
  export type ArticlePutItemQuery = Record<string, any>;
  export type ArticlePutItemParams = Record<string, any>;
  export type ArticlePutItemBody = {
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
  export type ArticlePutItemHeader = Record<string, any>;
  export type ArticlePutItemCookie = Record<string, any>;
  export type ArticlePutItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type ArticlePutItemGeneric = {
    query: ArticlePutItemQuery;
    params: ArticlePutItemParams;
    data: ArticlePutItemBody;
    header: ArticlePutItemHeader;
    cookie: ArticlePutItemCookie;
    result: ArticlePutItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /article/item
   * @summary 新增
   * @description
   */
  export type ArticlePostItemQuery = Record<string, any>;
  export type ArticlePostItemParams = Record<string, any>;
  export type ArticlePostItemBody = {
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
  export type ArticlePostItemHeader = Record<string, any>;
  export type ArticlePostItemCookie = Record<string, any>;
  export type ArticlePostItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.ArticleDTO (可选) */
    data?: XinliModels.ArticleDTO;
  };
  export type ArticlePostItemGeneric = {
    query: ArticlePostItemQuery;
    params: ArticlePostItemParams;
    data: ArticlePostItemBody;
    header: ArticlePostItemHeader;
    cookie: ArticlePostItemCookie;
    result: ArticlePostItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /article/list/query
   * @summary 批量查询
   * @description
   */
  export type ArticlePostListQueryQuery = Record<string, any>;
  export type ArticlePostListQueryParams = Record<string, any>;
  export type ArticlePostListQueryBody = string[];
  export type ArticlePostListQueryHeader = Record<string, any>;
  export type ArticlePostListQueryCookie = Record<string, any>;
  export type ArticlePostListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.ArticleDTO[];
  };
  export type ArticlePostListQueryGeneric = {
    query: ArticlePostListQueryQuery;
    params: ArticlePostListQueryParams;
    data: ArticlePostListQueryBody;
    header: ArticlePostListQueryHeader;
    cookie: ArticlePostListQueryCookie;
    result: ArticlePostListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /article/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type ArticleGetPageQuery = XinliModels.ArticlePageQuery;
  export type ArticleGetPageParams = Record<string, any>;
  export type ArticleGetPageBody = any;
  export type ArticleGetPageHeader = Record<string, any>;
  export type ArticleGetPageCookie = Record<string, any>;
  export type ArticleGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageArticleDTO (可选) */
    data?: XinliModels.BasePageArticleDTO;
  };
  export type ArticleGetPageGeneric = {
    query: ArticleGetPageQuery;
    params: ArticleGetPageParams;
    data: ArticleGetPageBody;
    header: ArticleGetPageHeader;
    cookie: ArticleGetPageCookie;
    result: ArticleGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /article/item/{id}
   * @summary 查询
   * @description
   */
  export type ArticleGetItemByIdQuery = Record<string, any>;
  export type ArticleGetItemByIdParams = {
    /** string */
    id: string;
  };
  export type ArticleGetItemByIdBody = any;
  export type ArticleGetItemByIdHeader = Record<string, any>;
  export type ArticleGetItemByIdCookie = Record<string, any>;
  export type ArticleGetItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.ArticleDTO (可选) */
    data?: XinliModels.ArticleDTO;
  };
  export type ArticleGetItemByIdGeneric = {
    query: ArticleGetItemByIdQuery;
    params: ArticleGetItemByIdParams;
    data: ArticleGetItemByIdBody;
    header: ArticleGetItemByIdHeader;
    cookie: ArticleGetItemByIdCookie;
    result: ArticleGetItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /article/item/{id}
   * @summary 删除
   * @description
   */
  export type ArticleDeleteItemByIdQuery = Record<string, any>;
  export type ArticleDeleteItemByIdParams = {
    /** string */
    id: string;
  };
  export type ArticleDeleteItemByIdBody = any;
  export type ArticleDeleteItemByIdHeader = Record<string, any>;
  export type ArticleDeleteItemByIdCookie = Record<string, any>;
  export type ArticleDeleteItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type ArticleDeleteItemByIdGeneric = {
    query: ArticleDeleteItemByIdQuery;
    params: ArticleDeleteItemByIdParams;
    data: ArticleDeleteItemByIdBody;
    header: ArticleDeleteItemByIdHeader;
    cookie: ArticleDeleteItemByIdCookie;
    result: ArticleDeleteItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };
}
