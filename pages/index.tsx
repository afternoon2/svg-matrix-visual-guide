import React from 'react';
import {
  ThemeProvider,
} from 'theme-ui';
import theme from '../theme/theme';
import MatrixState from '../components/states/matrix';
import FontFace from '../components/common/font_face';
import PointsState from '../components/states/points';
import Layout from '../components/parts/layout';

const App: React.FC = () => (
  <>
    <FontFace />
    <ThemeProvider theme={theme}>
      <MatrixState>
        <PointsState>
          <Layout />
        </PointsState>
      </MatrixState>
    </ThemeProvider>
  </>
);

export default App;
