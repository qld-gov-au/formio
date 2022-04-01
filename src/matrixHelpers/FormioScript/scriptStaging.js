import { createScripts, getDefaultScripts } from ".";

const scripts = getDefaultScripts({
  subdomain: "beta-static",
});

createScripts(scripts);
