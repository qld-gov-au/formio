import { createScripts } from ".";

const version = window.formioQldCdnVersion || "v1/v1.x.x-latest";

const scripts = [
  {
    type: "script",
    src: `https://static.qgov.net.au/formio-qld/${version}/formio.full.min.js`,
    async: false,
  },
  {
    type: "script",
    src: `https://static.qgov.net.au/formio-qld/${version}/premium.min.js`,
    async: false,
  },
  {
    type: "script",
    src: `https://static.qgov.net.au/formio-qld/${version}/formio-qld.min.js`,
    async: false,
  },
  // note: formio-loader should always load last
  {
    type: "script",
    src: `https://static.qgov.net.au/formio-qld/${version}/formio-loader.min.js`,
    async: false,
  },
  {
    type: "link",
    href: `https://static.qgov.net.au/formio-qld/${version}/formio.full.min.css`,
    rel: "stylesheet",
  },
  {
    type: "link",
    href: `https://static.qgov.net.au/formio-qld/${version}/premium.css`,
    rel: "stylesheet",
  },
  {
    type: "link",
    href: `https://dev-static.qgov.net.au/formio-qld/${version}/formio-qld.min.css`,
    rel: "stylesheet",
  },
];

createScripts(scripts);
