import { join } from "node:path";
import { readFile } from "node:fs/promises";

async function readPackageVersion() {
  const __dirname = new URL(".", import.meta.url).pathname;
  const packageJsonPath = join(__dirname, "package.json");
  const packageJsonContent = await readFile(packageJsonPath, "utf-8");
  const packageJson = JSON.parse(packageJsonContent);
  return packageJson.version;
}

export async function showWarningIfPrerelease() {
  let version: string;
  try {
    version = await readPackageVersion();
  } catch {
    console.warn(
      "[DEBUG] Please copy package.json from dist to src for local testing",
    );
    return;
  }

  if (version.includes("rc")) {
    console.warn(
      "[WARNING] You are using prerelease version. Run `npx cleanup-deps@latest` to use latest stable version",
    );
  }
}
