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
    "lodash.compact",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.prototype.filter & Boolean",
      message: "you can replace lodash.compact with array.filter(Boolean)",
    },
  ],
  [
    "lodash.isarray",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.isArray",
      message: "Array.isArray(el)",
    },
  ],
  [
    "lodash.concat",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.prototype.concat",
      message: "array.concat(...arrays)",
    },
  ],
  [
    "lodash.difference",
    {
      minimalNodeVersion: "0.12.0",
      nativeApi: "Array.prototype.filter & Set",
      message: "const set = new Set(diff); array.filter(el => !set.has(el))",
    },
  ],
  [
    "lodash.differenceby",
    {
      minimalNodeVersion: "0.12.0",
      nativeApi: "Array.prototype.filter & Set",
      message:
        "const set = new Set(diff.map(fn)); array.filter(el => !set.has(fn(el)))",
    },
  ],
  [
    "lodash.differencewith",
    {
      minimalNodeVersion: "0.12.0",
      nativeApi: "Array.prototype.filter",
      message: "arr1.filter(el => !arr2.some(el2 => comparator(el, el2)))",
    },
  ],
  [
    "lodash.drop",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.prototype.slice",
      message: "array.slice(n)",
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
    "lodash.findindex",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "Array.prototype.findIndex",
      message: "array.findIndex(fn)",
    },
  ],
  [
    "lodash.findlastindex",
    {
      minimalNodeVersion: "18.0.0",
      nativeApi: "Array.prototype.findLastIndex",
      message: "array.findLastIndex(fn)",
    },
  ],
  [
    "lodash.head",
    {
      minimalNodeVersion: "0.0.0",
      nativeApi: "array[0]",
      message: "array[0]",
    },
  ],
  [
    "lodash.flatten",
    {
      minimalNodeVersion: "11.0.0",
      nativeApi: "Array.prototype.flat",
      message: "array.flat()",
    },
  ],
  [
    "lodash.flattendeep",
    {
      minimalNodeVersion: "11.0.0",
      nativeApi: "Array.prototype.flat",
      message: "array.flat(Infinity)",
    },
  ],
  [
    "lodash.flattendepth",
    {
      minimalNodeVersion: "11.0.0",
      nativeApi: "Array.prototype.flat",
      message: "array.flat(depth)",
    },
  ],
  [
    "lodash.frompairs",
    {
      minimalNodeVersion: "12.0.0",
      nativeApi: "Object.fromEntries",
      message: "Object.fromEntries(iterable)",
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
  [
    "lodash.initial",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.prototype.slice",
      message: "array.slice(0, -1)",
    },
  ],
  [
    "lodash.last",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "array[array.length - 1]",
      message: "array[array.length - 1]",
    },
  ],
  [
    "lodash.nth",
    {
      minimalNodeVersion: "16.6.0",
      nativeApi: "Array.prototype.at",
      message: "array.at(index)",
    },
  ],
  [
    "lodash.pull",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.prototype.filter",
      message: "array.filter(el => !values.includes(el))",
    },
  ],
  [
    "lodash.pullall",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.prototype.filter",
      message: "array.filter(el => !values.includes(el))",
    },
  ],
]);
