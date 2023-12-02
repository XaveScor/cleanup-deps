import { createValidateFn } from "./createValidateFn.js";

type Config = {
  packageJsonPath?: string;
  validateFn?: ReturnType<typeof createValidateFn>;
};
export const configSymbol = Symbol("config");

export function createConfig(
  config: Config,
): Config & { __flag: typeof configSymbol } {
  return {
    ...config,
    __flag: configSymbol,
  };
}
export function isConfig(obj: unknown): obj is FinishedConfig {
  return (
    typeof obj === "object" &&
    obj !== null &&
    (obj as any).__flag === configSymbol
  );
}
export type FinishedConfig = ReturnType<typeof createConfig>;
