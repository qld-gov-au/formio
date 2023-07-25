const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const UnminifiedWebpackPlugin = require("unminified-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemovePlugin = require("remove-files-webpack-plugin");

const getScriptConfig = (src) => {
  return {
    import: path.resolve(__dirname, src),
    library: {
      name: "FormioScript",
      type: "umd",
    },
  };
};

module.exports = {
  entry: {
    "formio-qld.min": {
      import: path.resolve(__dirname, "src/index.js"),
      library: {
        name: "FormioQld",
        type: "umd",
      },
    },
    "formio-des.min": {
      import: path.resolve(__dirname, "src/index.des.js"),
      library: {
        name: "FormioQldDes",
        type: "umd",
      },
    },
    "formio-loader.min": {
      import: path.resolve(__dirname, "src/helpers/FormioLoader/index.js"),
      library: {
        name: "FormioLoader",
        type: "umd",
      },
    },
    "formio-script.dev.min": getScriptConfig(
      "src/helpers/FormioScript/index.dev.js"
    ),
    "formio-script.min": getScriptConfig(
      "src/helpers/FormioScript/index.prod.js"
    ),
    "formio-script.staging.min": getScriptConfig(
      "src/helpers/FormioScript/index.staging.js"
    ),
    "formio-script.test.min": getScriptConfig(
      "src/helpers/FormioScript/index.testing.js"
    ),
    "formio-script.gitbridge.min": getScriptConfig(
      "src/helpers/FormioScript/index.gitbridge.js"
    ),
    // Default theme
    "formio-qld": {
      import: path.resolve(__dirname, "src/sass/formio.form.swe.scss"),
      filename: "./temp/[name].js",
    },
    // SWE theme
    "formio-qld-swe": {
      import: path.resolve(__dirname, "src/sass/formio.form.swe.scss"),
      filename: "./temp/[name].js",
    },
    // design system theme
    "formio-qld-ds": {
      import: path.resolve(__dirname, "src/sass/formio.form.ds.scss"),
      filename: "./temp/[name].js",
    },
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
        { from: path.resolve(__dirname, "./src/assets") },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "./[name].min.css",
    }),
    new RemovePlugin({
      after: {
        root: "./dist",
        include: ["temp"],
      },
    }),
  ],
  mode: "production",
  devtool: "source-map",
};
