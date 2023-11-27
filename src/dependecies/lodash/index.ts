import {Dependency} from "../../shared/types";

export const lodashDeps = new Map<string, Dependency>([
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
  [
    "lodash.uniq",
    {
      minimalNodeVersion: "0.12.0",
      nativeApi: "Set",
      message: "const uniq = [...new Set([1, 1, 2])]",
    },
  ],
  [
    "lodash.bind",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Function.prototype.bind",
      message: "yourFunction.bind(scope)"
    }
  ],
  [
    "lodash.isfunction",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "typeof",
      message: "typeof yourFunction === 'function'"
    }
  ],
  [
    "lodash.castarray",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Array.isArray & array",
      message: "Array.isArray(arr) ? arr : [arr]"
    }
  ],
  [
    "lodash.gt",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "'Greater than' operator",
      message: "Use native 'Greater than' (>) operator"
    }
  ],
  [
    "lodash.gte",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "'Greater than or equal' operator",
      message: "Use native 'Greater than or equal' (>=) operator"
    }
  ],
  [
    "lodash.isfinite",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Number.isFinite",
      message: "Number.isFinite(num)"
    }
  ],
  [
    "lodash.isinteger",
    {
      minimalNodeVersion: "0.12.0",
      nativeApi: "Number.isInteger",
      message: "Number.isInteger(num)"
    }
  ],
  [
    "lodash.isnan",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Number.isNan",
      message: "Number.isNan(num)"
    }
  ],
  [
    "lodash.isnil",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Equality operator",
      message: "someData == null"
    }
  ],
  [
    "lodash.isnull",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Strict equality operator",
      message: "someData === null"
    }
  ],
  [
    "lodash.isundefined",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Strict equality operator",
      message: "someData === undefined"
    }
  ],
  [
    "lodash.keys",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "Object.keys",
      message: "Object.keys({ a: 1, b: 2})"
    }
  ],
  [
    "lodash.values",
    {
      minimalNodeVersion: "7.0.0",
      nativeApi: "Object.values",
      message: "Object.values({ a: 1, b: 2})"
    }
  ],
  [
    "lodash.endswith",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "String.prototype.endsWith",
      message: "'foobar'.endsWith('bar')"
    }
  ],
  [
    "lodash.padstart",
    {
      minimalNodeVersion: "8.0.0",
      nativeApi: "String.prototype.padStart",
      message: "'oo'.padStart(3, 'f')"
    }
  ],
  [
    "lodash.padend",
    {
      minimalNodeVersion: "8.0.0",
      nativeApi: "String.prototype.padEnd",
      message: "'f'.padEnd(3, 'o')"
    }
  ],
  [
    "lodash.repeat",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "String.prototype.repeat",
      message: "'foo'.repeat(3)"
    }
  ],
  [
    "lodash.split",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "String.prototype.split",
      message: "'foo,bar'.split(',')"
    }
  ],
  [
    "lodash.startswith",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "String.prototype.startsWith",
      message: "'foobar'.startsWith('foo')"
    }
  ],
  [
    "lodash.tolower",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "String.prototype.toLowerCase",
      message: "'FOOBAR'.toLowerCase()"
    }
  ],
  [
    "lodash.toupper",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "String.prototype.toUpperCase",
      message: "'foobar'.toUpperCase()"
    }
  ],
  [
    "lodash.trim",
    {
      minimalNodeVersion: "0.10.0",
      nativeApi: "String.prototype.trim",
      message: "' foobar '.trim()"
    }
  ],
  [
    "lodash.trimstart",
    {
      minimalNodeVersion: "10.0.0",
      nativeApi: "String.prototype.trimStart",
      message: "' foobar '.trimStart()"
    }
  ],
  [
    "lodash.trimend",
    {
      minimalNodeVersion: "10.0.0",
      nativeApi: "String.prototype.trimend",
      message: "' foobar '.trimEnd()"
    }
  ],
  [
    "lodash.times",
    {
      minimalNodeVersion: "4.0.0",
      nativeApi: "Array.from with callback",
      message: "Array.from({ length: 5 }, (_, x) => x)"
    }
  ],
])