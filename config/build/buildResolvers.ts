import { ResolveOptions } from "webpack";
const path = require('path')

import type { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '*': path.resolve(__dirname, './src/*')
        },
    }
}