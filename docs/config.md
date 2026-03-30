# 配置参考

本文档提供 un-api 所有配置项的完整说明。

## 配置结构类型

```typescript
type FileCodeType = string[] | ((filename: string, ...args: any[]) => string[]);
// 文档ts生成配置
interface ConfigDtsOptions {
  /** 是否启用TS类型 */
  enable: boolean;
  /** 类型文件输出路径 */
  path: string;
  /** 接口参数泛型 */
  apiOptions: string;
  /** 接口结果泛型 */
  apiResult: string;
  /** 文件前置代码 */
  fileHeader: FileCodeType;
  /** 文件后置代码 */
  fileFooter: FileCodeType;
  /** 类型转换定义 */
  typeConvert: Partial<Record<keyof SchemaObject, (value: SchemaObject | ReferenceObject) => string>>;
  /** 路径别名 */
  pathAlias: string;
}

// 单个文档所有配置
interface ConfigDocOptions<DTS = ConfigDtsOptions> {
  /** 文档标识 */
  name: string;
  /** 文档 URL */
  url: string;
  /** 文档前缀 */
  prefix: string;
  /** 是否启用 */
  enable: boolean;
  /** 输出路径 */
  output: string;
  /** 文件输出类型 */
  outputType: "ts" | "js";
  /** 生成代码模式 */
  codeMode: "proxy" | "memory";
  /** 代码导出模式 */
  exportMode: "doc" | "module" | "api" | "default";
  /** 请求器 */
  requestor: string;
  /** 文件前置代码 */
  fileHeader: FileCodeType;
  /** 文件后置代码 */
  fileFooter: FileCodeType;
  /** 文档解析器 */
  docParser: ((doc: any) => OpenAPIObject | void) | null;
  /** 接口解析器 */
  apiParser: ((ctx: ApiCtx) => Partial<ApiCtxConfig> | void) | null;
  /** 接口结果取用状态码 */
  apiResponseCode: number | string | ((ctx: ApiCtx) => number | string);
  /** 接口结果取用类型 */
  apiResponseType: string | ((ctx: ApiCtx) => string);
  /** 接口请求体取用类型 */
  apiRequestType: string | ((ctx: ApiCtx) => string);
  /** ts生成配置 */
  dts: DTS;
  /** 是否开启多请求体类型支持 */
  enableMultiContentType: boolean;
}
// 文档可公共配置项
export type ConfigDocOptionsCommon<DTS = Partial<ConfigDtsOptions>> = Partial<Omit<ConfigDocOptions<DTS>, "name" | "url">>;
// 文档全配置项
export interface ConfigOptions extends ConfigDocOptionsCommon {
  docs?: (ConfigDocOptionsCommon & Pick<ConfigDocOptions, "name" | "url">)[];
}
```

## 配置示例

### 最小配置

```typescript
import { defineConfig } from "@itmanyong/un-api";

export default defineConfig({
  docs: [
    {
      name: "my-api",
      url: "https://api.example.com/openapi.json",
    },
  ],
});
```

### 内置配置-完整配置

- 每个文档都会和其合并

```typescript
const DEFAULT_DOC_CONFIG = {
  prefix: "api",
  name: "",
  url: "",
  enable: true,
  output: "src/apis/${name}",
  outputType: "ts",
  codeMode: "proxy",
  exportMode: "module",
  requestor: "({url,...ops})=>globalThis.fetch(url, ops)",
  fileHeader: [],
  fileFooter: [],
  docParser: (doc) => JSON.parse(doc),
  apiParser: (ctx) => {},
  apiResponseCode: 200,
  apiResponseType: "*/*",
  apiRequestType: "*/*",
  enableMultiContentType: false,
  dts: {
    enable: true,
    path: "types/${name}",
    apiOptions: "RequestInit",
    apiResult: "Response",
    fileHeader: [],
    fileFooter: [],
    typeConvert: {},
    pathAlias: "@${name}",
  }
};
```

## 配置项详解

### 总配置项

| 配置项           | 类型    | 默认值 | 说明                             |
| ---------------- | ------- | ------ | -------------------------------- |
| `docs`           | `array` | 必需   | 文档配置项数组-默认支持批量      |
| `其他文档配置项` | `any`   | 非必需 | 除开`name` `url`其他字段均可配置 |

### 文档配置项

| 配置项                   | 类型                                                       | 默认值                                         | 说明                                                                                                                          |
| ------------------------ | ---------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `name`                   | `string`                                                   | ``                                             | 文档标识，保持唯一性-将在生成代码中的`模块`/`函数名`/`路径别名`等地方使用                                                     |
| `url`                    | `string`                                                   | ``                                             | 用于获取文档内的接口定义-支持 `远程地址`/`本地文件路径`                                                                       |
| `prefix`                 | `string`                                                   | `"api"`                                        | 导出变量名的前缀-默认`api`                                                                                                    |
| `enable`                 | `boolean`                                                  | `true`                                         | 是否启用当前文档的接口定义解析和生成                                                                                          |
| `output`                 | `string`                                                   | `"src/apis/${name}"`                           | 从cwd开始 默认`src/apis/${name}`                                                                                              |
| `outputType`             | `"ts" \| "js"`                                             | `"ts"`                                         | 决定生成文件的后缀名，默认`ts`                                                                                                |
| `codeMode`               | `"proxy" \| "memory"`                                      | `"proxy"`                                      | 兼容不同环境对于代码包装API的支持-默认`proxy`                                                                                 |
| `exportMode`             | `"doc" \| "module" \| "api" \| "default"`                  | `"module"`                                     | 决定外部如何导入使用、生成的代码导出方式-默认`module`                                                                         |
| `requestor`              | `string`                                                   | `"({url,...ops})=>globalThis.fetch(url, ops)"` | 实际发送请求的函数-只能接收一个对象参数-至少包含`url`/`method`/`headers`属性-默认`({url,...ops})=>globalThis.fetch(url, ops)` |
| `fileHeader`             | `FileCodeType`                                             | `[]`                                           | 生成的文件顶部添加的自定义代码                                                                                                |
| `fileFooter`             | `FileCodeType`                                             | `[]`                                           | 生成的文件底部添加的自定义代码                                                                                                |
| `docParser`              | `((doc: any) => OpenAPIObject \| void) \| null`            | `(doc) => JSON.parse(doc)`                     | 用于支持其他协议格式的文档转为`openapi v3+` 规范                                                                              |
| `apiParser`              | `((ctx: ApiCtx) => Partial<ApiCtxConfig> \| void) \| null` | `null`                                         | 用于完全把控每个接口的生成参数-返回的配置对象将会合并到`ctx.config`中                                                         |
| `apiResponseCode`        | `number \| string \| ((ctx: ApiCtx) => number \| string)`  | `200`                                          | 根据码从接口responses的定义中取成功的类型定义-默认`200`                                                                       |
| `apiResponseType`        | `string \| ((ctx: ApiCtx) => string)`                      | `"*/*"`                                        | 根据类型从接口responses的定义中取成功的类型定义-默认`*/*`                                                                     |
| `apiRequestType`         | `string \| ((ctx: ApiCtx) => string)`                      | `"*/*"`                                        | 根据类型从接口requestBody的定义中取请求体的类型定义，默认`*/*`                                                                |
| `dts`                    | `ConfigDtsOptions`                                         | 见下方dts文档配置项                            | 用于配置生成的 TypeScript 类型文件的一些选项-默认path=`types`                                                                 |
| `enableMultiContentType` | `boolean`                                                  | `false`                                        | 开启后同一个接口会根据不同的`Content-Type`类型生成不同的请求函数                                                              |

### `dts`文档配置项

| 配置项            | 类型                                                                                      | 默认值            | 说明             |
| ----------------- | ----------------------------------------------------------------------------------------- | ----------------- | ---------------- |
| `dts.enable`      | `boolean`                                                                                 | `true`            | 是否启用TS类型   |
| `dts.path`        | `string`                                                                                  | `"types/${name}"` | 类型文件输出路径 |
| `dts.apiOptions`  | `string`                                                                                  | `"RequestInit"`   | 接口参数泛型     |
| `dts.apiResult`   | `string`                                                                                  | `"Response"`      | 接口结果泛型     |
| `dts.fileHeader`  | `FileCodeType`                                                                            | `[]`              | 文件前置代码     |
| `dts.fileFooter`  | `FileCodeType`                                                                            | `[]`              | 文件后置代码     |
| `dts.typeConvert` | `Partial<Record<keyof SchemaObject, (value: SchemaObject \| ReferenceObject) => string>>` | `{}`              | 类型转换定义     |
| `dts.pathAlias`   | `string`                                                                                  | `"@${name}"`      | 路径别名         |


### 关键配置项说明

#### codeMode 代码模式

- **`proxy`（默认）** - 代理模式，使用 Proxy 动态生成 API 调用代码，支持 Vue 响应式跳过标记
- **`memory`** - 内存模式，将 API 定义缓存到内存中，应付不支持 proxy 的环境

#### exportMode 导出模式

- **`api`** - 每个 API 单独导出一个函数

  ```typescript
  export const apiUserGetById = createApiProxy(apis.user.getById);
  export const apiUserCreate = createApiProxy(apis.user.create);
  ```

- **`module`（默认）** - 按模块导出对象

  ```typescript
  export const apiUser = createModuleProxy(apis.user);
  export const apiOrder = createModuleProxy(apis.order);
  ```

- **`doc`** - 具名导出整个文档对象

  ```typescript
  export const apiMyApi = createDocProxy(apis);
  ```

- **`default`** - 默认导出整个文档对象
  ```typescript
  export default createDocProxy(apis);
  ```

#### dts.apiOptions 和 dts.apiResult

这两个配置用于定义 API 函数的泛型参数：

```typescript
// dts.apiOptions = "RequestInit"
// dts.apiResult = "Response"
export const apiUserGetById = (
  options: RequestInit,  // 来自 apiOptions
  params: { id: number }
): Promise<Response> => { ... };  // 来自 apiResult
```

### 解析器配置

#### `docParser`

文档解析器，在获取 OpenAPI 文档后、生成代码前对文档进行处理。支持将其他协议格式转换为 OpenAPI v3+ 规范。

```typescript
docParser: (doc) => {
  // 转换 Swagger 2.0 到 OpenAPI 3.0
  return convertToOpenApi3(doc);
};
```

#### `apiParser`

API 解析器，对每个 API 配置进行处理，返回的配置会合并到 `ctx.config` 中。
可直接把控生成的函数名、模块名、路径、额外参数等内容

```typescript
apiParser: (ctx) => {
  // 添加自定义请求头
  return {
    options: {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    },
  };
};
```

### 高级配置示例

#### 多环境配置

```typescript
// 根据环境变量动态配置
export default defineConfig({
  docs: [
    {
      name: "api",
      url: process.env.NODE_ENV === "production" ? "https://api.production.com/openapi.json" : "./api-docs/openapi.json",
    },
  ],
});
```

#### 条件配置

```typescript
export default defineConfig({
  docs: [
    {
      name: "internal",
      url: "./api-docs/internal.json",
      enable: process.env.ENABLE_INTERNAL_API === "true",
    },
    {
      name: "public",
      url: "./api-docs/public.json",
      enable: true,
    },
  ],
});
```

#### 自定义类型转换

```typescript
export default defineConfig({
  docs: [
    {
      name: "api",
      url: "./api-docs/openapi.json",
      dts: {
        typeConvert: {
          // 手机号类型
          pattern: (schema) => {
            if (schema.pattern === "^1[3-9]\\d{9}$") {
              return 'string & { readonly __brand: "phone" }';
            }
            return undefined;
          },
          // 自定义枚举处理
          enum: (schema) => {
            if (!schema.enum) return undefined;
            const values = schema.enum.map((v) => (typeof v === "string" ? `"${v}"` : v)).join(" | ");
            return `(${values})`;
          },
          // 日期时间处理
          format: (schema) => {
            if (schema.format === "date-time") {
              return "string | Date";
            }
            return undefined;
          },
        },
      },
    },
  ],
});
```

#### 复杂请求器配置

```typescript
export default defineConfig({
  docs: [
    {
      name: "api",
      url: "./api-docs/openapi.json",
      requestor: `
        async ({ url, method, headers = {}, body }) => {
          // 自动添加认证头
          const token = localStorage.getItem('token');
          if (token) {
            headers.Authorization = \`Bearer \${token}\`;
          }
          
          // 处理请求体
          let processedBody = body;
          if (body && typeof body === 'object') {
            processedBody = JSON.stringify(body);
            headers['Content-Type'] = 'application/json';
          }
          
          // 发送请求
          const response = await fetch(url, {
            method,
            headers,
            body: processedBody,
          });
          
          // 处理响应
          const contentType = response.headers.get('content-type');
          if (contentType?.includes('application/json')) {
            return await response.json();
          }
          
          return await response.text();
        }
      `,
    },
  ],
});
```

#### 文件自定义

```typescript
export default defineConfig({
  docs: [
    {
      name: "api",
      url: "./api-docs/openapi.json",
      fileHeader: [
        "// Auto-generated API file",
        "// Do not edit manually",
        \`import type { ApiResponse } from '@/types/common';\`,
        "",
      ],
      fileFooter: [
        "",
        "// End of auto-generated code",
        \`export type ApiClient = typeof api;\`,
      ],
    },
  ],
});
```

## 配置文件位置

按优先级从高到低：

1. `configPath` 选项指定的路径
2. `un-api.config.ts`
3. `un-api.config.mts`
4. `un-api.config.cts`
5. `un-api.config.js`
6. `un-api.config.mjs`
7. `un-api.config.cjs`
8. `un-api.config.json`
9. `package.json` 中的 `un-api` 字段

### 不同配置文件格式示例

#### TypeScript 配置文件

```typescript
// un-api.config.ts
import { defineConfig } from "@itmanyong/un-api";

export default defineConfig({
  docs: [
    {
      name: "api",
      url: "./api-docs/openapi.json",
    },
  ],
});
```

#### JavaScript 配置文件

```javascript
// un-api.config.js
module.exports = {
  docs: [
    {
      name: "api",
      url: "./api-docs/openapi.json",
    },
  ],
};
```

#### JSON 配置文件

```json
{
  "docs": [
    {
      "name": "api",
      "url": "./api-docs/openapi.json"
    }
  ]
}
```

#### package.json 中的配置

```json
{
  "name": "my-app",
  "un-api": {
    "docs": [
      {
        "name": "api",
        "url": "./api-docs/openapi.json"
      }
    ]
  }
}
```

## 最佳实践

### 1. 配置组织

- 将公共配置提取到顶层
- 使用环境变量控制配置
- 为不同环境准备不同的配置

### 2. 类型安全

- 充分利用 `dts` 配置自定义类型
- 使用品牌类型区分不同用途的字符串
- 为枚举和联合类型提供精确定义

### 3. 错误处理

- 在 `requestor` 中统一处理错误
- 使用 `apiParser` 添加重试逻辑
- 配置适当的缓存策略

### 4. 性能优化

- 合理使用缓存减少重复请求
- 在生产环境禁用不必要的类型生成
- 使用合适的导出模式减少打包体积

### 5. 维护性

- 配置文件使用 TypeScript 获得类型提示
- 添加注释说明复杂配置的目的
- 定期更新 OpenAPI 文档保持同步

## 相关文档

- **[最佳使用指南](https://github.com/itmanyong/un-api/blob/main/docs/best.md)** - 快速接入使用
- **[完整配置](https://github.com/itmanyong/un-api/blob/main/docs/config.md)** - 可配置项详尽说明
- **[TS类型编码](https://github.com/itmanyong/un-api/blob/main/docs/typescript.md)** - 完全把控类型生成+类型提示配置
- [API生成模块](https://github.com/itmanyong/un-api/blob/main/docs/browser.md) - 客户端生成API的方法
- [平台插件集成](https://github.com/itmanyong/un-api/blob/main/docs/platform.md) - 各平台内置插件、未内置平台适配
- [核心实现](https://github.com/itmanyong/un-api/blob/main/docs/core.md) - 核心生成逻辑全解析
- [axios三方库适配示例](https://github.com/itmanyong/un-api/blob/main/docs/axios-prefile.md) - axios三方库适配示例
