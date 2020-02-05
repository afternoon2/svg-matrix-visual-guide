import { Dispatch } from "react";

export interface Vec2 {
  x: number;
  y: number;
}

export interface PointsState {
  topLeft: Vec2;
  topRight: Vec2;
  bottomRight: Vec2;
  bottomLeft: Vec2;
}

export interface PointsAction {
  type: 'set';
  payload: Partial<PointsState>;
}

export interface PointsContextValue {
  state: PointsState;
  dispatch: Dispatch<PointsAction>;
}
