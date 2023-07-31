const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");


const webpackConfig = (env) => {
    const mode = env?.development ? 'development' : 'production';

    return {
        mode: mode,
        entry: {
            ['app']: ['./src/index.js'], // Define entry as an array of paths or single path
        },
        devServer: {
            allowedHosts: 'auto',
            devMiddleware:{
                writeToDisk: true
            },
            static:{
                directory:__dirname
            }
        },
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, 'assets/'), // Correct path resolution
            filename: '[name].js'
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCSSExtractPlugin({
                filename: "[name].css"
            }),
            new plugins.WriteFilePlugin({
                // exclude hot-update files
                test: /^(?!.*(hot)).*/,
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    ['@babel/preset-env', { targets: "defaults" }],
                                    ["@babel/preset-react", { targets: "defaults"}]
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/i,
                    exclude: /node_modules/,
                    use:  [
                        {
                            loader: MiniCSSExtractPlugin.loader //This is used to generate the css file based on paths provided
                        },
                        'css-loader'
                    ]
                }
            ]
        }
    };
};

module.exports = webpackConfig;