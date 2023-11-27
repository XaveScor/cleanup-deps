# cleanup-deps

Easy detection of useless dependencies in your `package.json` file.

## How to use

```bash
npx cleanup-deps@latest
```
inside your project root directory.

### cli options

- `--path <path>` - path to directory contains your `package.json` file. Default: working directory. Result of `pwd` command.

### Limitations

- Only `dependencies` and `devDependencies` sections are supported.
- Only node runtime are supported. The browser runtime will be supported in the future.
- We have a small list of packages in our deprecation list.
- You can't hide some packages from the deprecation list. We will add this feature in the future.

