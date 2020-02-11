import React from 'react';
import Overlay from './overlay';
// import TourContext from '../../../context/tour/context';
// const {
//   state: {
//     step,
//   }
// } = React.useContext(TourContext);

const Tour: React.FC = () => (
  <Overlay>
      Hello from Overlay
  </Overlay>
);
export default Tour;
