import createFormOptions from "../options/createForm.options";

export const createForm = ({
  form = {},
  options = createFormOptions,
  controller,
}) => {
  const div = document.createElement("div");
  div.className = "formio_container";

  setTimeout(() => {
    Formio.createForm(div, form, options).then(controller);
  }, 100);

  return div;
};
