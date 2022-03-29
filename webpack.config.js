const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const UnminifiedWebpackPlugin = require("unminified-webpack-plugin");

module.exports = {
  entry: {
    "formio-qld.min": path.resolve(__dirname, "src/index.js"),
    "formio-loader.min": path.resolve(
      __dirname,
      "src/matrixHelpers/formioLoader/index.js"
    ),
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
    // library: "FormioQld",
    // libraryTarget: "umd",
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
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new UnminifiedWebpackPlugin({
      include: [/formio-.*$/],
      exclude: [
        // path.resolve(__dirname, "./lib/premium.min.js"),
        // path.resolve(__dirname, "./node_modules"),
        // path.resolve(__dirname, "./src"),
        // /formio.full.*$/,
        // /premium.*$/,
        // /node_modules/,
        // /lib/,
      ],
      // include: /src/.*/,
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "./lib"), info: { minimized: true } },
      ],
    }),
  ],
  mode: "production",
  devtool: "source-map",
};
