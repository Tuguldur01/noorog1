var config = {
    entry: './main.js',

    output: {
        path: './',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
<<<<<<< HEAD
        port: 3000
=======
        port: 3030
>>>>>>> 5a88520246291938171233a829a6c8d57a25619b
    },

    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-decorators-legacy']
                }
            }, {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            }

        ]
    },

    postcss: function () {
        return [autoprefixer, precss];
    }
}

<<<<<<< HEAD
module.exports = config;
=======
module.exports = config;
>>>>>>> 5a88520246291938171233a829a6c8d57a25619b
