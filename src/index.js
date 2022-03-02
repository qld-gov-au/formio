import "core-js/stable";
import "regenerator-runtime/runtime";
import * as components from "./components";

const customComponents = {};
Object.keys(components).forEach((key) => {
  const componentName = key.toLowerCase();
  customComponents[componentName] = components[key];
  Formio.Components.addComponent(componentName, components[key]);
});
Formio.use({ components: customComponents });
