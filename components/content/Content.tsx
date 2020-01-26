import React from 'react';
import { Flex } from 'theme-ui';

const Content: React.FC = ({ children }) => (
  <Flex
    p={3}
    sx={{
      position: 'absolute',
      top: '60px',
      left: 0,
      width: '100%',
      height: 'calc(100vh - 60px)',
    }}
  >
    {children}
  </Flex>
);

export default Content;
