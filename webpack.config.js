const webpack = require('webpack');

module.exports = {
    entry:"./ex/index.js",
    output:{
        path: __dirname + "/public.js",
        filename:"./bundle.js"
    },
    devServer:{
        port:8080,
        contentBase:"./public",
    },
    module:{
        loaders:[{
            test:/.jsx?$/,
            loader:"babel-loader",
            exclude:/node-modules/,
            query:{
                presets:['es2015','react']
            }
        }]
    }
};