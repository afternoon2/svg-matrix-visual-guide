import React from 'react';
import { useThemeUI } from 'theme-ui';
import { Vec2, CurrentPoint } from '../../../../context/points/types';
import PointsContext from '../../../../context/points/context';
import MatrixContext from '../../../../context/matrix/context';
import Circle from '../circle';

interface Props {
  translate: Vec2;
}

const Figures: React.FC<Props> = ({ translate }) => {
  const {
    state,
    dispatch,
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

  const points: Array<[string, Vec2]> = Object.entries(state)
    .filter((entry) => typeof entry[1] === 'object');

  const handlePointClick = React.useCallback((name: string) => {
    dispatch({
      type: 'set',
      payload: {
        current: name as CurrentPoint,
      },
    });
  }, [dispatch]);

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
      {points.map((entry: [string, Vec2]) => {
        const [name, coords] = entry;
        const isSelected = name === state.current;
        const onClick = (): void => handlePointClick(name);
        return (
          <Circle
            key={name}
            cx={coords.x}
            cy={coords.y}
            isSelected={isSelected}
            onClick={onClick}
          />
        );
      })}
      <rect
        {...commonRectProps}
        fill={theme.colors.secondary}
        transform={`matrix(${a} ${b} ${c} ${d} ${e} ${f})`}
      />
    </g>
  );
};

export default Figures;
