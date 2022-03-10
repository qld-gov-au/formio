import "../src/stories/stories.css";
import storybookOptions from "../src/options/storybook.options";
import * as components from "../src/components";
import { getComponents } from "../src/utils/getComponents";
import templates from "../src/templates";
import providers from "../src/providers";

// Formio.use({
//   providers,
// });
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
