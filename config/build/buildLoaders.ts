import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    // const svgLoader = {
    //     test: /\.svg$/,
    //     use: ['@svgr/webpack'],
    // }

    const fileLoader =  {
        test: /\.(woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const imgLoader = {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
    }

    const cssLoader =  {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: isDev
                          ? '[path][name]__[local]--[hash:base64:8]'
                          : '[hash:base64:8]',
                    },
                },
            },
            "sass-loader",
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        fileLoader,
        imgLoader,
        typescriptLoader,
        cssLoader,
    ]
}