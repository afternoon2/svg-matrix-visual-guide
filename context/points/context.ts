import React from 'react';
import { PointsContextValue } from './types';
import { initialState } from './reducer';

const PointsContext = React.createContext<PointsContextValue>({
  state: initialState,
  dispatch: () => null,
});

export default PointsContext;
