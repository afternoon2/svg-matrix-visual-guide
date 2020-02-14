import React from 'react';
import { useThemeUI } from 'theme-ui';
import { Vec2, CurrentPoint } from '../../../../context/points/types';
import PointsContext from '../../../../context/points/context';
import Circle from '../circle';
import FigureContext from '../../../../context/figure/context';
import useDrag from '../../../../hooks/useDrag';

const Rectangle: React.FC = () => {
  const {
    state: {
      x, y, width, height,
    },
    dispatch: figureDispatch,
  } = React.useContext(FigureContext);
  const {
    state,
    dispatch,
  } = React.useContext(PointsContext);
  const { theme } = useThemeUI();

  const currentPointDiff = React.useRef<Vec2>({ x: 0, y: 0 });
  const handleRectDown = React.useCallback(
    (event: React.MouseEvent<SVGElement, MouseEvent> | React.TouchEvent<SVGElement>) => {
      const { type: eventType } = event;
      const pointerX: number = eventType === 'touchstart'
        ? (event as React.TouchEvent).touches[0].clientX
        : (event as React.MouseEvent).clientX;
      const pointerY: number = eventType === 'touchstart'
        ? (event as React.TouchEvent).touches[0].clientY
        : (event as React.MouseEvent).clientY;
      currentPointDiff.current = {
        x: pointerX - x,
        y: pointerY - y,
      };
    },
    [currentPointDiff, x, y],
  );
  const handleRectDrag = React.useCallback((newPos: Vec2) => {
    figureDispatch({
      type: 'set',
      payload: {
        x: newPos.x - currentPointDiff.current.x,
        y: newPos.y - currentPointDiff.current.y,
      },
    });
  }, [figureDispatch, currentPointDiff]);

  const [onMouseDown, onTouchStart] = useDrag(handleRectDrag, handleRectDown);

  const commonRectProps: { [key: string]: any } = {
    x, y, width, height,
  };

  const handlePointClick = React.useCallback(
    (event: React.MouseEvent) => {
      dispatch({
        type: 'set',
        payload: {
          current: (event.target as SVGCircleElement).id as CurrentPoint,
        },
      });
    },
    [dispatch],
  );

  return (
    <>
      <rect
        {...commonRectProps}
        fill={theme.colors.backgroundAlpha}
        stroke={theme.colors.primary}
        strokeWidth={2}
        style={{
          cursor: 'move',
        }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      />
      <Circle
        id="topLeft"
        name="Top Left"
        cx={state.topLeft.x}
        cy={state.topLeft.y}
        isSelected={state.current === 'topLeft'}
        onClick={handlePointClick}
      />
      <Circle
        id="topRight"
        name="Top Right"
        cx={state.topRight.x}
        cy={state.topRight.y}
        isSelected={state.current === 'topRight'}
        onClick={handlePointClick}
      />
      <Circle
        id="bottomRight"
        name="Bottom Right"
        cx={state.bottomRight.x}
        cy={state.bottomRight.y}
        isSelected={state.current === 'bottomRight'}
        onClick={handlePointClick}
      />
      <Circle
        id="bottomLeft"
        name="Bottom Left"
        cx={state.bottomLeft.x}
        cy={state.bottomLeft.y}
        isSelected={state.current === 'bottomLeft'}
        onClick={handlePointClick}
      />
    </>
  );
};

export default Rectangle;
