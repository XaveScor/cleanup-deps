#!/usr/bin/env node

(async () => {
  const { run } = await import("cleanup-deps");

  await run();
})();
