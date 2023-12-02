import { SemVer } from "semver";
import { ValidateFn } from "./config/createValidateFn.js";

type FindUselessPackages = {
  depValidationFn: ValidateFn;
  nodeVersion: SemVer;
  dependencies: Set<string>;
};

export function findUselessPackages({
  depValidationFn,
  dependencies,
  nodeVersion,
}: FindUselessPackages) {
  const uselessPackages = new Map<
    string,
    {
      message: string;
    }
  >();

  for (const dep of dependencies) {
    const res = depValidationFn({
      name: dep,
      nodeVersion,
    });

    if (res.type === "invalid") {
      uselessPackages.set(dep, {
        message: res.message,
      });
    }
  }

  return uselessPackages;
}
