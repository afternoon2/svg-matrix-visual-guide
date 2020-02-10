import React from 'react';
import { Box, Flex } from 'theme-ui';
import Code from '../code';
import Footer from '../footer';
import Function from '../function';
import Equation from '../equation';
import Graph from '../graph';
import Point from '../point';
import Faq from '../faq';

const TOOLBAR_WIDTH = 700;

const Layout: React.FC = () => (
  <Box
    sx={{
      width: '100%',
      position: 'relative',
    }}
  >
    <Flex
      sx={{
        position: 'absolute',
        top: 0,
        right: `${TOOLBAR_WIDTH}px`,
        width: `calc(100% - ${TOOLBAR_WIDTH}px)`,
        height: '100vh',
      }}
    >
      <Graph />
    </Flex>
    <Flex
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 2,
        width: `${TOOLBAR_WIDTH}px`,
        height: '100vh',
        minHeight: '600px',
        overflowY: 'auto',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 4,
      }}
    >
      <Footer />
      <Code />
      <Function />
      <Equation />
      <Flex
        sx={{
          alignItems: 'center',
        }}
      >
        <Point />
        <Faq />
      </Flex>
    </Flex>
  </Box>
);

export default Layout;
