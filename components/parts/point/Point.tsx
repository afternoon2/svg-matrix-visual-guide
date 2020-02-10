import React from 'react';
import { Select } from 'theme-ui';
import Segment from '../../common/segment';
import PointsContext from '../../../context/points/context';
import { CurrentPoint } from '../../../context/points/types';

export interface SelectItem {
  id: string;
  name: string;
}

const points: SelectItem[] = [
  {
    id: 'topLeft',
    name: 'Top Left',
  },
  {
    id: 'topRight',
    name: 'Top Right',
  },
  {
    id: 'bottomRight',
    name: 'Bottom Right',
  },
  {
    id: 'bottomLeft',
    name: 'Bottom Left',
  },
];

const Point: React.FC = () => {
  const {
    state: {
      current,
    },
    dispatch,
  } = React.useContext(PointsContext);

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch({
        type: 'set',
        payload: {
          current: event.target.value as CurrentPoint,
        },
      });
    },
    [dispatch],
  );

  return (
    <Segment
      id="point"
      title="Current Point"
      styles={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Select
        value={current}
        onChange={handleChange}
        sx={{
          minWidth: '200px',
        }}
      >
        {points.map((p: SelectItem) => (
          <option
            key={p.id}
            value={p.id}
          >
            {p.name}
          </option>
        ))}
      </Select>
    </Segment>
  );
};

export default Point;
