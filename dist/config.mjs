import { createConfig, declareValidation } from './index.js';

export default createConfig({
  packageJsonPath: '..',
  validateFn: declareValidation({
    'yargs': {
      minimalNodeVersion: '0.0.0',
      message: 'test',
    }
  })
})
