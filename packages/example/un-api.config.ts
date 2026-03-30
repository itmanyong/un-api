import { defineConfig } from "@itmanyong/un-api";

export default defineConfig({
  docs: [
    {
      enable: true,
      url: "./api-docs/qingniao-openapi.json",
      name: "qianniao",
      apiRequestType: "application/json",
      exportMode: "default",
      codeMode: "memory"
    },
    {
      enable: true,
      url: "./api-docs/xinli-openapi.json",
      name: "xinli",
      apiRequestType: "application/json",
      exportMode: "module"
    },
    // axios配置示例
    {
      enable: true,
      url: "./api-docs/yusuan-openapi.json",
      name: "yusuan",
      apiRequestType: "application/json",
      exportMode: "api",
      codeMode: "proxy",
      requestor: "axiosBaseClient",
      fileHeader(filename) {
        if (filename.endsWith("index.ts") && !filename.includes("yusuan/apis")) {
          return [`import { axiosBaseClient } from '@/service/axios-base-client';`];
        }
        return [];
      },
      dts: {
        enable: true,
        apiOptions: "AxiosRequestConfig",
        apiResult: "AxiosResponse",
        fileHeader(filename) {
          if (filename.endsWith("index.d.ts") && !filename.includes("yusuan\\types")) {
            return [`import type { AxiosRequestConfig, AxiosResponse } from 'axios';`];
          }
          return [];
        },
      }
    },
  ],
});
