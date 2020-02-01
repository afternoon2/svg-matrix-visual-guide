import { roboto } from '@theme-ui/presets';

const THEME = roboto;

export default {
  ...THEME,
  colors: {
    /**
     * Taken from Happy Hues site by Mackenzie Child
     * https://www.happyhues.co/palettes/13
     */
    text: '#fffffe',
    gray: '#a7a9be',
    background: '#0f0e17',
    primary: '#ff8906',
    secondary: '#f25f4c',
    tertiary: '#e53170',
  },
  styles: {
    ...THEME.styles,
  },
  breakpoints: [
    '768px', '1680px', '1920px',
  ],
  fonts: {
    body: '"Crimson Text", serif',
    heading: '"Crimson Text", serif',
    monospace: '"Fira Code", monospace',
  },
  fontSizes: [
    9, 14, 18, 24,
  ],
  fontWeights: {
    heading: 400,
    legend: 600,
  }
};
