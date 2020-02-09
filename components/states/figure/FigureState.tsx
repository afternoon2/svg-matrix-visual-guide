import React from 'react';
import FigureContext from '../../../context/figure/context';
import figureReducer, { initialState } from '../../../context/figure/reducer';
import PointsContext from '../../../context/points/context';

const FigureState: React.FC = ({ children }) => {
  const { dispatch: pointDispatch } = React.useContext(PointsContext);
  const [state, dispatch] = React.useReducer(figureReducer, initialState);

  React.useEffect(() => {
    pointDispatch({
      type: 'set',
      payload: {
        topLeft: {
          x: state.x,
          y: state.y,
        },
        topRight: {
          x: state.x + state.width,
          y: state.y,
        },
        bottomRight: {
          x: state.x + state.width,
          y: state.y + state.height,
        },
        bottomLeft: {
          x: state.x,
          y: state.y + state.height,
        },
      },
    });
  }, [pointDispatch, state]);

  return (
    <FigureContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </FigureContext.Provider>
  );
};

export default FigureState;
