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
