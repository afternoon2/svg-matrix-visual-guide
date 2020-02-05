import React from 'react';
import PointsContext from '../../../context/points/context';
import pointsReducer, { initialState } from '../../../context/points/reducer';

const PointsState: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    pointsReducer,
    initialState,
  );

  return (
    <PointsContext.Provider value={{ state, dispatch }}>
      {children}
    </PointsContext.Provider>
  );
};

export default PointsState;
