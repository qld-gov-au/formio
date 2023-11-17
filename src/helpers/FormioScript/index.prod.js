import { initScript, getDefaultCdn } from ".";

const baseUrl = getDefaultCdn();

const scripts = [
  {
    type: "script",
    src: `${baseUrl}/formio.full.min.js`,
    async: false,
  },
  {
    type: "script",
    src: `${baseUrl}/premium.min.js`,
    async: false,
  },
  {
    type: "script",
    src: `${baseUrl}/formio-qld.min.js`,
    async: false,
  },
  // note: formio-loader should always load last
  {
    type: "script",
    src: `${baseUrl}/formio-loader.min.js`,
    async: false,
  },
  {
    type: "link",
    href: `${baseUrl}/formio.full.min.css`,
    rel: "stylesheet",
  },
  {
    type: "link",
    href: `${baseUrl}/premium.css`,
    rel: "stylesheet",
  },
  {
    type: "link",
    href: `${baseUrl}/formio-qld.min.css`,
    rel: "stylesheet",
  },
];

export const init = () => initScript(scripts);
