import React from 'react';
import Class, { classes } from '../Classes';

function Player({ character, raidProgress, keystoneScores }) {
  return (
    <tr>
      <td style={{ width: '15px' }}>
        <Class wowClass={classes[character.class.slug]} />
      </td>
      <td>{character.name}</td>
      <td>{raidProgress.totalBosses}</td>
      <td>{keystoneScores.allScore}</td>
      <td>
        {character.itemLevelEquipped}/{character.itemLevelTotal}
      </td>
      <td>
        <img
          src={`https://render-us.worldofwarcraft.com/character/${character.thumbnail}`}
          alt={character.name}
        />
      </td>
    </tr>
  );
}
export default Player;
