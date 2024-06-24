import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    files: [
        "**/*.js",
        "**/*.md",
        "**/*.mdx",
        "**/*.json",
    ],
    ignores: [
        "**/node_modules/",
        "**/dist/",
        "**/builder/",
        "!**/.storybook/",
        "**/storybook-static/",
        "**/binary-repo/",
        "**/lib/",
    ],
}, ...compat.extends(
    "airbnb",
    "plugin:json/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
    "plugin:mdx/recommended",
), {
    languageOptions: {
        globals: {
            ...jest.environments.globals.globals,
            Formio: true,
            document: true,
            window: true,
            $: true,
            premium: true,
            FormioLoader: true,
            localStorage: true,
        },

        parser: babelParser,
    },

    settings: {
        "mdx/code-blocks": true,
    },

    rules: {
        "prettier/prettier": ["error"],

        "import/no-extraneous-dependencies": ["error", {
            devDependencies: true,
        }],

        "react/jsx-filename-extension": [2, {
            extensions: [".js", ".jsx", ".ts", ".tsx", ".mdx"],
        }],

        "no-console": ["warn", {
            allow: ["warn", "error", "info", "debug"],
        }],

        "no-param-reassign": ["error", {
            props: false,
        }],

        "class-methods-use-this": 0,
        "jsx-a11y/control-has-associated-label": "warn",
        "import/prefer-default-export": "off",
        "import/no-webpack-loader-syntax": "off",
        "jsx-a11y/anchor-has-content": "off",
        "jsx-a11y/heading-has-content": "off",
        "react/self-closing-comp": "off",
    },
}, ...compat.extends("plugin:mdx/recommended", "plugin:mdx/overrides").map(config => ({
    ...config,
    files: ["**/*.mdx", "**/*.md"],
})), {
    files: ["**/*.mdx", "**/*.md"],

    settings: {
        "mdx/code-blocks": true,
        "mdx/language-mapper": {},
    },
}];
