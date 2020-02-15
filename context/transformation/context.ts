import React from 'react';
import { TransformationContextValue } from './types';
import { initialTransformationState } from './reducer';

const TransformationContext = React.createContext<TransformationContextValue>({
  state: initialTransformationState,
  dispatch: () => null,
});

export default TransformationContext;
