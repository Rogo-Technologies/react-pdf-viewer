import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import fs from 'fs';

const rootPackagePath = process.cwd();
const pkgPath = path.join(rootPackagePath, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath));

const outputDir = path.join(rootPackagePath, 'lib');
const pgkName = pkg.name.replace('@rogo-technologies/react-pdf-viewer-', '');

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

    // ESM
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

    // Minified ESM
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
