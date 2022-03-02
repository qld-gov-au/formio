// const custom = require('../webpack.config.js');
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/html",
  // webpackFinal: async (config) => {
  //   return { 
  //     ...config, 
  //     entry: [...config.entry, custom.entry],
  //     module: { 
  //       ...config.module, 
  //       rules: [...config.module.rules, ...custom.module.rules]
  //     },
  //   };
  // },
}