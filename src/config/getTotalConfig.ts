import yargs from "yargs";
import { join } from "node:path";
import { existsSync, lstatSync } from "node:fs";
import { isConfig } from "./createConfig.js";
import { emptyConfig } from "./emptyConfig.js";
import { mergeValidateFn } from "./mergeValidateFn.js";
import { allDepsValidationFn } from "../deps/all-deps.js";

const configFileNames = [
  "", // if user specified the direct path to config, we don't need to search for it
  ".cleanupdepsconfig.js",
  ".cleanupdepsconfig.cjs",
  ".cleanupdepsconfig.mjs",
];
type LoadConfigArgs = {
  path: string | undefined;
  cwd: string;
};
export async function loadConfig({ path, cwd }: LoadConfigArgs) {
  let dir;
  if (path?.startsWith("/")) {
    dir = path;
  } else {
    dir = join(cwd, path ?? "");
  }

  for (const configFileName of configFileNames) {
    const finalPath = join(dir, configFileName);
    if (existsSync(finalPath) && lstatSync(finalPath).isFile()) {
      try {
        const { default: config } = await import(finalPath);
        if (isConfig(config)) {
          console.log(`Using config from ${finalPath}`);
          return config;
        }
      } catch {
        console.error(`[ERROR] Failed to load config from ${finalPath}`);
        process.exit(1);
      }
    }
  }

  console.log(`Using empty config`);
  return emptyConfig;
}

export async function getTotalConfig() {
  const argv = yargs(process.argv.slice(2))
    .options({
      path: { type: "string", default: undefined },
      config: { type: "string", default: undefined },
    })
    .parseSync();

  const config = await loadConfig({
    path: argv.config,
    cwd: process.cwd(),
  });

  return {
    packageJsonPath: config.packageJsonPath ?? argv.path ?? process.cwd(),
    validateFn: mergeValidateFn([config.validateFn, allDepsValidationFn]),
  };
}
