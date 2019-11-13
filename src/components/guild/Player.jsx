import React from 'react';
import { Col, ToastBody, Toast, ToastHeader } from 'reactstrap';

function Player({ character, raidProgress, keystoneScores }) {
  return (
    <tr>
      <td>{character.name}</td>
      <td>{raidProgress.totalBosses}</td>
      <td>{keystoneScores.allScore}</td>
    </tr>
  );
}
export default Player;
