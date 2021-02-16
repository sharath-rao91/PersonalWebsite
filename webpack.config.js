const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.scss']
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        contentBase:  path.resolve(__dirname, 'dist'),
        port: 9000
    }
};
