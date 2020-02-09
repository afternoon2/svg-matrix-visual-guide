import React from 'react';
import { FigureContextValue } from './types';
import { initialState } from './reducer';

const FigureContext = React.createContext<FigureContextValue>({
  state: initialState,
  dispatch: () => null,
});

export default FigureContext;
