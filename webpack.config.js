"use strict";

// Libs
let ExtractText = require('extract-text-webpack-plugin');
let webpack = require('webpack');

// Define settings
module.exports = {
    // The main .js file path
    entry: {
        'app': './client/js/app.js'
    },

    // Define loaders
    module: {
        loaders: [
            // Sass
            {
                test: /\.scss$/,
                loader: ExtractText.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?minimize!sass-loader'
                })
            },
            
            // ES6
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },

    // Output .js file
    output: {
        filename: 'public/js/[name].js',
        sourceMapFilename: '[file].map'
    },

    // plugins
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            extractComments: false,
            sourceMap: true
        }),
        new ExtractText('public/css/[name].css')
    ],
    
    devtool: '#cheap-module-source-map'
};
