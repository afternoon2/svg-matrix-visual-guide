import React from 'react';
import { TranslationContextValue } from './types';
import { initialState } from './reducer';

const TranslationContext = React.createContext<TranslationContextValue>({
  state: initialState,
  dispatch: () => null,
});

export default TranslationContext;
