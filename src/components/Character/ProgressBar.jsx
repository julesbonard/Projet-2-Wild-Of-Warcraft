import React from 'react';
import { Progress } from 'reactstrap';

function ProgressBar({ value, max, color }) {
  return (
    <Progress animated color={color} value={value} max={max}>
      {value} / {max}
    </Progress>
  );
}

export default ProgressBar;
