import React from 'react';
import Step from './step/Step';
import Intro from '../../../content/intro.mdx';
import TourContext from '../../../context/tour/context';
import Function from '../../../content/function.mdx';
import Equation from '../../../content/equation.mdx';
import CoordSystem from '../../../content/coord_system.mdx';
import Summary from '../../../content/summary.mdx';
import Overlay from './overlay';

interface TourStep {
  target: string;
  element: JSX.Element;
}

const steps: { [key: string]: JSX.Element } = {
  1: (
    <Step title="SVG Matrix Function">
      <Intro />
    </Step>
  ),
  2: (
    <Step title="Function">
      <Function />
    </Step>
  ),
  3: (
    <Step title="Equation">
      <Equation />
    </Step>
  ),
  4: (
    <Step title="Coordinates System">
      <CoordSystem />
    </Step>
  ),
  5: (
    <Step title="Code & Point">
      <Summary />
    </Step>
  ),
};

const Tour: React.FC = () => {
  const {
    state: {
      step,
    },
  } = React.useContext(TourContext);

  return (
    <>
      {step ? (
        <Overlay>
          {steps[step]}
        </Overlay>
      ) : null}
    </>
  );
};
export default Tour;
