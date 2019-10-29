import React from 'react';

import CardGuild from '../components/CardGuild';

function Guild({ match }) {
  return (
    <div>
      <CardGuild {...match.params} />
    </div>
  );
}

export default Guild;
