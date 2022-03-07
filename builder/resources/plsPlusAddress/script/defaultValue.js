if (!window.plsPlusInit) {
  ie11Polyfill();
  proxyXMLHttpRequest({
    form,
    defaultPlsPlusApiKey,
    getPlsPlusApiKey,
    plsPlusApiHost,
  });
}
