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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
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
