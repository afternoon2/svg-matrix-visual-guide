import React from 'react';
import Rectangle from '../rectangle';
import MovedRectangle from '../moved_rectangle';
import Trail from '../trail';

const Transformation: React.FC = () => (
  <>
    <Trail />
    <Rectangle />
    <MovedRectangle />
  </>
);

export default Transformation;
