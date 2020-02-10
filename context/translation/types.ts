import { Dispatch } from 'react';
import { Vec2 } from '../points/types';

export interface TranslationState {
  topLeft: Vec2,
  topRight: Vec2,
  bottomRight: Vec2,
  bottomLeft: Vec2,
}

export interface TranslationAction {
  type: 'set';
  payload: Partial<TranslationState>;
}

export interface TranslationContextValue {
  state: TranslationState;
  dispatch: Dispatch<TranslationAction>;
}
