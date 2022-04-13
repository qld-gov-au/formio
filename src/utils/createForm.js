import defaultCreateFormOptions from "../config/createForm.options";
import defaultCreateFormController from "../config/createForm.controller";

export const createForm = ({ form = {}, options, controller }) => {
  const div = document.createElement("div");
  div.className = "qg-forms-v2";

  setTimeout(() => {
    Formio.createForm(div, form, {
      ...defaultCreateFormOptions,
      ...options,
    }).then((thisForm) => {
      defaultCreateFormController({ form: thisForm, elem: div });
      if (typeof controller === "function") controller(thisForm);
    });
  }, 100);

  return div;
};
