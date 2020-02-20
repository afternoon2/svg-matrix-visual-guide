import React from 'react';
import Rectangle from '../rectangle';
import MovedRectangle from '../moved_rectangle';
import Steps from '../steps';

const Transformation: React.FC = () => (
  <>
    <Steps />
    <Rectangle />
    <MovedRectangle />
  </>
);

export default Transformation;
