import { mergeValidateFn } from "../config/mergeValidateFn.js";
import { declareValidation } from "../config/declareValidation.js";

const commonLodashMessage =
  "Maybe you don't need lodash. Please, visit https://youmightnotneed.com/lodash";

const _0_10_0 = [
  "compact",
  "concat",
  "drop",
  "dropright",
  "indexof",
  "initial",
  "join",
  "last",
  "lastindexof",
  "nth",
  "reject",
  "reverse",
  "slice",
  "sortedindexof",
  "sortedlastindexof",
  "every",
  "filter",
  "foreach",
  "foreachright",
  "map",
  "reduceright",
  "size",
  "some",
  "now",
  "unary",
];
const _0_12_0 = ["sorteduniq"];
const _4_0_0 = ["fill", "findindex", "find"];
const _5_0_0 = ["head", "tail", "union", "uniq", "delay", "spread", "wrap"];
const _6_0_0 = ["take", "takeright", "without", "includes"];
const _7_0_0 = ["topairs", "reduce"];
const _11_0_0 = ["flatmap", "flatten", "flattendeep", "flattendepth"];
const _12_0_0 = ["frompairs"];
const _18_0_0 = ["findlastindex"];

export const lodashDeps = mergeValidateFn([
  ..._0_10_0.map((name) =>
    declareValidation({
      [`lodash.${name}`]: {
        minimalNodeVersion: "0.10.0",
        message: commonLodashMessage,
      },
    }),
  ),
  ..._0_12_0.map((name) =>
    declareValidation({
      [`lodash.${name}`]: {
        minimalNodeVersion: "0.12.0",
        message: commonLodashMessage,
      },
    }),
  ),
  ..._4_0_0.map((name) =>
    declareValidation({
      [`lodash.${name}`]: {
        minimalNodeVersion: "4.0.0",
        message: commonLodashMessage,
      },
    }),
  ),
  ..._5_0_0.map((name) =>
    declareValidation({
      [`lodash.${name}`]: {
        minimalNodeVersion: "5.0.0",
        message: commonLodashMessage,
      },
    }),
  ),
  ..._6_0_0.map((name) =>
    declareValidation({
      [`lodash.${name}`]: {
        minimalNodeVersion: "6.0.0",
        message: commonLodashMessage,
      },
    }),
  ),
  ..._7_0_0.map((name) =>
    declareValidation({
      [`lodash.${name}`]: {
        minimalNodeVersion: "7.0.0",
        message: commonLodashMessage,
      },
    }),
  ),
  ..._11_0_0.map((name) =>
    declareValidation({
      [`lodash.${name}`]: {
        minimalNodeVersion: "11.0.0",
        message: commonLodashMessage,
      },
    }),
  ),
  ..._12_0_0.map((name) =>
    declareValidation({
      [`lodash.${name}`]: {
        minimalNodeVersion: "12.0.0",
        message: commonLodashMessage,
      },
    }),
  ),
  ..._18_0_0.map((name) =>
    declareValidation({
      [`lodash.${name}`]: {
        minimalNodeVersion: "18.0.0",
        message: commonLodashMessage,
      },
    }),
  ),
]);
