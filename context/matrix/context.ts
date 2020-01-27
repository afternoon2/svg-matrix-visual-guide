import React from 'react'
import { MatrixContextValue } from './types'
import { initialState } from './reducer'

const MatrixContext = React.createContext<MatrixContextValue>({
  state: initialState,
  dispatch: () => null,
});

export default MatrixContext;
