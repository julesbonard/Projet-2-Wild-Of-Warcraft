import React from 'react';
import Class, { classes } from '../Classes';
import './GuildPage.module.scss';

function Player({ character, raidProgress, keystoneScores }) {
  return (
    <tr>
      <td style={{ width: '30px' }}>
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
          src={`https://render-${character.region.slug}.worldofwarcraft.com/character/${character.thumbnail}`}
          alt={character.name}
          style={{ border: '1px solid #191e2a', borderRadius: '15px' }}
        />
      </td>
    </tr>
  );
}
export default Player;
