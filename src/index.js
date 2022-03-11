import "core-js/stable";
import "regenerator-runtime/runtime";
import buildOptions from "./options/build.options";
import templates from "./templates";
import providers from "./providers";
import { getComponents } from "./utils/getComponents";

const components = typeof Formio !== "undefined" ? require("./components") : {};

if (typeof Formio !== "undefined") {
  // loop through the component folder index.js and add components to Formio for renderer and builder
  Formio.use({
    components: getComponents(components),
    templates,
    providers,
    options: buildOptions,
  });
} else {
  console.warn(
    "qg-formio.js requires Formio script included in this page. Please refer to https://qld-gov-au.github.io/formio/?path=/docs/welcome--page for usage."
  );
}
