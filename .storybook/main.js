const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../src/stories/Welcome.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook"
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
  webpackFinal: async (configuration) => {
    // placeholder for custom webpack settings for storybook
    // config.externals = { ...config.externals, formiojs: "formiojs" };
    configuration.module.rules.push({
      test: /\.ejs$/i,
      include: [path.resolve(__dirname, "../src")],
      use: [
        {
          loader: "raw-loader",
        },
      ],
    });
    configuration.module.rules.push({
      test: /\.(s(a|c)ss)$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });
    configuration.module.rules.find(
      (item) => item.type === "asset/resource",
    ).generator.filename = "static/media/storybook-[name].[contenthash:8][ext]";
    configuration.module.rules.find(
      (item) => item.type === "asset",
    ).generator.filename = "static/media/storybook-[name].[contenthash:8][ext]";
    configuration.mode = "development";
    configuration.output = {
      ...configuration.output,
      filename: "storybook-[name].[contenthash:8].iframe.bundle.js",
    };
    configuration.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "../src/stories/assets"),
          },
        ],
      }),
    );
    return configuration;
  },
  docs: {},
};
export default config;
