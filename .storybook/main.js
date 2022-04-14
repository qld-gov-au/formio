const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/html",
  staticDirs: ["../lib", "../node_modules/jquery/dist"],
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
    config.module.rules.push({
      test: /\.(s(a|c)ss)$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });
    config.optimization = { ...config.optimization, minimize: false };
    return config;
  },
};
