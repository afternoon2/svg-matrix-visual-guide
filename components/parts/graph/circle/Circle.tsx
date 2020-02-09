import React from 'react';
import { useThemeUI } from 'theme-ui';

interface Props {
  cx: number;
  cy: number;
  isSelected: boolean;
  onClick?: () => void;
}

const Circle: React.FC<Props> = ({
  cx, cy, isSelected, onClick,
}) => {
  const { theme } = useThemeUI();
  return (
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
    />
  );
};

export default Circle;
