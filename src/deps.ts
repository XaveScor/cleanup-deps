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
]);
