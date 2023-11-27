import { describe, expect, test } from "vitest";
import { findUselessPackages } from "./findUselessPackages.js";
import { deps } from "./dependecies";

describe("findUselessPackages", () => {
  test("have useless deps only with node@lts", () => {
    const depsNames = new Set([...deps.keys()])

    const uselessPackages = findUselessPackages({
      dependencies: depsNames,
      nodeVersion: "20.99.0",
    });

    expect(uselessPackages).toEqual(depsNames);
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
