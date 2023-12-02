import { describe, expect, test } from "vitest";
import { declareValidation } from "./declareValidation.js";
import { SemVer } from "semver";
import { invalidDep, validDep } from "./createValidateFn.js";

const futureDate = new Date(3000, 1, 1);
const pastDate = new Date(2000, 1, 1);

describe("declareValidation", () => {
  test("single invalid", () => {
    const validation = declareValidation({
      "test-dep": {
        message: "message",
        minimalNodeVersion: "1.0.0",
      },
    });

    const res = validation({
      nodeVersion: new SemVer("2.0.0"),
      name: "test-dep",
    });

    expect(res.type).toEqual("invalid");
  });

  test("single valid", () => {
    const validation = declareValidation({
      "test-dep": {
        message: "message",
        minimalNodeVersion: "1.0.0",
      },
    });

    const res = validation({
      nodeVersion: new SemVer("0.0.0"),
      name: "test-dep",
    });

    expect(res.type).toEqual("valid");
  });

  test("multiple valid", () => {
    const validation = declareValidation({
      "test-dep": {
        message: "message",
        minimalNodeVersion: "1.0.0",
      },
      "test-dep-2": {
        message: "message",
        minimalNodeVersion: "1.0.0",
      },
    });

    expect(
      validation({
        nodeVersion: new SemVer("0.0.0"),
        name: "test-dep",
      }).type,
    ).toEqual("valid");

    expect(
      validation({
        nodeVersion: new SemVer("0.0.0"),
        name: "test-dep-2",
      }).type,
    ).toEqual("valid");
  });

  test("multiple valid and invalid", () => {
    const validation = declareValidation({
      "test-dep": {
        message: "message",
        minimalNodeVersion: "1.0.0",
      },
      "test-dep-2": {
        message: "message",
        minimalNodeVersion: "1.0.0",
      },
    });

    expect(
      validation({
        nodeVersion: new SemVer("2.0.0"),
        name: "test-dep",
      }),
    ).toEqual(invalidDep({ message: "message" }));

    expect(
      validation({
        nodeVersion: new SemVer("0.0.0"),
        name: "test-dep-2",
      }).type,
    ).toEqual("valid");
  });

  test("future validUntil", () => {
    const validation = declareValidation({
      "test-dep": {
        message: "message",
        minimalNodeVersion: "1.0.0",
        validUntil: futureDate,
      },
    });

    expect(
      validation({
        nodeVersion: new SemVer("2.0.0"),
        name: "test-dep",
      }),
    ).toEqual(validDep({ validUntil: futureDate }));
  });

  test("future validUntil", () => {
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
  });

  test("unknown dep", () => {
    const validation = declareValidation({
      "test-dep": {
        message: "message",
        minimalNodeVersion: "1.0.0",
      },
    });

    expect(
      validation({
        nodeVersion: new SemVer("2.0.0"),
        name: "unknown-dep",
      }),
    ).toEqual(validDep({}));
  });
});
