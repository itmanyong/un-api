# axios三方库适配示例

## 适配关键点

- `requester` 请求器在`api`根出口文件的导入-因为只有导入了文件内才能识别到匹配上(当然如果是自动导入就无需关心)
- `dts` TS生成类型时使用`axios`的`参数类型(AxiosRequestConfig)`和`响应类型(AxiosResponse)`的导入集成

## 最简适配示例

```typescript
export default {
  enable: true,
  url: "./api-docs/yusuan-openapi.json",
  name: "yusuan",
  apiRequestType: "application/json",
  exportMode: "api",
  codeMode: "proxy",
  // 关键适配-设置请求器的名称为自己项目中创建的示例变量名
  // 此处设置为`axioBaseClient`是因`/packages/example/src/service/axios-base-client.ts`中示例变量名是`axiosBaseClient`
  requestor: "axiosBaseClient",
  // 关键适配-在`api`根出口文件注入`axiosBaseClient`的导入语句
  // 具体看`/packages/example/src/apis/yusuan/index.ts`
  fileHeader(filename) {
    // 根据文件路径名判断是否是`api`根出口文件
    if (filename.endsWith("index.ts") && !filename.includes("yusuan/apis")) {
      return [`import { axiosBaseClient } from '@/service/axios-base-client';`];
    }
    return [];
  },
  dts: {
    enable: true,
    // 关键适配-提供请求函数的参数类型名称-让内部生成ts类型的时候使用此处指定的参数类型和结果类型
    // 如果是经过你封装过的函数-类型可能不是axios原生的类型，此处直接传入你的新类型即可，取决于上面请求器requestor设置的函数实现
    apiOptions: "AxiosRequestConfig",
    apiResult: "AxiosResponse",
    // 关键适配-在`dts`根出口文件注入`axios`的`参数类型(AxiosRequestConfig)`和`响应类型(AxiosResponse)`的导入语句
    // 具体看`/packages/example/src/types/yusuan/index.d.ts`
    fileHeader(filename) {
      // 根据文件路径名判断是否是`dts`根出口文件
      if (filename.endsWith("index.d.ts") && !filename.includes("yusuan\\types")) {
        return [`import type { AxiosRequestConfig, AxiosResponse } from 'axios';`];
      }
      return [];
    },
  },
};
```
