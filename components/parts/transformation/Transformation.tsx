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
  const handleStepsChange = React.useCallback(() => {
    dispatch({
      type: 'toggleSteps',
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
        label="Steps"
        checked={trail}
        onChange={handleStepsChange}
      />
      <TransformSlider />
    </Segment>
  );
};

export default Transformation;
