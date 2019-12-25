const path = require('path');

const styles = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
};

const html = {
    test: /\.html/,
    use: 'html-loader',
};

const js = {
    test: /\.js$/,
    loader: 'eslint-loader',
    exclude: /node_modules/,
};

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            styles,
            html,
            js,
        ],
    },

};
