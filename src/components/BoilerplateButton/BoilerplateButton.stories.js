import { createForm, createBuilder } from "../../utils";

export default {
  title: "Components/Custom/BoilerplateButton",
};

export const Renderer = {
  render: () =>
    createForm({
      form: {
        components: [
          {
            type: "boilerplatebutton",
            key: "BoilerplateButton",
            label: "Boilerplate button",
            customDescription: "This is a custom description",
          },
        ],
      },

      controller: (formio) => {
        formio.on("submit", (e) => {
          console.info("submit", e.data);
        });

        formio.on("change", (e) => {
          console.info("change", e.data);
        });
      },
    }),

  name: "Renderer",
};

export const Builder = {
  render: () =>
    createBuilder({
      form: {
        components: [
          {
            type: "boilerplatebutton",
            key: "BoilerplateButton",
            label: "Boilerplate button",
            customDescription: "This is a custom description",
          },
        ],
      },
    }),

  name: "Builder",
};
