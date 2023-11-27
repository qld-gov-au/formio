import { createForm, createBuilder } from "../../utils";

export default {
  title: "Components/Custom/GoogleLocation",
};

export const Renderer = {
  // TEST KEY, super restricted
  render: () =>
    createForm({
      form: {
        components: [
          {
            label: "Location",
            tableView: false,

            map: {
              key: "AIzaSyCKuaFIFo7YYZXHZ5zaiEZdJx0UBoyfuAE",
              region: "au",
              gmapId: "",
              autocompleteOptions: {},
            },

            key: "location1",
            type: "googlelocation",
            input: false,
            components: [],
          },
          {
            type: "button",
            key: "button",
            label: "Default button",
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
  // TEST KEY, super restricted
  render: () =>
    createBuilder({
      form: {
        components: [
          {
            label: "Location",
            tableView: false,

            map: {
              key: "AIzaSyCKuaFIFo7YYZXHZ5zaiEZdJx0UBoyfuAE",
              region: "au",
              gmapId: "",
              autocompleteOptions: {},
            },

            key: "location1",
            type: "googlelocation",
            input: false,
            components: [],
          },
          {
            type: "button",
            key: "button",
            label: "Default button",
          },
        ],
      },
    }),
};
