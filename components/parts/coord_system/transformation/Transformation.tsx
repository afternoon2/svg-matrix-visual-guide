import React from 'react';
import Rectangle from '../rectangle';
import MovedRectangle from '../moved_rectangle';
import Steps from '../steps';
import TransformationContext from '../../../../context/transformation/context';
import Trail from '../trail';

const Transformation: React.FC = () => {
  const {
    state: {
      trail,
    },
  } = React.useContext(TransformationContext);
  return (
    <>
      {trail && <Trail />}
      <Steps />
      <Rectangle />
      <MovedRectangle />
    </>
  );
};

export default Transformation;
