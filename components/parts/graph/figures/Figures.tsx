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
    state,
  } = React.useContext(PointsContext);
  const {
    state: {
      a, c, e,
      b, d, f,
    },
  } = React.useContext(MatrixContext);
  const { theme } = useThemeUI();
  const commonRectProps: { [key: string]: any } = {
    ...state.topLeft,
    width: state.bottomRight.x - state.topLeft.x,
    height: state.bottomRight.y - state.topLeft.y,
  };

  return (
    <g
      transform={`translate(${Object.values(translate)})`}
    >
      <rect
        {...commonRectProps}
        fill={theme.colors.background}
        stroke={theme.colors.primary}
        strokeWidth={2}
      />
      <rect
        {...commonRectProps}
        fill={theme.colors.secondary}
        transform={`matrix(${a} ${b} ${c} ${d} ${e} ${f})`}
      />
      <circle
        cx={state[state.current].x}
        cy={state[state.current].y}
        r={8}
        fill={theme.colors.primary}
        stroke={theme.colors.background}
        strokeWidth={2}
      />
    </g>
  );
};

export default Figures;
