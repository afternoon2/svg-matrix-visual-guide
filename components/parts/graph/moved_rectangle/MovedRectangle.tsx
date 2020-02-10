import React from 'react';
import { useThemeUI } from 'theme-ui';
import FigureContext from '../../../../context/figure/context';
import MatrixContext from '../../../../context/matrix/context';

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
  const { theme } = useThemeUI();
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      transform={`matrix(${a} ${b} ${c} ${d} ${e} ${f})`}
      fill={theme.colors.secondary}
    />
  );
};

export default MovedRectangle;
