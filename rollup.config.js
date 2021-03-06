import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import { default as makeAttractionsImporter } from 'attractions/importer'
import path from 'path';
import scss from "rollup-plugin-scss";
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import alias from '@rollup/plugin-alias';

const production = !process.env.ROLLUP_WATCH;

function serve() {
    let server;

    function toExit() {
        if (server) server.kill(0);
    }

    return {
        writeBundle() {
            if (server) return;
            server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                stdio: ['ignore', 'inherit', 'inherit'],
                shell: true
            });

            process.on('SIGTERM', toExit);
            process.on('exit', toExit);
        }
    };
}

export default {
    input: 'src/main.ts',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js'
    },
    plugins: [
        alias({
            entries: [
                {
                    find: '@c', replacement: path.join(__dirname, 'src/components')
                }
            ]
        }),
        svelte({
            preprocess: sveltePreprocess({
                scss: {
                  importer: makeAttractionsImporter({
                    // specify the path to your theme file, relative to this file
                    themeFile: path.join(__dirname, 'src/css/theme.scss'),
                  }),
                  // not mandatory but nice to have for concise imports
                  includePaths: [path.join(__dirname, 'src/css')],
                },
                sourceMap: !production,
                /*postcss: {
                    plugins: [autoprefixer()]
                }*/
            }),
            compilerOptions: {
                // enable run-time checks when not in production
                dev: !production
            }
        }),
        scss({
            processor: () => postcss([autoprefixer()]),
            includePaths: [
              path.join(__dirname, './node_modules/'),
              //'node_modules/'
            ],
            outputStyle: 'compressed',
            watch: 'src/css',
          }),
        // we'll extract any component CSS out into
        // a separate file - better for performance
        css({ output: 'bundle.css' }),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration -
        // consult the documentation for details:
        // https://github.com/rollup/plugins/tree/master/packages/commonjs
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),
        typescript({
            sourceMap: !production,
            inlineSources: !production
        }),

        // In dev mode, call `npm run start` once
        // the bundle has been generated
        !production && serve(),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && livereload('public'),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};
