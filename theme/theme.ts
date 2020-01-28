import { swiss } from '@theme-ui/presets';

export default {
  ...swiss,
  styles: {
    ...swiss.styles,
  },
  breakpoints: [
    '768px', '1680px', '1920px',
  ],
  fonts: {
    ...swiss.fonts,
    equation: '"Crimson Text", serif',
  }
};
