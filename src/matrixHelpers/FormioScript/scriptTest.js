import { createScripts, getDefaultScripts } from ".";

const scripts = getDefaultScripts({
  subdomain: "test-static",
});

createScripts(scripts);
