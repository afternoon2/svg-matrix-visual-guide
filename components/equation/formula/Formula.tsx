import React from 'react';
import { Flex } from 'theme-ui';

interface Props {
  opaque?: boolean;
}

const Formula: React.FC<Props> = ({ opaque, children }) => {
  return (
    <Flex
      mt={4}
      sx={{
        width: '100%',
        fontFamily: 'equation',
        fontSize: opaque ? 4 : 5,
        opacity: opaque ? 0.4 : 1,
        alignItems: 'baseline',
        justifyContent: 'center',
        wordSpacing: 4
      }}
    >
      {children}
    </Flex>
  );
};

export default Formula;
