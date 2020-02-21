import React from 'react';
import { useThemeUI } from 'theme-ui';
import TransformationContext from '../../../../context/transformation/context';
import PointsContext from '../../../../context/points/context';
import MatrixContext from '../../../../context/matrix/context';
import { Vec2 } from '../../../../context/points/types';

interface StepProps {
  color: string;
  point: Vec2;
  step: number;
}

const Step: React.FC<StepProps> = ({ color, point, step }) => {
  const {
    state: {
      a, b, c,
      d, e, f,
    },
  } = React.useContext(MatrixContext);
  const getPoints = React.useCallback(() => {
    const step1 = `M ${Object.values(point)}`;
    const step2 = `${step1} L${point.x * a},${point.x * b} `;
    const step3 = `${step2} L${point.x * a + point.y * c},${point.x * b + point.y * d} `;
    const step4 = `${step3} L${point.x * a + point.y * c + e},${point.x * b + point.y * d + f}`;
    const steps: { [key: string]: string } = {
      step1, step2, step3, step4,
    };
    return steps[`step${step}`];
  }, [step, point]);
  return (
    <path
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeDashoffset={10}
      strokeDasharray={2}
      d={getPoints()}
    />
  );
};

const Trail: React.FC = () => {
  const {
    state: { step },
  } = React.useContext(TransformationContext);
  const {
    state: {
      topLeft, topRight,
      bottomLeft, bottomRight,
    },
  } = React.useContext(PointsContext);
  const { theme } = useThemeUI();
  return (
    <g>
      <Step color={theme.colors.secondaryAlpha} point={topLeft} step={step} />
      <Step color={theme.colors.secondaryAlpha} point={topRight} step={step} />
      <Step color={theme.colors.secondaryAlpha} point={bottomRight} step={step} />
      <Step color={theme.colors.secondaryAlpha} point={bottomLeft} step={step} />
    </g>
  );
};

export default Trail;
