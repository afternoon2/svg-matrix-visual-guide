import React from 'react';
import { Flex, Box } from 'theme-ui';

interface Props {
  name: string;
}

const FieldGroup: React.FC<Props> = ({ name, children }) => (
  <>
    <Flex
      as="fieldset"
      sx={{
        width: '100%',
        height: '100%',
        flexWrap: ['nowrap', 'nowrap', 'wrap', 'wrap']
      }}
    >
      <Box as="legend" pl={2} pr={2} sx={{ fontSize: 3 }}>
        {name}
      </Box>
      {children}
    </Flex>
  </>
);

export default FieldGroup;
