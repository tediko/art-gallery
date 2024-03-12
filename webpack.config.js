const path = require('path');

module.exports = {
    entry: {'home': './src/index.js', 'location': './src/location.js'},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};
