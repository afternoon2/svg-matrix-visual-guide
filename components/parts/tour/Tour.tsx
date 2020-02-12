import React from 'react';
import Step from './step/Step';
import Intro from '../../../content/intro.mdx';
import TourContext from '../../../context/tour/context';
import Function from '../../../content/function.mdx';
import Equation from '../../../content/equation.mdx';
import Graph from '../../../content/graph.mdx';
import Summary from '../../../content/summary.mdx';

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
    <Step title="Graph">
      <Graph />
    </Step>
  ),
  5: (
    <Step title="Summary">
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
      {step ? steps[step] : <></>}
    </>
  );
};
export default Tour;
