import React from 'react';
import { Col } from 'reactstrap';

function Player({ character, raidProgress, keystoneScores }) {
  return (
    <Col>
      <p>{character.name}</p>
    </Col>
  );
}
export default Player;
