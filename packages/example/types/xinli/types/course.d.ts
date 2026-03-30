import { XinliModels } from "./models";
export namespace CourseModels {
  /**
   * @url /course/type/item
   * @summary 修改课程
   * @description
   */
  export type CoursePutTypeItemQuery = Record<string, any>;
  export type CoursePutTypeItemParams = Record<string, any>;
  export type CoursePutTypeItemBody = {
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
  export type CoursePutTypeItemHeader = Record<string, any>;
  export type CoursePutTypeItemCookie = Record<string, any>;
  export type CoursePutTypeItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CoursePutTypeItemGeneric = {
    query: CoursePutTypeItemQuery;
    params: CoursePutTypeItemParams;
    data: CoursePutTypeItemBody;
    header: CoursePutTypeItemHeader;
    cookie: CoursePutTypeItemCookie;
    result: CoursePutTypeItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /course/type/item
   * @summary 添加课程分类
   * @description
   */
  export type CoursePostTypeItemQuery = Record<string, any>;
  export type CoursePostTypeItemParams = Record<string, any>;
  export type CoursePostTypeItemBody = {
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
  export type CoursePostTypeItemHeader = Record<string, any>;
  export type CoursePostTypeItemCookie = Record<string, any>;
  export type CoursePostTypeItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.CourseTypeDto (可选) */
    data?: XinliModels.CourseTypeDto;
  };
  export type CoursePostTypeItemGeneric = {
    query: CoursePostTypeItemQuery;
    params: CoursePostTypeItemParams;
    data: CoursePostTypeItemBody;
    header: CoursePostTypeItemHeader;
    cookie: CoursePostTypeItemCookie;
    result: CoursePostTypeItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /course/type/item
   * @summary 批量删除课程
   * @description
   */
  export type CourseDeleteTypeItemQuery = Record<string, any>;
  export type CourseDeleteTypeItemParams = Record<string, any>;
  export type CourseDeleteTypeItemBody = string[];
  export type CourseDeleteTypeItemHeader = Record<string, any>;
  export type CourseDeleteTypeItemCookie = Record<string, any>;
  export type CourseDeleteTypeItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CourseDeleteTypeItemGeneric = {
    query: CourseDeleteTypeItemQuery;
    params: CourseDeleteTypeItemParams;
    data: CourseDeleteTypeItemBody;
    header: CourseDeleteTypeItemHeader;
    cookie: CourseDeleteTypeItemCookie;
    result: CourseDeleteTypeItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /course/resources/item
   * @summary 修改
   * @description
   */
  export type CoursePutResourcesItemQuery = Record<string, any>;
  export type CoursePutResourcesItemParams = Record<string, any>;
  export type CoursePutResourcesItemBody = {
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
  export type CoursePutResourcesItemHeader = Record<string, any>;
  export type CoursePutResourcesItemCookie = Record<string, any>;
  export type CoursePutResourcesItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CoursePutResourcesItemGeneric = {
    query: CoursePutResourcesItemQuery;
    params: CoursePutResourcesItemParams;
    data: CoursePutResourcesItemBody;
    header: CoursePutResourcesItemHeader;
    cookie: CoursePutResourcesItemCookie;
    result: CoursePutResourcesItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /course/resources/item
   * @summary 添加
   * @description
   */
  export type CoursePostResourcesItemQuery = Record<string, any>;
  export type CoursePostResourcesItemParams = Record<string, any>;
  export type CoursePostResourcesItemBody = {
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
  export type CoursePostResourcesItemHeader = Record<string, any>;
  export type CoursePostResourcesItemCookie = Record<string, any>;
  export type CoursePostResourcesItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.CourseResourcesDto (可选) */
    data?: XinliModels.CourseResourcesDto;
  };
  export type CoursePostResourcesItemGeneric = {
    query: CoursePostResourcesItemQuery;
    params: CoursePostResourcesItemParams;
    data: CoursePostResourcesItemBody;
    header: CoursePostResourcesItemHeader;
    cookie: CoursePostResourcesItemCookie;
    result: CoursePostResourcesItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /course/resources/item
   * @summary 批量删除
   * @description
   */
  export type CourseDeleteResourcesItemQuery = Record<string, any>;
  export type CourseDeleteResourcesItemParams = Record<string, any>;
  export type CourseDeleteResourcesItemBody = string[];
  export type CourseDeleteResourcesItemHeader = Record<string, any>;
  export type CourseDeleteResourcesItemCookie = Record<string, any>;
  export type CourseDeleteResourcesItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CourseDeleteResourcesItemGeneric = {
    query: CourseDeleteResourcesItemQuery;
    params: CourseDeleteResourcesItemParams;
    data: CourseDeleteResourcesItemBody;
    header: CourseDeleteResourcesItemHeader;
    cookie: CourseDeleteResourcesItemCookie;
    result: CourseDeleteResourcesItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /course/item
   * @summary 修改课程
   * @description
   */
  export type CoursePutItemQuery = Record<string, any>;
  export type CoursePutItemParams = Record<string, any>;
  export type CoursePutItemBody = {
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
  export type CoursePutItemHeader = Record<string, any>;
  export type CoursePutItemCookie = Record<string, any>;
  export type CoursePutItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CoursePutItemGeneric = {
    query: CoursePutItemQuery;
    params: CoursePutItemParams;
    data: CoursePutItemBody;
    header: CoursePutItemHeader;
    cookie: CoursePutItemCookie;
    result: CoursePutItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /course/item
   * @summary 添加课程
   * @description
   */
  export type CoursePostItemQuery = Record<string, any>;
  export type CoursePostItemParams = Record<string, any>;
  export type CoursePostItemBody = {
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
  export type CoursePostItemHeader = Record<string, any>;
  export type CoursePostItemCookie = Record<string, any>;
  export type CoursePostItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.CourseDto (可选) */
    data?: XinliModels.CourseDto;
  };
  export type CoursePostItemGeneric = {
    query: CoursePostItemQuery;
    params: CoursePostItemParams;
    data: CoursePostItemBody;
    header: CoursePostItemHeader;
    cookie: CoursePostItemCookie;
    result: CoursePostItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /course/item
   * @summary 批量删除课程
   * @description
   */
  export type CourseDeleteItemQuery = Record<string, any>;
  export type CourseDeleteItemParams = Record<string, any>;
  export type CourseDeleteItemBody = string[];
  export type CourseDeleteItemHeader = Record<string, any>;
  export type CourseDeleteItemCookie = Record<string, any>;
  export type CourseDeleteItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CourseDeleteItemGeneric = {
    query: CourseDeleteItemQuery;
    params: CourseDeleteItemParams;
    data: CourseDeleteItemBody;
    header: CourseDeleteItemHeader;
    cookie: CourseDeleteItemCookie;
    result: CourseDeleteItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: true;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /course/type/page
   * @summary 分页查询
   * @description
   */
  export type CourseGetTypePageQuery = XinliModels.CourseTypePageQuery;
  export type CourseGetTypePageParams = Record<string, any>;
  export type CourseGetTypePageBody = any;
  export type CourseGetTypePageHeader = Record<string, any>;
  export type CourseGetTypePageCookie = Record<string, any>;
  export type CourseGetTypePageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageCourseTypeDto (可选) */
    data?: XinliModels.BasePageCourseTypeDto;
  };
  export type CourseGetTypePageGeneric = {
    query: CourseGetTypePageQuery;
    params: CourseGetTypePageParams;
    data: CourseGetTypePageBody;
    header: CourseGetTypePageHeader;
    cookie: CourseGetTypePageCookie;
    result: CourseGetTypePageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /course/resources/page
   * @summary 分页查询
   * @description
   */
  export type CourseGetResourcesPageQuery = XinliModels.CourseResourcesPageQuery;
  export type CourseGetResourcesPageParams = Record<string, any>;
  export type CourseGetResourcesPageBody = any;
  export type CourseGetResourcesPageHeader = Record<string, any>;
  export type CourseGetResourcesPageCookie = Record<string, any>;
  export type CourseGetResourcesPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageCourseResourcesDto (可选) */
    data?: XinliModels.BasePageCourseResourcesDto;
  };
  export type CourseGetResourcesPageGeneric = {
    query: CourseGetResourcesPageQuery;
    params: CourseGetResourcesPageParams;
    data: CourseGetResourcesPageBody;
    header: CourseGetResourcesPageHeader;
    cookie: CourseGetResourcesPageCookie;
    result: CourseGetResourcesPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /course/page
   * @summary 分页查询
   * @description
   */
  export type CourseGetPageQuery = XinliModels.CoursePageQuery;
  export type CourseGetPageParams = Record<string, any>;
  export type CourseGetPageBody = any;
  export type CourseGetPageHeader = Record<string, any>;
  export type CourseGetPageCookie = Record<string, any>;
  export type CourseGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageCourseDto (可选) */
    data?: XinliModels.BasePageCourseDto;
  };
  export type CourseGetPageGeneric = {
    query: CourseGetPageQuery;
    params: CourseGetPageParams;
    data: CourseGetPageBody;
    header: CourseGetPageHeader;
    cookie: CourseGetPageCookie;
    result: CourseGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /course/type/item/{id}
   * @summary 删除课程
   * @description
   */
  export type CourseDeleteTypeItemByIdQuery = Record<string, any>;
  export type CourseDeleteTypeItemByIdParams = {
    /** string */
    id: string;
  };
  export type CourseDeleteTypeItemByIdBody = any;
  export type CourseDeleteTypeItemByIdHeader = Record<string, any>;
  export type CourseDeleteTypeItemByIdCookie = Record<string, any>;
  export type CourseDeleteTypeItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CourseDeleteTypeItemByIdGeneric = {
    query: CourseDeleteTypeItemByIdQuery;
    params: CourseDeleteTypeItemByIdParams;
    data: CourseDeleteTypeItemByIdBody;
    header: CourseDeleteTypeItemByIdHeader;
    cookie: CourseDeleteTypeItemByIdCookie;
    result: CourseDeleteTypeItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /course/resources/item/{id}
   * @summary 删除
   * @description
   */
  export type CourseDeleteResourcesItemByIdQuery = Record<string, any>;
  export type CourseDeleteResourcesItemByIdParams = {
    /** string */
    id: string;
  };
  export type CourseDeleteResourcesItemByIdBody = any;
  export type CourseDeleteResourcesItemByIdHeader = Record<string, any>;
  export type CourseDeleteResourcesItemByIdCookie = Record<string, any>;
  export type CourseDeleteResourcesItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CourseDeleteResourcesItemByIdGeneric = {
    query: CourseDeleteResourcesItemByIdQuery;
    params: CourseDeleteResourcesItemByIdParams;
    data: CourseDeleteResourcesItemByIdBody;
    header: CourseDeleteResourcesItemByIdHeader;
    cookie: CourseDeleteResourcesItemByIdCookie;
    result: CourseDeleteResourcesItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };

  /**
   * @url /course/item/{id}
   * @summary 删除课程
   * @description
   */
  export type CourseDeleteItemByIdQuery = Record<string, any>;
  export type CourseDeleteItemByIdParams = {
    /** string */
    id: string;
  };
  export type CourseDeleteItemByIdBody = any;
  export type CourseDeleteItemByIdHeader = Record<string, any>;
  export type CourseDeleteItemByIdCookie = Record<string, any>;
  export type CourseDeleteItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type CourseDeleteItemByIdGeneric = {
    query: CourseDeleteItemByIdQuery;
    params: CourseDeleteItemByIdParams;
    data: CourseDeleteItemByIdBody;
    header: CourseDeleteItemByIdHeader;
    cookie: CourseDeleteItemByIdCookie;
    result: CourseDeleteItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
    headerRequired: false;
    cookieRequired: false;
  };
}
