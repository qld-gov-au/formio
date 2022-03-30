import "core-js/stable";
import "regenerator-runtime/runtime";
import buildOptions from "./options/build.options";
import { getComponents } from "./utils/getComponents";
import * as components from "./components";
import templates from "./templates";
import providers from "./providers";
import "./style/formio-qld.scss";

Formio.use({
  components: getComponents(components),
  templates,
  providers,
  options: buildOptions,
});

// let waitCount = 0;

// const wait = (props) => {
//   const {
//     condition,
//     callback,
//     interval = 100,
//     timeout = 10000,
//     timeoutCallback,
//   } = props;
//   waitCount += interval;
//   if (typeof condition() !== "undefined") {
//     callback();
//   } else if (timeout && waitCount >= timeout) {
//     timeoutCallback();
//   } else {
//     setTimeout(() => {
//       wait(props);
//     }, interval);
//   }
// };

// wait({
//   condition: () => {
//     return Formio;
//   },
//   callback: async () => {
//     const [
//       componentsModule,
//       templatesModule,
//       providersModule,
//       getComponentsModule,
//     ] = await Promise.all([
//       import("./components"),
//       import("./templates"),
//       import("./providers"),
//       import("./utils/getComponents"),
//     ]);
//     const { ...components } = componentsModule;
//     const templates = templatesModule.default;
//     const providers = providersModule.default;
//     const { getComponents } = getComponentsModule;
//     console.log(
//       "test444",
//       Formio,
//       getComponents(components),
//       templates,
//       providers
//     );
//     Formio.use({
//       components: getComponents(components),
//       templates,
//       providers,
//       options: buildOptions,
//     });
//   },
//   timeoutCallback: () => {
//     console.warn(
//       "formio.full.min.js requires Formio script included in this page. Please refer to https://qld-gov-au.github.io/formio/?path=/docs/welcome--page for usage."
//     );
//   },
// });
