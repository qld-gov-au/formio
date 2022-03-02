export const createForm = ({ customComponents, form, formId = "formio" }) => {
  setTimeout(() => {
    Formio.use({ components: customComponents });
    Formio.createForm(document.getElementById(formId), form);
  });
  return `<div id="${formId}"></div>`;
};
