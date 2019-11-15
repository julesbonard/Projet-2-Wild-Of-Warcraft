import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import PlayerInfos from './PlayerInfos';

function CharacterPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const [guild, setGuild] = useState({});
  const [progress, setProgress] = useState({});
  const [bestRuns, setBestRuns] = useState([]);
  const { region, realm, name } = useParams();

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${name}&fields=gear%2Craid_progression%2Cguild%2Cmythic_plus_best_runs`
        )
        .then(res => {
          let datas = res.data;
          setProgress(datas.raid_progression);
          delete datas.raid_progression;
          setBestRuns(datas.mythic_plus_best_runs);
          delete datas.mythic_plus_best_runs;
          setGuild(datas.guild);
          delete datas.guild;
          setCharacter(datas);
        })
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false));
    };
    fetchData();
  }, []);

  return (
    <div>
      <PlayerInfos character={character} guild={guild} />
      {/* <CharacterInfos />
            <RaidProgress  />
            <MythicPlus runs={bestRuns} /> */}
    </div>
  );
}

export default CharacterPage;
