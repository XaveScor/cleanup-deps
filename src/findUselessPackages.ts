import { gte, SemVer } from "semver";
import { deps } from "./dependecies";

type FindUselessPackages = {
  nodeVersion: SemVer | string;
  dependencies: Set<string>;
};

export function findUselessPackages({
  nodeVersion,
  dependencies,
}: FindUselessPackages): Set<string> {
  const uselessPackages = new Set<string>();

  for (const dep of dependencies) {
    const meta = deps.get(dep);
    if (!meta) {
      continue;
    }

    if (gte(nodeVersion, meta.minimalNodeVersion)) {
      uselessPackages.add(dep);
    }
  }

  return uselessPackages;
}
