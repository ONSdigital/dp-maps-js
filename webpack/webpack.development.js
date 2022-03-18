const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


module.exports = ({ analyze }) => ({
    watch: true,
    externals: {
        "mapbox-gl": "mapbox-gl" 
    },
    devtool: "inline-source-map",
    plugins: [ ...(analyze === "true") ?
        [new BundleAnalyzerPlugin({
            analyzerHost: "localhost",
            analyzerPort: 4200,
        })] : [],
        new webpack.EnvironmentPlugin({
           "process.env.NODE_ENV": "development", 
        }),
    ]
});
