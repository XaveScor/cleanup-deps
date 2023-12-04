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

export type ValidateFn = (dep: RawDep) => DepValidationResult;

type Config = {
  packageJsonPath?: string;
  validateFn?: ValidateFn;
};
export function createConfig(config: Config): unknown;

export function createValidateFn(fn: ValidateFn): ValidateFn;

export function mergeValidateFn(fns: Array<ValidateFn | undefined>): ValidateFn;

type Dep = {
  minimalNodeVersion: string;
  message: string;
  validUntil?: Date;
};
export function declareValidation(deps: { [name: string]: Dep }): ValidateFn;

export function validDep(obj: { validUntil?: Date }): DepValidationResult;
export function invalidDep(obj: { message: string }): DepValidationResult;
