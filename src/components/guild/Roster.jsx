import React from 'react';
import { Row, Table } from 'reactstrap';

import Player from './Player';
{
  /* import GuildName from './GuildName'; */
}

function Roster({ roster }) {
  return (
    <Row>
      <Table size="sm" dark>
        <thead>
          <tr>
            <th>Membre</th>
            <th>Niveau</th>
            <th>Progression dans les Raids</th>
            <th>Score Total</th>
          </tr>
        </thead>
        <tbody>
          {roster.map(p => {
            return <Player {...p} />;
          })}
        </tbody>
      </Table>
    </Row>
  );
}

export default Roster;
