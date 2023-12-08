# cleanup-deps

Easy detection of useless dependencies in your `package.json` file.

## How to use

```bash
npx cleanup-deps@latest
```
inside your project root directory.

### cli options

| Option         | value    | Default | Description                                          |
|----------------|----------|---------|------------------------------------------------------|
| `--path`       | `<path>` | `pwd`   | path to directory contains your `package.json` file. |
| `--config`     | `<path>` | `pwd`   | path to config file                                  |

### Configuration

You can create config file to customize the behavior of the tool.

```shell
npx cleanup-deps@latest --config ./config.cleanup-deps.mjs
```

`mjs` is important. Only ESM modules are supported.

Example of config file:

```javascript
// config.cleanup-deps.mjs
import { createConfig, declareValidation } from './index.js';

export default createConfig({
  packageJsonPath: '..',
  validateFn: declareValidation({
    'yargs': {
      minimalNodeVersion: '0.0.0',
      message: 'test',
      validUntil: new Date(),
    }
  })
})
```

#### config API

##### `createConfig`
Wrapper for config object for better IDE support. Example of usage you can see above.
Arguments:
- `packageJsonPath` - path to `package.json` file. Default: `process.cwd()`
- `validateFn` - function that will be called for each dependency. Please see `createValidationFn` for more details.

##### `declareValidation`
Helper function to declare validation rules for specific package. Example of usage you can see above.
Arguments:
- key of the object - package name
- value:
  - `minimalNodeVersion` - minimal node version for which package is deprecated.
  - `message` - message that will be shown if package is deprecated.
  - `validUntil` `[Optional]` - date until package is valid. If date is expired, package will be marked as deprecated.

##### `createValidateFn`
Helper function to create validate function for specific package. Should return `validDep` or `invalidDep`.
Example of usage you can see in [declareValidation](https://github.com/XaveScor/cleanup-deps/blob/4aa6a662d9ad7b9db7813ea3b62ebadab37ada12/src/config/declareValidation.ts) file

##### `mergeValidateFn`
Helper function to merge validate functions.

### Tips

#### How to hide specific package from the report

You can use `--config` option to declare config file with `validUntil` for specific package.
For example:
```javascript
// config.cleanup-deps.mjs
import { createConfig, declareValidation } from './index.js';

export default createConfig({
  packageJsonPath: '..',
  validateFn: declareValidation({
    'object.assign': {
      minimalNodeVersion: '0.0.0',
      message: 'test',
      validUntil: new Date('2030-01-01'),
    }
  })
})
```
After '2030-01-01' date, the package `object.assign` will be shown in the report. Before that the package will be undeprecated dep.

### Limitations

- Only `dependencies` and `devDependencies` sections are supported.
- Only node runtime are supported. The browser runtime will be supported in the future.
- We have a small list of packages in our deprecation list.

