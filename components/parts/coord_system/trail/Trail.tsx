import React from 'react';
import { useThemeUI } from 'theme-ui';
import { Spring } from 'react-spring/renderprops.cjs';
import MatrixContext from '../../../../context/matrix/context';
import PointsContext from '../../../../context/points/context';
import TranslationContext from '../../../../context/translation/context';
import TransformationContext from '../../../../context/transformation/context';

const Trail: React.FC = () => {
  const { state } = React.useContext(PointsContext);
  const {
    state: {
      a, b, c, d,
    },
  } = React.useContext(MatrixContext);
  const {
    state: transtate,
  } = React.useContext(TranslationContext);
  const { theme } = useThemeUI();
  const {
    state: { step, visible },
  } = React.useContext(TransformationContext);
  const transitions: { [key: string]: any } = {
    1: {
      from: {
        m: `${state.topLeft.x},${state.topLeft.y}`,
        l1: `${state.topRight.x},${state.topRight.y}`,
        l2: `${state.bottomRight.x},${state.bottomRight.y}`,
        l3: `${state.bottomLeft.x},${state.bottomLeft.y}`,
      },
      to: {
        m: `${state.topLeft.x},${state.topLeft.y}`,
        l1: `${state.topRight.x},${state.topRight.y}`,
        l2: `${state.bottomRight.x},${state.bottomRight.y}`,
        l3: `${state.bottomLeft.x},${state.bottomLeft.y}`,
      },
    },
    2: {
      from: {
        m: `${state.topLeft.x},${state.topLeft.y}`,
        l1: `${state.topRight.x},${state.topRight.y}`,
        l2: `${state.bottomRight.x},${state.bottomRight.y}`,
        l3: `${state.bottomLeft.x},${state.bottomLeft.y}`,
      },
      to: {
        m: `${state.topLeft.x * a},${state.topLeft.x * b}`,
        l1: `${state.topRight.x * a},${state.topRight.x * b}`,
        l2: `${state.bottomRight.x * a},${state.bottomRight.x * b}`,
        l3: `${state.bottomLeft.x * a},${state.bottomLeft.x * b}`,
      },
    },
    3: {
      from: {
        m: `${state.topLeft.x * a},${state.topLeft.x * b}`,
        l1: `${state.topRight.x * a},${state.topRight.x * b}`,
        l2: `${state.bottomRight.x * a},${state.bottomRight.x * b}`,
        l3: `${state.bottomLeft.x * a},${state.bottomLeft.x * b}`,
      },
      to: {
        m: `${state.topLeft.x * a + state.topLeft.y * c},${state.topLeft.x * b + state.topLeft.y * d}`,
        l1: `${state.topRight.x * a + state.topRight.y * c},${state.topRight.y * b + state.topRight.y * d}`,
        l2: `${state.bottomRight.x * a + state.bottomRight.y * c},${state.bottomRight.y * b + state.bottomRight.y * d}`,
        l3: `${state.bottomLeft.x * a + state.bottomLeft.y * c},${state.bottomLeft.y * b + state.bottomLeft.y * d}`,
      },
    },
    4: {
      from: {
        m: `${state.topLeft.x * a + state.topLeft.y * c},${state.topLeft.x * b + state.topLeft.y * d}`,
        l1: `${state.topRight.x * a + state.topRight.y * c},${state.topRight.y * b + state.topRight.y * d}`,
        l2: `${state.bottomRight.x * a + state.bottomRight.y * c},${state.bottomRight.y * b + state.bottomRight.y * d}`,
        l3: `${state.bottomLeft.x * a + state.bottomLeft.y * c},${state.bottomLeft.y * b + state.bottomLeft.y * d}`,
      },
      to: {
        m: `${transtate.topLeft.x},${transtate.topLeft.y}`,
        l1: `${transtate.topRight.x},${transtate.topRight.y}`,
        l2: `${transtate.bottomRight.x},${transtate.bottomRight.y}`,
        l3: `${transtate.bottomLeft.x},${transtate.bottomLeft.y}`,
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

export default Trail;
