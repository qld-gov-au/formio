const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  stories: [
    "../src/stories/Welcome.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-themes",
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  staticDirs: [
    "static",
    "../lib",
    { from: "../src/stories/assets", to: "./assets" },
  ],
  webpackFinal: async (config) => {
    // placeholder for custom webpack settings for storybook
    // config.externals = { ...config.externals, formiojs: "formiojs" };
    config.module.rules.push({
      test: /\.ejs$/i,
      include: [path.resolve(__dirname, "../src")],
      use: [
        {
          loader: "raw-loader",
        },
      ],
    });
    config.module.rules.push({
      test: /\.(s(a|c)ss)$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });
    config.module.rules.find(
      (item) => item.type === "asset/resource",
    ).generator.filename = "static/media/storybook-[name].[contenthash:8][ext]";
    config.module.rules.find(
      (item) => item.type === "asset",
    ).generator.filename = "static/media/storybook-[name].[contenthash:8][ext]";
    config.mode = "development";
    config.output = {
      ...config.output,
      filename: "storybook-[name].[contenthash:8].iframe.bundle.js",
    };
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "../src/stories/assets"),
          },
        ],
      }),
    );
    return config;
  },
  docs: {
    autodocs: true,
  },
};
