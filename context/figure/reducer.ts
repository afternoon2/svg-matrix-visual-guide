import { FigureState, FigureAction } from './types';

export const initialState: FigureState = {
  x: 100,
  y: 100,
  width: 250,
  height: 250,
};

const figureReducer = (
  state: FigureState,
  { type, payload }: FigureAction,
): FigureState => {
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

export default figureReducer;
