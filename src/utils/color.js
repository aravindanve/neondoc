export const withAlpha = (color, alpha = 0) => {
  if (typeof color !== 'string') return color;
  if (/^rgba\(/.test(color)) {
    return color.replace(/^rgba\(((?:\s*[0-9.]+\s*,\s*){3}).*/, `rgba($1${alpha})`);
  } else if (/^rgb\(/.test(color)) {
    return color.replace(/^rgb\(((?:\s*[0-9.]+\s*,\s*){2}(?:\s*[0-9.]+\s*)).*/, `rgba($1,${alpha})`);
  } else if (/^#/.test(color)) {
    const hex = (alpha * 255).toString(16);
    if (color.length !== 4 && color.length !== 7 && color.length !== 9) {
      return color;
    } else if (color.length === 4) {
      return `${color}${hex[0]}`;
    } else {
      return `${color.substring(0, 7)}${hex[0]}${hex[1]}`;
    }
  } else {
    return color;
  }
};
