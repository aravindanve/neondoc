export const debounce = function debounce(fn) {
  let request;
  return function () {
    let context = this;
    let args = arguments;
    request && window.cancelAnimationFrame(request);
    request = window.requestAnimationFrame(() => fn.apply(context, args));
  };
};
