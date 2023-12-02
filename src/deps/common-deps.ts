import { declareValidation } from "../config/declareValidation.js";

export const commonDeps = declareValidation({
  "object-assign": {
    minimalNodeVersion: "4.0.0",
    message: "Use native Object.assign",
  },
  "object.assign": {
    minimalNodeVersion: "4.0.0",
    message: "Use native Object.assign",
  },
  "es6-object-assign": {
    minimalNodeVersion: "4.0.0",
    message: "Use native Object.assign",
  },
});
