import React from 'react';
import { Flex, Text, useThemeUI } from 'theme-ui';
import BracketLeft from '../../../common/bracket_left';
import BracketRight from '../../../common/bracket_right';

interface Props {
  mode: 'equation' | 'result';
  modifierTop: string;
  modifierBottom: string;
  modifierTopValue: number;
  modifierBottomValue: number;
}

const BracketPair: React.FC<Props> = ({
  mode, modifierTop, modifierBottom, modifierTopValue, modifierBottomValue,
}) => {
  const { theme } = useThemeUI();
  return (
    <Flex
      sx={{
        flexDirection: 'row',
        width: '85px',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <BracketLeft fill={theme.colors.gray} viewBox="0 0 6 85" width="6px" height="150px" />
      <Flex
        sx={{
          width: '30px',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Text
          as="span"
          sx={{
            color: mode === 'equation' ? 'gray' : 'tertiary',
            fontStyle: 'italic',
            fontSize: mode === 'equation' ? 20 : 23,
            textAlign: 'center',
          }}
        >
          {mode === 'equation' ? modifierTop : (
            <>
              {modifierTop.toUpperCase()}
              <sub>new</sub>
            </>
          )}
        </Text>
        <Flex
          sx={{
            flexDirection: 'column',
            height: '70px',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <Text
            as="span"
            sx={{
              color: mode === 'equation' ? 'text' : 'primary',
              fontFamily: 'monospace',
              fontSize: [20, 18, 20],
              textAlign: 'center',
            }}
          >
            {modifierTopValue}
          </Text>
          <Text
            as="span"
            sx={{
              color: mode === 'equation' ? 'text' : 'primary',
              fontFamily: 'monospace',
              fontSize: [20, 18, 20],
              textAlign: 'center',
            }}
          >
            {modifierBottomValue}
          </Text>
        </Flex>
        <Text
          as="span"
          sx={{
            color: mode === 'equation' ? 'gray' : 'secondary',
            fontStyle: 'italic',
            fontSize: mode === 'equation' ? 20 : 23,
            textAlign: 'center',
            paddingTop: 20,
          }}
        >
          {mode === 'equation' ? modifierBottom : (
            <>
              {modifierBottom.toUpperCase()}
              <sub>new</sub>
            </>
          )}
        </Text>
      </Flex>
      <BracketRight fill={theme.colors.gray} viewBox="0 0 6 85" width="6px" height="150px" />
    </Flex>
  );
};

export default BracketPair;
