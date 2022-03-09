const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/html",
  core: {
    builder: "webpack5",
  },
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
    return config;
  },
};
