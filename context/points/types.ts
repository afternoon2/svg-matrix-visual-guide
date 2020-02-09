import { Dispatch } from "react";

export interface Vec2 {
  x: number;
  y: number;
}

export type CurrentPoint = 'topLeft'
  | 'topRight'
  | 'bottomRight'
  | 'bottomRight';

export interface PointsState {
  current: CurrentPoint;
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
