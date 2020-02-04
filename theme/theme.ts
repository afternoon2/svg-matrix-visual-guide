import { roboto } from '@theme-ui/presets';
import { rgba, setLightness } from 'polished';

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
    grayAlpha: rgba('#a7a9be', 0.25),
    background: '#0f0e17',
    backgroundLight: setLightness(0.15, '#0f0e17'),
    primary: '#ff8906',
    secondary: '#f25f4c',
    tertiary: '#e53170',
  },
  styles: {
    ...THEME.styles,
  },
  breakpoints: [
    '1090px', '1800px', '1920px',
  ],
  fonts: {
    body: '"Crimson Text", serif',
    heading: '"Crimson Text", serif',
    legend: '"Crimson Text", serif',
    monospace: '"Fira Code", monospace',
  },
  fontSizes: [
    9, 14, 18, 24,
  ],
  fontWeights: {
    body: 400,
    heading: 400,
    legend: 600,
    monospace: 400,
  }
};
