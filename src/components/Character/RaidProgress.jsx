import React from 'react';
import { Col } from 'reactstrap';

import ProgressBar from './ProgressBar';

function RaidProgress({
  name,
  normal_bosses_killed,
  heroic_bosses_killed,
  mythic_bosses_killed,
  total_bosses
}) {
  return (
    <Col>
      <p>{name}</p>
      <ProgressBar value={normal_bosses_killed} max={total_bosses} color="info" />
      <ProgressBar value={heroic_bosses_killed} max={total_bosses} color="warning" />
      <ProgressBar value={mythic_bosses_killed} max={total_bosses} color="danger" />
    </Col>
  );
}

export default RaidProgress;
