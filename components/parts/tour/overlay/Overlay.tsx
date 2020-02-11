import React from 'react';
import { Box } from 'theme-ui';

const Overlay: React.FC = ({ children }) => (
  <Box
    sx={{
      backgroundColor: 'backgroundAlphaDark',
      width: '100%',
      height: '100vh',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 11,
    }}
  >
    {children}
  </Box>
);

export default Overlay;
