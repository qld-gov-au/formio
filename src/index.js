import "core-js/stable";
import "regenerator-runtime/runtime";
import buildOptions from "./options/build.options";
import { getComponents } from "./utils/getComponents";

let waitCount = 0;

const wait = (props) => {
  const {
    condition,
    callback,
    interval = 100,
    timeout = 10000,
    timeoutCallback,
  } = props;
  waitCount += interval;
  if (typeof condition() !== "undefined") {
    callback();
  } else if (timeout && waitCount >= timeout) {
    timeoutCallback();
  } else {
    setTimeout(() => {
      wait(props);
    }, interval);
  }
};

wait({
  condition: () => {
    return Formio;
  },
  callback: async () => {
    const components = await import("./components");
    const templates = await import("./templates");
    const providers = await import("./providers");
    Formio.use({
      components: getComponents(components),
      templates,
      providers,
      options: buildOptions,
    });
  },
  timeoutCallback: () => {
    console.warn(
      "formio.full.min.js requires Formio script included in this page. Please refer to https://qld-gov-au.github.io/formio/?path=/docs/welcome--page for usage."
    );
  },
});
