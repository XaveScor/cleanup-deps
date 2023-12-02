import { test, expect, describe } from "vitest";
import { mergeValidateFn } from "./mergeValidateFn.js";
import { declareValidation } from "./declareValidation.js";
import { SemVer } from "semver";
import { invalidDep, validDep } from "./createValidateFn.js";

const futureDate = new Date(3000, 1, 1);
const pastDate = new Date(2000, 1, 1);

describe("mergeValidateFn", () => {
  test("merge valids", () => {
    const validation = mergeValidateFn([
      declareValidation({
        "test-dep": {
          message: "message",
          minimalNodeVersion: "1.0.0",
        },
      }),
      declareValidation({
        "test-dep-2": {
          message: "message",
          minimalNodeVersion: "1.0.0",
        },
      }),
    ]);

    expect(
      validation({
        nodeVersion: new SemVer("0.0.0"),
        name: "test-dep",
      }),
    ).toEqual(validDep({}));

    expect(
      validation({
        nodeVersion: new SemVer("0.0.0"),
        name: "test-dep-2",
      }),
    ).toEqual(validDep({}));
  });

  test("merge invalids", () => {
    const validation = mergeValidateFn([
      declareValidation({
        "test-dep": {
          message: "message",
          minimalNodeVersion: "1.0.0",
        },
      }),
      declareValidation({
        "test-dep-2": {
          message: "message",
          minimalNodeVersion: "6.0.0",
        },
      }),
    ]);

    expect(
      validation({
        nodeVersion: new SemVer("2.0.0"),
        name: "test-dep",
      }),
    ).toEqual(invalidDep({ message: "message" }));

    expect(
      validation({
        nodeVersion: new SemVer("2.0.0"),
        name: "test-dep-2",
      }),
    ).toEqual(validDep({}));
  });

  test("merge validUntil", () => {
    const validation = mergeValidateFn([
      declareValidation({
        "test-dep": {
          message: "message",
          minimalNodeVersion: "1.0.0",
          validUntil: futureDate,
        },
      }),
    ]);

    expect(
      validation({
        nodeVersion: new SemVer("2.0.0"),
        name: "test-dep",
      }),
    ).toEqual(validDep({ validUntil: futureDate }));
  });

  test("merge multiple validUntil", () => {
    const validation = mergeValidateFn([
      declareValidation({
        "test-dep": {
          message: "message",
          minimalNodeVersion: "1.0.0",
          validUntil: futureDate,
        },
      }),
      declareValidation({
        "test-dep": {
          message: "message",
          minimalNodeVersion: "1.0.0",
          validUntil: pastDate,
        },
      }),
    ]);

    expect(
      validation({
        nodeVersion: new SemVer("2.0.0"),
        name: "test-dep",
      }),
    ).toEqual(validDep({ validUntil: futureDate }));
  });

  test("hide invalids by validUntil", () => {
    const validation = declareValidation({
      "test-dep": {
        message: "message",
        minimalNodeVersion: "1.0.0",
        validUntil: pastDate,
      },
    });

    expect(
      validation({
        nodeVersion: new SemVer("2.0.0"),
        name: "test-dep",
      }),
    ).toEqual(invalidDep({ message: "message" }));

    const validation2 = mergeValidateFn([
      validation,
      declareValidation({
        "test-dep": {
          message: "message",
          minimalNodeVersion: "1.0.0",
          validUntil: futureDate,
        },
      }),
    ]);

    expect(
      validation2({
        nodeVersion: new SemVer("2.0.0"),
        name: "test-dep",
      }),
    ).toEqual(validDep({ validUntil: futureDate }));
  });

  test("merge with undefined", () => {
    const validation = mergeValidateFn([
      declareValidation({
        "test-dep": {
          message: "message",
          minimalNodeVersion: "1.0.0",
        },
      }),
      undefined,
    ]);

    expect(
      validation({
        nodeVersion: new SemVer("0.0.0"),
        name: "test-dep",
      }),
    ).toEqual(validDep({}));
  });
});
