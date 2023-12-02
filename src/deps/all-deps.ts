import { mergeValidateFn } from "../config/mergeValidateFn.js";
import { commonDeps } from "./common-deps.js";
import { lodashDeps } from "./lodash.js";

export const allDepsValidationFn = mergeValidateFn([commonDeps, lodashDeps]);
