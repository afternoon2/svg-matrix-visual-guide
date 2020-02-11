import React from 'react';
import { Flex } from 'theme-ui';

const Overlay: React.FC = ({ children }) => (
  <Flex
    sx={{
      backgroundColor: 'backgroundAlphaDark',
      width: '100%',
      height: '100vh',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 11,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </Flex>
);

export default Overlay;
