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

const App: React.FC = () => (
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
          columns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 2fr)']}
          p={3}
          sx={{
            position: 'absolute',
            top: '60px',
            left: 0,
            height: 'calc(100vh - 60px)',
            width: '100%',
            gridTemplateRows: ['1fr 1fr 3fr 1fr', '1fr 4fr 1fr', 'repeat(3, 1fr)'],
          }}
        >
          <Box p={0} bg="background" sx={{ gridArea: ['1 / 1 / 2 / 3', '1 / 1 / 2 / 2', '1 / 1 / 2 / 2'] }}>
            <Modifiers />
          </Box>
          <Box bg="background" sx={{ gridArea: ['3 / 1 / 4 / 3', '2 / 1 / 3 / 3', '1 / 2 / 3 / 3'] }}>
            <Artboard />
          </Box>
          <Box bg="background" sx={{ gridArea: ['2 / 1 / 3 / 3', '1 / 2 / 2 / 3', '2 / 1 / 4 / 2'] }}>
            <Equation />
          </Box>
          <Box bg="background" sx={{ gridArea: ['4 / 1 / 5 / 3', '3 / 1 / 4 / 3', '3 / 2 / 4 / 3'] }}>
            <Addons />
          </Box>
        </Grid>
      </Box>
    </MatrixState>
  </ThemeProvider>
);

export default App;
