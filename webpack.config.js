const path = require('path');
const {
  WranglerJsCompatWebpackPlugin,
} = require("wranglerjs-compat-webpack-plugin");

module.exports = {
    entry: './worker/main.py',
    target: 'webworker',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'worker.js'
    },
    module: {
        rules: [
            {
                test: /\.py$/,
                use: 'py-loader'
            }
        ]
    },
    plugins: [new WranglerJsCompatWebpackPlugin()]
};
