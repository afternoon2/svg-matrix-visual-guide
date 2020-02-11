import React from 'react';
import Overlay from './overlay';
import Step from './step/Step';
import Intro from '../../../content/intro.mdx';
import TourContext from '../../../context/tour/context';

const steps: { [key: string]: JSX.Element } = {
  1: (
    <Step title="SVG Matrix Function">
      <Intro />
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
    <Overlay>
      {steps[step]}
    </Overlay>
  );
};
export default Tour;
