import { describe, expect, test } from "vitest";
import { findUselessPackages } from "./findUselessPackages.js";

describe("findUselessPackages", () => {
  test("have useless deps only", () => {
    const uselessPackages = findUselessPackages({
      dependencies: new Set([
        "object-assign",
        "object.assign",
        "es6-object-assign",
        "lodash.isarray",
        "lodash.dropright",
        "lodash.join",
        "lodash.reverse",
        "lodash.lastindexof",
        "lodash._slice",
        "lodash.slice",
        "lodash.without",
        "lodash.indexof",
        "lodash.fill",
      ]),
      nodeVersion: "6.0.0",
    });

    expect(uselessPackages).toEqual(
      new Set([
        "object-assign",
        "object.assign",
        "es6-object-assign",
        "lodash.isarray",
        "lodash.dropright",
        "lodash.join",
        "lodash.reverse",
        "lodash.lastindexof",
        "lodash._slice",
        "lodash.slice",
        "lodash.without",
        "lodash.indexof",
        "lodash.fill",
      ]),
    );
  });

  test("have mixed deps", () => {
    const uselessPackages = findUselessPackages({
      dependencies: new Set(["object.assign", "axios"]),
      nodeVersion: "6.0.0",
    });

    expect(uselessPackages).toEqual(new Set(["object.assign"]));
  });

  test("have useless package but node version is too low", () => {
    const uselessPackages = findUselessPackages({
      dependencies: new Set(["object-assign"]),
      nodeVersion: "2.0.0",
    });

    expect(uselessPackages).toEqual(new Set());
  });
});
