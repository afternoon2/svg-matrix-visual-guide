import React from 'react';
import { useThemeUI } from 'theme-ui';
import { Spring } from 'react-spring/renderprops.cjs';
import MatrixContext from '../../../../context/matrix/context';
import PointsContext from '../../../../context/points/context';
import TranslationContext from '../../../../context/translation/context';
import TransformationContext from '../../../../context/transformation/context';

const Steps: React.FC = () => {
  const {
    state: {
      topLeft, topRight,
      bottomLeft, bottomRight,
    },
  } = React.useContext(PointsContext);
  const {
    state: {
      a, b, c, d,
    },
  } = React.useContext(MatrixContext);
  const {
    state: translate,
  } = React.useContext(TranslationContext);
  const { theme } = useThemeUI();
  const {
    state: { step, visible },
  } = React.useContext(TransformationContext);
  const transitions: { [key: string]: any } = {
    1: {
      from: {
        m: `${topLeft.x},${topLeft.y}`,
        l1: `${topRight.x},${topRight.y}`,
        l2: `${bottomRight.x},${bottomRight.y}`,
        l3: `${bottomLeft.x},${bottomLeft.y}`,
      },
      to: {
        m: `${topLeft.x},${topLeft.y}`,
        l1: `${topRight.x},${topRight.y}`,
        l2: `${bottomRight.x},${bottomRight.y}`,
        l3: `${bottomLeft.x},${bottomLeft.y}`,
      },
    },
    2: {
      from: {
        m: `${topLeft.x},${topLeft.y}`,
        l1: `${topRight.x},${topRight.y}`,
        l2: `${bottomRight.x},${bottomRight.y}`,
        l3: `${bottomLeft.x},${bottomLeft.y}`,
      },
      to: {
        m: `${topLeft.x * a},${topLeft.x * b}`,
        l1: `${topRight.x * a},${topRight.x * b}`,
        l2: `${bottomRight.x * a},${bottomRight.x * b}`,
        l3: `${bottomLeft.x * a},${bottomLeft.x * b}`,
      },
    },
    3: {
      from: {
        m: `${topLeft.x * a},${topLeft.x * b}`,
        l1: `${topRight.x * a},${topRight.x * b}`,
        l2: `${bottomRight.x * a},${bottomRight.x * b}`,
        l3: `${bottomLeft.x * a},${bottomLeft.x * b}`,
      },
      to: {
        m: `${topLeft.x * a + topLeft.y * c},${topLeft.x * b + topLeft.y * d}`,
        l1: `${topRight.x * a + topRight.y * c},${topRight.y * b + topRight.y * d}`,
        l2: `${bottomRight.x * a + bottomRight.y * c},${bottomRight.y * b + bottomRight.y * d}`,
        l3: `${bottomLeft.x * a + bottomLeft.y * c},${bottomLeft.y * b + bottomLeft.y * d}`,
      },
    },
    4: {
      from: {
        m: `${topLeft.x * a + topLeft.y * c},${topLeft.x * b + topLeft.y * d}`,
        l1: `${topRight.x * a + topRight.y * c},${topRight.y * b + topRight.y * d}`,
        l2: `${bottomRight.x * a + bottomRight.y * c},${bottomRight.y * b + bottomRight.y * d}`,
        l3: `${bottomLeft.x * a + bottomLeft.y * c},${bottomLeft.y * b + bottomLeft.y * d}`,
      },
      to: {
        m: `${translate.topLeft.x},${translate.topLeft.y}`,
        l1: `${translate.topRight.x},${translate.topRight.y}`,
        l2: `${translate.bottomRight.x},${translate.bottomRight.y}`,
        l3: `${translate.bottomLeft.x},${translate.bottomLeft.y}`,
      },
    },
  };
  return (
    <Spring
      from={transitions[step].from}
      to={transitions[step].to}
    >
      {(styles): JSX.Element => (
        <>
          {visible && (
            <path
              fill={theme.colors.grayAlpha}
              stroke={theme.colors.secondary}
              d={`M ${styles.m} L${styles.l1} L${styles.l2} L${styles.l3} Z`}
            />
          )}
        </>
      )}
    </Spring>
  );
};

export default Steps;
