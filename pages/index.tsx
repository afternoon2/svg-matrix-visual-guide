import React from 'react';
import {
  ThemeProvider, Box, Grid, Flex,
} from 'theme-ui';
import theme from '../theme/theme';
import MatrixState from '../components/states/matrix';
import FontFace from '../components/common/font_face';
import Segment from '../components/common/segment';
import Code from '../components/parts/code';
import Footer from '../components/parts/footer';
import Function from '../components/parts/function';
import Equation from '../components/parts/equation';
import PointsState from '../components/states/points';

const App: React.FC = () => (
  <>
    <FontFace />
    <ThemeProvider theme={theme}>
      <MatrixState>
        <PointsState>
          <Box
            sx={{
              width: '100%',
              position: 'relative',
            }}
          >
            <Grid
              columns={['1fr', 'repeat(4, 1fr)', 'repeat(10, 1fr)']}
              p={4}
              sx={{
                gridTemplateRows: ['repeat(12, 1fr)', 'repeat(5, 1fr)', 'repeat(9, 1fr)'],
                gridColumnGap: 3,
                gridRowGap: 3,
                position: 'absolute',
                width: '100%',
                height: '100vh',
                minHeight: '1200px',
                overflowY: 'auto',
              }}
            >
              <Flex
                sx={{
                  gridArea: ['1 / 1 / 2 / 2', '1 / 1 / 2 / 3', '1 / 2 / 2 / 6'],
                }}
              >
                <Code />
              </Flex>
              <Flex
                sx={{
                  gridArea: ['2 / 1 / 5 / 2', '2 / 1 / 6 / 3', '2 / 2 / 6 / 6'],
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Graph goes here
              </Flex>
              <Flex
                sx={{
                  gridArea: ['5 / 1 / 7 / 2', '2 / 3 / 4 / 5', '2 / 6 / 4 / 10'],
                }}
              >
                <Function />
              </Flex>
              <Flex
                sx={{
                  gridArea: ['7 / 1 / 9 / 2', '4 / 3 / 6 / 5', '4 / 6 / 6 / 10'],
                }}
              >
                <Equation />
              </Flex>
              <Flex
                sx={{
                  gridArea: ['9 / 1 / 11 / 2', '1 / 3 / 2 / 5', '1 / 6 / 2 / 10'],
                }}
              >
                <Segment title="Point" />
              </Flex>
              <Flex
                sx={{
                  gridArea: ['11 / 1 / 13 / 2', '7 / 2 / 8 / 4', '4 / 4 / 10 / 8'],
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Footer />
              </Flex>
            </Grid>
          </Box>
        </PointsState>
      </MatrixState>
    </ThemeProvider>
  </>
);

export default App;
