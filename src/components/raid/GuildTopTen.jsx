import React from 'react';

function RaidRank({ i, rank, guild }) {
  return (
    <div
      className={`player col-6 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}
      style={{ color: 'white' }}
    >
      {rank}
      {guild.name}
    </div>
  );
}

export default RaidRank;
