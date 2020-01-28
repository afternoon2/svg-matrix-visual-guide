import React from 'react';
import { Flex, Label, Input } from 'theme-ui';
import { ModifierTarget } from '../../types';
import MatrixContext from '../../../../context/matrix/context';
import FieldGroup from '../../../common/fieldgroup';

interface Props {
  target: ModifierTarget;
}

const Modifiers: React.FC<Props> = ({ target }) => {
  const {
    state,
    dispatch,
  } = React.useContext(MatrixContext);
  const [currentProps, setCurrentProps] = React.useState<string[]>([]);

  React.useEffect(() => {
    setCurrentProps(
      target === 'x'
        ? ['a', 'c', 'e']
        : ['b', 'd', 'f'],
    );
  }, [target]);

  const handleChange = React.useCallback((event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    dispatch({
      payload: {
        [target.id]: target.value,
      },
      type: 'set',
    })
  }, [dispatch]);

  return (
    <Flex sx={{ height: '100%' }}>
      <FieldGroup name={`New ${target.toUpperCase()} Modifiers`}>
        {currentProps.map(prop => (
          <Flex 
            key={prop}
            sx={{
              alignItems: 'center',
            }}
          >
            <Label
              ml={2}
              sx={{
                width: '10%'
              }}
            >{prop}</Label>
            <Input
              mt={2}
              mb={2}
              id={prop}
              type="number"
              min={0}
              max={1000}
              step={0.05}
              value={state[prop]}
              onChange={handleChange}
              sx={{
                width: '30%'
              }}
            />
          </Flex>
        ))}
      </FieldGroup>
    </Flex>
  );
};

export default Modifiers;
