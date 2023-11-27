import { initScript, getDefaultCdn, getDefaultScripts } from ".";

const baseUrl = getDefaultCdn("dev-static");
const scripts = getDefaultScripts(baseUrl);

export const init = () => initScript(scripts, baseUrl);
