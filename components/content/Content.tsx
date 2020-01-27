import React from 'react';
import { Flex } from 'theme-ui';

const Content: React.FC = ({ children }) => (
  <Flex
    sx={{
      position: 'absolute',
      top: '60px',
      left: 0,
      width: '100%',
      height: 'calc(100vh - 60px)',
      flexWrap: ['wrap', 'wrap', 'noWrap']
    }}
  >
    {children}
  </Flex>
);

export default Content;
