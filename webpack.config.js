const path = require('path');

const chalk = require('chalk');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (...dir) => path.resolve(__dirname, ...dir);
const DIST = resolve('dist');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: { index: resolve('src/index.tsx') },
    output: {
        path: DIST,
        publicPath: '/',
        filename: 'static/[name].js',
    },
    module: { rules: generateRules() },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: resolve('public/index.html'),
            filename: 'index.html',
            chunks: ['vendor', 'index'],
        }),
    ],
    devServer: {
        port: 8080,
        host: '0.0.0.0', // 使用 localhost 或 ip 均可访问
        inline: true,
        hot: true, // 热更新 需要配合 webpack.HotModuleReplacementPlugin
        contentBase: DIST, // 开发服务运行时的文件根目录
        overlay: true, // 出错时浏览器 DOM 上展示错误信息
        noInfo: true,
        watchContentBase: true, // 当 html 文件发生变化时, 也可以触发浏览器刷新了
        after(
            EventEmitter, Server, Compiler,
        ) {
            Compiler;
            console.log(chalk.green(`√ Service is listening at: http://localhost:${Server.options.port}/`));
        },
    },
    resolve: { extensions: ['.ts', '.tsx', '.js'] },
};

function generateRules() {
    return [
        {
            test: /\.(ts|js)x?$/,
            use: [
                'babel-loader',
                // 'ts-loader',
            ],
            exclude: /node_modules/,
        },
        {
            test: /\.html$/,
            use: {
                loader: 'html-loader',
                options: {
                    minimize: false,
                    removeAttributeQuotes: false,
                },
            },
        },
        {
            test: /\.(c|le)ss$/,
            // exclude: /node_modules/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader',
            ],
        },
        {
            test: /\.(jpg|png|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'static/[name].[hash:8].[ext]',
                },
            },
        },
        {
            test: /\.(eot|otf|svg|ttf|woff|woff2)\w*/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:8].[ext]',
                    outputPath: 'static/',
                    publicPath: undefined,
                },
            },
        },
    ];
}
