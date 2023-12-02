import { createValidateFn, invalidDep, validDep } from "./createValidateFn.js";
import { gte } from "semver";

type Dep = {
  minimalNodeVersion: string;
  message: string;
  validUntil?: Date;
};
export function declareValidation(deps: { [name: string]: Dep }) {
  const now = new Date();
  return createValidateFn((dep) => {
    const depInfo = deps[dep.name];
    if (!depInfo) {
      return validDep({});
    }

    const { minimalNodeVersion, message } = depInfo;
    if (gte(dep.nodeVersion, minimalNodeVersion)) {
      if (depInfo.validUntil && depInfo.validUntil > now) {
        return validDep({ validUntil: depInfo.validUntil });
      }
      return invalidDep({ message });
    }

    return validDep({ validUntil: depInfo.validUntil });
  });
}
