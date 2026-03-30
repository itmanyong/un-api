import { YusuanModels } from "./models";
export namespace ConfigModels {
  /**
   * @url /config/update
   * @summary 修改系统配置(自定义)
   * @description
   */
  export type ConfigPutUpdateQuery = Record<string, any>;
  export type ConfigPutUpdateParams = Record<string, any>;
  export type ConfigPutUpdateBody = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string - key */
    key: string;

    /** string - value */
    value: string;
  };
  export type ConfigPutUpdateHeader = Record<string, any>;
  export type ConfigPutUpdateCookie = Record<string, any>;
  export type ConfigPutUpdateResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** boolean (可选) - 返回数据 */
    data?: boolean;
  };
  export type ConfigPutUpdateGeneric = {
    query: ConfigPutUpdateQuery;
    params: ConfigPutUpdateParams;
    data: ConfigPutUpdateBody;
    header: ConfigPutUpdateHeader;
    cookie: ConfigPutUpdateCookie;
    result: ConfigPutUpdateResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /config/save
   * @summary 新增系统配置(自定义)
   * @description
   */
  export type ConfigPostSaveQuery = Record<string, any>;
  export type ConfigPostSaveParams = Record<string, any>;
  export type ConfigPostSaveBody = {
    /** string (可选) - 主键ID */
    id?: string;

    /** string (可选) - 创建时间 | 格式: date-time */
    createTime?: string;

    /** string (可选) - 修改时间 | 格式: date-time */
    modifTime?: string;

    /** string - key */
    key: string;

    /** string - value */
    value: string;
  };
  export type ConfigPostSaveHeader = Record<string, any>;
  export type ConfigPostSaveCookie = Record<string, any>;
  export type ConfigPostSaveResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** YusuanModels.SystemConfigDTO (可选) */
    data?: YusuanModels.SystemConfigDTO;
  };
  export type ConfigPostSaveGeneric = {
    query: ConfigPostSaveQuery;
    params: ConfigPostSaveParams;
    data: ConfigPostSaveBody;
    header: ConfigPostSaveHeader;
    cookie: ConfigPostSaveCookie;
    result: ConfigPostSaveResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /config/item
   * @summary 根据key获取配置项
   * @description
   */
  export type ConfigGetItemQuery = {
    /** string */
    key: string;
  };
  export type ConfigGetItemParams = Record<string, any>;
  export type ConfigGetItemBody = any;
  export type ConfigGetItemHeader = Record<string, any>;
  export type ConfigGetItemCookie = Record<string, any>;
  export type ConfigGetItemResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** object (可选) - 返回数据 */
    data?: Record<string, any>;
  };
  export type ConfigGetItemGeneric = {
    query: ConfigGetItemQuery;
    params: ConfigGetItemParams;
    data: ConfigGetItemBody;
    header: ConfigGetItemHeader;
    cookie: ConfigGetItemCookie;
    result: ConfigGetItemResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /config/enums
   * @summary 获取所有枚举信息
   * @description
   */
  export type ConfigGetEnumsQuery = Record<string, any>;
  export type ConfigGetEnumsParams = Record<string, any>;
  export type ConfigGetEnumsBody = any;
  export type ConfigGetEnumsHeader = Record<string, any>;
  export type ConfigGetEnumsCookie = Record<string, any>;
  export type ConfigGetEnumsResponse = {
    /** number (可选) - 状态码 | 格式: int32 */
    code?: number;

    /** string (可选) - 返回信息 */
    msg?: string;

    /** object (可选) - 返回数据 */
    data?: Record<string, any>;
  };
  export type ConfigGetEnumsGeneric = {
    query: ConfigGetEnumsQuery;
    params: ConfigGetEnumsParams;
    data: ConfigGetEnumsBody;
    header: ConfigGetEnumsHeader;
    cookie: ConfigGetEnumsCookie;
    result: ConfigGetEnumsResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };
}
