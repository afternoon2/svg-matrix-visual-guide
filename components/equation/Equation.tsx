import React from 'react';
import { Flex, Heading } from 'theme-ui';

const Equation: React.FC = () => (
  <Flex
    p={3}
    sx={{
      width: ['100%', '100%', '100%', '50%'],
      height: '90%',
      backgroundColor: 'cornflowerblue',
      mt: 4,
      mr: 4,
      mb: 4,
      ml: [4, 4, 2, 4],
    }}
  >
    <Heading as="h4">
      Equation
    </Heading>
  </Flex>
);

export default Equation;
