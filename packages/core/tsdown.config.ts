import { defineConfig } from "tsdown";
import type { OutExtensionContext, UserConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    browser: "src/browser/index.ts",
  },
  exports: {
    devExports: false
    // devExports: "development",
  },
  outDir: "build",
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  target: "es2022",
  publint: {
    enabled: true,
    level: "error",
  },
  alias: {
    "@": "src",
  },
  deps:{
    skipNodeModulesBundle: true,
  },
  outExtensions: (ctx: OutExtensionContext) => ({
    js: ctx.format === "es" ? ".mjs" : ".js",
    dts: ctx.format === "es" ? ".d.mts" : ".d.ts",
  }),
} as UserConfig);
