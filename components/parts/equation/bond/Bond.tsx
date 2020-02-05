import React from 'react';
import { Flex, Text } from 'theme-ui';

interface Props {
  mode: 'equation' | 'result';
  propName?: 'x' | 'y';
  propValue?: number;
}

const Bond: React.FC<Props> = ({
  mode, propName, propValue,
}) => {
  const color = propName === 'x' ? 'tertiary' : 'secondary';
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        width: '85px',
        height: '100%',
        minWidth: '75px',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      {mode === 'equation' && propName ? (
        <>
          <Text
            as="span"
            sx={{
              fontSize: 25,
              color,
              fontStyle: 'italic',
              paddingTop: 25,
            }}
          >
            {propName.toUpperCase()}
            <sub>old</sub>
          </Text>
          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingBottom: 90,
              paddingTop: 20,
            }}
          >
            <Text
              as="span"
              sx={{
                fontSize: 20,
              }}
            >
              ×
            </Text>
            <Text
              as="span"
              sx={{
                fontSize: 25,
                color,
              }}
            >
              {propValue}
            </Text>
            <Text
              as="span"
              sx={{
                fontSize: 20,
              }}
            >
              +
            </Text>
          </Flex>
        </>
      ) : (
        <Text
          as="span"
          sx={{
            fontSize: 23,
          }}
        >
          ⟹
        </Text>
      )}
    </Flex>
  );
};

export default Bond;
