const path = require('path')

module.exports = {
    entry: './src/app/main.js',
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/build`
    }
}