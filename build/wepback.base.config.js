const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackBaseConfig = {
    resolve: {
        extensions: [".js", ".json", ".jsx"],
        alias: {
            images: path.resolve(__dirname, '../demo/static/images'),
        }
    },

    entry: {
        demo:path.resolve(__dirname, '../demo/index.js'),
    },
    
    module: {
        noParse: /node_modules\/(jquey\.js)/,
        rules: [{
            test: /\.(js|jsx)$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    "presets": [
                        "es2015", 'stage-0', 'react'
                    ]
                }
            }]       
        },{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 25000,
                    name: 'images/[name][hash:6].[ext]',
                    // 我们选择加载的图片格式为png,jpg,jpeg,gif，并限定当文件小于25kb，转换为base64编码。
                    // 优势：将一些小并且不常更新的图片转换base64编码后，可以减少一次或多次http请求。
                    // 但这个limit应该定义成一个合适的值，因为如果将稍大些的图片转为base64后，会生成大量字符，
                    // 反而降低我们的加载速度。
                }
            }]
        },{
            test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
            loader: 'file-loader',
            options: {
                name: 'fonts/[name].[ext]'
            }
        }]
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            title: "React loadList API", 
            template: path.resolve(__dirname, '../demo/index.html'),
            filename: "index.html", 
        }),
    ],
}

module.exports = webpackBaseConfig;