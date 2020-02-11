import { TourState, TourAction } from "./types"

export const initialTourState: TourState = {
  step: 1,
  open: false,
}

const tourReducer = (
  state: TourState,
  { type, payload }: TourAction,
): TourState => {
  switch (type) {
    case 'setStep':
      return {
        ...state,
        step: payload as number,
      };
    case 'toggle':
      return {
        ...state,
        open: payload as boolean,
      }
    default:
      return initialTourState;
  }
};

export default tourReducer;
