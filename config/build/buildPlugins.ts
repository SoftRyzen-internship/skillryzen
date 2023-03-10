import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import type {BuildOptions} from './types/config';
import path from 'path';

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(paths.public),
          to: path.join(paths.build),
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ];
}