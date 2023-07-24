// the import below is the ie11 polyfill, uncomment to add back in
// import "core-js/stable";
// import "regenerator-runtime/runtime";
import buildOptions from "./config/build.options";
import { getComponents } from "./utils/getComponents";
import * as components from "./components/index.des";
import templates from "./templates";
import providers from "./providers";

Formio.use({
  components: getComponents(components),
  templates,
  providers,
  options: buildOptions,
});
