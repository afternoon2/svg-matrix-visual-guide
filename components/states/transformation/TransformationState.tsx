import React, { useReducer } from 'react';
import transformationReducer, { initialTransformationState } from '../../../context/transformation/reducer';
import TransformationContext from '../../../context/transformation/context';

const TransformationState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    transformationReducer,
    initialTransformationState,
  );
  return (
    <TransformationContext.Provider value={{ state, dispatch }}>
      {children}
    </TransformationContext.Provider>
  );
};

export default TransformationState;
