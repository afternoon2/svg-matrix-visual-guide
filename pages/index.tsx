import React from 'react';
import {
  ThemeProvider, Box,
} from 'theme-ui';
import theme from '../theme/theme';
import MatrixState from '../components/states/matrix';
import FontFace from '../components/common/font_face';

const App: React.FC = () => (
  <>
    <FontFace />
    <ThemeProvider theme={theme}>
      <MatrixState>
        <Box
          sx={{
            position: 'relative',
          }}
        />
      </MatrixState>
    </ThemeProvider>
  </>
);

export default App;
