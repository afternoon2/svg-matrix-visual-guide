import React from 'react';
import { Text } from 'theme-ui';
import Segment from '../../common/segment';
import MatrixContext from '../../../context/matrix/context';

const Code: React.FC = () => {
  const {
    state: {
      a, b, c, d, e, f,
    },
  } = React.useContext(MatrixContext);
  return (
    <Segment
      title="Code"
      styles={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        as="code"
        mt={3}
        sx={{
          fontFamily: 'monospace',
          margin: 0,
          padding: 0,
          paddingBottom: 2,
          fontSize: 23,
        }}
      >
        transform=&quot;matrix(
        {a}
        {' '}
        {b}
        {' '}
        {c}
        {' '}
        {d}
        {' '}
        {e}
        {' '}
        {f}
)&quot;
      </Text>
    </Segment>
  );
};

export default Code;
