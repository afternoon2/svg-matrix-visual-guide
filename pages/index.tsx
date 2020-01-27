import React from 'react';
import { ThemeProvider, Box, Grid, Flex } from 'theme-ui';
import theme from '../theme/theme';
import Header from '../components/header';
import Content from '../components/content';
import Modifiers from '../components/modifiers';
import Equation from '../components/equation';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Header />
      <Grid
        bg="muted"
        columns={['repeat(2, 1fr)','repeat(2, 1fr)', 'repeat(2, 2fr)']}
        p={3}
        sx={{
          position: 'absolute',
          top: '60px',
          left: 0,
          height: 'calc(100vh - 60px)',
          width: '100%',
          gridTemplateRows: ['1fr 1fr 3fr 1fr', '1fr 4fr 1fr', 'repeat(3, 1fr)']
        }}
      >
        <Box p={3} bg="highlight" sx={{ gridArea: ['1 / 1 / 2 / 3', '1 / 1 / 2 / 2', '1 / 1 / 2 / 2'] }}>Equation</Box>
        <Box p={3} bg="pink" sx={{ gridArea: ['3 / 1 / 4 / 3', '2 / 1 / 3 / 3', '1 / 2 / 3 / 3'] }}>Artboard</Box>
        <Box p={3} bg="pink" sx={{ gridArea: ['2 / 1 / 3 / 3', '1 / 2 / 2 / 3', '2 / 1 / 4 / 2'] }}>Modifiers</Box>
        <Box p={3} bg="pink" sx={{ gridArea: ['4 / 1 / 5 / 3', '3 / 1 / 4 / 3', '3 / 2 / 4 / 3'] }}>Addons</Box>
      </Grid>
    </Box>
  </ThemeProvider>
);

export default App;
