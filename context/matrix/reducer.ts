import { MatrixState, MatrixAction } from "./types";

export const initialState: MatrixState = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 1,
  f: 1,
};

const matrixReducer = (
  state: MatrixState,
  { type, payload }: MatrixAction
): MatrixState => {
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

export default matrixReducer;
