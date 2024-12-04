/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Укажите ваш основной JavaScript файл
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Папка для собранных файлов
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Обработка CSS
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]", // Сохранение структуры папок
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
  },
};
