export const debounce = function debounce(fn) {
  let id;
  return function () {
    let context = this;
    let args = arguments;
    id && window.cancelAnimationFrame(id);
    id = window.requestAnimationFrame(() => fn.apply(context, args));
  };
};

export const debounceTimeout = function debounce(fn, timeout) {
  let id;
  return function () {
    let context = this;
    let args = arguments;
    id && window.clearTimeout(id);
    id = window.setTimeout(() => fn.apply(context, args), timeout);
  };
};
