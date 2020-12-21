const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 动态生成html插件
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');
const argv = require('yargs').argv;

const TARGET = argv._[0];

const PUBLIC_PATH = "/"; // 基础路径
const commonConfig = require('./webpack.config');

module.exports = merge(commonConfig, {
    mode: "development",
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        path.join(__dirname, `../src/views/${TARGET}/app.tsx`)
    ],
    output: {
        path: path.resolve(__dirname, '../src'),
        filename: 'main.js',
        publicPath: PUBLIC_PATH
    },
    module: {
        rules: [
            {
                test: /\.(less|css)/,
                use: ['style-loader','css-loader','postcss-loader','less-loader']
            }
        ]
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new WebpackBar({
            name: '复兴号-互动激励'
        }),
        new HtmlWebpackPlugin({template: path.resolve(__dirname, '../src/index.html')}),
        new webpack.HotModuleReplacementPlugin(),
        
    ]
}
) 