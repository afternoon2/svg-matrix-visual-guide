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
    backgroundAlpha: rgba('#0f0e17', 0.25),
    backgroundAlphaDark: rgba('#0f0e17', 0.85),
    primary: '#ff8906',
    secondary: '#f25f4c',
    secondaryAlpha: rgba('#f25f4c', 0.5),
    tertiary: '#e53170',
    tertiaryAlpha: rgba('#e53170', 0.5),
  },
  styles: {
    ...THEME.styles,
    p: {
      fontSize: 21,
      fontFamily: 'body',
      color: 'gray',
    },
    a: {
      textDecoration: 'none',
      color: 'primary',
    },
    ul: {
      color: 'gray',
      fontSize: 21,
    },
  },
  breakpoints: [
    '1500px', '1800px', '1920px',
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
  forms: {
    input: {
      borderColor: 'gray'
    },
    select: {
      borderColor: 'gray'
    }
  },
  fontWeights: {
    body: 400,
    heading: 400,
    legend: 600,
    monospace: 400,
  },
  buttons: {
    secondary: {
      bg: 'background',
      borderColor: 'primary',
      color: 'primary',
      borderWidth: '2px',
      borderStyle: 'solid',
      cursor: 'pointer',
      '&:disabled': {
        cursor: 'not-allowed',
        borderColor: 'gray',
        color: 'gray'
      }
    }
  },
  links: {
    transition: {
      color: 'gray',
      transition: '120ms',
      '&:hover': {
        color: 'primary',
      }
    },
    transitionText: {
      color: 'text',
      transition: '120ms',
      '&:hover': {
        color: 'primary',
      }
    }
  }
};
