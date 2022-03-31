import { createScripts, getDefaultScripts } from ".";

const scripts = getDefaultScripts({
  subdomain: "beta-static",
  version: window.formioQldCdnVersion,
});

createScripts(scripts);
