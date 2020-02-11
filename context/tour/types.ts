import { Dispatch } from "react";

export interface TourState {
  step: number;
  open: boolean;
}

export interface TourAction {
  type: 'setStep' | 'toggle';
  payload: number | boolean;
}

export interface TourContextValue {
  state: TourState;
  dispatch: Dispatch<TourAction>;
}
