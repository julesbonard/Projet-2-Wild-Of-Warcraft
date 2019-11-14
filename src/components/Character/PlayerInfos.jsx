import React from 'react';

function PlayerInfos({ character, guild }) {
  return (
    <div>
      <img src={character.thumbnail_url} alt={character.name} />
      <h1>{character.name}</h1>
      <p>{character.class}</p>
      <p>{character.active_spec_name}</p>
      <p>{character.race}</p>
      <p>{character.faction}</p>
      <p>{guild.name}</p>
    </div>
  );
}

export default PlayerInfos;
