import React from 'react';
import {
  ThemeProvider,
} from 'theme-ui';
import theme from '../theme/theme';
import MatrixState from '../components/states/matrix';
import FontFace from '../components/common/font_face';
import PointsState from '../components/states/points';
import Layout from '../components/parts/layout';
import FigureState from '../components/states/figure';
import TranslationState from '../components/states/translation';

const App: React.FC = () => (
  <>
    <FontFace />
    <ThemeProvider theme={theme}>
      <MatrixState>
        <PointsState>
          <TranslationState>
            <FigureState>
              <Layout />
            </FigureState>
          </TranslationState>
        </PointsState>
      </MatrixState>
    </ThemeProvider>
  </>
);

export default App;
