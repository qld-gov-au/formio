import { initScript, getDefaultScripts } from ".";

const scripts = getDefaultScripts({
  subdomain: "beta-static",
});

export const init = () => initScript(scripts);
