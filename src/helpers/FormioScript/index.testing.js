import { initScript, getDefaultScripts } from ".";

const scripts = getDefaultScripts({
  subdomain: "test-static",
});

export const init = () => initScript(scripts);
