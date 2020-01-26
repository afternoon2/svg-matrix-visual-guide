import React from 'react';
import { Flex, Link, Heading } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Header: React.FC = () => (
  <Flex
    as="header"
    p={3}
    backgroundColor="muted"
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      height: '60px',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}
  >
    <Heading as="h4">
      Visual Guide To SVG Matrix
    </Heading>
    <Link 
      sx={{ color: 'text' }}
      href="https://www.github.com/afternoon2/svg-matrix-visual-guide" 
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </Link>
  </Flex>  
);

export default Header;
