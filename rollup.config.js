import { nodeResolve as resolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {

        input: './src/index.js',

        watch: {
                include: './src/**',
                clearScreen: true
        },

        plugins: [
                resolve({
                        browser: true
                })
        ],

        output: {
                file: './build/bundle.js',
                format: 'iife',
                sourcemap: true,

                plugins: (process.env.PROD) ? [
                        terser({
                                ecma: 2018,
                                mangle: { toplevel: true },
                                compress: {
                                        module: true,
                                        toplevel: true,
                                        unsafe_arrows: true
                                },
                                output: { quote_style: 1 }
                        })
                ] : []
        }
}
