import React from 'react';
import { Flex, Button } from 'theme-ui';
import TourContext from '../../../context/tour/context';

const Faq: React.FC = () => {
  const {
    dispatch,
  } = React.useContext(TourContext);
  const handleClick = React.useCallback(() => {
    dispatch({
      type: 'setStep',
      payload: 1,
    });
    dispatch({
      type: 'toggle',
      payload: true,
    });
  }, [dispatch]);
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '80px',
        padding: 2,
      }}
    >
      <Button
        sx={{
          backgroundColor: 'tertiary',
          fontFamily: 'body',
          textDecoration: 'none',
          fontStyle: 'italic',
          fontSize: 22,
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        What is going on here?&nbsp;&nbsp;
        <span style={{ fontStyle: 'normal' }} role="img" aria-label="Thinking face emoji">
          👀
        </span>
      </Button>
    </Flex>
  );
};

export default Faq;
