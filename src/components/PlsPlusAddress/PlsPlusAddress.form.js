/*
 * use form.io Address component as BoilerplateButton
 * https://github.com/formio/formio.js/blob/master/src/components/address/Address.form.js
 *
 */

import EditData from "./editForm/PlsPlusAddress.edit.data";
import EditDisplay from "./editForm/PlsPlusAddress.edit.display";
import EditProvider from "./editForm/PlsPlusAddress.edit.provider";

const baseEditForm = Formio.Components.components.base.editForm;

export default (...extend) => {
  return baseEditForm(
    [
      {
        key: "data",
        components: EditData,
      },
      {
        key: "display",
        components: EditDisplay,
      },
      {
        label: "Provider",
        key: "provider",
        weight: 15,
        components: EditProvider,
      },
    ],
    ...extend
  );
};
