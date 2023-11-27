import { describe, expect, test } from "vitest";
import { findUselessPackages } from "./findUselessPackages.js";

describe("findUselessPackages", () => {
  test("have useless deps only with node@lts", () => {
    const deps = new Set([
      "object-assign",
      "object.assign",
      "es6-object-assign",
      "lodash.compact",
      "lodash.isarray",
      "lodash.concat",
      "lodash.difference",
      "lodash.differenceby",
      "lodash.differencewith",
      "lodash.drop",
      "lodash.dropright",
      "lodash.join",
      "lodash.reverse",
      "lodash.lastindexof",
      "lodash._slice",
      "lodash.slice",
      "lodash.without",
      "lodash.findindex",
      "lodash.findlastindex",
      "lodash.head",
      "lodash.flatten",
      "lodash.flattendeep",
      "lodash.flattendepth",
      "lodash.frompairs",
      "lodash.indexof",
      "lodash.fill",
      "lodash.initial",
      "lodash.last",
      "lodash.nth",
      "lodash.pull",
      "lodash.pullall",
    ]);
    const uselessPackages = findUselessPackages({
      dependencies: deps,
      nodeVersion: "20.99.0",
    });

    expect(uselessPackages).toEqual(deps);
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

  test("have useless package but dep node version is any", () => {
    const uselessPackages = findUselessPackages({
      dependencies: new Set(["lodash.head"]),
      nodeVersion: "0.0.0",
    });

    expect(uselessPackages).toEqual(new Set(["lodash.head"]));
  });
});
