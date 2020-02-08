import React from 'react';
import { scaleLinear } from 'd3-scale';
import { useThemeUI } from 'theme-ui';

interface Tick {
  value: number;
  offset: number;
}

interface Props {
  axis: 'x' | 'y';
  marginTop: number;
  marginLeft: number;
  ticks?: number;
  viewBoxWidth: number;
  viewBoxHeight: number;
}

const Axis: React.FC<Props> = ({
  axis, marginTop, marginLeft, ticks = 10, viewBoxWidth, viewBoxHeight,
}) => {
  const { theme } = useThemeUI();
  const getTicks = React.useCallback((): Tick[] => {
    const endPoint: number = axis === 'x'
      ? viewBoxWidth
      : viewBoxHeight;
    const scale = scaleLinear()
      .domain([0, endPoint])
      .range([0, endPoint]);

    return scale.ticks(Math.round((axis === 'x' ? viewBoxWidth : viewBoxHeight) / 35))
      .map((value) => ({
        value,
        offset: scale(value),
      }));
  }, [axis, ticks, viewBoxHeight, viewBoxWidth]);

  return (
    <g>
      {getTicks().map((t: Tick, index: number) => {
        const translateX: number = axis === 'x'
          ? t.offset + marginLeft
          : 0;
        const translateY: number = axis === 'x'
          ? 0
          : t.offset + marginTop;
        const lineTransformX: number = axis === 'x'
          ? 0
          : marginLeft;
        const lineTransformY: number = axis === 'x'
          ? marginTop
          : 0;
        return index > 0 && (
          <g key={t.value} transform={`translate(${translateX}, ${translateY})`}>
            <line
              transform={`translate(${lineTransformX}, ${lineTransformY})`}
              y2={axis === 'x' ? viewBoxHeight : 0}
              x2={axis === 'x' ? 0 : viewBoxWidth}
              stroke={theme.colors.grayAlpha}
            />
            <text
              fill={theme.colors.gray}
              style={{
                fontSize: '12px',
                textAnchor: 'middle',
                transform: `translate${axis === 'x' ? 'Y' : 'X'}(${axis === 'x' ? 20 : 10}px)`,
                fontFamily: theme.fonts.monospace,
              }}
            >
              {t.value}
            </text>
          </g>
        );
      })}
    </g>
  );
};

export default Axis;
