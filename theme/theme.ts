import { roboto } from '@theme-ui/presets';

const THEME = roboto;

export default {
  ...THEME,
  styles: {
    ...THEME.styles,
  },
  breakpoints: [
    '768px', '1680px', '1920px',
  ],
  fonts: {
    ...THEME.fonts,
    equation: '"Crimson Text", serif',
  }
};
