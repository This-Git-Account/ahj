import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  {
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
      },
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  {
    rules: {
      "no-unused-vars": "warn",
    },
    ignores: ["dist/**/*"],
  },
  {
    files: ["**/*.test.js"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
    },
  },
  {
    files: ["dist/**/*.js"],
    rules: {
      "no-unused-vars": "off",
      "no-useless-escape": "off",
    },
  },
];
