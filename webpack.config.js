const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/**
 * @type import("webpack").Configuration
 */

const config = {
  entry: "./src/index.tsx",
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist/js"),
    clean: true,
    assetModuleFilename: "../[name][ext]"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/template.html",
      filename: "../index.html"
    })
  ],
  module: {
    rules: [
      {test: /\.tsx?$/, use: "babel-loader"},
      {test: /\.(png|ttf|ico)$/, type: "asset/resource"},
      {test: /\.css?$/, use: "empty-loader"},
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  optimization: {
    runtimeChunk: "single",
    removeEmptyChunks: true,
    splitChunks: {
      chunks: "async",
      minSize: 0,
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|scheduler|react-icons|react-redux|)[\\/]/,
          name: "react",
          priority: 1,
          chunks: "initial",
          minSize: 0,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: 0,
          chunks: "all",
          minSize: 0,
        }
      }
    }
  }
}

module.exports = config;