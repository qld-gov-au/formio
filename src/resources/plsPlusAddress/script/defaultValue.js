const bodyElem = document.querySelector('body');
const plsPlusInit = bodyElem.getAttribute('data-plsPlusInit');

function getFranchise(myFranchise) {
  if (myFranchise === "auto") {
    const host = location.host;
    if (host.indexOf("forgov") !== -1) {
      return "forgov";
    } else if (host.indexOf("tmr") !== -1) {
      return "tmr";
    } else if (host.indexOf("covid19") !== -1) {
      return "covid19";
    } else if (host.indexOf("health") !== -1) {
      return "health";
    // https://www.resource.qld.gov.au/ is not found
    // } else if (host.indexOf("resource") !== -1) {
    //   return "resource";
    } else {
      return "qldonline";
    }
  }
  return myFranchise;
}

if (!plsPlusInit) {
  const nativeOpen = XMLHttpRequest.prototype.open;
  const nativeSend = XMLHttpRequest.prototype.send;
  
  function proxiedOpen() {
    arguments[1] = arguments[1].replace(/%7b%7bform.properties.franchise%7d%7d/gi, form?.properties?.franchise);
    if (arguments[1].includes('pls-plus-qg/')) this._url = arguments[1];
    nativeOpen.apply(this, arguments);
  }
  
  async function proxiedSend() {
    if (this._url) {
      if (this._url.includes('/AutoCompleteAddress')) {
        const queryString = this._url.split('?')[1];
        const urlParams = new URLSearchParams('?' + queryString);
        const query = urlParams.get('query') || "";
        if (query.length <= 3) return;
        const data = await fetch(this._url).then(res => res.json());
        const newData = {suggest: data?.AutoCompleteAddressResponse?.AutoCompleteAddressResult?.string?.map(address => ({address})) || []};
        Object.defineProperty(this, 'responseText', { value: JSON.stringify(newData), writable: false });
        Object.defineProperty(this, 'response', { value: JSON.stringify(newData), writable: false });
      }
      if (this._url.includes('/ParseAddress')) {
        const queryString = this._url.split('?')[1];
        const urlParams = new URLSearchParams('?' + queryString);
        const query = urlParams.get('query') || "";
        if (!query) return;
      }
    }
    nativeSend.apply(this, arguments);
  }

  XMLHttpRequest.prototype.open = proxiedOpen;
  XMLHttpRequest.prototype.send = proxiedSend;
  form.properties.franchise = getFranchise(instance?.parent?.component?.properties?.franchise);
  bodyElem.setAttribute('data-plsPlusInit', true);
}