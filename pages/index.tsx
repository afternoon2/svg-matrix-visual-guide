import React from 'react';
import {
  ThemeProvider, Box, Grid,
} from 'theme-ui';
import theme from '../theme/theme';
import Header from '../components/header';
import Modifiers from '../components/modifiers';
import Equation from '../components/equation';
import MatrixState from '../components/states/matrix';
import Artboard from '../components/artboard';
import Addons from '../components/addons';
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
        >
          <Header />
          <Grid
            bg="background"
            columns={['1fr', 'repeat(2, 1fr)', ' 2fr repeat(2, 1fr)']}
            p={3}
            sx={{
              position: 'absolute',
              top: '60px',
              left: 0,
              minHeight: 'calc(100vh - 60px)',
              overflowY: 'auto',
              width: '100%',
              gridTemplateRows: ['repeat(6, 1fr)', 'repeat(4, 1fr)', 'repeat(3, 1fr)'],
            }}
          >
            <Box bg="background" sx={{ gridArea: ['3 / 1 / 5 / 2', '2 / 1 / 4 / 2', '1 / 1 / 3 / 2'] }}>
              <Artboard />
            </Box>
            <Box p={0} bg="background" sx={{ gridArea: ['1 / 1 / 2 / 2', '1 / 1 / 2 / 2', '1 / 2 / 2 / 3'] }}>
              <Modifiers target="x" />
            </Box>
            <Box p={0} bg="background" sx={{ gridArea: ['2 / 1 / 3 / 2', '1 / 2 / 2 / 3', '1 / 3 / 2 / 4'] }}>
              <Modifiers target="y" />
            </Box>
            <Box bg="background" sx={{ gridArea: ['5 / 1 / 6 / 2', '2 / 2 / 5 / 3', '2 / 2 / 4 / 4'] }}>
              <Equation />
            </Box>
            <Box bg="background" sx={{ gridArea: ['6 / 1 / 7 / 2', '4 / 1 / 5 / 2', '3 / 1 / 4 / 2'] }}>
              <Addons />
            </Box>
          </Grid>
        </Box>
      </MatrixState>
    </ThemeProvider>
  </>
);

export default App;
