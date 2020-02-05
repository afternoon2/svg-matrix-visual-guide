import React from 'react';
import { SvgComponent } from '../../../types/svg';

const BracketRight: SvgComponent = (props) => (
  <svg
    viewBox={props.viewBox || '0 0 6 85'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5 1V0.5H5.5V1H5ZM5 84H5.5V84.5H5V84ZM0 0.5H5V1.5H0V0.5ZM5.5 1V84H4.5V1H5.5ZM5 84.5H0V83.5H5V84.5Z" fill={props.fill} />
  </svg>
);

export default BracketRight;
