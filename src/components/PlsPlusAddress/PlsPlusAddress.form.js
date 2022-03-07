/*
 * Extend form.io Address component
 * https://github.com/formio/formio.js/blob/master/src/components/address/Address.form.js
 *
 */

// import Components from '../Components';
// import AddressEditData from './editForm/Address.edit.data';
import EditDisplay from "./editForm/PlsPlusAddress.edit.display";
// import AddressEditProvider from './editForm/Address.edit.provider';

const { baseEditForm } = Formio.Components;

export default (...extend) => {
  return baseEditForm(
    [
      // {
      //   key: 'data',
      //   components: AddressEditData,
      // },
      {
        key: "display",
        components: EditDisplay,
      },
      // {
      //   label: 'Provider',
      //   key: 'provider',
      //   weight: 15,
      //   components: AddressEditProvider,
      // },
      // {
      //   key: 'addons',
      //   ignore: true
      // },
    ],
    ...extend
  );
};
