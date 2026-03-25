import type { PluginOptions } from "@/types";
import type { UnpluginFactory, UnpluginInstance } from "unplugin";
import { LIB_NAME } from "@/shared";
import { setupRun } from "@/core";
import { createUnplugin } from "unplugin";

const unpluginFactory: UnpluginFactory<PluginOptions | undefined> = (options?: PluginOptions) => ({
  name: `unplugin-${LIB_NAME}-plugin`,
  enforce: "pre",
  async buildStart() {
    await setupRun(options);
  },
});

const unplugin: UnpluginInstance<PluginOptions | undefined> = createUnplugin(unpluginFactory);

export const vitePlugin: typeof unplugin.vite = unplugin.vite;
export const rollupPlugin: typeof unplugin.rollup = unplugin.rollup;
export const rolldownPlugin: typeof unplugin.rolldown = unplugin.rolldown;
export const webpackPlugin: typeof unplugin.webpack = unplugin.webpack;
export const rspackPlugin: typeof unplugin.rspack = unplugin.rspack;
export const esbuildPlugin: typeof unplugin.esbuild = unplugin.esbuild;
export const farmPlugin: typeof unplugin.farm = unplugin.farm;
export const bunPlugin: typeof unplugin.bun = unplugin.bun;
