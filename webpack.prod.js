import { merge } from "webpack-merge";
import common from "./webpack.common.js"; // Убедитесь, что файл называется правильно
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

export default merge(common, {
  mode: "production",
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
});
