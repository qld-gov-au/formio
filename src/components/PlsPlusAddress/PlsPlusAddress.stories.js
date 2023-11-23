import { createForm, createBuilder } from "../../utils";

export default {
  title: "Components/Custom/PlsPlusAddress",
};

export const Renderer = {
  render: () =>
    createForm({
      form: {
        components: [
          {
            type: "plsplusaddress",
            key: "plsplusaddress",
            label: "PlsPlus Address field",

            providerOptions: {
              params: {
                apiKey: "formiotest",
              },
            },
          },
          {
            type: "button",
            key: "submit",
            label: "Submit",
            action: "submit",
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
};

export const Builder = {
  render: () =>
    createBuilder({
      form: {
        components: [
          {
            type: "plsplusaddress",
            key: "plsplusaddress",
            label: "PlsPlus Address field",

            providerOptions: {
              params: {
                apiKey: "formiotest",
              },
            },
          },
          {
            type: "button",
            key: "submit",
            label: "Submit",
            action: "submit",
          },
        ],
      },
    }),
};
