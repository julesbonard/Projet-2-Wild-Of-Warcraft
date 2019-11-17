import React from 'react';
import { useHistory } from 'react-router-dom';

import Class, { classes } from '../Classes';
import './GuildPage.module.scss';

function Player({ character, raidProgress, keystoneScores }) {
  const history = useHistory();

  const handleClic = () => {
    history.push(`/characters/${character.region.slug}/${character.realm.slug}/${character.name}`);
  };
  return (
    <tr onClick={handleClic}>
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
