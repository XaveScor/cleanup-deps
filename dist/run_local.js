#!/usr/bin/env node

(async () => {
  const { run } = await import("./run.js");

  await run();
})();
