import {defineConfig} from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  format: ['cjs', 'esm'],
  sourcemap: true,
  clean: true,
  outDir: 'lib',
  legacyOutput: true,
});
