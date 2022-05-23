import "../src/stories/stories.css";
// import "../src/style/formio-qld.scss";
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

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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
};
