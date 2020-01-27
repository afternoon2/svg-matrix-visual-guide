import React from 'react';
import MatrixContext from '../../../context/matrix/context';
import matrixReducer, { initialState } from '../../../context/matrix/reducer';

const MatrixState: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(matrixReducer, initialState);

  return (
    <MatrixContext.Provider value={{ state, dispatch }}>
      {children}
    </MatrixContext.Provider>
  );
};

export default MatrixState;
