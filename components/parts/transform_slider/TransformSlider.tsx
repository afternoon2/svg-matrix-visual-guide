import React from 'react';
import { Flex, Button, Input } from 'theme-ui';
import TransformationContext from '../../../context/transformation/context';

const TransformSlider: React.FC = () => {
  const {
    state: { step },
    dispatch,
  } = React.useContext(TransformationContext);
  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const parsed = parseInt(value, 10);
    dispatch({
      type: parsed > step ? 'increment' : 'decrement',
    });
  }, [dispatch, step]);
  const handleIncrement = React.useCallback(() => {
    dispatch({ type: 'increment' });
  }, [dispatch]);
  const handleDecrement = React.useCallback(() => {
    dispatch({ type: 'decrement' });
  }, [dispatch]);
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '60%',
      }}
    >
      <Button
        onClick={handleDecrement}
        disabled={step === 1}
        variant="secondary"
      >
        -
      </Button>
      <Input
        type="number"
        min={1}
        max={4}
        step={1}
        value={step}
        onChange={handleChange}
        sx={{
          maxWidth: '200px',
        }}
      />
      <Button
        onClick={handleIncrement}
        disabled={step === 4}
        variant="secondary"
      >
        +
      </Button>
    </Flex>
  );
};

export default TransformSlider;
