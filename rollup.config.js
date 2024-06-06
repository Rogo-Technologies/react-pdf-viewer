import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import pkg from './package.json' with { type: 'json' };

const rootPackagePath = path.resolve(import.meta.dirname, '../');

const outputDir = path.join(rootPackagePath, 'lib');
const pgkName = pkg.name.split('/').pop();

const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

const plugins = [json(), typescript()];

const rollupConfig = [
    // CJS
    {
        input: 'src/index.ts',
        output: {
            exports: 'named',
            file: path.join(outputDir, `cjs/${pgkName}.js`),
            format: 'cjs',
        },
        external,
        plugins,
    },

    // Minified CJS
    {
        input: 'src/index.ts',
        output: {
            exports: 'named',
            file: path.join(outputDir, `cjs/${pgkName}.min.js`),
            format: 'cjs',
        },
        external,
        plugins: plugins.concat([terser()]),
    },

    // esm
    {
        input: 'src/index.ts',
        output: {
            exports: 'named',
            file: path.join(outputDir, `esm/${pgkName}.js`),
            format: 'esm',
        },
        external,
        plugins,
    },

    // Minified esm
    {
        input: 'src/index.ts',
        output: {
            exports: 'named',
            file: path.join(outputDir, `esm/${pgkName}.min.js`),
            format: 'esm',
        },
        external,
        plugins: plugins.concat([terser()]),
    },
];

export default rollupConfig;
