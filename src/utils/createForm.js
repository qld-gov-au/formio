export const createForm = ({ form = {}, options = {}, controller }) => {
  const div = document.createElement("div");

  setTimeout(() => {
    Formio.createForm(div, form, options).then(controller);
  }, 100);

  return div;
};
