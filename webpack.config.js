const path = require('path');

module.exports = (env, args) => {
    return {
        mode: 'production',
        entry: {
            index: path.join(__dirname, 'index.ts'),
        },

        output: {
            path: path.join(__dirname, 'www'),
            filename: 'test_npm.js',
            library: 'test_npm',
            libraryTarget: 'umd',
        },

        module: {
            rules: [{
                test: /\.ts$/,
                use: [{ loader: 'ts-loader' }]
            }]
        },

        resolve: {
            extensions: ['.js', '.ts'],
        },
    }
};