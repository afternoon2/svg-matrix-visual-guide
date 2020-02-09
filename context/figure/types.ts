import { Dispatch } from "react";

export interface FigureState {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface FigureAction {
  type: 'set';
  payload: Partial<FigureState>;
}

export interface FigureContextValue {
  state: FigureState;
  dispatch: Dispatch<FigureAction>;
}
