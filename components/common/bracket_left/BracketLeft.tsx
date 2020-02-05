import React from 'react';
import { SvgComponent } from '../../../types/svg';

const BracketLeft: SvgComponent = (props) => (
  <svg
    viewBox={props.viewBox || '0 0 6 85'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1 1V0.5H0.5V1H1ZM1 84H0.5V84.5H1V84ZM6 0.5H1V1.5H6V0.5ZM0.5 1V84H1.5V1H0.5ZM1 84.5H6V83.5H1V84.5Z" fill={props.fill} />
  </svg>
);

export default BracketLeft;
