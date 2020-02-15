import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Flex } from 'theme-ui';
import TourContext from '../../../context/tour/context';
import Code from '../code';
import Footer from '../footer';
import Function from '../function';
import Equation from '../equation';
import CoordSystem from '../coord_system';
import Point from '../point';
import Faq from '../faq';
import Tour from '../tour/Tour';
import Transformation from '../transformation';

const TOOLBAR_WIDTH = 700;

const Layout: React.FC = animated(() => {
  const { state: { open } } = React.useContext(TourContext);
  const props = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
  });
  return (
    <animated.div
      style={{
        width: '100%',
        position: 'relative',
        ...props,
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
        <Point />
        <Transformation />
        <Faq />
      </Flex>
      {open && <Tour />}
    </animated.div>
  );
});

export default Layout;
