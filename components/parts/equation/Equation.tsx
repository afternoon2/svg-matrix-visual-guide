import React from 'react';
import { Flex } from 'theme-ui';
import Segment from '../../common/segment';
import MatrixContext from '../../../context/matrix/context';
import BracketPair from './bracket_pair';
import Bond from './bond';

const Equation: React.FC = () => {
  const {
    state: {
      a, c, e,
      b, d, f,
    },
  } = React.useContext(MatrixContext);
  return (
    <Segment
      title="Equation"
      styles={{
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Flex
        sx={{
          width: '100%',
          margin: '0 auto',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <BracketPair
          modifierTop="a"
          mode="equation"
          modifierTopValue={a}
          modifierBottom="b"
          modifierBottomValue={b}
        />
        <Bond
          mode="equation"
          propName="x"
          propValue={1}
        />
        <BracketPair
          mode="equation"
          modifierTop="c"
          modifierTopValue={c}
          modifierBottom="d"
          modifierBottomValue={d}
        />
        <Bond
          mode="equation"
          propName="y"
          propValue={1}
        />
        <BracketPair
          mode="equation"
          modifierTop="e"
          modifierTopValue={e}
          modifierBottom="f"
          modifierBottomValue={f}
        />
        <Bond
          mode="result"
        />
        <BracketPair
          mode="result"
          modifierTop="x"
          modifierTopValue={9}
          modifierBottom="y"
          modifierBottomValue={9}
        />
      </Flex>
    </Segment>
  );
};

export default Equation;
