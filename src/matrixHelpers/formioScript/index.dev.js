import { createScripts } from "./createScripts";

const scripts = [
  {
    type: "script",
    src: "https://dev-static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio.full.js",
    async: false,
  },
  {
    type: "script",
    src: "https://dev-static.qgov.net.au/formio-qld/v1/v1.x.x-latest/premium.min.js",
    async: false,
  },
  {
    type: "script",
    src: "https://dev-static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-qld.js",
    async: false,
  },
  {
    type: "script",
    src: "https://dev-static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-loader.js",
    async: false,
  },
  {
    type: "style",
    href: "https://dev-static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio.full.min.css",
    rel: "stylesheet",
  },
  {
    type: "style",
    href: "https://dev-static.qgov.net.au/formio-qld/v1/v1.x.x-latest/premium.css",
    rel: "stylesheet",
  },
];

createScripts(scripts);
