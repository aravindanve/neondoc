import { withAlpha } from './utils/color';

export const theme = {
  colors: {
    accent: '#3866FF',
    text: '#CCC',
    background: '#000',
    primary: '#3866FF',
    secondary: '#9D38FF',
    success: '#25AC4E',
    info: '#7ABAD6',
    warning: '#D2C023',
    danger: '#FF4C4B',
    muted: '#212121',
    gray: '#888888',
    lightgray: '#323232',

    // methods
    httpGet: '#25AC4E',
    httpPost: '#9933CC',
    httpPut: '#FFB400',
    httpDelete: '#CD0000',
    httpOptions: '#33B9CC',
    httpHead: '#CC338C',
  },
  fonts: {
    body: `
      -apple-system,
      system-ui,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      sans-serif`,
    heading: 'inherit',
    monospace: `
      Inconsolata,
      Monaco,
      Consolas,
      "Courier New",
      Courier,
      monospace`,
  },
  fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    thin: 200,
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    rounder: 8,
    circle: 99999,
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)',
  },
  breakpoints: ['40em', '52em', '64em', '80em'],
  // rebass variants
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4, 5, 5],
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [5, 6, 6],
    },
    section: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 3,
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card',
    },
    link: {
      color: 'primary',
      transition: 'color .2s ease-out',
      textDecoration: 'none',
      cursor: 'pointer',
      borderRadius: 'default',
      mx: -1,
      px: 1,
      ':focus': {
        outline: 'none',
        boxShadow: (t) => `0 0 0 3px ${withAlpha(t.colors.accent, 0.5)}`,
      },
      ':active': {
        outline: 'none',
        boxShadow: 'none',
      },
      ':hover,:focus': {
        filter: 'brightness(120%)',
      },
      ':visited': {
        color: 'secondary',
      },
    },
    paragraph: {
      my: 3, // override 14px browser default
    },
    rule: {
      border: 'none',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'lightgray',
    },
    nav: {
      variant: 'variants.link',
      fontSize: 2,
      color: 'gray',
      ':visited': {
        color: 'gray',
      },
      ':hover,:focus': {
        filter: 'brightness(150%)',
      },
    },
  },
  buttons: {
    primary: {
      fontSize: 3,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
      cursor: 'pointer',
      ':hover': {
        filter: 'brightness(120%)',
      },
      ':active': {
        filter: 'brightness(110%)',
      },
      ':focus': {
        outline: 'none',
        boxShadow: (t) => `0 0 0 3px ${withAlpha(t.colors.accent, 0.5)}`,
      },
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 2,
      color: 'text',
    },
  },
  forms: {
    label: {
      fontSize: 2,
      fontWeight: 'bold',
    },
    field: {
      borderColor: 'lightgray',
      transition: 'border .1s ease-in-out, box-shadow .1s ease-in-out',
      ':focus': {
        outline: 'none',
        border: (t) => `${t.colors.accent} solid 1px`,
        boxShadow: (t) => `0 0 0 3px ${withAlpha(t.colors.accent, 0.5)}`,
      },
    },
    input: {
      variant: 'forms.field',
    },
    select: {
      variant: 'forms.field',
    },
    textarea: {
      variant: 'forms.field',
    },
    radio: {},
    slider: {
      bg: 'lightgray',
    },
    switch: {
      // thumb: {}
    },
  },
};
