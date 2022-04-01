import { createScripts } from ".";

const version = window.formioQldCdnVersion || "0025/248740";

const scripts = [
  {
    type: "script",
    src: `https://www.qld.gov.au/__data/assets/git_bridge/${version}/formio.full.js`,
    async: false,
  },
  {
    type: "script",
    src: `https://www.qld.gov.au/__data/assets/git_bridge/${version}/premium.min.js`,
    async: false,
  },
  {
    type: "script",
    src: `https://www.qld.gov.au/__data/assets/git_bridge/${version}/formio-qld.js`,
    async: false,
  },
  // note: formio-loader should always load last
  {
    type: "script",
    src: `https://www.qld.gov.au/__data/assets/git_bridge/${version}/formio-loader.min.js`,
    async: false,
  },
  {
    type: "link",
    href: `https://www.qld.gov.au/__data/assets/git_bridge/${version}/formio.full.min.css`,
    rel: "stylesheet",
  },
  {
    type: "link",
    href: `https://www.qld.gov.au/__data/assets/git_bridge/${version}/premium.css`,
    rel: "stylesheet",
  },
  {
    type: "link",
    href: `https://www.qld.gov.au/__data/assets/git_bridge/${version}/formio-qld.min.css`,
    rel: "stylesheet",
  },
];

createScripts(scripts);
