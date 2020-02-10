import { TranslationState, TranslationAction } from './types';

export const initialState: TranslationState = {
  topLeft: {
    x: 0,
    y: 0,
  },
  topRight: {
    x: 0,
    y: 0,
  },
  bottomRight: {
    x: 0,
    y: 0,
  },
  bottomLeft: {
    x: 0,
    y: 0,
  },
};

const translationReducer = (
  state: TranslationState,
  { type, payload }: TranslationAction,
): TranslationState => {
  switch (type) {
    case 'set':
      return {
        ...state,
        ...payload,
      };
    default:
      return initialState;
  }
};

export default translationReducer;
