import React from 'react';
import { Flex } from 'theme-ui';

interface Props {
  styles?: React.CSSProperties;
  title: string;
}

const Segment: React.FC<Props> = ({ children, title, styles }) => (
  <Flex
    as="fieldset"
    sx={{
      width: '100%',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'grayAlpha',
      borderRadius: '4px',
      ...styles,
    }}
  >
    <Flex
      as="legend"
      sx={{
        margin: '0 auto',
        fontSize: [20, 25, 25],
        padding: '0 15px 5px 15px',
        // fontStyle: 'italic',
      }}
    >
      {title}
    </Flex>
    {children}
  </Flex>
);

export default Segment;
