import { PointsState, PointsAction } from './types';

export const initialState: PointsState = {
  current: 'topLeft',
  topLeft: {
    x: 100,
    y: 100,
  },
  topRight: {
    x: 5,
    y: 1,
  },
  bottomRight: {
    x: 250,
    y: 250,
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
