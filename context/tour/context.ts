import { createContext } from 'react';
import { TourContextValue } from './types';
import { initialTourState } from './reducer';
;

export default createContext<TourContextValue>({
  state: initialTourState,
  dispatch: () => null,
});
