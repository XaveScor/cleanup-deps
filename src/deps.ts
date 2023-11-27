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
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.isArray",
      message: "Array.isArray(el)"
    },
  ],
  [
    "lodash.concat",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.prototype.concat",
      message: "array.concat(...arrays)"
    },
  ],
  [
    "lodash.dropright",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.prototype.slice",
      message: "array.slice(0, -n)",
    },
  ],
  [
    "lodash.join",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.prototype.join",
      message: "array.join(separator)",
    },
  ],
  [
    "lodash.lastindexof",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.prototype.lastIndexOf",
      message: "array.lastIndexOf(value)",
    },
  ],
  [
    "lodash.reverse",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.prototype.reverse",
      message: "array.reverse()",
    },
  ],
  [
    "lodash._slice",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.prototype.slice",
      message: "array.slice(start, end)",
    },
  ],
  [
    "lodash.slice",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.prototype.slice",
      message: "array.slice(start, end)",
    },
  ],
  [
    "lodash.without",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.prototype.filter",
      message: "array.filter(el => !values.includes(el))",
    },
  ],
  [
    "lodash.indexof",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.prototype.indexOf",
      message: "array.indexOf(value)",
    },
  ],
  [
    "lodash.fill",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "Array.prototype.fill",
      message: "array.fill(value, start, end)",
    },
  ],
]);
