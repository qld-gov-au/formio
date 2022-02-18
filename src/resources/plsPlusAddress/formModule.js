{
  options: {
    form: {
      evalContext: {
        defaultPlsPlusApiKey: "auto",
        plsPlusApiHost: "https://www.address.services.qld.gov.au",
        getPlsPlusApiKey: function (key) {
          if (key === "auto") {
            const host = location.host;
            if (host.indexOf("forgov") !== -1) {
              return "forgov";
            } else if (host.indexOf("tmr") !== -1) {
              return "tmr";
            } else if (host.indexOf("covid19") !== -1) {
              return "covid19";
            } else if (host.indexOf("health") !== -1) {
              return "health";
            } else if (host.indexOf("resource") !== -1) {
              return "resource";
            } else if (location.href.indexOf("www.qld.gov.au/dev/") !== -1 || location.href.indexOf("oss-uat.clients.squiz.net/dev/") !== -1) {
              // if it is used in demo page
              return "qldonline";
            } else if (host.indexOf("api.forms.platforms") !== -1 || host.indexOf("formio") !== -1) {
              // if it is used in formio dev environment
              return "formiotest";
            }
          }
          const validKeys = ["forgov", "tmr", "covid19", "health", "resource", "qldonline", "formiotest", "auto"];
          if (validKeys.indexOf(key) === -1) {
            console.warn("Your PlsPlus API key is not valid, please enter a valid API key in formIO > form settings > custom properties > add value with `{ plsPlusApiKey: YOUR_FRANCHISE_API_KEY}`. For more instructions please visit https://servicesmadesimpler.govnet.qld.gov.au/wiki/display/PUB/Form.io+PlsPlus+address+component+setup+instructions");
            return "invalid";
          }
          if (key === "auto") {
            console.warn("We can't find a valid PlsPlus API key based on the URL, please enter a valid API key in formIO > form settings > custom properties > add value with `{ plsPlusApiKey: YOUR_FRANCHISE_API_KEY}`. For more instructions please visit https://servicesmadesimpler.govnet.qld.gov.au/wiki/display/PUB/Form.io+PlsPlus+address+component+setup+instructions.")
          }
          return key;
        },
        ie11Polyfill: function() {
          (function (w) {
            w.URLSearchParams = w.URLSearchParams || function (searchString) {
                var self = this;
                self.searchString = searchString;
                self.get = function (name) {
                    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(self.searchString);
                    if (results == null) {
                        return null;
                    }
                    else {
                        return decodeURIComponent(results[1]) || 0;
                    }
                };
            }
          })(window);
        },
        proxyXMLHttpRequest: function({form: form, defaultPlsPlusApiKey: defaultPlsPlusApiKey, getPlsPlusApiKey: getPlsPlusApiKey, plsPlusApiHost: plsPlusApiHost}) {
          const nativeOpen = XMLHttpRequest.prototype.open;
          const nativeSend = XMLHttpRequest.prototype.send;
          let lastQuery = "";
          
          function proxiedOpen() {
            if (form && form.properties) {
              arguments[1] = arguments[1]
              .replace(/%7b%7bform.properties.plsPlusApiKey%7d%7d/gi, form.properties.plsPlusApiKey)
              .replace(/{{form.properties.plsPlusApiKey}}/gi, form.properties.plsPlusApiKey)
              .replace(/%7b%7bplsPlusApiHost%7d%7d/gi, plsPlusApiHost)
              .replace(/{{plsPlusApiHost}}/gi, plsPlusApiHost);
            }
            if (arguments[1].includes('pls-plus-qg/')) this._url = arguments[1];
        
            if (this._url && this._url.indexOf('/AutoCompleteAddress') !== -1) {
              const thisObj = this;
        
              this.addEventListener('readystatechange', function(e) { 
                if (this.readyState == 4) {
                  const data = JSON.parse(this.response);
                  if (data.AutoCompleteAddressResponse && data.AutoCompleteAddressResponse.AutoCompleteAddressResult && data.AutoCompleteAddressResponse.AutoCompleteAddressResult.string ) {
                    const newData = {suggest: data.AutoCompleteAddressResponse.AutoCompleteAddressResult.string.map(function (address) {return ({address: address})}) || []};
                    Object.defineProperty(this, 'responseText', { get: function() { return JSON.stringify(newData) } });
                    Object.defineProperty(this, 'response', { get: function() { return JSON.stringify(newData) } });
                  }
                }
              })
            }
        
            nativeOpen.apply(this, arguments);
          }
          
          function proxiedSend() {
            if (this._url) {
              if (this._url.indexOf('/AutoCompleteAddress') !== -1) {
                const queryString = this._url.split('?')[1];
                const urlParams = new URLSearchParams('?' + queryString);
                const query = urlParams.get('query') || "";
                if (query.length <= 3) return;
                if (lastQuery === query) return;
                lastQuery = query;
                this.responseType = "text";
              }
              if (this._url.indexOf('/ParseAddress') !== -1) {
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
          
          /*
          * logic of assigning plsPlusApiKey
          * - if form.properties.plsPlusApiKey is provided, the key will be validated, if it's invalid the key will be changed to `invalid` and warning/instruction will be displayed.
          * - if form.properties.plsPlusApiKey is not provided, key will be assigned based on URL, if no key is assigned because of non-qualified URL, key will be assigned to `auto` and warning/instruction will be displayed.
          */
          if (defaultPlsPlusApiKey && !form.properties.plsPlusApiKey) {
            form.properties.plsPlusApiKey = defaultPlsPlusApiKey;
          }
          if (getPlsPlusApiKey && form.properties.plsPlusApiKey) {
            form.properties.plsPlusApiKey = getPlsPlusApiKey(form.properties.plsPlusApiKey);
          } 
        
          Object.defineProperty(window, 'plsPlusInit', { get: function() { return true } });
        },
        getPlsPlusAddress: function(addressDetailsData) {
          let address;
          if (addressDetailsData && 
            addressDetailsData.ParseAddressResponse && 
            addressDetailsData.ParseAddressResponse.ParseAddressResult && 
            addressDetailsData.ParseAddressResponse.ParseAddressResult.Results &&
            addressDetailsData.ParseAddressResponse.ParseAddressResult.Results.Result
            ) {
            address = addressDetailsData.ParseAddressResponse.ParseAddressResult.Results.Result.Address;
          }
          return address;
        },
        getPlsPlusAddressLines: function(address) {
          const siteName = address.SiteName || '';
          const lot = (address.Parcel && address.Parcel.Lot) ? 'LOT ' + address.Parcel.Lot : undefined;
          const complexDesc = [lot, address.Unit ? address.Unit.TypeCode : undefined, address.Unit ? address.Unit.Number : undefined, address.Level ? address.Level.TypeCode : undefined, address.Level ? address.Level.Number : undefined].filter( function (o) { return o !== undefined } ).join(' ');
          const roadNumberPart = [address.RoadNumber ? address.RoadNumber.First : undefined, (address.RoadNumber && address.RoadNumber.Last) ? '-' : undefined, address.RoadNumber ? address.RoadNumber.Last : undefined].filter( function (o) { return o !== undefined } ).join(''); 
          const streetAddress = [roadNumberPart, address.Road ? address.Road.Name : undefined, address.Road ? address.Road.TypeCode : undefined].filter( function (o) { return o !== undefined } ).join(' ');
          return {
            siteName: siteName,
            lot: lot,
            complexDesc: complexDesc,
            roadNumberPart: roadNumberPart,
            streetAddress: streetAddress
          }
        },
        getComponentKey: function({parentComponent: parentComponent, fieldName: fieldName}) {
          const comp = parentComponent.components.find(function (comp) { return comp.component ? comp.component.properties.fieldName === fieldName : comp.properties.fieldName === fieldName; });
          if (!comp) return;
          return comp.component ? comp.component.key : comp.key;
        },
        getComponentData: function({data: data, parentComponent: parentComponent, fieldName: fieldName}) {
          const comp = parentComponent.components.find(function (comp) { return comp.component ? comp.component.properties.fieldName === fieldName : comp.properties.fieldName === fieldName; });
          if (!comp) return;
          const key = comp.component ? comp.component.key : comp.key;
          return data[key];
        },
        getComponent: function({data: data, parentComponent: parentComponent, fieldName: fieldName}) {
          const comp = parentComponent.components.find(function (comp) { return comp.component ? comp.component.properties.fieldName === fieldName : comp.properties.fieldName === fieldName; });
          if (!comp) return;
          return comp.component ? comp.component : comp;
        }
      }
    }
  }
}