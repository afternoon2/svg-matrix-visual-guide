import React from 'react';
import { useThemeUI } from 'theme-ui';
import { Vec2 } from '../../../../context/points/types';
import PointsContext from '../../../../context/points/context';
import MatrixContext from '../../../../context/matrix/context';

interface Props {
  translate: Vec2;
}

const Figures: React.FC<Props> = ({ translate }) => {
  const {
    state: {
      topLeft,
      bottomRight,
    },
  } = React.useContext(PointsContext);
  const {
    state: {
      a, c, e,
      b, d, f,
    },
  } = React.useContext(MatrixContext);
  const { theme } = useThemeUI();
  return (
    <g transform={`translate(${Object.values(translate)})`}>
      <rect
        {...topLeft}
        width={bottomRight.x - topLeft.x}
        height={bottomRight.y - topLeft.y}
        fill={theme.colors.background}
        stroke={theme.colors.primary}
        strokeWidth={2}
      />

      <rect
        {...topLeft}
        width={bottomRight.x - topLeft.x}
        height={bottomRight.y - topLeft.y}
        fill={theme.colors.secondary}
        transform={`matrix(${a} ${b} ${c} ${d} ${e} ${f})`}
      />
    </g>
  );
};

export default Figures;
