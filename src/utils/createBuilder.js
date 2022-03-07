export const createBuilder = ({ form = {}, options = {}, controller }) => {
  const div = document.createElement("div");

  setTimeout(() => {
    Formio.builder(div, form, options).then(controller);
  }, 100);

  return div;
};
