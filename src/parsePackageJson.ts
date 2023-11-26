import { z } from "zod";
import { coerce } from "semver";

const PackageJsonSchema = z.object({
  dependencies: z.record(z.string()).optional(),
  devDependencies: z.record(z.string()).optional(),
  engines: z
    .object({
      node: z.string().optional(),
    })
    .optional(),
});

export type PackageJson = {
  nodeVersion: string | undefined;
  deps: Set<string>;
};

function parseDeps(result: Set<string>, deps: Record<string, string>) {
  for (const [name, value] of Object.entries(deps)) {
    const coerced = coerce(value);
    if (coerced) {
      result.add(name);
    }
  }
}

export function parsePackageJson(packageJson: string): PackageJson {
  const parsed = PackageJsonSchema.safeParse(JSON.parse(packageJson));
  if (!parsed.success) {
    throw new Error("Invalid package.json");
  }
  const deps = new Set<string>();
  parseDeps(deps, parsed.data.dependencies ?? {});
  parseDeps(deps, parsed.data.devDependencies ?? {});

  return {
    nodeVersion: parsed.data.engines?.node,
    deps,
  };
}
