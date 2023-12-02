import { existsSync, readFileSync, lstatSync } from "node:fs";
import { join } from "node:path";
import { parsePackageJson } from "./parsePackageJson.js";
import { findUselessPackages } from "./findUselessPackages.js";
import { minVersion } from "semver";
import { getTotalConfig } from "./config/getTotalConfig.js";

export async function run() {
  const config = await getTotalConfig();
  let packageJsonPath;
  if (lstatSync(config.packageJsonPath).isDirectory()) {
    packageJsonPath = join(config.packageJsonPath, "package.json");
  } else {
    packageJsonPath = config.packageJsonPath;
  }

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
    depValidationFn: config.validateFn,
    nodeVersion: minimalNodeVersion,
    dependencies: parsed.deps,
  });

  if (uselessPackages.size === 0) {
    console.log("No useless packages found");
    return;
  }

  console.log("Useless packages:");
  for (const [pkgName, pkgMeta] of uselessPackages) {
    console.log(`- ${pkgName}; Message: ${pkgMeta.message}`);
  }
  process.exit(1);
}
