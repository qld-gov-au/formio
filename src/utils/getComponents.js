export const getComponents = (components) => {
  const customComponents = {};
  Object.keys(components).forEach((key) => {
    const componentName = key.toLowerCase();
    customComponents[componentName] = components[key];
  });
  return customComponents;
};
