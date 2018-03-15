const path = require('path');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let plugins = [
    new NpmInstallPlugin
];

if (process.env.environment === 'production') {
    plugins.push(new UglifyJsPlugin);
}

module.exports = {
    watch: process.env.environment !== 'production',
    watchOptions: {
        ignored: /node_modules/
    },
    devtool: 'source-map',
    entry: [
        "./src/js/app.js",
        "./src/scss/style.scss"
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
        library: 'NPMPackageStarter',
        libraryTarget: 'umd'
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ["env"]
                   }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
       ]
    }
}