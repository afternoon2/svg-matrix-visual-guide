import React from 'react';
import { Checkbox, Label, Text } from 'theme-ui';

interface Props {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TransformSwitch: React.FC<Props> = ({ label, checked, onChange }) => (
  <Label
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      width: '20%',
    }}
  >
    <Text
      as="span"
      mr={10}
      sx={{
        fontSize: 20,
      }}
    >
      {label}
    </Text>
    <Checkbox
      checked={checked}
      onChange={onChange}
    />
  </Label>
);

export default TransformSwitch;
