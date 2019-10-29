import React from 'react';

function RaidRank(props) {
  return (
    <div
      className={`player col-6 ${props.i % 2 === 0 ? 'text-right' : 'text-left'}`}
      style={{ color: 'white' }}
    >
      {props.rank}
      {props.guild.name}
    </div>
  );
}

export default RaidRank;
