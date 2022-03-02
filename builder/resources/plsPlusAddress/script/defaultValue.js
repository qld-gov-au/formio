if (!window.plsPlusInit) {
  ie11Polyfill();
  proxyXMLHttpRequest({form: form, defaultPlsPlusApiKey: defaultPlsPlusApiKey, getPlsPlusApiKey: getPlsPlusApiKey, plsPlusApiHost: plsPlusApiHost});
}