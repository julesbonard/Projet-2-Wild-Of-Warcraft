import React from 'react';

function Player({ character, raidProgress, keystoneScores }) {
  return (
    <tr>
      <td>{character.name}</td>
      <td>{character.level}</td>
      <td>{raidProgress.totalBosses}</td>
      <td>{keystoneScores.allScore}</td>
    </tr>
  );
}
export default Player;
