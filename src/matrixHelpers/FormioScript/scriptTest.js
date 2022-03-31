import { createScripts, getDefaultScripts } from ".";

const scripts = getDefaultScripts({
  subdomain: "test-static",
  version: window.formioQldCdnVersion,
});

createScripts(scripts);
