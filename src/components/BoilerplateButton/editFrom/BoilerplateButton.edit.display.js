/*
 * fork form.io Button component as BoilerplateButton
 * https://github.com/formio/formio.js/blob/master/src/components/button/editForm/Button.edit.display.js
 *
 */

// customise `display` tab in component editor
export default [
  // Add a custom description to the editor
  {
    type: "content",
    html: `<h2>This is a custom label</h2>`,
    input: false,
    weight: -10,
  },
  // hide some fields inherit from the super class
  {
    key: "labelPosition",
    ignore: true,
  },
  {
    key: "placeholder",
    ignore: true,
  },
  {
    key: "hideLabel",
    ignore: true,
  },
  // custom textarea for customDescription
  {
    type: "textarea",
    input: true,
    // below will show a richtext editor, use `ace` to show a regular editor
    editor: "ckeditor",
    rows: 5,
    label: "Custom description",
    tooltip: "Example component custom property.",
    key: "customDescription",
    weight: 80,
  },
  {
    type: "select",
    key: "action",
    label: "Action",
    input: true,
    dataSrc: "values",
    weight: 110,
    tooltip: "This is the action to be performed by this button.",
    data: {
      values: [
        { label: "Submit", value: "submit" },
        { label: "Save in state", value: "saveState" },
        { label: "Event", value: "event" },
        { label: "Custom", value: "custom" },
        { label: "Reset", value: "reset" },
        { label: "OAuth", value: "oauth" },
        { label: "POST to URL", value: "url" },
      ],
    },
  },
  {
    type: "checkbox",
    input: true,
    inputType: "checkbox",
    key: "saveOnEnter",
    label: "Save On Enter",
    weight: 113,
    tooltip: "Use the Enter key to submit form.",
    conditional: {
      json: { "===": [{ var: "data.action" }, "submit"] },
    },
  },
  {
    type: "select",
    key: "theme",
    label: "Theme",
    input: true,
    tooltip: "The color theme of this button.",
    dataSrc: "values",
    weight: 140,
    data: {
      values: [
        { label: "Primary", value: "primary" },
        { label: "Secondary", value: "secondary" },
        { label: "Info", value: "info" },
        { label: "Success", value: "success" },
        { label: "Danger", value: "danger" },
        { label: "Warning", value: "warning" },
      ],
    },
  },
  {
    type: "select",
    key: "size",
    label: "Size",
    input: true,
    tooltip: "The size of this button.",
    dataSrc: "values",
    weight: 150,
    data: {
      values: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
      ],
    },
  },
  {
    type: "textfield",
    key: "leftIcon",
    label: "Left Icon",
    input: true,
    placeholder: "Enter icon classes",
    tooltip:
      "This is the full icon class string to show the icon. Example: 'fa fa-plus'",
    weight: 160,
  },
  {
    type: "textfield",
    key: "rightIcon",
    label: "Right Icon",
    input: true,
    placeholder: "Enter icon classes",
    tooltip:
      "This is the full icon class string to show the icon. Example: 'fa fa-plus'",
    weight: 170,
  },
  {
    type: "checkbox",
    key: "block",
    label: "Block Button",
    input: true,
    weight: 155,
    tooltip:
      "This control should span the full width of the bounding container.",
  },
  {
    type: "checkbox",
    key: "disableOnInvalid",
    label: "Disable on Form Invalid",
    tooltip: "This will disable this field if the form is invalid.",
    input: true,
    weight: 620,
  },
];
