import { SimpleWizardRender } from "./SimpleWizard";
import { simpleWizardCode } from "./SimpleWizard.code";

export default {
  title: "Examples/SimpleWizard",
};

export const SimpleWizardStory = {
  render: () => SimpleWizardRender(),
  name: "simpleWizard",

  parameters: {
    docs: {
      source: {
        code: simpleWizardCode,
      },
    },
  },
};
