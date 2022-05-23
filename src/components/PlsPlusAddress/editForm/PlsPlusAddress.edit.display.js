/*
 * use form.io Address component as boilerplate
 * https://github.com/formio/formio.js/blob/master/src/components/address/editForm/Address.edit.display.js
 *
 */

export default [
  {
    weight: 30,
    type: "textfield",
    input: true,
    key: "switchToManualModeLabel",
    label: "Switch To Manual Mode Label",
    placeholder: "Switch To Manual Mode Label",
    tooltip: "The label for the checkbox used to switch to manual mode.",
    validate: {
      required: true,
    },
    customConditional: ({ data }) => Boolean(data.enableManualMode),
  },
  {
    weight: 40,
    type: "checkbox",
    input: true,
    key: "disableClearIcon",
    label: "Disable Clear Icon",
    tooltip: "Clear Icon allows easily clear component's value.",
  },
  {
    type: "textfield",
    label: "Add Another Text",
    key: "addAnother",
    tooltip: "Set the text of the Add Another button.",
    placeholder: "Add Another",
    weight: 410,
    input: true,
    customConditional: ({ data }) => data.multiple,
  },
];
