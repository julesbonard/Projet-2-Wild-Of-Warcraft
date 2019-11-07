import React, { useState } from 'react';
import { Row } from 'reactstrap';

import Raid from './Raid';

function WithRaids() {
  // eslint-disable-next-line
  const [raids, setRaids] = useState([
    'the-eternal-palace',
    'crucible-of-storms',
    'battle-of-dazaralor',
    'uldir'
  ]);
  // eslint-disable-next-line
  const [icon, setIcon] = useState(1);

  return (
    <Row className="justify-content-between">
      {raids.map((raid, i) => {
        return <Raid icon={i + icon} key={i} raid={raid} />;
      })}
    </Row>
  );
}

export default WithRaids;
