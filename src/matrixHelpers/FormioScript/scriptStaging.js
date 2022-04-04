import { initScript, getDefaultScripts } from ".";

const scripts = getDefaultScripts({
  subdomain: "beta-static",
});

initScript(scripts);
