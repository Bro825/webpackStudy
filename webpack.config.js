const path = require("path"); //nodejs里面的基本包，用来处理路径
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const isDev = process.env.NODE_ENV === 'development';



//__dirname表示文件相对于工程的路径
var config = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new VueLoaderPlugin(),
        new HTMLPlugin({ title: '利用webpack搭建vue工程' })
    ],
    module: {
        rules: [{
            test: /.vue$/,
            // 单个就用loader多个用use
            loader: 'vue-loader'
        }, { //通过vue-loader来识别以vue结尾的文件
            test: /.css$/,
            //css的处理方式不同，有嵌入在页面style标签里的，有从外部文件引入的，我们这里用use来声明
            use: [
                'style-loader', //接受潜在页面内部的style标签的文件。
                'css-loader'
            ]
        }, {
            test: /\.(gif|jpg|jpeg|png|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name].[ext]'
                }
            }]
        }]
    },
    mode: 'none'
};
if (isDev) {
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            erros: true,
        }
    };
}

module.exports = config;