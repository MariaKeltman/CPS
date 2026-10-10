const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: './cpsJS.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
devServer: {
port: 8080,
},
    devtool: "source-map",
    plugins: [
        new HTMLWebpackPlugin({
            template: "./CPS.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "img", to: "img" },
            ],
        }),
    ],
    module: {
        rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                "style-loader",
                "css-loader",
                "sass-loader",
              ]
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              type: "javascript/auto",
            },
            {
              test: /\.(png|jpe?g|gif|svg)$/i,
              use: [
                  "file-loader",
              ]
            },
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
              }
            }
        ]
    }
}