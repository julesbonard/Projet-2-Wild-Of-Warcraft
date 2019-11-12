import React from 'react';
import { Row } from 'reactstrap';

import Player from './Player';

function Roster({ roster }) {
  return (
    <Row>
      {roster.map((p, i) => {
        return <Player {...p} key={i} />;
      })}
    </Row>
  );
}

export default Roster;
