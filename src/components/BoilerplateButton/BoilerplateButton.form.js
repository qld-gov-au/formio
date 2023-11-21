/*
 * use form.io Button component as BoilerplateButton
 * https://github.com/formio/formio.js/blob/master/src/components/button/Button.form.js
 *
 */

import EditDisplay from "./editFrom/BoilerplateButton.edit.display";

const baseEditForm = Formio.Components.components.base.editForm;

// customise component editor
export default (...extend) => {
  return baseEditForm(
    [
      {
        key: "display",
        components: EditDisplay,
      },
      {
        key: "data",
        ignore: true,
      },
      {
        key: "validation",
        ignore: true,
      },
      {
        key: "addons",
        ignore: true,
      },
    ],
    ...extend,
  );
};
