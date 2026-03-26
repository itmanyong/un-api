# 核心实现

## 概述

`un-api` 核心模块（`@itmanyong/un-api`）是整个代码生成系统的心脏，负责处理从 OpenAPI 文档解析、配置管理、到最终代码生成的完整流程。核心模块主要包括以下几个关键子模块：

- **Config** - 配置加载、验证和编译
- **Doc** - 文档生成的主流程编排
- **API** - TypeScript API 代码生成
- **TS** - TypeScript 类型定义生成
- **Note** - JSDoc 注释生成
- **Run** - 插件执行入口

## 核心模块架构

```
core 模块
├── config.ts       配置管理
├── doc.ts          文档生成流程
├── api/
│   ├── core.ts     API 代码生成逻辑
│   └── shared.ts   API 生成共享工具
├── ts/
│   ├── core.ts     TS 类型生成逻辑
│   └── shared.ts   TS 生成共享工具
├── note/
│   ├── core.ts     注释生成逻辑
│   └── index.ts    注释导出
├── browser/        浏览器环境支持
├── run.ts          执行流程入口
└── shared/         共享工具函数
```

## 主要工作流程

### 1. 执行入口 - `setupRun()`

`setupRun()` 是整个生成流程的主入口，通常由各个平台插件（Vite、Webpack、Rollup 等）调用。

**流程：**

```
setupRun()
  ├─ setupConfig()       加载和编译配置
  ├─ loadCacheConfig()   加载缓存信息
  ├─ 筛选需要生成的配置  基于缓存判断
  ├─ setupDoc()          并发生成每个文档
  ├─ printSummaryTable() 输出生成摘要表格
  └─ 更新缓存配置       保存生成记录
```

**关键特性：**

- **智能缓存机制** - 基于文档内容 hash 判断是否需要重新生成
- **过期时间机制** - 支持配置缓存有效期，超期自动重新生成
- **并发生成** - 使用 `Promise.all()` 并发处理多个文档，提高效率
- **结果汇总** - 生成详细的摘要表格，展示模块总数、接口总数、类型总数、耗时等信息

### 2. 配置管理 - `setupConfig()`

负责从多个源加载和编译配置，遵循以下优先级：

**加载优先级：**

1. 通过 `options` 直接传入的配置
2. 独立配置文件（`un-api.config.ts`、`un-api.config.js` 等）
3. `package.json` 中的 `un-api` 字段

**配置编译：**

- **模板变量替换** - 支持在配置中使用 `${variable}` 进行变量替换，实现配置复用
- **配置合并** - 将公共配置与单个文档配置进行深度合并
- **属性补全** - 使用默认值补全未指定的配置项

**示例：**

```typescript
// 配置模板变量替换
defineConfig({
  prefix: "api",
  docs: [
    {
      name: "user",
      url: "https://api.example.com/user/openapi.json",
      output: "src/apis/${name}",  // 会被替换为 "src/apis/user"
    }
  ]
})
```

### 3. 文档生成 - `setupDoc()`

核心的生成流程编排函数，处理单个文档的完整生成过程。

**流程：**

```
setupDoc(docConfig)
  ├─ fetchApiDoc()       获取 OpenAPI 文档
  ├─ docParser()         解析文档为 OpenAPI 对象
  ├─ flattenApiMap()     将文档转换为扁平化 API 映射
  ├─ generateApi()       并发生成 API 代码
  ├─ generateTsType()    生成 TypeScript 类型定义
  ├─ formatWithOxfmt()   使用 oxfmt 格式化输出代码
  └─ 返回生成结果       包含统计信息
```

**支持的文档来源：**

- HTTP URL：`https://api.example.com/openapi.json`
- 本地相对路径：`./api-docs/openapi.json`
- 本地绝对路径：`/path/to/openapi.json`

## 代码生成模块

### API 代码生成 - `generateApi()`

根据 OpenAPI 文档生成 TypeScript API 调用代码。

**生成模式（codeMode）：**

- **proxy 模式** - 使用 ES6 Proxy 动态代理实现 API 调用，支持 Vue 响应式跳过标记
- **memory 模式** - 直接生成具体的 API 调用函数

**导出模式（exportMode）：**

- **api** - 按 API 逐个导出（细粒度）
- **module** - 按模块导出（中粒度）
- **doc** - 按文档导出（粗粒度）
- **default** - 默认导出

**生成的文件结构：**

```
src/apis/{name}/
├── index.ts                    主导出文件
├── apis/
│   ├── index.ts               模块桶文件
│   ├── user.ts                用户模块 API 定义
│   ├── post.ts                文章模块 API 定义
│   └── comment.ts             评论模块 API 定义
```

**文件头/文件尾定制：**

支持通过 `fileHeader` 和 `fileFooter` 配置项自定义文件的前置和后置代码。

### TypeScript 类型生成 - `generateTsType()`

自动生成完整的 TypeScript 类型定义文件。

**生成的类型包括：**

- **请求参数类型** - Path/Query/Header/Body 参数
- **响应体类型** - 各状态码的响应类型定义
- **Schema 类型** - OpenAPI Schema 对应的 TypeScript 类型

**类型转换规则：**

默认的 OpenAPI Schema 到 TypeScript 的类型映射：

```
string              -> string
number              -> number
integer             -> number
boolean             -> boolean
array               -> T[]
object              -> Record<string, any>
allOf/oneOf/anyOf   -> 联合类型
$ref                -> 引用对应类型
```

**类型优化：**

- **路径别名** - 通过 `pathAlias` 配置为生成的类型创建别名，便于引用
- **类型注释** - 从 OpenAPI Schema 的 description 生成 JSDoc 注释
- **约束信息** - 包含 minimum、maximum、pattern 等约束条件的注释

**生成目录：**

```
types/{name}/
├── index.d.ts                 类型导出
├── User.d.ts                  用户模块类型
├── Post.d.ts                  文章模块类型
└── Comment.d.ts               评论模块类型
```

## 注释生成 - Note 模块

自动从 OpenAPI 文档生成详细的 JSDoc 注释。

**生成的注释类型：**

- **文档级注释** - 标记生成的文档名称和统计信息
- **模块级注释** - 模块名称、接口数量
- **API 级注释** - 接口摘要、操作 ID、HTTP 方法、路径等

**注释示例：**

```typescript
/**
 * 用户模块
 * 包括获取用户列表、创建用户等接口
 * @module user
 */
export const apiUser = createProxyApi({...});

/**
 * 获取用户列表
 * @path GET /api/users
 * @operationId listUsers
 */
```

## 配置特性详解

### 智能缓存机制

un-api 提供了三个层级的缓存控制：

1. **文档 Hash 缓存** - 记录文档内容的 hash 值
   - 当文档内容变化时自动重新生成
   - 避免文档内容不变时的重复生成

2. **过期时间缓存** - 基于时间戳的缓存过期机制
   ```typescript
   cache: {
     enable: true,
     expireTime: 600000,  // 10分钟
   }
   ```
   - 即使文档不变，超过过期时间也会重新生成
   - 用于确保定期同步最新文档

3. **选择性生成** - 支持通过 `enable` 配置启用/禁用单个文档
   - `enable: true` - 启用，自动检测是否需要生成
   - `enable: false` - 禁用，跳过此文档

### 自定义请求器(Requestor)

通过 `requestor` 配置项自定义 API 请求的底层实现。

**默认配置：**

```typescript
requestor: "({url,...ops})=>globalThis.fetch(url, ops)"
```

**自定义示例：**

```typescript
// 使用 axios
requestor: "({url,...ops})=>axios({url,...ops})"

// 使用自定义函数
requestor: "customHttpClient"
```

在 Proxy 模式下，生成的 API 调用最终会调用此请求器。

### 多内容类型支持

通过 `enableMultiContentType` 启用对多种请求体格式的支持。

```typescript
enableMultiContentType: true
```

启用后，单个 API 端点如果支持多种内容类型（如 `application/json` 和 `multipart/form-data`），会分别生成不同参数类型的重载。

## 最佳实践

1. **合理设置缓存** - 根据文档更新频率设置 `expireTime`
   - 频繁变更的 API：缓存时间较短（如 60000ms）
   - 相对稳定的 API：缓存时间较长（如 3600000ms）

2. **使用配置模板变量** - 减少重复配置
   ```typescript
   defineConfig({
     output: "src/apis/${name}",
     dts: { path: "types/${name}" },
     docs: [
       { name: "user", url: "..." },
       { name: "post", url: "..." }
     ]
   })
   ```

3. **自定义文件头/尾** - 添加许可证、自动生成警告等
   ```typescript
   fileHeader: [
     "// 当前文件由 un-api 自动生成，手工修改可能会被覆盖"
   ]
   ```

4. **按需生成** - 对于大量 API 文档，可以通过文档名称过滤选择性生成

5. **集成到 CI/CD** - 通过 CLI 或插件集成到构建流程中，自动保持代码与文档同步