const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const UnminifiedWebpackPlugin = require("unminified-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    "formio-qld.min": {
      import: path.resolve(__dirname, "src/index.js"),
      library: {
        name: "FormioQld",
        type: "umd",
      },
    },
    "formio-loader.min": {
      import: path.resolve(
        __dirname,
        "src/matrixHelpers/formioLoader/index.js"
      ),
      library: {
        name: "FormioLoader",
        type: "umd",
      },
    },
    "formio-script.dev.min": path.resolve(
      __dirname,
      "src/matrixHelpers/formioScript/index.dev.js"
    ),
    "formio-script.prod.min": path.resolve(
      __dirname,
      "src/matrixHelpers/formioScript/index.prod.js"
    ),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.ejs$/i,
        include: [path.resolve(__dirname, "./src")],
        use: [
          {
            loader: "raw-loader",
          },
        ],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new UnminifiedWebpackPlugin({
      include: [/formio-.*.js$/],
      exclude: [],
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "./lib"), info: { minimized: true } },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
  mode: "production",
  devtool: "source-map",
};
