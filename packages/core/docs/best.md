## 最佳使用指南

- 本指南默认使用`vite`平台作为示例-其余各平台均一致

### 安装

```bash
pnpm add @itmanyong/un-api
```

### 平台接入

- `vite.config.ts`插件集成
- 为源码内的路径解析提供支持
- 配合ts类型实现类型提示

```typescript
// ...其他导入
// 导入对应平台内置插件
import { vitePlugin } from "@itmanyong/un-api";

export default defineConfig({
  plugins: [
    // 注入插件配置
    vitePlugin(),
  ],
  resolve: {
    alias: {
      // 别名配置-配合ts实现源码别名导入
      // 每一个文档配置的别名默认为`@+文档标识`=`@${name}`
      // 例如文档配置的`name=abc`,那么别名可配置`@abc:/src/apis/abc`
      // 别名路径就指向生成api的目录即可
      "@qianniao": "/src/apis/qianniao",
      "@xinli": "/src/apis/xinli",
      "@yusuan": "/src/apis/yusuan",
    },
  },
});

// 未内置可自行实现对应平台插件-插件只需执行setupRun方法即可
// import { setupRun } from '@itmanyong/un-api'
```

- `tsconfig.json`路径别名配置
- 以路径别名方式覆盖源码模块级局部类型定义
- 为ts识别类型定义提供指定

```json
{
  // ...其他配置
  "compilerOptions": {
    // ...其他配置
    // 根路径建议配置上
    "baseUrl": ".",
    "paths": {
      // ...其他路径别名
      // 此处别名对应上的源码别名配置
      // 别名路径值需要指向对应文档生成的ts类型文件目录-默认为工作根目录下`types/${name}`
      // 例如文档配置的`name=qianniao`,那么别名路径为`types/qianniao`
      "@qianniao": ["types/qianniao"],
      "@xinli": ["types/xinli"],
      "@yusuan": ["types/yusuan"]
    }
  }
}
```

- `.un-api.config.ts`生成文档配置文件
- 配置每个文档最终生成相关配置-独立管理

```typescript
// 导入`defineConfig`配置函数
import { defineConfig } from "@itmanyong/un-api";

export default defineConfig({
  // ...其余公共配置(除name、url字段其他docs内字段均可配置，优先级低于文档内联配置)
  //   apiRequestType: "application/json", // 设置所有文档每个接口的请求体类型为json
  docs: [
    {
      name: "qianniao", // 文档标识
      url: "./api-docs/qingniao-openapi.json", // 文档地址-远程or本地
    },
    {
      name: "xinli",
      url: "./api-docs/xinli-openapi.json",
      apiRequestType: "application/json", // 单个文档配置
    },
    {
      name: "yusuan",
      url: "./api-docs/yusuan-openapi.json",
      exportMode: "default", // 使用默认导出模式
    },
  ],
});
```

### 执行生成

- 直接运行项目即可-插件会自动生成
- 默认情况下只会影响`src/apis`和`types`两个目录

```bash
pnpm dev
```

### 使用示例

#### 基础用法

```typescript
// 导入生成的 API
import { apiQianniao } from "./src/apis/qianniao";

// 使用 API
const result = await apiQianniao.user.getById({
  params: { id: 123 },
  query: { includeDetails: true },
});

console.log(result.data);
```

#### 不同导出模式

```typescript
// module 模式（默认）
import { apiQianniaoUser } from "./src/apis/qianniao";
const user = await apiQianniaoUser.getById({ params: { id: 1 } });

// api 模式
import { apiUserGetById } from "./src/apis/qianniao";
const user = await apiUserGetById({ params: { id: 1 } });

// default 模式
import apiQianniao from "./src/apis/qianniao";
const user = await apiQianniao.user.getById({ params: { id: 1 } });
```

#### 类型安全

```typescript
import type { UserGetByIdGeneric } from "@qianniao";

// 完整的类型提示和校验
async function fetchUser(id: number): Promise<UserGetByIdGeneric["result"]> {
  const response = await apiQianniao.user.getById({
    params: { id }, // params.id 类型为 number
    query: { includeDetails: true }, // query.includeDetails 类型为 boolean
  });

  return response.data; // 返回类型为 UserGetByIdResponse
}
```

#### 自定义请求配置

```typescript
// 全局配置请求器
export default defineConfig({
  docs: [
    {
      name: "qianniao",
      url: "./api-docs/qingniao-openapi.json",
      requestor: `
        ({ url, method, headers, body }) => {
          return fetch(url, {
            method,
            headers: {
              'Authorization': \`Bearer \${getToken()}\`,
              'Content-Type': 'application/json',
              ...headers,
            },
            body,
          });
        }
      `,
    },
  ],
});
```

### 常见问题

#### 1. 生成的文件在哪里？

- API 代码：`src/apis/${name}/`
- 类型文件：`types/${name}/`

#### 2. 如何自定义生成目录？

```typescript
export default defineConfig({
  docs: [
    {
      name: "api",
      url: "./api-docs/openapi.json",
      output: "src/generated/apis/${name}", // 自定义 API 输出目录
      dts: {
        path: "src/generated/types/${name}", // 自定义类型输出目录
      },
    },
  ],
});
```

#### 3. 如何处理认证？

```typescript
// 在 requestor 中添加认证
requestor: `
  ({ url, method, headers, body }) => {
    return fetch(url, {
      method,
      headers: {
        'Authorization': \`Bearer \${localStorage.getItem('token')}\`,
        ...headers,
      },
      body,
    });
  }
`;
```

#### 4. 如何处理不同的响应格式？

```typescript
export default defineConfig({
  docs: [
    {
      name: "api",
      url: "./api-docs/openapi.json",
      // 自定义响应处理
      apiParser: (ctx) => {
        return {
          // 自定义响应类型处理
          options: {
            responseType: ctx.config.apiResponseType || "application/json",
          },
        };
      },
    },
  ],
});
```

## 相关文档

- **[最佳使用指南](/docs/best.md)** - 快速接入使用
- **[完整配置](/docs/config.md)** - 可配置项详尽说明
- **[TS类型编码](/docs/typescript.md)** - 完全把控类型生成+类型提示配置
- [API生成模块](/docs/browser.md) - 客户端生成API的方法
- [平台插件集成](/docs/platform.md) - 各平台内置插件、未内置平台适配
- [核心实现](/docs/core.md) - 核心生成逻辑全解析
- [axios三方库适配示例](/docs/axios-prefile.md) - axios三方库适配示例
