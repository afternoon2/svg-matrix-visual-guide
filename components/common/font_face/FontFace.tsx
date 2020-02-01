import React from 'react';

const FontFace: React.FC = () => (
  <>
    <style jsx>
      {`
      /* crimson-text-regular - latin */
      @font-face {
        font-family: 'Crimson Text';
        font-style: normal;
        font-weight: 400;
        src: local('Crimson Text Regular'), local('CrimsonText-Regular'),
            url('./fonts/crimson-text-v10-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('./fonts/crimson-text-v10-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }

      /* crimson-text-italic - latin */
      @font-face {
        font-family: 'Crimson Text';
        font-style: italic;
        font-weight: 400;
        src: local('Crimson Text Italic'), local('CrimsonText-Italic'),
            url('./fonts/crimson-text-v10-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('./fonts/crimson-text-v10-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }


    /* fira-code-regular - latin */
    @font-face {
      font-family: 'Fira Code';
      font-style: normal;
      font-weight: 400;
      src: local('Fira Code'),
          url('./fonts/fira-code-v7-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('./fonts/fira-code-v7-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* fira-code-600 - latin */
    @font-face {
      font-family: 'Fira Code';
      font-style: normal;
      font-weight: 600;
      src: local('Fira Code'),
          url('./fonts/fira-code-v7-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('./fonts/fira-code-v7-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    `}
    </style>
  </>
);

export default FontFace;
