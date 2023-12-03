import { test, expect, describe } from "vitest";
import { mkdtemp, rmdir } from "node:fs/promises";
import { loadConfig } from "./getTotalConfig.js";
import { emptyConfig } from "./emptyConfig.js";

describe("loadConfig", () => {
  test("should not failed if config not exists", async () => {
    const tmpDir = await mkdtemp("cleanup-deps-test-");
    try {
      const config = await loadConfig({ path: undefined, cwd: tmpDir });
      expect(config).toEqual(emptyConfig);
    } finally {
      await rmdir(tmpDir, { recursive: true });
    }
  });
});
