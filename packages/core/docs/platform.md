# 平台支持

本文档介绍 un-api 支持的构建平台以及如何在不同平台中集成使用。

## 内置支持平台

un-api 提供了多种主流构建平台的内置插件，支持开箱即用：

- ✅ **vitePlugin** - vite平台插件
- ✅ **rsbuildPlugin** - rsbuild平台插件
- ✅ **rollupPlugin** - rollup平台插件
- ✅ **webpackPlugin** - webpack平台插件
- ✅ **rspackPlugin** - rspack平台插件
- ✅ **esbuildPlugin** - esbuild平台插件
- ✅ **farmPlugin** - farm平台插件
- ✅ **bunPlugin** - bun平台插件

### ✅ Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { vitePlugin } from '@itmanyong/un-api';

export default defineConfig({
  plugins: [
    vitePlugin(),
  ],
});
```

### ✅ Rsbuild

```typescript
// rsbuild.config.ts
import { defineConfig } from '@rsbuild/core';
import { rsbuildPlugin } from '@itmanyong/un-api';

export default defineConfig({
  plugins: [
    rsbuildPlugin(),
  ],
});
```

### ✅ Rollup

```typescript
// rollup.config.js
import { rollupPlugin } from '@itmanyong/un-api';

export default {
  plugins: [
    rollupPlugin(),
  ],
};
```

### ✅ Webpack

```typescript
// webpack.config.js
const { webpackPlugin } = require('@itmanyong/un-api');

module.exports = {
  plugins: [
    webpackPlugin(),
  ],
};
```

### ✅ Rspack

```typescript
// rspack.config.js
const { rspackPlugin } = require('@itmanyong/un-api');

module.exports = {
  plugins: [
    rspackPlugin(),
  ],
};
```

### ✅ ESBuild

```typescript
// esbuild.config.js
const { esbuildPlugin } = require('@itmanyong/un-api');

require('esbuild').build({
  plugins: [
    esbuildPlugin(),
  ],
});
```

### ✅ Farm

```typescript
// farm.config.ts
import { defineConfig } from '@farmfe/core';
import { farmPlugin } from '@itmanyong/un-api';

export default defineConfig({
  plugins: [
    farmPlugin(),
  ],
});
```

### ✅ Bun

```typescript
// bun.config.ts (如果支持)
import { bunPlugin } from '@itmanyong/un-api';

export default {
  plugins: [
    bunPlugin(),
  ],
};
```

## 插件工作原理

所有内置插件的工作原理都是相同的：

1. **不监听文件变化** - 不监听配置文件和 OpenAPI 文档的变化-节约资源-可外部自行实现
2. **触发代码生成** - 在特定时机直接触发 `setupRun()` 函数
3. **集成到构建流程** - 将生成的文件集成到构建工具的处理流程中

## 自行适配其他平台

如果需要适配未内置支持的平台，可以直接调用核心执行函数：

```typescript
// 导入核心执行入口
import { setupRun } from "@itmanyong/un-api";

// 在平台插件或适当时机直接调用
setupRun(options);
```

### 手动集成示例

```typescript
// 例如在自定义的构建脚本中
import { setupRun } from '@itmanyong/un-api';

async function build() {
  // 在构建开始前生成 API 代码
  await setupRun({
    configPath: '.un-api.config.ts',
  });
  
  // 继续其他构建步骤...
}
```

### 监听模式集成

```typescript
// 在开发服务器中集成监听
import { setupRun } from '@itmanyong/un-api';

class UnApiPlugin {
  constructor(options = {}) {
    this.options = options;
  }
  
  apply(compiler) {
    // 监听模式
    compiler.hooks.watchRun.tap('UnApiPlugin', () => {
      setupRun(this.options);
    });
    
    // 生产模式
    compiler.hooks.beforeCompile.tap('UnApiPlugin', () => {
      setupRun(this.options);
    });
  }
}

export default UnApiPlugin;
```

## `setupRun` 配置项

| 配置项       | 类型           | 默认值             | 说明                             |
| ------------ | -------------- | ------------------ | -------------------------------- |
| `configPath` | `string`       | `.un-api.config` | 独立配置文件名（不含扩展名） |
| `config`     | `object`       | 非必需            | 直接传入配置对象，优先级高于 `configPath` |

### 配置示例

```typescript
// 使用配置文件路径
setupRun({
  configPath: 'my-api-config',
});

// 直接传入配置
setupRun({
  config: {
    docs: [
      {
        name: 'api',
        url: 'https://api.example.com/openapi.json',
      },
    ],
  },
});
```

## 平台特定注意事项

### Vite

- 插件会自动集成到 Vite 的构建流程中
- 支持热重载，当配置文件变化时会自动重新生成
- 生成的文件会自动添加到 Vite 的依赖图中

### Webpack/Rspack

- 插件会在编译开始前执行代码生成
- 在开发模式下会监听文件变化
- 生成的文件会被 Webpack 自动处理

### Rollup

- 插件会在 bundle 生成前执行
- 支持 watch 模式下的自动重新生成

### ESBuild

- 插件会在构建开始时执行
- 由于 ESBuild 的高速特性，生成过程非常快速

## 故障排除

### 插件未执行

检查是否正确导入了插件：

```typescript
// 正确
import { vitePlugin } from '@itmanyong/un-api';
```

### 生成的文件未更新

1. 检查配置文件路径是否正确
2. 确认 OpenAPI 文档可访问
3. 查看控制台是否有错误信息

### 类型错误

确保 `tsconfig.json` 中的路径别名配置正确：

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@api": ["types/api"]
    }
  }
}
```

## 相关文档

- **[最佳使用指南](/docs/best.md)** - 快速接入使用
- **[完整配置](/docs/config.md)** - 可配置项详尽说明
- **[TS类型编码](/docs/typescript.md)** - 完全把控类型生成+类型提示配置
- [API生成模块](/docs/browser.md) - 客户端生成API的方法
- [平台插件集成](/docs/platform.md) - 各平台内置插件、未内置平台适配
- [核心实现](/docs/core.md) - 核心生成逻辑全解析
- [axios三方库适配示例](/docs/axios-prefile.md) - axios三方库适配示例