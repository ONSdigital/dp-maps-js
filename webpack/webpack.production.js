const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({}) => ({
    watch: false,
    externals: {
        "mapbox-gl": "mapbox-gl" 
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            "process.env.NODE_ENV": "production", 
         })
    ]
});
