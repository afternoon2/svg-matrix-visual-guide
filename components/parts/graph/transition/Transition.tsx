import React from 'react';
import { useThemeUI } from 'theme-ui';
import MatrixContext from '../../../../context/matrix/context';
import PointsContext from '../../../../context/points/context';
import TranslationContext from '../../../../context/translation/context';
import { Vec2 } from '../../../../context/points/types';
import Circle from '../circle';

const Transition: React.FC = () => {
  const {
    state: {
      a, c,
      b, d,
    },
  } = React.useContext(MatrixContext);
  const { state: pointsState } = React.useContext(PointsContext);
  const { state: translationState } = React.useContext(TranslationContext);
  const { theme } = useThemeUI();

  const currentStart: Vec2 = pointsState[pointsState.current];
  const currentEnd: Vec2 = translationState[pointsState.current];
  const firstStep: Vec2 = {
    x: currentStart.x * a,
    y: currentStart.x * b,
  };
  const secondStep: Vec2 = {
    x: currentStart.y * c,
    y: currentStart.y * d,
  };

  return (
    <g>
      <path
        d={`M ${currentStart.x},${currentStart.y} L ${firstStep.x},${firstStep.y} Z`}
        stroke={theme.colors.tertiaryAlpha}
        strokeWidth={2}
        strokeDasharray="3"
        strokeDashoffset="1"
      />
      <Circle
        cx={firstStep.x}
        cy={firstStep.y}
        id="firstStep"
        name="First step (a × oldX, b × oldX)"
        isSelected={false}
      />
      <path
        d={`M ${firstStep.x},${firstStep.y} L ${secondStep.x},${secondStep.y} Z`}
        stroke={theme.colors.tertiaryAlpha}
        strokeWidth={2}
        strokeDasharray="3"
        strokeDashoffset="1"
      />
      <Circle
        cx={secondStep.x}
        cy={secondStep.y}
        id="secondStep"
        name="Second Step (c × oldY, d × oldY)"
        isSelected={false}
      />
      <path
        d={`M ${secondStep.x},${secondStep.y} L ${currentEnd.x},${currentEnd.y} Z`}
        stroke={theme.colors.tertiaryAlpha}
        strokeWidth={2}
        strokeDasharray="3"
        strokeDashoffset="1"
      />
    </g>
  );
};

export default Transition;
