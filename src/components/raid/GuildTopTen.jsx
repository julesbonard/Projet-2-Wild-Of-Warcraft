import React from 'react';
import { Link } from 'react-router-dom';

import './RaidPage.module.css';

function GuildTopTen({ i, rank, guild }) {
  return (
    <div
      className={`player col-6 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}
      style={{ color: 'white' }}
    >
      {rank}
      <Link to={guild.path}> {guild.name}</Link>
    </div>
  );
}

export default GuildTopTen;
