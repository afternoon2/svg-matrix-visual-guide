import React from 'react';
import { useThemeUI } from 'theme-ui';

interface Props {
  cx: number;
  cy: number;
  name: string;
  isSelected: boolean;
  onClick?: () => void;
}

const Circle: React.FC<Props> = ({
  cx, cy, isSelected, onClick, name,
}) => {
  const [hover, setHover] = React.useState<boolean>(false);
  const { theme } = useThemeUI();

  const handleMouseEnter = (): void => setHover(true);
  const handleMouseOut = (): void => setHover(false);
  return (
    <>
      <circle
        cx={cx}
        cy={cy}
        r={8}
        fill={theme.colors[isSelected ? 'primary' : 'background']}
        stroke={theme.colors[isSelected ? 'background' : 'primary']}
        strokeWidth={2}
        style={{
          cursor: 'pointer',
        }}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        onBlur={handleMouseOut}
      />
      {hover && (
        <g transform="translate(10, 10)">
          <rect x={cx} y={cy} fill={theme.colors.backgroundLight} width="150" height="80" stroke={theme.colors.tertiary} />
          <text
            x={cx}
            y={cy}
            fill={theme.colors.text}
            style={{
              fontFamily: theme.fonts.monospace,
            }}
          >
            <tspan x={cx + 10} dy="1.4em">
              {name
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (str) => str.toUpperCase())}
            </tspan>
            <tspan x={cx + 10} dy="1.4em">
X:
              {cx}
            </tspan>
            <tspan x={cx + 10} dy="1.4em">
Y:
              {cy}
            </tspan>
          </text>
        </g>
      )}
    </>
  );
};

export default Circle;
