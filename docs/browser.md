# API生成模块

Browser 模块提供运行时 API 调用能力，支持在浏览器环境中调用生成的 API。

## 模块导出

```typescript
export {
  createMemoryApi, // 创建内存模式 API
  createMemoryModule, // 创建内存模式模块
  createMemoryDoc, // 创建内存模式文档
  createMemoryDefault, // 创建内存模式默认导出
  createProxyApi, // 创建代理模式 API
  createProxyModule, // 创建代理模式模块
  createProxyDoc, // 创建代理模式文档
  createProxyDefault, // 创建代理模式默认导出
};
```

## 两种代码模式

### Memory 模式

Memory 模式将 API 定义存储在内存中，返回普通函数对象，适用于测试和简单场景。

```typescript
import { createMemoryApi, createMemoryModule, createMemoryDoc } from "un-api-builder/browser";

// 创建单个 API
const api = createMemoryApi({
  path: "/api/users/{id}",
  method: "GET",
  headers: {},
  options: {},
}, requestor);

// 创建模块级 API
const userModule = createMemoryModule({
  getById: { path: "/api/users/{id}", method: "GET" },
  create: { path: "/api/users", method: "POST" },
}, requestor);

// 创建文档级 API
const apiDoc = createMemoryDoc({
  user: { getById: {...}, create: {...} },
  order: { list: {...}, getById: {...} },
}, requestor);
```

### Proxy 模式

Proxy 模式使用 JavaScript Proxy 动态生成 API 调用代码，支持 Vue 响应式跳过标记，适用于生产环境。

```typescript
import { createProxyApi, createProxyModule, createProxyDoc } from "un-api-builder/browser";

// 创建单个 API
const api = createProxyApi({
  path: "/api/users/{id}",
  method: "GET",
}, requestor);

// 创建模块级 API
const userModule = createProxyModule({
  getById: { path: "/api/users/{id}", method: "GET" },
  create: { path: "/api/users", method: "POST" },
}, requestor);

// 创建文档级 API
const apiDoc = createProxyDoc({
  user: { getById: {...}, create: {...} },
  order: { list: {...}, getById: {...} },
}, requestor);
```

## 四种导出模式

根据 `exportMode` 配置，生成的代码会使用不同的创建函数：

### `api` 模式

每个 API 单独导出一个函数：

```typescript
// 生成的代码
export const apiUserGetById = createProxyApi(apis.user.getById, requestor);
export const apiUserCreate = createProxyApi(apis.user.create, requestor);
export const apiUserList = createProxyApi(apis.user.list, requestor);
```

### `module` 模式（默认）

按模块导出对象：

```typescript
// 生成的代码
export const apiUser = createProxyModule(apis.user, requestor);
export const apiOrder = createProxyModule(apis.order, requestor);
```

### `doc` 模式

具名导出整个文档对象：

```typescript
// 生成的代码
export const apiMyApi = createProxyDoc(apis, requestor);
```

### `default` 模式

默认导出整个文档对象：

```typescript
// 生成的代码
export default createProxyDoc(apis, requestor);
```

## Generic 类型

所有生成的 API 都包含完整的 Generic 类型支持：

```typescript
export type AppGetPageGeneric = {
  query: AppGetPageQuery; // 查询参数类型
  params: AppGetPageParams; // 路径参数类型
  data: AppGetPageBody; // 请求体类型
  result: AppGetPageResponse; // 响应类型
  queryRequired: boolean; // 查询参数是否必填
  paramsRequired: boolean; // 路径参数是否必填
  dataRequired: boolean; // 请求体是否必填
};
```

## 使用示例

### 基础用法

```typescript
import { apiMyApi } from "./src/apis/my-api";

// 获取数据
const response = await apiMyApi.getPage({
  query: { pageNum: 1, pageSize: 10 },
});

// 完整类型提示
const { data, success } = response;
if (success) {
  console.log(data);
}
```

### 路径参数

```typescript
// GET /api/users/{id}
const user = await apiMyApi.user.getById({
  params: { id: 1 },
});
```

### 查询参数

```typescript
// GET /api/users?page=1&limit=10
const users = await apiMyApi.user.list({
  query: { page: 1, limit: 10 },
});
```

### 请求体

```typescript
// POST /api/users
const newUser = await apiMyApi.user.create({
  data: {
    name: "John",
    email: "john@example.com",
  },
});
```

### FormData 文件上传

```typescript
const formData = new FormData();
formData.append("file", file);
formData.append("description", "User avatar");

await apiMyApi.upload.uploadFile({
  data: formData,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
```

### 自定义请求头

```typescript
await apiMyApi.user.update({
  params: { id: 1 },
  data: { name: "Updated Name" },
  headers: {
    "X-Custom-Header": "value",
    "Authorization": "Bearer token",
  },
});
```

### 错误处理

```typescript
try {
  const result = await apiMyApi.user.getById({
    params: { id: 999 },
  });
  
  if (result.code !== 200) {
    console.error('API Error:', result.message);
    return;
  }
  
  console.log('User:', result.data);
} catch (error) {
  console.error('Network Error:', error);
}
```

### 高级用法

#### 批量请求

```typescript
// 并行请求多个 API
const [user, posts, comments] = await Promise.all([
  apiMyApi.user.getById({ params: { id: 1 } }),
  apiMyApi.post.list({ query: { userId: 1 } }),
  apiMyApi.comment.list({ query: { postId: 1 } }),
]);
```

#### 请求拦截和重试

```typescript
// 自定义请求器实现重试逻辑
const customRequestor = async ({ url, method, headers, body }) => {
  let attempts = 0;
  const maxAttempts = 3;
  
  while (attempts < maxAttempts) {
    try {
      const response = await fetch(url, { method, headers, body });
      
      if (response.status === 429) { // Rate limited
        attempts++;
        await new Promise(resolve => setTimeout(resolve, 1000 * attempts));
        continue;
      }
      
      return response;
    } catch (error) {
      attempts++;
      if (attempts >= maxAttempts) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * attempts));
    }
  }
};
```

#### 类型守卫

```typescript
import type { UserGetByIdResponse, ApiResult } from '@my-api';

// 类型守卫函数
function isSuccessResponse<T>(
  response: ApiResult<T>
): response is ApiResult<T> & { code: 200; data: T } {
  return response.code === 200 && response.data !== undefined;
}

// 使用类型守卫
const response = await apiMyApi.user.getById({ params: { id: 1 } });

if (isSuccessResponse(response)) {
  // TypeScript 知道 response.data 存在且类型正确
  console.log(response.data.name); // 类型安全
} else {
  console.error(response.message);
}
```

### 不同导出模式的完整示例

#### module 模式（推荐）

```typescript
import { apiUser, apiPost, apiComment } from './src/apis/my-api';

// 使用不同的模块
const user = await apiUser.getById({ params: { id: 1 } });
const posts = await apiPost.list({ query: { userId: 1 } });
const comments = await apiComment.list({ query: { postId: 1 } });
```

#### api 模式

```typescript
import { 
  apiUserGetById, 
  apiPostList, 
  apiCommentList 
} from './src/apis/my-api';

// 直接使用具体的 API 函数
const user = await apiUserGetById({ params: { id: 1 } });
const posts = await apiPostList({ query: { userId: 1 } });
const comments = await apiCommentList({ query: { postId: 1 } });
```

#### default 模式

```typescript
import api from './src/apis/my-api';

// 使用默认导出的完整 API 对象
const user = await api.user.getById({ params: { id: 1 } });
const posts = await api.post.list({ query: { userId: 1 } });
const comments = await api.comment.list({ query: { postId: 1 } });
```

### 与状态管理集成

#### Vue 3 + Pinia

```typescript
// stores/api.ts
import { defineStore } from 'pinia';
import { apiMyApi } from '@/apis/my-api';

export const useApiStore = defineStore('api', {
  state: () => ({
    users: [] as User[],
    loading: false,
  }),
  
  actions: {
    async fetchUsers() {
      this.loading = true;
      try {
        const response = await apiMyApi.user.list({
          query: { page: 1, limit: 20 }
        });
        
        if (response.code === 200) {
          this.users = response.data;
        }
      } finally {
        this.loading = false;
      }
    },
    
    async createUser(userData: CreateUserData) {
      const response = await apiMyApi.user.create({
        data: userData,
      });
      
      if (response.code === 201) {
        this.users.push(response.data);
        return response.data;
      }
      
      throw new Error(response.message);
    },
  },
});
```

#### React + Zustand

```typescript
// stores/apiStore.ts
import { create } from 'zustand';
import { apiMyApi } from '@/apis/my-api';

interface ApiState {
  users: User[];
  loading: boolean;
  fetchUsers: () => Promise<void>;
  createUser: (data: CreateUserData) => Promise<User>;
}

export const useApiStore = create<ApiState>((set, get) => ({
  users: [],
  loading: false,
  
  fetchUsers: async () => {
    set({ loading: true });
    try {
      const response = await apiMyApi.user.list({
        query: { page: 1, limit: 20 }
      });
      
      if (response.code === 200) {
        set({ users: response.data });
      }
    } finally {
      set({ loading: false });
    }
  },
  
  createUser: async (userData) => {
    const response = await apiMyApi.user.create({
      data: userData,
    });
    
    if (response.code === 201) {
      set(state => ({ 
        users: [...state.users, response.data] 
      }));
      return response.data;
    }
    
    throw new Error(response.message);
  },
}));
```

### 测试示例

#### 单元测试

```typescript
// __tests__/api.test.ts
import { describe, it, expect, vi } from 'vitest';
import { apiMyApi } from '@/apis/my-api';

// Mock fetch
global.fetch = vi.fn();

describe('API Tests', () => {
  it('should fetch user by id', async () => {
    const mockUser = { id: 1, name: 'John' };
    
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ code: 200, data: mockUser }),
    });
    
    const result = await apiMyApi.user.getById({
      params: { id: 1 },
    });
    
    expect(result.code).toBe(200);
    expect(result.data).toEqual(mockUser);
    expect(global.fetch).toHaveBeenCalledWith(
      '/api/users/1',
      expect.objectContaining({
        method: 'GET',
      })
    );
  });
});
```

#### E2E 测试

```typescript
// e2e/api.spec.ts
import { test, expect } from '@playwright/test';

test('API integration', async ({ page }) => {
  // 假设应用中使用了生成的 API
  await page.goto('/');
  
  // 等待 API 调用完成
  const response = await page.waitForResponse('**/api/users');
  
  expect(response.status()).toBe(200);
  
  const data = await response.json();
  expect(data).toHaveProperty('code', 200);
  expect(data).toHaveProperty('data');
});
```

## Vue 响应式支持

Proxy 模式生成的 API 对象包含 Vue 响应式跳过标记：

```typescript
const proxyApi = createProxyApi(apiDefine, requestor);

// 包含以下 Vue 标记
proxyApi.__v_skip = true; // 跳过响应式转换
proxyApi.__v_isRef = false; // 不是 ref
proxyApi.__v_isReadonly = false; // 不是只读
proxyApi.__v_isShallow = false; // 不是 shallow
proxyApi.__v_isReactive = false; // 不是响应式
proxyApi.__v_isProxy = true; // 是代理对象
```

这使得 API 对象在 Vue 组件中使用时不会被响应式系统处理，避免不必要的性能开销。

## 注意事项

1. **无 Node.js 依赖** - Browser 模块不依赖任何 Node.js 特定模块，可直接在浏览器环境运行
2. **类型安全** - 所有 API 调用都经过完整的 TypeScript 类型检查
3. **泛型支持** - 支持通过 Generic 类型获取精确的输入输出类型
4. **不可修改** - Proxy 模式下，尝试修改 API 定义会触发警告并被阻止

## 相关文档

- **[最佳使用指南](/docs/best.md)** - 快速接入使用
- **[完整配置](/docs/config.md)** - 可配置项详尽说明
- **[TS类型编码](/docs/typescript.md)** - 完全把控类型生成+类型提示配置
- [API生成模块](/docs/browser.md) - 客户端生成API的方法
- [平台插件集成](/docs/platform.md) - 各平台内置插件、未内置平台适配
- [核心实现](/docs/core.md) - 核心生成逻辑全解析
- [axios三方库适配示例](/docs/axios-prefile.md) - axios三方库适配示例
