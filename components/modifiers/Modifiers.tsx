import React from 'react';
import { Flex, Label, Input, Slider } from 'theme-ui';
import { ModifierTarget } from './types';
import MatrixContext from '../../context/matrix/context';
import FieldGroup from '../common/fieldgroup';

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

  return (
    <Flex sx={{ height: '100%' }}>
      <FieldGroup name={`New ${target.toUpperCase()} Modifiers`}>
        {currentProps.map(prop => {
          const onChange = (event: React.MouseEvent) => {
            const target = event.target as HTMLInputElement;
            dispatch({
              payload: {
                [prop]: target.value,
              },
              type: 'set',
            })
          };
          return (
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
                type="number"
                min={0}
                max={10}
                step={0.01}
                value={state[prop]}
                onChange={onChange}
                sx={{
                  width: '20%'
                }}
              />
              <Slider
                min={0}
                max={10}
                step={0.01}
                value={state[prop]}
                onChange={onChange}
                ml={4}
                mr={2}
                sx={{
                  width: '60%'
                }}
              />
            </Flex>
          );
        })}
      </FieldGroup>
    </Flex>
  );
};

export default Modifiers;
