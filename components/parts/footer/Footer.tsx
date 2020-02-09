import React from 'react';
import { Flex, Heading, Link } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

const iconLinkProps: { [key: string]: any } = {
  target: '_blank',
  mr: 40,
};

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
        lineHeight: [1.27, 1.61, 2],
        textAlign: 'center',
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
      <Link
        href="https://github.com/afternoon2/svg-matrix-visual-guide"
        variant="transition"
        {...iconLinkProps}
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </Link>
      <Link
        variant="transition"
        {...iconLinkProps}
        href="https://jakub-antolak.dev"
      >
        <FontAwesomeIcon icon={faBlog} size="2x" />
      </Link>
      <Link
        href="https://twitter.com/jakub_antolak"
        variant="transition"
        {...iconLinkProps}
        mr={0}
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </Link>
    </Flex>
  </Flex>
);

export default Footer;
