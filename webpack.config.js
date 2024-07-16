// webpack.config.js
const path = require('path');

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
    }
};
