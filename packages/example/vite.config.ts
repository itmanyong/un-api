import { defineConfig } from "vite";
import { vitePlugin } from "un-api";

export default defineConfig({
  plugins: [vitePlugin()],
  resolve: {
    alias: {
      "@": "/src",
      "@xinli": "/src/apis/xinli",
      "@qianniao": "/src/apis/qianniao",
      "@yusuan": "/src/apis/yusuan",
    },
  },
});
