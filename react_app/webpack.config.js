const path = require('path');

const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
    },
    resolve: {
        fallback: {
            "https": false,
        }
    }
};