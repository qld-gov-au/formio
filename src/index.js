import "core-js/stable";
import "regenerator-runtime/runtime";
import * as components from "./components";
import { buildOptions } from "./options/buildOptions";
import { getComponents } from "./utils/getComponents";

// loop through the component folder index.js and add components to Formio for renderer and builder
if (Formio) {
  Formio.use({
    components: getComponents(components),
    options: {
      builder: buildOptions,
    },
  });
} else {
  console.warn(
    "qg-formio.js requires Formio object initiated. Please refer to qld-gov-au.github.io/formio/?path=/docs/welcome--page for usage."
  );
}
