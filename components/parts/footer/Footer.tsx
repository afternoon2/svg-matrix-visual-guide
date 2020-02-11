import React from 'react';
import { Flex, Heading, Link } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
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
        fontSize: [30, 32, 32],
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
      pt={30}
      pb={20}
    >
      <Link
        variant="transition"
        {...iconLinkProps}
        href="https://jakub-antolak.dev"
        title="Author's blog"
      >
        <FontAwesomeIcon icon={faBlog} size="lg" />
      </Link>
      <Link
        href="https://twitter.com/jakub_antolak"
        variant="transition"
        title="Author's Twitter"
        {...iconLinkProps}
        mr={0}
      >
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </Link>
    </Flex>
  </Flex>
);

export default Footer;
