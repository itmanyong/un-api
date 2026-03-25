# TS 类型编码

本文档说明如何完全把控 TypeScript 类型文件的生成，包括自定义类型定义、类型转换、导入导出等。

## 类型生成概述

un-api 会根据 OpenAPI 文档中的 Schema 定义自动生成 TypeScript 类型文件，包括：

- 接口请求参数类型（Query、Params、Body）
- 接口响应结果类型
- 共享类型定义
- 接口配置的泛型类型

生成的类型文件默认位于 `types/${name}/` 目录，可通过 `dts.path` 配置修改。

## dts 配置详解

### 基础配置

| 配置项 | 说明 |
| --- | --- |
| `dts.enable` | 是否启用类型文件生成，默认 `true` |
| `dts.path` | 类型输出目录，默认 `"types/${name}"` |

### 泛型定义配置

#### dts.apiOptions

接口参数的泛型类型名，默认为 `"RequestInit"`（浏览器原生 RequestInit 类型）。

接收三个泛型：
- `Query` - 查询参数类型
- `Params` - 路径参数类型  
- `Data` - 请求体类型

```typescript
// 配置示例
dts: {
  apiOptions: "ApiOptions",  // 自定义名称
  fileHeader: [
    // 定义自定义的 ApiOptions 类型
    `export type ApiOptions<Query = any, Params = any, Data = any> = {
      query?: Query;
      params?: Params;
      data?: Data;
    };`
  ]
}

// 生成的接口函数时会使用此泛型
export const apiUserGetById = (
  options: ApiOptions<UserGetByIdQuery, UserGetByIdParams, never>,
  requestInit?: RequestInit
) => Promise<ApiResult<UserGetByIdResponse>>;
```

#### dts.apiResult

接口结果的泛型类型名，默认为 `"Response"`（浏览器原生 Response 类型）。

接收两个泛型：
- `Data` - 响应数据类型
- `Result` - 完整响应结果类型

```typescript
// 配置示例
dts: {
  apiResult: "ApiResult",  // 自定义名称
  fileHeader: [
    // 定义自定义的 ApiResult 类型
    `export type ApiResult<Data = any, Result = any> = {
      code: number;
      message: string;
      data?: Data;
    };`
  ]
}

// 生成的接口函数时会使用此泛型
export const apiUserGetById = (
  options: ApiOptions<...>;
) => Promise<ApiResult<UserGetByIdData>>;
```

### 代码自定义配置

#### dts.fileHeader

在生成的类型文件顶部添加自定义代码，用于定义全局类型、导入等。

支持两种形式：

**数组形式**（字符串数组直接拼接）：
```typescript
dts: {
  fileHeader: [
    `import type { Response as NodeResponse } from "node-fetch";`,
    ``,
    `export type ApiResult<T> = {`,
    `  code: number;`,
    `  message: string;`,
    `  data: T;`,
    `};`
  ]
}
```

**函数形式**（基于生成的文件路径动态生成）：
```typescript
dts: {
  fileHeader: (filename, docConfig) => {
    return [
      `// 自动生成的类型文件: ${filename}`,
      `import { ApiResult } from "@/types/common";`,
      ``,
    ];
  }
}
```

#### dts.fileFooter

在生成的类型文件底部添加自定义代码。格式同 `fileHeader`：

```typescript
dts: {
  fileFooter: [
    ``,
    `// 导出所有接口的 Generic 类型`,
    `export type AllGenerics = {`,
    `  [K in keyof AllApis]: AllApis[K] extends (...args: any[]) => infer R ? R : never;`,
    `};`
  ]
}
```

### 类型转换配置

#### dts.typeConvert

自定义 OpenAPI Schema 到 TypeScript 的类型转换规则。根据 Schema 对象的关键字段进行匹配。

```typescript
dts: {
  typeConvert: {
    // 根据 type 字段匹配
    type: (schema) => {
      if (schema.type === 'string') {
        if (schema.format === 'date') return 'Date';
        if (schema.format === 'date-time') return 'DateTime';
        return 'string';
      }
      return 'any';
    },
    
    // 根据 format 字段匹配
    format: (schema) => {
      if (schema.format === 'uuid') return `string & { readonly __brand: 'uuid' }`;
      if (schema.format === 'email') return `string & { readonly __brand: 'email' }`;
      return 'string';
    },
    
    // 根据 enum 字段匹配
    enum: (schema) => {
      const values = schema.enum?.map(v => JSON.stringify(v)).join(' | ') || 'never';
      return `(${values})`;
    },
  }
}
```

**内置支持的 Schema 关键字**：
- `type`, `items`, `properties`, `additionalProperties`
- `enum`, `const`, `default`
- `format`, `pattern`, `maxLength`, `minLength`
- `minimum`, `maximum`, `multipleOf`
- `oneOf`, `anyOf`, `allOf`

### 路径别名配置

#### dts.pathAlias

生成的接口文件的引用别名，默认为 `"@${name}"`。

此别名主要用于激活全局的 TypeScript 类型匹配。如果使用相对路径，TypeScript 会被模块类型覆盖导致类型匹配不上。

```typescript
dts: {
  pathAlias: "@my-api"  // 对应文档的别名为 @my-api
}
```

需在 `tsconfig.json` 中配置对应的路径别名：

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@my-api": ["types/my-api"]
    }
  }
}
```

## 完整示例

### 配置文件

```typescript
import { defineConfig } from "un-api";

export default defineConfig({
  docs: [
    {
      name: "user-api",
      url: "./api-docs/user-openapi.json",
      dts: {
        enable: true,
        path: "types/user-api",
        apiOptions: "ApiOptions",
        apiResult: "ApiResult",
        pathAlias: "@user-api",
        
        // 自定义文件头 - 定义全局类型
        fileHeader: [
          `import type { RequestOptions } from "@/types/common";`,
          ``,
          `/**`,
          ` * API 请求选项类型`,
          ` */`,
          `export type ApiOptions<`,
          `  Query = Record<string, any>,`,
          `  Params = Record<string, any>,`,
          `  Data = Record<string, any>`,
          `> = RequestOptions & {`,
          `  query?: Query;`,
          `  params?: Params;`,
          `  data?: Data;`,
          `};`,
          ``,
          `/**`,
          ` * API 响应结果类型`,
          ` */`,
          `export type ApiResult<`,
          `  Data = any,`,
          ` Result = any`,
          `> = {`,
          `  code: number;`,
          `  message?: string;`,
          `  data?: Data;`,
          `};`,
        ],
        
        // 自定义文件尾
        fileFooter: [
          ``,
          `// 类型定义结束`,
        ],
        
        // 自定义类型转换
        typeConvert: {
          type: (schema) => {
            if (schema.type === 'string') {
              if (schema.format === 'date') return 'Date';
              if (schema.format === 'date-time') return 'DateTime';
              if (schema.pattern === '^[0-9]{11}$') return `string & { readonly __brand: 'phone' }`;
            }
            if (schema.type === 'integer') {
              if (schema.format === 'int64') return 'bigint';
              return 'number';
            }
            return undefined;  // 使用默认转换
          },
          enum: (schema) => {
            if (!schema.enum) return 'any';
            const values = schema.enum
              .map(v => typeof v === 'string' ? `'${v}'` : v)
              .join(' | ');
            return `(${values})`;
          },
        },
      },
    },
  ],
});
```

### tsconfig.json 配置

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@user-api": ["types/user-api"],
      "@/*": ["src/*"],
      "@types/*": ["types/*"]
    }
  }
}
```

### 生成的类型文件示例

生成的 `types/user-api/index.ts` 包含：

```typescript
import type { RequestOptions } from "@/types/common";

// ... fileHeader 中定义的类型 ...

// 接口具体参数和响应类型
export type UserGetByIdQuery = Record<string, never>;
export type UserGetByIdParams = { id: number };
export type UserGetByIdData = never;
export type UserGetByIdResponse = {
  id: number;
  name: string;
  email: string;
};

export type UserGetByIdGeneric = {
  query: UserGetByIdQuery;
  params: UserGetByIdParams;
  data: UserGetByIdData;
  result: UserGetByIdResponse;
  queryRequired: false;
  paramsRequired: true;
  dataRequired: false;
};

// 按模块组织的接口泛型类型
export namespace User {
  export const GetById = {
    __generic__: undefined as unknown as UserGetByIdGeneric,
  };
}

// 所有模块导出
export const All = { User };

// ... fileFooter 中定义的代码 ...
```

### 在代码中使用

```typescript
import type { UserGetByIdGeneric, ApiOptions, ApiResult } from "@user-api";
import { apiUser } from "./src/apis/user-api";

// TypeScript 自动推断类型
const response = await apiUser.getById({
  params: { id: 1 },  // 自动提示和校验
});

// 完整类型注解示例
async function getUserData(
  options: ApiOptions<
    UserGetByIdGeneric["query"],
    UserGetByIdGeneric["params"],
    UserGetByIdGeneric["data"]
  >
): Promise<ApiResult<UserGetByIdGeneric["result"]>> {
  return apiUser.getById(options);
}
```

## 最佳实践

### 1. 统一的全局类型定义

建议在 `dts.fileHeader` 中定义所有项目通用的类型：

```typescript
// 适用于所有生成的接口文件
fileHeader: (filename, docConfig) => [
  `// ${filename} - 自动生成`,
  `import type { CommonResponse, RequestConfig } from '@/types/api';`,
  ``,
  `export type ApiOptions<Q = any, P = any, D = any> = RequestConfig & {`,
  `  query?: Q;`,
  `  params?: P;`,
  `  data?: D;`,
  `};`,
  ``,
  `export type ApiResult<T = any> = CommonResponse<T>;`,
]
```

### 2. 自定义标量类型转换

为项目特定的数据类型（如手机号、ID 等）添加品牌类型：

```typescript
typeConvert: {
  pattern: (schema) => {
    if (schema.pattern === '^1[3-9]\\d{9}$') {
      return `string & { readonly __brand: 'phone' }`;
    }
    if (schema.pattern === '^\\d+$') {
      return `string & { readonly __brand: 'numberId' }`;
    }
    return undefined;
  },
}
```

### 3. 日期时间类型处理

```typescript
typeConvert: {
  format: (schema) => {
    if (schema.type === 'string') {
      if (schema.format === 'date') return 'Date | string';
      if (schema.format === 'date-time') return 'DateTime | string';
    }
    return undefined;
  },
}
```

### 4. 枚举类型统一处理

```typescript
typeConvert: {
  enum: (schema) => {
    if (!schema.enum) return undefined;
    
    // 创建字面量联合类型
    const values = schema.enum
      .map(v => typeof v === 'string' ? `'${v}'` : JSON.stringify(v))
      .join(' | ');
    
    return `(${values})`;
  },
}
```

## 实际项目配置示例

### 电商项目配置

```typescript
export default defineConfig({
  docs: [
    {
      name: "mall",
      url: "./api-docs/mall-openapi.json",
      dts: {
        enable: true,
        path: "types/mall",
        apiOptions: "ApiOptions",
        apiResult: "ApiResult",
        pathAlias: "@mall",
        
        fileHeader: [
          `import type { RequestConfig, ApiResponse } from '@/types/api';`,
          ``,
          `export type ApiOptions<Q = any, P = any, D = any> = RequestConfig & {`,
          `  query?: Q;`,
          `  params?: P;`,
          `  data?: D;`,
          `};`,
          ``,
          `export type ApiResult<T = any> = ApiResponse<T>;`,
          ``,
          `// 业务状态码`,
          `export type BusinessCode = 200 | 400 | 401 | 403 | 404 | 500;`,
        ],
        
        typeConvert: {
          // 金额类型（分转元）
          type: (schema) => {
            if (schema.type === 'integer' && schema.description?.includes('分')) {
              return 'number & { readonly __brand: "fen" }';
            }
            return undefined;
          },
          
          // 用户ID
          pattern: (schema) => {
            if (schema.pattern === '^\\d{1,10}$') {
              return 'number & { readonly __brand: "userId" }';
            }
            return undefined;
          },
          
          // 订单状态枚举
          enum: (schema) => {
            if (schema.description?.includes('订单状态')) {
              return `'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled'`;
            }
            return undefined;
          },
          
          // 时间戳处理
          format: (schema) => {
            if (schema.format === 'date-time') {
              return 'string | Date';
            }
            return undefined;
          },
        },
      },
    },
  ],
});
```

### 管理后台配置

```typescript
export default defineConfig({
  docs: [
    {
      name: "admin",
      url: "./api-docs/admin-openapi.json",
      dts: {
        enable: true,
        path: "types/admin",
        apiOptions: "AdminApiOptions",
        apiResult: "AdminApiResult",
        pathAlias: "@admin",
        
        fileHeader: [
          `import type { PaginationParams, TableResponse } from '@/types/admin';`,
          ``,
          `export type AdminApiOptions<Q = any, P = any, D = any> = {`,
          `  query?: Q & PaginationParams;`,
          `  params?: P;`,
          `  data?: D;`,
          `  headers?: Record<string, string>;`,
          `};`,
          ``,
          `export type AdminApiResult<T = any> = {`,
          `  code: number;`,
          `  message: string;`,
          `  data: T;`,
          `  total?: number;`,
          `  page?: number;`,
          `  pageSize?: number;`,
          `};`,
        ],
        
        typeConvert: {
          // 权限码
          pattern: (schema) => {
            if (schema.pattern === '^[A-Z_]+$') {
              return 'string & { readonly __brand: "permission" }';
            }
            return undefined;
          },
          
          // 状态枚举统一处理
          enum: (schema) => {
            if (!schema.enum) return undefined;
            
            // 根据描述判断是否为状态枚举
            const desc = schema.description || '';
            if (desc.includes('状态') || desc.includes('status')) {
              const values = schema.enum.map(v => `'${v}'`).join(' | ');
              return `(${values})`;
            }
            
            return undefined;
          },
        },
      },
    },
  ],
});
```

## 高级用法

### 条件类型转换

```typescript
typeConvert: {
  type: (schema) => {
    // 根据多个条件判断类型
    if (schema.type === 'string') {
      if (schema.minLength === 32 && schema.maxLength === 32) {
        return 'string & { readonly __brand: "uuid" }';
      }
      
      if (schema.format === 'email') {
        return 'string & { readonly __brand: "email" }';
      }
      
      if (schema.pattern === '^1[3-9]\\d{9}$') {
        return 'string & { readonly __brand: "phone" }';
      }
    }
    
    if (schema.type === 'integer') {
      if (schema.minimum === 0) {
        return 'number & { readonly __brand: "count" }';
      }
      
      if (schema.description?.includes('金额') && schema.description?.includes('分')) {
        return 'number & { readonly __brand: "fen" }';
      }
    }
    
    return undefined;
  },
}
```

### 动态文件头

```typescript
fileHeader: (filename, docConfig) => {
  const imports = [];
  const types = [];
  
  // 根据文件名动态导入
  if (filename.includes('user')) {
    imports.push(`import type { User, UserStatus } from '@/types/user';`);
    types.push(`export type { User, UserStatus };`);
  }
  
  if (filename.includes('order')) {
    imports.push(`import type { Order, OrderStatus } from '@/types/order';`);
    types.push(`export type { Order, OrderStatus };`);
  }
  
  return [
    `// ${filename} - 自动生成`,
    `// 生成时间: ${new Date().toISOString()}`,
    ...imports,
    ``,
    ...types,
    ``,
  ];
}
```

### 复杂泛型定义

```typescript
fileHeader: [
  `// 高级泛型定义`,
  `export type ApiOptions<`,
  `  Query extends Record<string, any> = Record<string, any>,`,
  `  Params extends Record<string, any> = Record<string, any>,`,
  `  Data = any`,
  `> = {`,
  `  query?: Query;`,
  `  params?: Params;`,
  `  data?: Data;`,
  `  headers?: Record<string, string>;`,
  `  signal?: AbortSignal;`,
  `};`,
  ``,
  `export type ApiResult<`,
  `  Data = any,`,
  `  Code extends number = number`,
  `> = {`,
  `  code: Code;`,
  `  message: string;`,
  `  data: Data;`,
  `  timestamp: string;`,
  `};`,
  ``,
  `// 条件类型 - 根据状态码推断数据类型`,
  `export type ApiResponseData<T extends ApiResult> = T extends { code: 200 }`,
  `  ? T['data']`,
  `  : never;`,
]
```

## 调试和故障排除

### 类型未正确生成

1. 检查 `dts.enable` 是否为 `true`
2. 确认 `dts.path` 路径正确
3. 查看控制台是否有类型生成错误

### 自定义类型转换不生效

1. 确保 `typeConvert` 函数返回字符串或 `undefined`
2. 检查 Schema 对象的结构是否符合预期
3. 使用 `console.log(schema)` 调试 Schema 对象

### 路径别名不工作

1. 确认 `tsconfig.json` 中的 `paths` 配置
2. 检查 `dts.pathAlias` 是否正确设置
3. 重启 TypeScript 语言服务

### 性能问题

- 大型 OpenAPI 文档可能生成大量类型文件
- 考虑使用 `dts.enable: false` 禁用类型生成
- 或调整 `typeConvert` 逻辑减少复杂类型

## 相关文档

- **[最佳使用指南](/docs/best.md)** - 快速接入使用
- **[完整配置](/docs/config.md)** - 可配置项详尽说明
- **[TS类型编码](/docs/typescript.md)** - 完全把控类型生成+类型提示配置
- [API生成模块](/docs/browser.md) - 客户端生成API的方法
- [平台插件集成](/docs/platform.md) - 各平台内置插件、未内置平台适配
- [核心实现](/docs/core.md) - 核心生成逻辑全解析
- [axios三方库适配示例](/docs/axios-prefile.md) - axios三方库适配示例