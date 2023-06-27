/*
 * use form.io Address component as boilerplate
 * https://github.com/formio/formio.js/blob/master/src/components/address/Address.form.js
 *
 */

import EditData from "./editForm/PlsPlusAddressWithMap.edit.data";
import EditDisplay from "./editForm/PlsPlusAddressWithMap.edit.display";
import EditMap from "./editForm/PlsPlusAddressWithMap.edit.map";
import EditProvider from "./editForm/PlsPlusAddressWithMap.edit.provider";

const baseEditForm = Formio.Components.components.base.editForm;

export default (...extend) => {
  return baseEditForm(
    [
      {
        key: "data",
        components: EditData,
      },
      {
        label: "Map",
        key: "map",
        components: EditMap,
      },
      {
        label: "Display",
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
