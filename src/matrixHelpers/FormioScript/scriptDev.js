import { createScripts, getDefaultScripts } from ".";

const scripts = getDefaultScripts({
  subdomain: "dev-static",
  version: window.formioQldCdnVersion,
});

createScripts(scripts);
