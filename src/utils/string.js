export const capitalized = (str) =>
  typeof str === 'string' ? str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase() : str;

export const lowercased = (str) => (typeof str === 'string' ? str.toLowerCase() : str);

export const camelcased = (...strs) => strs.map((str, i) => (i === 0 ? lowercased(str) : capitalized(str))).join('');

export const humanized = (str) =>
  typeof str === 'string'
    ? capitalized(
        str
          .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
          .replace(/([a-zA-Z])([0-9])/g, '$1 $2')
          .replace(/([0-9])([a-zA-Z])/g, '$1 $2'),
      )
    : str;

export const repeated = (str, n = 1) => (typeof str === 'string' ? Array(n).fill(str).join('') : str);
