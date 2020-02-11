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
import Octocat from '../components/common/octocat';
import TourState from '../components/states/tour/TourState';

const App: React.FC = () => (
  <>
    <FontFace />
    <ThemeProvider theme={theme}>
      <Octocat />
      <MatrixState>
        <PointsState>
          <TranslationState>
            <FigureState>
              <TourState>
                <Layout />
              </TourState>
            </FigureState>
          </TranslationState>
        </PointsState>
      </MatrixState>
    </ThemeProvider>
  </>
);

export default App;
