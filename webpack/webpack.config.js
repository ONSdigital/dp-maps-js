const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const config = env => require(`./webpack.${env}.js`);

module.exports = (args = { mode: "production", analyze: false }) => {
    const { mode, analyze, watch } = args;
    console.debug(`Webpack running in ${mode} mode`);
    return merge({
        mode,
        entry: path.resolve(__dirname, "../src/ts/index.ts"),
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                }
            ],
        },
        resolve: {
            extensions: [".ts", ".js"],
        },
        output: {
            filename: "index.js",
            path: path.resolve(__dirname, "../lib"),
            clean: true,
            libraryTarget: 'umd',
        },
        plugins: [
            new webpack.ProgressPlugin(),
        ],
    }, config(mode)(args));
};
