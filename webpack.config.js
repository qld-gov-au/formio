const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "formio-qld-custom-components.min.js",
    library: "FormioQld",
    libraryTarget: "umd",
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
    new CopyPlugin({
      patterns: [{ from: "lib", info: { minimized: true } }],
    }),
    // new CopyPlugin({
    //   patterns: [{ from: "src/assets" }],
    // }),
  ],
  mode: "production",
  devtool: "source-map",
};
