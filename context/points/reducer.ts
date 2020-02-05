import { PointsState, PointsAction } from './types';

export const initialState: PointsState = {
  topLeft: {
    x: 1,
    y: 1,
  },
  topRight: {
    x: 5,
    y: 1,
  },
  bottomRight: {
    x: 5,
    y: 5,
  },
  bottomLeft: {
    x: 1,
    y: 5,
  },
};

const pointsReducer = (
  state: PointsState,
  { type, payload }: PointsAction,
): PointsState => {
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

export default pointsReducer;