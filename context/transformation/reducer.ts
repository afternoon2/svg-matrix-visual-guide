import { TransformationState, TransformationAction } from './types';

export const initialTransformationState: TransformationState = {
  visible: true,
  step: 1,
  trail: false,
}

const transformationReducer = (
  state: TransformationState, 
  { type }: TransformationAction
): TransformationState => {
  switch (type) {
    case 'decrement':
      return {
        ...state,
        step: state.step === 1 ? 4 : state.step - 1,
      };
    case 'increment':
      return {
        ...state,
        step: state.step === 4 ? 1 : state.step + 1,
      };
    case 'toggle':
      return {
        ...state,
        visible: !state.visible,
      };
    case 'toggleTrail':
      return {
        ...state,
        trail: !state.trail,
      };
    default:
      return initialTransformationState;
  }
};

export default transformationReducer