import React from 'react';
import {
  Button, Flex, Heading, Text, useThemeUI,
} from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import TourContext from '../../../../context/tour/context';

interface Props {
  title: string;
}

const MAX_STEPS = 5;

const Step: React.FC<Props> = ({ title, children }) => {
  const {
    state: {
      step,
    },
    dispatch,
  } = React.useContext(TourContext);

  const handleClickPrev = React.useCallback(() => {
    dispatch({
      type: 'setStep',
      payload: step - 1,
    });
  }, [dispatch, step]);

  const handleClickNext = React.useCallback(() => {
    dispatch({
      type: 'setStep',
      payload: step + 1,
    });
  }, [dispatch, step]);

  const handleClose = React.useCallback(() => {
    dispatch({
      type: 'setStep',
      payload: 0,
    });
    dispatch({
      type: 'toggle',
      payload: false,
    });
  }, [dispatch]);

  const { theme } = useThemeUI();
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        width: '650px',
        padding: 4,
        boxSizing: 'border-box',
        backgroundColor: 'backgroundLight',
        marginBottom: '20vh',
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Heading as="h1">
          {title}
        </Heading>
        <Text as="span" onClick={handleClose} sx={{ cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faTimes} size="2x" color={theme.colors.gray} />
        </Text>
      </Flex>
      {children}
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 0',
        }}
      >
        <Button
          disabled={step === 1}
          onClick={handleClickPrev}
          sx={{
            cursor: 'pointer',
            backgroundColor: 'secondary',
            '&:disabled': {
              cursor: 'not-allowed',
              opacity: 0.5,
            },
          }}
        >
          Previous Step
        </Button>

        <Button
          disabled={step === MAX_STEPS}
          onClick={handleClickNext}
          sx={{
            cursor: 'pointer',
            backgroundColor: 'secondary',
            '&:disabled': {
              cursor: 'not-allowed',
              opacity: 0.5,
            },
          }}
        >
          Next Step
        </Button>
      </Flex>
    </Flex>
  );
};

export default Step;
