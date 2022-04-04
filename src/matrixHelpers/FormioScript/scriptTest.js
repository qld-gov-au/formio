import { initScript, getDefaultScripts } from ".";

const scripts = getDefaultScripts({
  subdomain: "test-static",
});

initScript(scripts);
