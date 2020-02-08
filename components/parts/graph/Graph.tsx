import React, { MutableRefObject, createRef } from 'react';
import { Flex } from 'theme-ui';

const margin: { [key: string]: number } = {
  top: 30,
  left: 30,
  right: 30,
  bottom: 30,
};

const Graph: React.FC = () => {
  const [viewBox, setViewBox] = React.useState<string>('0 0 0 0');
  const ref: MutableRefObject<HTMLFieldSetElement> = createRef();

  const handleResize = React.useCallback(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setViewBox(`0 0 ${Math.round(width)} ${Math.round(height)}`);
    }
  }, [ref, setViewBox]);

  React.useEffect(() => {
    if (viewBox === '0 0 0 0') {
      handleResize();
    }
    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <Flex
      ref={ref}
      title="Graph"
      styles={{
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'inherit',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={viewBox}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <rect x={0} y={0} width={20} height={20} stroke="pink" strokeWidth={2} fill="none" />
        </g>
      </svg>
    </Flex>
  );
};

export default Graph;
