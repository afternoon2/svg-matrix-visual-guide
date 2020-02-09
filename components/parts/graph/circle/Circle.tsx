import React from 'react';
import { useThemeUI } from 'theme-ui';

interface Props {
  id: string;
  cx: number;
  cy: number;
  name: string;
  isSelected: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

const Circle: React.FC<Props> = ({
  cx, cy, isSelected, onClick, name, id,
}) => {
  const [hover, setHover] = React.useState<boolean>(false);
  const { theme } = useThemeUI();

  const handleMouseEnter = (): void => setHover(true);
  const handleMouseOut = (): void => setHover(false);
  return (
    <>
      <circle
        id={id}
        cx={cx}
        cy={cy}
        r={hover ? 12 : 8}
        fill={theme.colors[isSelected ? 'primary' : 'background']}
        stroke={theme.colors[isSelected ? 'background' : 'primary']}
        strokeWidth={2}
        style={{
          cursor: 'pointer',
          opacity: (hover || isSelected) ? 1 : 0,
        }}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        onBlur={handleMouseOut}
      />
      {(hover || isSelected) && (
        <g transform="translate(10, 10)">
          <rect x={cx} y={cy} fill={theme.colors.backgroundLight} width="150" height={isSelected ? 115 : 95} stroke={theme.colors.tertiary} />
          <text
            x={cx}
            y={cy}
            fill={theme.colors.text}
            style={{
              fontFamily: theme.fonts.monospace,
            }}
          >
            {isSelected && (
              <tspan
                x={cx + 10}
                dy="1.6em"
                style={{
                  fontFamily: theme.fonts.body,
                  fontWeight: 600,
                }}
              >
                Current point:
              </tspan>
            )}
            <tspan
              x={cx + 10}
              dy="1.6em"
              style={{
                fontFamily: theme.fonts.body,
                fontStyle: 'italic',
              }}
            >
              {name}
            </tspan>
            <tspan
              x={cx + 10}
              dy="1.6em"
            >
              x:
              <tspan
                fill={theme.colors.tertiary}
              >
                {cx}
              </tspan>
            </tspan>
            <tspan x={cx + 10} dy="1.6em">
              y:
              <tspan fill={theme.colors.secondary}>{cy}</tspan>
            </tspan>
          </text>
        </g>
      )}
    </>
  );
};

export default Circle;
