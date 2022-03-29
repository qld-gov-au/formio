import { createScripts } from "./createScripts";

const scripts = [
  {
    type: "script",
    src: "https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio.full.min.js",
    async: false,
  },
  {
    type: "script",
    src: "https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/premium.min.js",
    async: false,
  },
  {
    type: "script",
    src: "https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-qld.min.js",
    async: false,
  },
  {
    type: "script",
    src: "https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-loader.min.js",
    async: false,
  },
  {
    type: "style",
    href: "https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio.full.min.css",
    rel: "stylesheet",
  },
  {
    type: "style",
    href: "https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/premium.css",
    rel: "stylesheet",
  },
];

createScripts(scripts);
