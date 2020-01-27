import React from 'react';
import { Flex, Heading } from 'theme-ui';

const Modifiers: React.FC = () => {
  return (
    <Flex
      p={3}
      m={4}
      sx={{
        width: ['100%', '100%', '100%', '50%'],
        height: '50%',
        backgroundColor: 'pink',
        mt: 4,
        mr: [4, 4, 4, 2],
        mb: 2,
        ml: 4
      }}
    >
      <Heading as="h4">
        Modifiers
      </Heading>
    </Flex>
  );
};

export default Modifiers;
