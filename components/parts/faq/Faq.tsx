import React from 'react';
import { Flex, Link } from 'theme-ui';

const Faq: React.FC = () => (
  <Flex
    sx={{
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}
  >
    <Link
      href="/"
      sx={{
        fontFamily: 'body',
        textDecoration: 'none',
        fontStyle: 'italic',
        fontSize: 22,
        color: 'text',
        transition: '120ms',
        '&:hover': {
          color: 'primary',
        },
      }}
    >
        What the heck is going on here?&nbsp;
      <span style={{ fontStyle: 'normal' }} role="img" aria-label="Thinking face emoji">
          🤔
      </span>
    </Link>
  </Flex>
);

export default Faq;
