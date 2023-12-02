import {
  createValidateFn,
  invalidDep,
  isDepInvalid,
  isDepValid,
  ValidateFn,
  validDep,
} from "./createValidateFn.js";

export function mergeValidateFn(fns: Array<ValidateFn | undefined>) {
  const fnsWithoutUndefined = fns.filter((dep): dep is ValidateFn =>
    Boolean(dep),
  );
  return createValidateFn((dep) => {
    const validationResults = fnsWithoutUndefined.map((fn) => fn(dep));
    const valids = validationResults.filter(isDepValid);
    const invalids = validationResults.filter(isDepInvalid);

    let untilDate = new Date(0, 0, 0);
    for (const valid of valids) {
      if (valid.validUntil && valid.validUntil > untilDate) {
        untilDate = valid.validUntil;
      }
    }

    const now = new Date();
    if (now < untilDate) {
      return validDep({ validUntil: untilDate });
    }
    if (invalids.length > 0) {
      return invalids[0];
    }
    return validDep({});
  });
}
