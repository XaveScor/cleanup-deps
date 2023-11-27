import { Dependency } from "../shared/types";
import { lodashDeps } from "./lodash";

export const deps = new Map<string, Dependency>([
  [
    "object-assign",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "Object.assign",
      message: "Use native Object.assign",
    },
  ],
  [
    "object.assign",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "Object.assign",
      message: "Use native Object.assign",
    },
  ],
  [
    "es6-object-assign",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "Object.assign",
      message: "Use native Object.assign",
    },
  ],
  ...lodashDeps,
]);