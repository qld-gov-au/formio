import { initScript, getDefaultCdn, getDefaultScripts } from ".";

const baseUrl = getDefaultCdn("test-static");
const scripts = getDefaultScripts(baseUrl);

export const init = () => initScript(scripts, baseUrl);
