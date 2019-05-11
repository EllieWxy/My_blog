const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/App.tsx",
    output: {
        path: path.resolve(__dirname, "build"), // string
        filename: "index.js",
    },
    module: {
        // 关于模块配置
        rules: [{
            test: /\.tsx$/,
            include: [
                path.resolve(__dirname, "src")
            ],
            loader: "ts-loader",
        }, {
            test: /\.less$/,
            use: [{loader: 'style-loader'}, {
                loader: "css-loader", options: {
                    modules: true
                }
            }, {loader: 'less-loader'}]// 将 Less 编译为 CSS
        },{
            test: /\.(gif|png|jpe?g|svg)$/i,
            loader: 'file-loader',
        }],
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: [".json", ".ts", ".tsx", ".css", ".js", ".jsx"],
        alias: {
            "components": path.resolve(__dirname, 'src/components'),
            "modules": path.resolve(__dirname, 'src/modules'),
            "image": path.resolve(__dirname, 'src/images')
        },
    },
    devtool: "source-map",
    context: __dirname,
    target: "web",
    plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
    devServer: {
        compress: true,
        hot: true,
        inline: true,
        port: 9000
    }
}
