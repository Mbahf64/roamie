// ts-node-register.mjs
import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

(async () => {
  await import('ts-node/register');
  register('ts-node/esm', pathToFileURL('./'));
})();
