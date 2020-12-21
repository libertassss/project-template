const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const commonConfig = require('./webpack.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { getFiles, getPlugins } = require('./entryFile.config');
const TerserPlugin = require('terser-webpack-plugin');
const env = process.env.NODE_ENV; // 模式（dev开发环境，production生产环境）
let PUBLIC_PATH = env === 'production' ? `//w1.hoopchina.com.cn/games/static/incentive-frontend-fed/` : '//w1-test.hoopchina.com.cn/games/static/incentive-frontend-fed/';


module.exports = merge(commonConfig, {
    entry: getFiles(),
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'static/[name].[contenthash].js',
        publicPath: PUBLIC_PATH
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.(less|css)/,
                use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','less-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        ...getPlugins(),
        new MiniCssExtractPlugin({
            // 类似于 webpackOptions.output 中的选项
            // 所有选项都是可选的
            filename: 'static/[name].[contenthash].css',
            chunkFilename: 'static/[id].[contenthash].css',
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ]
    }

})