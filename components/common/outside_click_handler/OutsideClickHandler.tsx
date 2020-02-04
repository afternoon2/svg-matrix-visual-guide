import React, { useRef } from 'react';
import { Flex } from 'theme-ui';
import useOutsideClick from '../../../hooks/useOutsideClick';

interface Props {
  onOutsideClick: () => void;
  sx?: any;
}

const OutsideClickHandler: React.FC<Props> = ({ children, onOutsideClick, sx }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(wrapperRef, onOutsideClick);

  return (
    <Flex ref={wrapperRef} sx={sx}>
      {children}
    </Flex>
  );
};

export default OutsideClickHandler;
