import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <h1>Visual Guide To SVG Matrix Function</h1>
  </ThemeProvider>
);

export default App;
