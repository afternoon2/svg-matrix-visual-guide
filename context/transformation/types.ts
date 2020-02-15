import { Dispatch } from 'react';

export interface TransformationState {
  visible: boolean;
  step: number;
  trail: boolean;
}

export interface TransformationAction {
  type: 'increment' | 'decrement' | 'toggle' | 'toggleTrail';
}

export interface TransformationContextValue {
  state: TransformationState;
  dispatch: Dispatch<TransformationAction>;
}