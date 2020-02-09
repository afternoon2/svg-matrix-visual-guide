import { MatrixState, MatrixAction } from "./types";

export const initialState: MatrixState = {
  a: 1,
  b: 1,
  c: 1,
  d: 0,
  e: 50,
  f: -50,
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
