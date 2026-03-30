import { XinliModels } from "./models";
export namespace AuthModels {
  /**
   * @url /auth/getKey/{appId}
   * @summary 查询密钥
   * @description
   */
  export type AuthGetGetKeyByAppIdQuery = Record<string, any>;
  export type AuthGetGetKeyByAppIdParams = {
    /** string */
    appId: string;
  };
  export type AuthGetGetKeyByAppIdBody = any;
  export type AuthGetGetKeyByAppIdHeader = Record<string, any>;
  export type AuthGetGetKeyByAppIdCookie = Record<string, any>;
  export type AuthGetGetKeyByAppIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** string (可选) */
    data?: string;
  };
  export type AuthGetGetKeyByAppIdGeneric = {
    query: AuthGetGetKeyByAppIdQuery;
    params: AuthGetGetKeyByAppIdParams;
    data: AuthGetGetKeyByAppIdBody;
    header: AuthGetGetKeyByAppIdHeader;
    cookie: AuthGetGetKeyByAppIdCookie;
    result: AuthGetGetKeyByAppIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };
}
