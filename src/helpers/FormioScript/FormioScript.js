export const defaultVersion = window.formioQldCdnVersion || "v2/v2.x.x-latest";

export const createScripts = (scripts, i, mainResolve) => {
  if (i > scripts.length - 1) {
    FormioLoader.initFormio();
    mainResolve();
    return;
  }
  const { type, async, src, href, rel } = scripts[i];
  if (
    !document.querySelector(`${type}[src='${src}']`) &&
    !document.querySelector(`${type}[href='${href}']`)
  ) {
    const promise = new Promise((resolve) => {
      const elem = document.createElement(type);
      if (async !== undefined) elem.setAttribute("async", async);
      if (src !== undefined) elem.setAttribute("src", src);
      if (href !== undefined) elem.setAttribute("href", href);
      if (rel !== undefined) elem.setAttribute("rel", rel);
      document.body.appendChild(elem);
      elem.onload = () => {
        console.info("FormioScript loaded:", src || href);
        resolve();
      };
    });
    promise.then(() => {
      createScripts(scripts, i + 1, mainResolve);
    });
  } else {
    createScripts(scripts, i + 1, mainResolve);
  }
};

export const getDefaultScripts = ({ subdomain, version = defaultVersion }) => {
  return [
    {
      type: "script",
      src: `https://${subdomain}.qgov.net.au/formio-qld/${version}/formio.full.js`,
      async: false,
    },
    {
      type: "script",
      src: `https://${subdomain}.qgov.net.au/formio-qld/${version}/premium.min.js`,
      async: false,
    },
    {
      type: "script",
      src: `https://${subdomain}.qgov.net.au/formio-qld/${version}/formio-qld.js`,
      async: false,
    },
    // note: formio-loader should always load last
    {
      type: "script",
      src: `https://${subdomain}.qgov.net.au/formio-qld/${version}/formio-loader.js`,
      async: false,
    },
    {
      type: "link",
      href: `https://${subdomain}.qgov.net.au/formio-qld/${version}/formio.full.min.css`,
      rel: "stylesheet",
    },
    {
      type: "link",
      href: `https://${subdomain}.qgov.net.au/formio-qld/${version}/premium.css`,
      rel: "stylesheet",
    },
    {
      type: "link",
      href: `https://${subdomain}.qgov.net.au/formio-qld/${version}/formio-qld.min.css`,
      rel: "stylesheet",
    },
  ];
};

export const initScript = (scripts) =>
  new Promise((resolve) => {
    if (window.formioScriptLoaded) {
      if (typeof FormioLoader !== "undefined")
        setTimeout(() => {
          FormioLoader.initFormio();
          resolve();
        });
    } else {
      window.formioScriptLoaded = true;
      createScripts(scripts, 0, resolve);
    }
  });
