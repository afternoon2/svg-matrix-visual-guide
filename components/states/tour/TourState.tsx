import React from 'react';
import TourContext from '../../../context/tour/context';
import tourReducer, { initialTourState } from '../../../context/tour/reducer';

const TourState: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(tourReducer, initialTourState);
  return (
    <TourContext.Provider value={{ state, dispatch }}>
      {children}
    </TourContext.Provider>
  );
};

export default TourState;
