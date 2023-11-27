import { initScript, getDefaultCdn, getDefaultScripts } from ".";

const version = window.formIOGitBridgeID || "248740";

const scripts = getDefaultScripts(`/__data/assets/git_bridge/0025/${version}`);

export const init = () => initScript(scripts, getDefaultCdn());
