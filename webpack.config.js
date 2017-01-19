'use strict';

var path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractCSS = new ExtractTextPlugin("bundle.css"),
    extractHTML = new ExtractTextPlugin("index.html");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: ['./mainEntryJs.js'],
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
        publicPath: ""
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: extractCSS.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader!postcss-loader"
            })
        }, {
            test: /\.html$/,
            loader: extractHTML.extract({
                loader: "html-loader"
            })
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: "file-loader?name=img/[name].[ext]"
        }]
    },
    plugins: [
        function(webpack) {
            return [
                  require('postcss-import')({
                      addDependencyTo: webpack
                  }),
                  require('autoprefixer')
            ];
        },
        extractCSS,
        extractHTML
    ],
    devServer: {
        compress: true,
        port: 9000,
        publicPath:""
    }
}
