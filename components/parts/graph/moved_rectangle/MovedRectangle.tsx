import React from 'react';
import { useThemeUI } from 'theme-ui';
import FigureContext from '../../../../context/figure/context';
import MatrixContext from '../../../../context/matrix/context';
import TranslationContext from '../../../../context/translation/context';
import Circle from '../circle';
import PointsContext from '../../../../context/points/context';

const MovedRectangle: React.FC = () => {
  const {
    state: {
      x, y, width, height,
    },
  } = React.useContext(FigureContext);
  const {
    state: {
      a, b, c, d, e, f,
    },
  } = React.useContext(MatrixContext);
  const {
    state,
  } = React.useContext(TranslationContext);
  const {
    state: {
      current,
    },
  } = React.useContext(PointsContext);
  const { theme } = useThemeUI();
  const handlePointClick = (): null => null;
  return (
    <>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        transform={`matrix(${a} ${b} ${c} ${d} ${e} ${f})`}
        fill={theme.colors.secondaryAlpha}
      />
      <Circle
        id="translatedTopLeft"
        name="Top Left"
        cx={state.topLeft.x}
        cy={state.topLeft.y}
        isSelected={current === 'topLeft'}
        onClick={handlePointClick}
        isTranslated
      />
      <Circle
        id="translatedTopRight"
        name="Top Right"
        cx={state.topRight.x}
        cy={state.topRight.y}
        isSelected={current === 'topRight'}
        onClick={handlePointClick}
        isTranslated
      />
      <Circle
        id="translatedBottomRight"
        name="Bottom Right"
        cx={state.bottomRight.x}
        cy={state.bottomRight.y}
        isSelected={current === 'bottomRight'}
        onClick={handlePointClick}
        isTranslated
      />
      <Circle
        id="translatedBottomLeft"
        name="Bottom Left"
        cx={state.bottomLeft.x}
        cy={state.bottomLeft.y}
        isSelected={current === 'bottomLeft'}
        onClick={handlePointClick}
        isTranslated
      />
    </>
  );
};

export default MovedRectangle;
