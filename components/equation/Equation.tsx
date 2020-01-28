import React from 'react';
import FieldGroup from '../common/fieldgroup';
import Formula from './formula';
import MatrixContext from '../../context/matrix/context';

const Equation: React.FC = () => {
  const {
    state: {
      a, c, e,
      b, d, f,
    },
  } = React.useContext(MatrixContext);

  return (
    <FieldGroup name="Equation">
      <Formula opaque>
        newX = a × oldX + c × oldY + e
      </Formula>
      <Formula>
        newX =
        {' '}
        {a}
        {' '}
× oldX +
        {' '}
        {c}
        {' '}
× oldY +
        {' '}
        {e}
      </Formula>
      <Formula opaque>
        newY = b × oldX + d × oldY + f
      </Formula>
      <Formula>
        newY =
        {' '}
        {b}
        {' '}
× oldX +
        {' '}
        {d}
        {' '}
× oldY +
        {' '}
        {f}
      </Formula>
    </FieldGroup>
  );
};

export default Equation;
