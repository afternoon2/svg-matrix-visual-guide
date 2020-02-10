import React from 'react';
import TranslationContext from '../../../context/translation/context';
import translationReducer, { initialState } from '../../../context/translation/reducer';
import MatrixContext from '../../../context/matrix/context';
import PointsContext from '../../../context/points/context';
import { CurrentPoint, Vec2 } from '../../../context/points/types';

const TranslationState: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    translationReducer,
    initialState,
  );

  const {
    state: {
      a, c, e,
      b, d, f,
    },
  } = React.useContext(MatrixContext);

  const {
    state: pointsState,
  } = React.useContext(PointsContext);

  const getNewCoords = React.useCallback(
    (point: CurrentPoint): Vec2 => {
      const pX: number = pointsState[point].x;
      const pY: number = pointsState[point].y;
      return {
        x: Math.round(a * pX + c * pY + e),
        y: Math.round(b * pX + d * pY + f),
      };
    }, [a, b, c, d, e, f, pointsState],
  );

  React.useEffect(() => {
    dispatch({
      type: 'set',
      payload: {
        topLeft: getNewCoords('topLeft'),
        topRight: getNewCoords('topRight'),
        bottomLeft: getNewCoords('bottomLeft'),
        bottomRight: getNewCoords('bottomRight'),
      },
    });
  }, [dispatch, getNewCoords]);

  return (
    <TranslationContext.Provider value={{ state, dispatch }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationState;
