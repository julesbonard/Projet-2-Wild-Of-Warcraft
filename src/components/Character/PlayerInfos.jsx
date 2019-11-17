import React from 'react';
import { Col, Row, Table } from 'reactstrap';

import Class, { classes } from '../Classes';

import styles from './CharacterPage.module.scss';

function PlayerInfos({ character, guild }) {
  return (
    <Row>
      <Col className="text-center">
        <img src={character.thumbnail_url} alt={character.name} />
        <h1>{character.name}</h1>
      </Col>
      <Table size="sm" hover dark>
        <thead>
          <th>Classe</th>
          <th>Spécialité</th>
          <th>Race</th>
          <th>Faction</th>
          <th>Guilde</th>
        </thead>
        <tbody>
          <tr>
            {/* <td>
                            <Class wowClass={classes[character.class.toLowerCase()]} />
                        </td> */}
            <td>{character.class}</td>
            <td>{character.active_spec_name}</td>
            <td>{character.race}</td>
            <td>{character.faction}</td>
            <td>{guild.name}</td>
          </tr>
        </tbody>
      </Table>
    </Row>
  );
}

export default PlayerInfos;
