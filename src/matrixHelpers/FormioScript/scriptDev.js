import { initScript, getDefaultScripts } from ".";

const scripts = getDefaultScripts({
  subdomain: "dev-static",
});

export const init = () => initScript(scripts);
