import { initScript, getDefaultCdn, getDefaultScripts } from ".";

const baseUrl = getDefaultCdn("beta-static");
const scripts = getDefaultScripts(baseUrl);

export const init = () => initScript(scripts);
