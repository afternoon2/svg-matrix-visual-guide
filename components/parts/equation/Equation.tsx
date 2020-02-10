import React from 'react';
import { Flex } from 'theme-ui';
import Segment from '../../common/segment';
import MatrixContext from '../../../context/matrix/context';
import BracketPair from './bracket_pair';
import Bond from './bond';
import PointsContext from '../../../context/points/context';
import { Vec2 } from '../../../context/points/types';

const Equation: React.FC = () => {
  const {
    state: {
      a, c, e,
      b, d, f,
    },
  } = React.useContext(MatrixContext);
  const {
    state,
  } = React.useContext(PointsContext);
  const point: Vec2 = state[state.current];
  return (
    <Segment
      id="equation"
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
          paddingBottom: 20,
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
          propValue={point.x}
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
          propValue={point.y}
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
          modifierTopValue={a * point.x + c * point.y + e}
          modifierBottom="y"
          modifierBottomValue={b * point.x + d * point.y + f}
        />
      </Flex>
    </Segment>
  );
};

export default Equation;
