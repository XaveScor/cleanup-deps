type Dep = {
  minimalNodeVersion: string;
  message: string;
  nativeApi: string;
};

export const deps = new Map<string, Dep>([
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
  [
    "lodash.isarray",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "Array.isArray",
      message: "Use native Array.isArray"
    },
  ],
  [
    "lodash.concat",
    {
      minimalNodeVersion: "6.5.0",
      nativeApi: "Array.prototype.concat",
      message: "Use native Array.prototype.concat"
    },
  ],
  [
    "lodash.dropright",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "Array.prototype.slice",
      message: "Use native Array.prototype.slice(0, -1)",
    },
  ],
  [
    "lodash.join",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "Array.prototype.join",
      message: "Use native Array.prototype.join",
    },
  ],
  [
    "lodash.lastindexof",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "Array.prototype.lastIndexOf",
      message: "Use native Array.prototype.lastIndexOf",
    },
  ],
  [
    "lodash.reverse",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "Array.prototype.reverse",
      message: "Use native Array.prototype.reverse",
    },
  ],
  [
    "lodash._slice",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "Array.prototype.slice",
      message: "Use native Array.prototype.slice",
    },
  ],
  [
    "lodash.slice",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "Array.prototype.slice",
      message: "Use native Array.prototype.slice",
    },
  ],
  [
    "lodash.without",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "Array.prototype.filter",
      message: "Use native Array.prototype.filter",
    },
  ],
  [
    "lodash.indexof",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "Array.prototype.indexOf",
      message: "Use native Array.prototype.indexOf",
    },
  ],
  [
    "lodash.fill",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "Array.prototype.fill",
      message: "Use native Array.prototype.fill",
    },
  ],
]);
