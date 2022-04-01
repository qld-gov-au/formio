import { createScripts, getDefaultScripts } from ".";

const scripts = getDefaultScripts({
  subdomain: "dev-static",
});

createScripts(scripts);
