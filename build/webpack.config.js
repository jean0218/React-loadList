const webpack = require('webpack');
const path = require('path');
const webpackBaseConfig = require('./wepback.base.config.js');
const merge = require('webpack-merge');
const outputDir = 'app';



const webpackConfig = merge(webpackBaseConfig, {
    mode:'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve(__dirname, '../' + outputDir + '/'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].chunks.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});


module.exports = webpackConfig;