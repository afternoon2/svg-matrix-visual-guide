import React from 'react';
import { Flex, Heading, Link } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => (
  <Flex
    sx={{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <Heading
      as="h1"
      sx={{
        color: 'body',
        fontSize: [30, 35, 35],
        lineHeight: 2,
      }}
    >
      Visual Guide To SVG Matrix
    </Heading>
    <Heading as="h2">
      <Link
        sx={{ color: 'gray', fontStyle: 'italic', textDecoration: 'none' }}
        href="https://github.com/afternoon2"
        target="_blank"
      >
        made by afternoon2
      </Link>
    </Heading>
    <Flex
      sx={{
        alignItems: 'center',
      }}
      pt={50}
      pb={25}
    >
      <Link href="https://github.com/afternoon2/svg-matrix-visual-guide" target="_blank" mr={40} sx={{ color: 'gray' }}>
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </Link>
      <Link href="https://jakub-antolak.dev" target="_blank" mr={40} sx={{ color: 'gray' }}>
        <FontAwesomeIcon icon={faBlog} size="lg" />
      </Link>
      <Link href="https://twitter.com/jakub_antolak" target="_blank" sx={{ color: 'gray' }}>
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </Link>
    </Flex>
  </Flex>
);

export default Footer;
