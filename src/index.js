import "core-js/stable";
import "regenerator-runtime/runtime";
import * as components from "./components";

const customComponents = {};
// loop through the component folder index.js and add components to Formio for renderer and builder
Object.keys(components).forEach((key) => {
  const componentName = key.toLowerCase();
  customComponents[componentName] = components[key];
  Formio.Components.addComponent(componentName, components[key]);
});
Formio.use({ components: customComponents });
