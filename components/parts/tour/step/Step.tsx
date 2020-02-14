import React from 'react';
import {
  Button, Flex, Heading, Text, useThemeUI,
} from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import TourContext from '../../../../context/tour/context';
import OutsideClickHandler from '../../../common/outside_click_handler';

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
    <OutsideClickHandler
      onOutsideClick={handleClose}
      sx={{
        position: 'absolute',
        zIndex: 100,
        top: '200px',
        left: [0, 'calc(50vw - 325px)', 'calc(50vw - 325px)'],
      }}
    >
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: ['100vw', '650px', '650px'],
          height: ['auto', '710px', '710px'],
          padding: 4,
          boxSizing: 'border-box',
          backgroundColor: 'background',
          border: `1px solid ${theme.colors.gray}`,
        }}
      >
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            flexDirection: 'column',
          }}
        >
          <Flex sx={{ justifyContent: 'space-between', width: '100%' }}>
            <Heading as="h1">
              {title}
            </Heading>
            <Text as="span" onClick={handleClose} sx={{ cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faTimes} size="2x" color={theme.colors.gray} />
            </Text>
          </Flex>
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              paddingTop: 20,
            }}
          >
            {children}
          </Flex>
        </Flex>
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
            onClick={step === MAX_STEPS ? handleClose : handleClickNext}
            sx={{
              cursor: 'pointer',
              backgroundColor: 'secondary',
              '&:disabled': {
                cursor: 'not-allowed',
                opacity: 0.5,
              },
            }}
          >
            {step === MAX_STEPS ? 'Close' : 'Next Step'}
          </Button>
        </Flex>
      </Flex>
    </OutsideClickHandler>
  );
};

export default Step;
