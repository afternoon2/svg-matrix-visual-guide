import React from 'react';
import { ThemeProvider, Box } from 'theme-ui';
import theme from '../theme/theme';
import Header from '../components/header';
import Content from '../components/content';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Box sx={{
      position: 'relative',
    }}
    >
      <Header />
      <Content>
        Content goes here
      </Content>
    </Box>
  </ThemeProvider>
);

export default App;
