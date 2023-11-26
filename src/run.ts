import yargs from "yargs";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { parsePackageJson } from "./parsePackageJson.js";
import { findUselessPackages } from "./findUselessPackages.js";
import { deps } from "./deps.js";
import { minVersion } from "semver";

const argv = yargs(process.argv.slice(2))
  .options({
    path: { type: "string", default: undefined },
  })
  .parseSync();

export function run() {
  let { path } = argv;
  if (!path) {
    path = process.cwd();
  }
  const packageJsonPath = join(path, "package.json");

  if (!existsSync(packageJsonPath)) {
    console.error(`[ERROR] File ${packageJsonPath} does not exist`);
    process.exit(1);
  }

  console.log(`Reading ${packageJsonPath}`);
  const packageJsonContent = readFileSync(packageJsonPath, "utf-8");

  console.log(`Parsing ${packageJsonPath}`);
  const parsed = parsePackageJson(packageJsonContent);
  if (!parsed.nodeVersion) {
    console.error(
      `[ERROR] Node version is not specified in ${packageJsonPath}. Please specify it in engines.node`,
    );
    process.exit(1);
  }

  console.log("Runtime:");
  const minimalNodeVersion = minVersion(parsed.nodeVersion);
  if (!minimalNodeVersion) {
    console.error(
      `[ERROR] Cannot get minimal node version in ${packageJsonPath}. Raw value: ${parsed.nodeVersion}`,
    );
    process.exit(1);
  }
  console.log(`Minimal node version: ${minimalNodeVersion}`);

  const uselessPackages = findUselessPackages({
    nodeVersion: minimalNodeVersion,
    dependencies: parsed.deps,
  });

  if (uselessPackages.size === 0) {
    console.log("No useless packages found");
    return;
  }

  console.log("Useless packages:");
  for (const pkgName of uselessPackages) {
    const pkg = deps.get(pkgName);
    if (!pkg) {
      continue;
    }
    console.log(
      `- ${pkgName}; NativeApi:${pkg.nativeApi}, Message: ${pkg.message}, Minimal node version: ${pkg.minimalNodeVersion}`,
    );
  }
  process.exit(1);
}
