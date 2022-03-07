module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/html",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    // place holder for custom webpack settings for storybook
    // config.externals = { ...config.externals, formiojs: "formiojs" };
    return config;
  },
};
