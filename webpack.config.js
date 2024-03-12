const path = require('path');

module.exports = {
    entry: {'location': './src/location.js'},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};