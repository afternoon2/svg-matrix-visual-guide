import React from 'react';
import { Flex } from 'theme-ui';
import MatrixContext from '../../../context/matrix/context';
import Segment from '../../common/segment';
import RoundedInput from '../../common/rounded_input';

const Function: React.FC = () => {
  const {
    state: {
      a, b, c, d, e, f,
    },
    dispatch,
  } = React.useContext(MatrixContext);

  const handleUpdate = React.useCallback((label, value) => {
    dispatch({
      type: 'set',
      payload: {
        [label]: value,
      },
    });
  }, [dispatch]);

  return (
    <Segment
      id="function"
      title="Function"
      styles={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Flex
        sx={{
          width: ['90%', '90%', '85%'],
          height: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0 auto',
        }}
      >
        <RoundedInput
          label="a"
          mode="x"
          step={1}
          value={a}
          onUpdate={handleUpdate}
        />
        <RoundedInput
          label="b"
          mode="y"
          step={1}
          value={b}
          onUpdate={handleUpdate}
        />
        <RoundedInput
          label="c"
          mode="x"
          step={1}
          value={c}
          onUpdate={handleUpdate}
        />
        <RoundedInput
          label="d"
          mode="y"
          step={1}
          value={d}
          onUpdate={handleUpdate}
        />
        <RoundedInput
          label="e"
          mode="x"
          step={1}
          value={e}
          onUpdate={handleUpdate}
        />
        <RoundedInput
          label="f"
          mode="y"
          step={1}
          value={f}
          onUpdate={handleUpdate}
        />
      </Flex>
    </Segment>
  );
};

export default Function;
