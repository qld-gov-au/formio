export const delegateSelector = (elements, event, childSelector, handler) => {
  const is = (el, s) => {
    return (
      el.matches ||
      el.matchesSelector ||
      el.msMatchesSelector ||
      el.mozMatchesSelector ||
      el.webkitMatchesSelector ||
      el.oMatchesSelector
    ).call(el, s);
  };
  const addEvent = (el) => {
    el.addEventListener(event, (e) => {
      if (is(e.target, childSelector)) {
        handler(e);
      }
    });
  };
  if (Array.isArray(elements)) {
    [].forEach.call(elements, addEvent);
  } else {
    addEvent(elements);
  }
};
