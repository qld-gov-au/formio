import { createForm, createBuilder } from "../../utils";

export default {
  title: "Components/Custom/OpenStreetMapLocation",
};

export const Renderer = {
  render: () =>
    createForm({
      form: {
        components: [
          {
            label: "Location",
            tableView: false,

            map: {
              mapId: "",
              lat: "-27.470125",
              lon: "153.021072",
            },

            key: "location1",
            type: "openstreetmaplocation",
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

  name: "Renderer",
};

export const Renderer2 = {
  render: () =>
    createForm({
      form: {
        components: [
          {
            label: "Location",
            tableView: false,

            map: {
              mapId: "",
              lat: "-27.470125",
              lon: "153.021072",
            },

            key: "location1",
            type: "openstreetmaplocation",
            input: false,
            components: [],
          },
          {
            label: "Location2",
            tableView: false,

            map: {
              mapId: "",
              lat: "-27.470125",
              lon: "153.021072",
            },

            key: "location2",
            type: "openstreetmaplocation",
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

  name: "Renderer 2",
};

export const Builder = {
  render: () =>
    createBuilder({
      form: {
        components: [
          {
            label: "Location",
            tableView: false,

            map: {
              mapId: "",
              lat: "-27.470125",
              lon: "153.021072",
            },

            key: "location1",
            type: "openstreetmaplocation",
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

  name: "Builder",
};
