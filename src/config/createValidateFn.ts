import { SemVer } from "semver";

type RawDep = {
  name: string;
  nodeVersion: SemVer;
};

type ValidDep = {
  type: "valid";
  validUntil?: Date;
};
type InvalidDep = {
  type: "invalid";
  message: string;
};
type DepValidationResult = ValidDep | InvalidDep;

export function validDep(obj: { validUntil?: Date }): DepValidationResult {
  return {
    ...obj,
    type: "valid",
  };
}
export function isDepValid(dep: DepValidationResult): dep is ValidDep {
  return dep.type === "valid";
}
export function isDepInvalid(dep: DepValidationResult): dep is InvalidDep {
  return dep.type === "invalid";
}
export function invalidDep(obj: { message: string }): DepValidationResult {
  return {
    ...obj,
    type: "invalid",
  };
}

export function createValidateFn(fn: (dep: RawDep) => DepValidationResult) {
  return fn;
}
export type ValidateFn = ReturnType<typeof createValidateFn>;
