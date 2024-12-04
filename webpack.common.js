/* eslint-disable no-undef */
// webpack.common.js
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  output: {
    filename: "app.bundle.js",
    path: path.resolve(process.cwd(), "dist"),
    clean: true, // Очищает выходную папку перед каждой сборкой
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css"], // Добавьте .css в расширения
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset/resource", // Используйте asset/resource вместо file-loader
        generator: {
          filename: "img/[name][ext]", // Путь к выходным изображениям
        },
      },
      {
        test: /\.ico$/,
        type: "asset/resource",
        generator: {
          filename: "[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
