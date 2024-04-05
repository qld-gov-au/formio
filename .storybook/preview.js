import "../src/stories/stories.css";
import "../src/sass/formio.form.stories.scss";

import storybookOptions from "../src/config/storybook.options";
import * as components from "../src/components/index.dev";
import { getComponents } from "../src/utils/getComponents";
import templates from "../src/templates/index.dev";
import providers from "../src/providers";

Formio.use({
  components: getComponents(components),
  templates,
  providers,
  options: storybookOptions,
});

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" }, https://storybook.js.org/docs/essentials/actions#via-storybooktest-fn-spy-function
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      source: {
        type: "code",
        language: "js",
      },
    },
    themes: {
      default: "SWE",
      list: [
        { name: "SWE", class: "theme-swe", color: "#00aced" },
        { name: "Design system", class: "theme-ds", color: "#3b5998" },
      ],
    },
  },
};
export default preview;
