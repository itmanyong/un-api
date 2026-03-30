import { XinliModels } from "./models";
export namespace UserModels {
  /**
   * @url /user/collection/page
   * @summary 分页查询
   * @description
   */
  export type UserGetCollectionPageQuery = XinliModels.UserCollectionPageQuery;
  export type UserGetCollectionPageParams = Record<string, any>;
  export type UserGetCollectionPageBody = any;
  export type UserGetCollectionPageHeader = Record<string, any>;
  export type UserGetCollectionPageCookie = Record<string, any>;
  export type UserGetCollectionPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageUserCollectionDto (可选) */
    data?: XinliModels.BasePageUserCollectionDto;
  };
  export type UserGetCollectionPageGeneric = {
    query: UserGetCollectionPageQuery;
    params: UserGetCollectionPageParams;
    data: UserGetCollectionPageBody;
    header: UserGetCollectionPageHeader;
    cookie: UserGetCollectionPageCookie;
    result: UserGetCollectionPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };
}
