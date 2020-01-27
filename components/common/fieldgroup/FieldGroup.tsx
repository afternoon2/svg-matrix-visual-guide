import React from 'react';
import { Box } from 'theme-ui';

interface Props {
  name: string;
}

const FieldGroup: React.FC<Props> = ({ name, children }) => (
  <>
    <Box
      as="fieldset"
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Box as="legend" pl={2} pr={2} sx={{ fontSize: 3 }}>
        {name}
      </Box>
      {children}
    </Box>
  </>
);

export default FieldGroup;
