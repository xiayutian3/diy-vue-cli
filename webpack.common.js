const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//提取css到单独文件的插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css插件

const htmlPlugin = new HtmlWebpackPlugin({
  // 生成的html的title
  title: 'Vue Cli',
  template: 'index.html',
  // 生成的html的文件名
  filename: 'index.html',
  // 注入bundle到body中
  inject: 'body'
});



const config = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, './dist/')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('src'),
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
              loader: 'css-loader',
              options: {
                modules: true,
                minimize: true ,
                url: false
              }
          }
      ]
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    htmlPlugin,
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'css/[name].css', ////都提到dist目录下的css目录中   在js中import引入的css文件  例如在 main.js中
      chunkFilename: '[id].css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    new OptimizeCssAssetsPlugin()
  ]
};

module.exports = config;