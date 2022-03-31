export const createScripts = (scripts) => {
  scripts.forEach(({ type, async, src, href, rel }) => {
    if (
      !document.querySelector(`${type}[src='${src}']`) &&
      !document.querySelector(`${type}[href='${href}']`)
    ) {
      const elem = document.createElement(type);
      if (async !== undefined) elem.setAttribute("async", async);
      if (src !== undefined) elem.setAttribute("src", src);
      if (href !== undefined) elem.setAttribute("href", href);
      if (rel !== undefined) elem.setAttribute("rel", rel);
      document.body.appendChild(elem);
    }
  });
};

export const getDefaultScripts = ({
  subdomain,
  version = "v1/v1.x.x-latest",
}) => {
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
      type: "style",
      href: `https://${subdomain}.qgov.net.au/formio-qld/${version}/formio.full.min.css`,
      rel: "stylesheet",
    },
    {
      type: "style",
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
