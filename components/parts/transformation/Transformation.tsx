import React from 'react';
import Segment from '../../common/segment';
import TransformationContext from '../../../context/transformation/context';
import TransformSlider from '../transform_slider';
import TransformSwitch from '../transform_switch';

const Transformation: React.FC = () => {
  const {
    state: { visible, trail },
    dispatch,
  } = React.useContext(TransformationContext);

  const handleChange = React.useCallback(() => {
    dispatch({
      type: 'toggle',
    });
  }, [dispatch]);
  const handleTrailChange = React.useCallback(() => {
    dispatch({
      type: 'toggleTrail',
    });
  }, [dispatch]);
  return (
    <Segment
      title="Transformation Steps"
      hideHelp
      styles={{
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <TransformSwitch
        label="Show"
        checked={visible}
        onChange={handleChange}
      />
      <TransformSwitch
        label="Trail"
        checked={trail}
        onChange={handleTrailChange}
      />
      <TransformSlider />
    </Segment>
  );
};

export default Transformation;
