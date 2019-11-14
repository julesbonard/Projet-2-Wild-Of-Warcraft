import React from 'react';
import { Row, Table } from 'reactstrap';

import Player from './Player';
import './GuildPage.module.scss';

function Roster({ roster }) {
  return (
    <Row>
      <Table size="sm" hover dark>
        <thead>
          <tr>
            <th>Classe</th>
            <th>Membre</th>
            <th>
              Progression <br /> dans les Raids
            </th>
            <th>Score Total</th>
            <th>
              Item Level Equipped
              <br /> / Item Level Total
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {roster.map((p, i) => {
            return <Player {...p} key={i} />;
          })}
        </tbody>
      </Table>
    </Row>
  );
}

export default Roster;
