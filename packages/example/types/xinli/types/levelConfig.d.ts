import { XinliModels } from "./models";
export namespace LevelConfigModels {
  /**
   * @url /levelConfig/list
   * @summary 批量修改
   * @description
   */
  export type LevelConfigPutListQuery = Record<string, any>;
  export type LevelConfigPutListParams = Record<string, any>;
  export type LevelConfigPutListBody = XinliModels.UpdateLevelConfig[];
  export type LevelConfigPutListHeader = Record<string, any>;
  export type LevelConfigPutListCookie = Record<string, any>;
  export type LevelConfigPutListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type LevelConfigPutListGeneric = {
    query: LevelConfigPutListQuery;
    params: LevelConfigPutListParams;
    data: LevelConfigPutListBody;
    header: LevelConfigPutListHeader;
    cookie: LevelConfigPutListCookie;
    result: LevelConfigPutListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /levelConfig/list
   * @summary 批量新增
   * @description
   */
  export type LevelConfigPostListQuery = Record<string, any>;
  export type LevelConfigPostListParams = Record<string, any>;
  export type LevelConfigPostListBody = XinliModels.LevelConfigDTO[];
  export type LevelConfigPostListHeader = Record<string, any>;
  export type LevelConfigPostListCookie = Record<string, any>;
  export type LevelConfigPostListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.LevelConfigDTO[];
  };
  export type LevelConfigPostListGeneric = {
    query: LevelConfigPostListQuery;
    params: LevelConfigPostListParams;
    data: LevelConfigPostListBody;
    header: LevelConfigPostListHeader;
    cookie: LevelConfigPostListCookie;
    result: LevelConfigPostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /levelConfig/list
   * @summary 批量删除
   * @description
   */
  export type LevelConfigDeleteListQuery = Record<string, any>;
  export type LevelConfigDeleteListParams = Record<string, any>;
  export type LevelConfigDeleteListBody = string[];
  export type LevelConfigDeleteListHeader = Record<string, any>;
  export type LevelConfigDeleteListCookie = Record<string, any>;
  export type LevelConfigDeleteListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type LevelConfigDeleteListGeneric = {
    query: LevelConfigDeleteListQuery;
    params: LevelConfigDeleteListParams;
    data: LevelConfigDeleteListBody;
    header: LevelConfigDeleteListHeader;
    cookie: LevelConfigDeleteListCookie;
    result: LevelConfigDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /levelConfig/item
   * @summary 修改
   * @description
   */
  export type LevelConfigPutItemQuery = Record<string, any>;
  export type LevelConfigPutItemParams = Record<string, any>;
  export type LevelConfigPutItemBody = {
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
  export type LevelConfigPutItemHeader = Record<string, any>;
  export type LevelConfigPutItemCookie = Record<string, any>;
  export type LevelConfigPutItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type LevelConfigPutItemGeneric = {
    query: LevelConfigPutItemQuery;
    params: LevelConfigPutItemParams;
    data: LevelConfigPutItemBody;
    header: LevelConfigPutItemHeader;
    cookie: LevelConfigPutItemCookie;
    result: LevelConfigPutItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /levelConfig/item
   * @summary 新增
   * @description
   */
  export type LevelConfigPostItemQuery = Record<string, any>;
  export type LevelConfigPostItemParams = Record<string, any>;
  export type LevelConfigPostItemBody = {
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
  export type LevelConfigPostItemHeader = Record<string, any>;
  export type LevelConfigPostItemCookie = Record<string, any>;
  export type LevelConfigPostItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.LevelConfigDTO (可选) */
    data?: XinliModels.LevelConfigDTO;
  };
  export type LevelConfigPostItemGeneric = {
    query: LevelConfigPostItemQuery;
    params: LevelConfigPostItemParams;
    data: LevelConfigPostItemBody;
    header: LevelConfigPostItemHeader;
    cookie: LevelConfigPostItemCookie;
    result: LevelConfigPostItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /levelConfig/list/query
   * @summary 批量查询
   * @description
   */
  export type LevelConfigPostListQueryQuery = Record<string, any>;
  export type LevelConfigPostListQueryParams = Record<string, any>;
  export type LevelConfigPostListQueryBody = string[];
  export type LevelConfigPostListQueryHeader = Record<string, any>;
  export type LevelConfigPostListQueryCookie = Record<string, any>;
  export type LevelConfigPostListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.LevelConfigDTO[];
  };
  export type LevelConfigPostListQueryGeneric = {
    query: LevelConfigPostListQueryQuery;
    params: LevelConfigPostListQueryParams;
    data: LevelConfigPostListQueryBody;
    header: LevelConfigPostListQueryHeader;
    cookie: LevelConfigPostListQueryCookie;
    result: LevelConfigPostListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /levelConfig/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type LevelConfigGetPageQuery = XinliModels.LevelConfigPageQuery;
  export type LevelConfigGetPageParams = Record<string, any>;
  export type LevelConfigGetPageBody = any;
  export type LevelConfigGetPageHeader = Record<string, any>;
  export type LevelConfigGetPageCookie = Record<string, any>;
  export type LevelConfigGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageLevelConfigDTO (可选) */
    data?: XinliModels.BasePageLevelConfigDTO;
  };
  export type LevelConfigGetPageGeneric = {
    query: LevelConfigGetPageQuery;
    params: LevelConfigGetPageParams;
    data: LevelConfigGetPageBody;
    header: LevelConfigGetPageHeader;
    cookie: LevelConfigGetPageCookie;
    result: LevelConfigGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /levelConfig/item/{id}
   * @summary 查询
   * @description
   */
  export type LevelConfigGetItemByIdQuery = Record<string, any>;
  export type LevelConfigGetItemByIdParams = {
    /** string */
    id: string;
  };
  export type LevelConfigGetItemByIdBody = any;
  export type LevelConfigGetItemByIdHeader = Record<string, any>;
  export type LevelConfigGetItemByIdCookie = Record<string, any>;
  export type LevelConfigGetItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.LevelConfigDTO (可选) */
    data?: XinliModels.LevelConfigDTO;
  };
  export type LevelConfigGetItemByIdGeneric = {
    query: LevelConfigGetItemByIdQuery;
    params: LevelConfigGetItemByIdParams;
    data: LevelConfigGetItemByIdBody;
    header: LevelConfigGetItemByIdHeader;
    cookie: LevelConfigGetItemByIdCookie;
    result: LevelConfigGetItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /levelConfig/item/{id}
   * @summary 删除
   * @description
   */
  export type LevelConfigDeleteItemByIdQuery = Record<string, any>;
  export type LevelConfigDeleteItemByIdParams = {
    /** string */
    id: string;
  };
  export type LevelConfigDeleteItemByIdBody = any;
  export type LevelConfigDeleteItemByIdHeader = Record<string, any>;
  export type LevelConfigDeleteItemByIdCookie = Record<string, any>;
  export type LevelConfigDeleteItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type LevelConfigDeleteItemByIdGeneric = {
    query: LevelConfigDeleteItemByIdQuery;
    params: LevelConfigDeleteItemByIdParams;
    data: LevelConfigDeleteItemByIdBody;
    header: LevelConfigDeleteItemByIdHeader;
    cookie: LevelConfigDeleteItemByIdCookie;
    result: LevelConfigDeleteItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };
}
