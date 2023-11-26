import { test, describe, expect } from "vitest";
import { parsePackageJson } from "./parsePackageJson.js";

describe("parsePackageJson", () => {
  test("empty package.json", () => {
    const packageJson = "{}";
    const parsed = parsePackageJson(packageJson);

    expect(parsed).toEqual({
      nodeVersion: undefined,
      deps: new Set(),
    });
  });

  test("package.json with dependencies", () => {
    const packageJson = `{
      "dependencies": {
        "object-assign": "4.0.0",
        "object.assign": "4.0.0",
        "es6-object-assign": "4.0.0"
      }
    }`;

    const parsed = parsePackageJson(packageJson);
    expect(parsed).toEqual({
      nodeVersion: undefined,
      deps: new Set(["object-assign", "object.assign", "es6-object-assign"]),
    });
  });

  test("package.json with devDependencies", () => {
    const packageJson = `{
      "devDependencies": {
        "object-assign": "4.0.0",
        "object.assign": "4.0.0",
        "es6-object-assign": "4.0.0"
      }
    }`;

    const parsed = parsePackageJson(packageJson);
    expect(parsed).toEqual({
      nodeVersion: undefined,
      deps: new Set(["object-assign", "object.assign", "es6-object-assign"]),
    });
  });

  test("package.json with mixed dependencies", () => {
    const packageJson = `{
      "dependencies": {
        "object-assign": "4.0.0",
        "object.assign": "4.0.0"
      },
      "devDependencies": {
        "es6-object-assign": "4.0.0"
      }
    }`;

    const parsed = parsePackageJson(packageJson);
    expect(parsed).toEqual({
      nodeVersion: undefined,
      deps: new Set(["object-assign", "object.assign", "es6-object-assign"]),
    });
  });

  test("package.json with node version", () => {
    const packageJson = `{
      "engines": {
        "node": ">= 4.0.0"
      }
    }`;

    const parsed = parsePackageJson(packageJson);
    expect(parsed).toEqual({
      nodeVersion: ">= 4.0.0",
      deps: new Set(),
    });
  });

  test("package.json should skip not semver dependencies", () => {
    const packageJson = `{
      "dependencies": {
        "object-assign": "asdasda"
      }
    }`;

    const parsed = parsePackageJson(packageJson);
    expect(parsed).toEqual({
      nodeVersion: undefined,
      deps: new Set(),
    });
  });

  test.only("package.json should not skip semver with ^", () => {
    const packageJson = `{
      "dependencies": {
        "object-assign": "^4.0.0"
      }
    }`;

    const parsed = parsePackageJson(packageJson);
    expect(parsed).toEqual({
      nodeVersion: undefined,
      deps: new Set(["object-assign"]),
    });
  });
});
