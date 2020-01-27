import { Dispatch } from "react";

export interface MatrixState {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
}

export interface MatrixAction {
  type: 'set';
  payload: Partial<MatrixState>;
}

export interface MatrixContextValue {
  state: MatrixState;
  dispatch: Dispatch<MatrixAction>;
}
