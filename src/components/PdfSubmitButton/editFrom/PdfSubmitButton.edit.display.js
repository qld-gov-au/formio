/*
 * use form.io Button component as boilerplate
 * https://github.com/formio/formio.js/blob/master/src/components/button/editForm/Button.edit.display.js
 *
 */

import _ from "lodash";
import BuilderUtils from "../../../utils/BuilderUtils";

export default [
  {
    type: "content",
    html: `<h2>Please follow <a href="#" target="_blank">this guide</a> to setup the form action before using this component.</h2>`,
    input: false,
    weight: -10,
  },
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
  {
    key: "action",
    ignore: true,
  },
  {
    type: "textarea",
    key: "downloadMessage",
    label: "Download message",
    tooltip:
      "Message show up next to the download button after form submission.",
    rows: 5,
    editor: "ckeditor",
    input: true,
    weight: 120,
  },
  {
    type: "textfield",
    label: "Download button label",
    key: "downloadButtonLabel",
    weight: 121,
    tooltip: "Label of the download button.",
    input: true,
    placeholder: "Download",
  },
  {
    type: "textfield",
    label: "Download button class",
    key: "downloadButtonClass",
    weight: 122,
    tooltip: "Class name of the download button.",
    input: true,
    placeholder: "btn btn-primary",
  },
  {
    type: "textfield",
    label: "Download button target",
    key: "downloadButtonTarget",
    weight: 123,
    tooltip: "Link target of the download button.",
    input: true,
    placeholder: "_blank",
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
    type: "select",
    input: true,
    weight: 180,
    label: "Shortcut",
    key: "shortcut",
    tooltip: "Shortcut for this component.",
    dataSrc: "custom",
    valueProperty: "value",
    customDefaultValue: () => "",
    template: "{{ item.label }}",
    data: {
      custom(context) {
        return BuilderUtils.getAvailableShortcuts(
          _.get(context, "instance.options.editForm", {}),
          _.get(context, "instance.options.editComponent", {})
        );
      },
    },
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
