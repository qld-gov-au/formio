import { initScript, getDefaultScripts } from ".";

const scripts = getDefaultScripts({
  subdomain: "dev-static",
});

initScript(scripts);
