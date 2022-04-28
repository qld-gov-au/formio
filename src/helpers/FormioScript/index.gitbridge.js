import { initScript } from ".";

const version = window.formioQldCdnVersion || "248740";

const scripts = [
  {
    type: "script",
    src: `//__data/assets/git_bridge/0025/${version}/formio.full.js`,
    async: false,
  },
  {
    type: "script",
    src: `//__data/assets/git_bridge/0025/${version}/premium.min.js`,
    async: false,
  },
  {
    type: "script",
    src: `//__data/assets/git_bridge/0025/${version}/formio-qld.js`,
    async: false,
  },
  // note: formio-loader should always load last
  {
    type: "script",
    src: `//__data/assets/git_bridge/0025/${version}/formio-loader.js`,
    async: false,
  },
  {
    type: "link",
    href: `//__data/assets/git_bridge/0025/${version}/formio.full.min.css`,
    rel: "stylesheet",
  },
  {
    type: "link",
    href: `//__data/assets/git_bridge/0025/${version}/premium.css`,
    rel: "stylesheet",
  },
  // {
  //   type: "link",
  //   href: `//__data/assets/git_bridge/0025/${version}/formio-qld.min.css`,
  //   rel: "stylesheet",
  // },
];

export const init = () => initScript(scripts);
