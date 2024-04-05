module.exports = {
  "ignorePatterns": [
    "node_modules/",
    "dist/",
    "builder/",
    "!.storybook/",
    "storybook-static/",
    "binary-repo/",
    "lib/"

  ],
  "parser": "@babel/eslint-parser",
  "extends": [
    "airbnb",
    "plugin:json/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
    "plugin:mdx/recommended"
  ],
  "settings": {
    "mdx/code-blocks": true,
  },
  "rules": {
    "prettier/prettier": ["error"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx", ".mdx"] }],
    "no-console": ["warn", { "allow": ["warn", "error", "info", "debug"] }],
    "no-param-reassign": ["error", { "props": false }],
    "class-methods-use-this": 0,
    "jsx-a11y/control-has-associated-label": "warn",

    "import/prefer-default-export": "off",
    "import/no-webpack-loader-syntax": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/heading-has-content": "off",
    "react/self-closing-comp": "off",
  },
  "env": {
    "jest/globals": true
  },
  "globals": {
    "Formio": true,
    "document": true,
    "window": true,
    "$": true,
    "premium": true,
    "FormioLoader": true,
    "localStorage": true
  },
  "overrides": [
    {
      "files": ["*.mdx", "*.md"],
      "extends": ["plugin:mdx/recommended", "plugin:mdx/overrides"],
      "settings": {
        "mdx/code-blocks": true,
        "mdx/language-mapper": {}
      }
    }
  ]
}
