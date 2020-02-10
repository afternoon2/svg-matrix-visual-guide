import React, { InputHTMLAttributes } from 'react';
import { Flex, Input, Text } from 'theme-ui';
import OutsideClickHandler from '../outside_click_handler';
import useMouseMove from '../../../hooks/useMouseMove';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  mode: 'x' | 'y';
  onUpdate: (label: string, value: number) => void;
  value: number;
}

const RoundedInput: React.FC<Props> = ({
  label, mode, step, value, onUpdate,
}) => {
  const [editMode, setEditMode] = React.useState<'drag' | 'manual'>('drag');
  const [currentValue, setCurrentValue] = React.useState<number>(value);

  const [onMouseDown, onTouchStart] = useMouseMove(setCurrentValue, value);

  const handleChange = (event: React.ChangeEvent): void => {
    event.stopPropagation();
    const parsed: number = parseInt(
      (event.target as HTMLInputElement).value,
      10,
    );
    setCurrentValue(parsed);
  };

  const handleDoubleClick = (): void => setEditMode('manual');

  const handleOutsideClick = React.useCallback(() => {
    setEditMode('drag');
  }, [editMode]);

  React.useEffect(() => {
    onUpdate(label, currentValue);
  }, [label, currentValue]);

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        position: 'relative',
      }}
    >

      {editMode === 'drag' ? (
        <Flex
          sx={{
            width: ['60px', '70px', '70px'],
            height: ['60px', '70px', '70px'],
            borderRadius: '50%',
            fontFamily: 'monospace',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'backgroundLight',
            marginBottom: 20,
            cursor: 'pointer',
          }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onDoubleClick={handleDoubleClick}
        >
          <Text
            as="span"
            sx={{
              fontSize: 20,
              fontFamily: 'monospace',
              minWidth: '30px',
              textAlign: 'center',
            }}
          >
            {currentValue}
          </Text>
        </Flex>
      ) : (
        <OutsideClickHandler
          onOutsideClick={handleOutsideClick}
          sx={{
            width: ['60px', '70px', '70px'],
            height: ['60px', '70px', '70px'],
            borderRadius: '50%',
            fontFamily: 'monospace',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'backgroundLight',
            marginBottom: 20,
          }}
        >
          <Input
            type="number"
            id="label"
            step={step}
            value={currentValue}
            onChange={handleChange}
            sx={{
              border: 'none',
              textAlign: 'center',
            }}
          />
        </OutsideClickHandler>
      )}
      <Flex
        sx={{
          fontSize: 29,
          fontStyle: 'italic',
          alignItems: 'center',
          justifyContent: 'center',
          color: mode === 'x'
            ? 'tertiary'
            : 'secondary',
        }}
      >
        {label}
      </Flex>
    </Flex>
  );
};

export default RoundedInput;
