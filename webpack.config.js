const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/App.tsx",
    output: {
        // webpack 如何输出结果的相关选项
        path: path.resolve(__dirname, "build"), // string
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        filename: "index.js", // string    // 「入口分块(entry chunk)」的文件名模板
        // publicPath: "./", // string    // 输出解析文件的目录，url 相对于 HTML 页面
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
        // 解析模块请求的选项
        // （不适用于对 loader 解析）
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        // 用于查找模块的目录
        extensions: [".json", ".ts", ".tsx", ".css", ".js", ".jsx"],
        alias: {
            "components": path.resolve(__dirname, 'src/components'),
            "modules": path.resolve(__dirname, 'src/modules'),
        },
    },
    devtool: "source-map",
    context: __dirname,
    target: "web",
    //   externals: ["react", /^@angular\//],  // 不要遵循/打包这些模块，而是在运行时从环境中请求他们
    //  plugins:
    plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
    devServer: {
        compress: true,
        hot: true,
        inline: true,
        port: 9000
    }
}
