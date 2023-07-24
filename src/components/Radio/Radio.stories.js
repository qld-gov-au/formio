import { createForm, createBuilder } from "../../utils";

export default {
  title: "Components/Basic/Radio",
};

export const RadioTabInRenderer = {
  render: () =>
    createForm({
      form: {
        components: [
          {
            label: "Radio label",
            customClass: "radio-tab",

            values: [
              {
                label: "Item 1",
                value: "item1",
                shortcut: "",
              },
              {
                label: "Item 2",
                value: "item2",
                shortcut: "",
              },
            ],

            key: "radioLabel",
            type: "radio",
          },
        ],
      },
    }),

  name: "radio-tab in renderer",
};

export const RadioTabInBuilder = {
  render: () =>
    createBuilder({
      form: {
        components: [
          {
            label: "Radio label",
            customClass: "radio-tab",

            values: [
              {
                label: "Item 1",
                value: "item1",
                shortcut: "",
              },
              {
                label: "Item 2",
                value: "item2",
                shortcut: "",
              },
            ],

            key: "radioLabel",
            type: "radio",
          },
        ],
      },
    }),

  name: "radio-tab in builder",
};
