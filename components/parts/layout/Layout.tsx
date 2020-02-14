import React from 'react';
import { Box, Flex } from 'theme-ui';
import TourContext from '../../../context/tour/context';
import Code from '../code';
import Footer from '../footer';
import Function from '../function';
import Equation from '../equation';
import CoordSystem from '../coord_system';
import Point from '../point';
import Faq from '../faq';
import Tour from '../tour/Tour';

const TOOLBAR_WIDTH = 700;

const Layout: React.FC = () => {
  const { state: { open } } = React.useContext(TourContext);
  return (
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
        <CoordSystem />
      </Flex>
      <Flex
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 2,
          width: `${TOOLBAR_WIDTH}px`,
          height: '100vh',
          minHeight: '700px',
          overflowY: 'auto',
          flexDirection: 'column',
          justifyContent: 'flex-start',
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
      {open && <Tour />}
    </Box>
  );
};

export default Layout;
