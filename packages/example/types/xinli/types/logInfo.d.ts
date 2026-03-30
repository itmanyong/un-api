import { XinliModels } from "./models";
export namespace LogInfoModels {
  /**
   * @url /logInfo/list/query
   * @summary 批量查询日志
   * @description
   */
  export type LogInfoPostListQueryQuery = Record<string, any>;
  export type LogInfoPostListQueryParams = Record<string, any>;
  export type LogInfoPostListQueryBody = string[];
  export type LogInfoPostListQueryHeader = Record<string, any>;
  export type LogInfoPostListQueryCookie = Record<string, any>;
  export type LogInfoPostListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.LogInfoDTO[];
  };
  export type LogInfoPostListQueryGeneric = {
    query: LogInfoPostListQueryQuery;
    params: LogInfoPostListQueryParams;
    data: LogInfoPostListQueryBody;
    header: LogInfoPostListQueryHeader;
    cookie: LogInfoPostListQueryCookie;
    result: LogInfoPostListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /logInfo/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type LogInfoGetPageQuery = XinliModels.LogInfoPageQuery;
  export type LogInfoGetPageParams = Record<string, any>;
  export type LogInfoGetPageBody = any;
  export type LogInfoGetPageHeader = Record<string, any>;
  export type LogInfoGetPageCookie = Record<string, any>;
  export type LogInfoGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageLogInfoDTO (可选) */
    data?: XinliModels.BasePageLogInfoDTO;
  };
  export type LogInfoGetPageGeneric = {
    query: LogInfoGetPageQuery;
    params: LogInfoGetPageParams;
    data: LogInfoGetPageBody;
    header: LogInfoGetPageHeader;
    cookie: LogInfoGetPageCookie;
    result: LogInfoGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /logInfo/item/{id}
   * @summary 查询日志
   * @description
   */
  export type LogInfoGetItemByIdQuery = Record<string, any>;
  export type LogInfoGetItemByIdParams = {
    /** string */
    id: string;
  };
  export type LogInfoGetItemByIdBody = any;
  export type LogInfoGetItemByIdHeader = Record<string, any>;
  export type LogInfoGetItemByIdCookie = Record<string, any>;
  export type LogInfoGetItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.LogInfoDTO (可选) */
    data?: XinliModels.LogInfoDTO;
  };
  export type LogInfoGetItemByIdGeneric = {
    query: LogInfoGetItemByIdQuery;
    params: LogInfoGetItemByIdParams;
    data: LogInfoGetItemByIdBody;
    header: LogInfoGetItemByIdHeader;
    cookie: LogInfoGetItemByIdCookie;
    result: LogInfoGetItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };
}
