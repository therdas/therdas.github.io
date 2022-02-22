const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src'),
    target: 'web',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    devServer: {
        hot: true,
        host: "localhost",
        port: 8000,
        static: {
            directory: path.resolve(__dirname, 'build'),
            watch: true,
        },
        watchFiles:[path.join(__dirname, './**/*')]
    },

    module:  {
        rules: [
            {
                test: /\.(ts|js)x?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/
            }, 
            {
                test: /\.s(a|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.pug$/,
                loader: '@webdiscus/pug-loader',
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './src/index.pug')
        }),new webpack.HotModuleReplacementPlugin(),
    ]
}
