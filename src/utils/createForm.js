export const createForm = ({
  customComponents,
  form,
  formId = "formio",
  controller,
}) => {
  const div = document.createElement("div");
  div.id = formId;

  setTimeout(() => {
    Formio.use({ components: customComponents });
    Formio.createForm(div, form).then(controller);
  }, 100);

  return div;
};
