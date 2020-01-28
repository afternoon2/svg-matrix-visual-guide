import React from 'react';

const FontFace: React.FC = () => (
  <>
    <style jsx>{`
    /* crimson-text-italic - latin */
    @font-face {
      font-family: 'Crimson Text';
      font-style: italic;
      font-weight: 400;
      src: local('Crimson Text Italic'), local('CrimsonText-Italic'),
          url('./fonts/crimson-text-v10-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('./fonts/crimson-text-v10-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* crimson-text-600italic - latin */
    @font-face {
      font-family: 'Crimson Text';
      font-style: italic;
      font-weight: 600;
      src: local('Crimson Text SemiBold Italic'), local('CrimsonText-SemiBoldItalic'),
          url('./fonts/crimson-text-v10-latin-600italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('./fonts/crimson-text-v10-latin-600italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    `}</style>
  </>
);

export default FontFace;
