import { merge } from "webpack-merge";
import common from "./webpack.common.js"; // Убедитесь, что файл называется правильно
import webpack from "webpack";

export default merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
