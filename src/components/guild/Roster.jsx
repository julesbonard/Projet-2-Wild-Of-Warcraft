import React from 'react';
import { Row } from 'reactstrap';

import Player from './Player';

function Roster({ roster }) {
  return (
    <Row>
      {roster.map(p => {
        return <Player {...p} />;
      })}
    </Row>
  );
}

export default Roster;
