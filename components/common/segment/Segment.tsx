import React from 'react';
import { Flex } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import TourContext from '../../../context/tour/context';

interface Props {
  id?: string;
  styles?: React.CSSProperties;
  title: string;
}

const Segment: React.FC<Props> = ({
  id, children, title, styles,
}) => {
  const {
    state: { step },
    dispatch,
  } = React.useContext(TourContext);
  const handleClick = React.useCallback(() => {
    let newStep: number;
    switch (title) {
      case 'Function':
        newStep = 2;
        break;
      case 'Equation':
        newStep = 3;
        break;
      case 'CoordSystem':
        newStep = 4;
        break;
      case 'Code':
      case 'Current Point':
        newStep = 5;
        break;
      default:
        newStep = 1;
    }
    dispatch({
      type: 'setStep',
      payload: newStep,
    });
    dispatch({
      type: 'toggle',
      payload: true,
    });
  }, [title, step]);
  return (
    <Flex
      id={id}
      as="fieldset"
      sx={{
        width: '100%',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'grayAlpha',
        borderRadius: '4px',
        margin: 1,
        ...styles,
      }}
    >
      <Flex
        as="legend"
        sx={{
          margin: '0 auto',
          fontSize: [20, 25, 25],
          padding: '0 15px 5px 15px',
          fontStyle: 'italic',
          color: 'gray',
        }}
      >
        <Flex
          sx={{
            alignItems: 'center',
          }}
        >
          {title}
          <FontAwesomeIcon
            icon={faInfoCircle}
            size="xs"
            style={{ marginLeft: '10px', marginBottom: '5px', cursor: 'pointer' }}
            onClick={handleClick}
          />
        </Flex>
      </Flex>
      {children}
    </Flex>
  );
};

export default Segment;
