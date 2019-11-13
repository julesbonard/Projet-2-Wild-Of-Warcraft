import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// eslint-disable-next-line

import './GuildPage.module.css';
import { Container } from 'reactstrap';
import Roster from './Roster';
import alliancePic from '../../assets/img-faction/alliance.png';
import hordePic from '../../assets/img-faction/horde.png';

function GuildPage() {
  const [roster, setRoster] = useState([]);
  const [guildInfo, setGuildInfo] = useState({});
  const [lastProgress, setLastProgress] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { region, realm, guild } = useParams();

  useEffect(() => {
    const fetchDatas = () => {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://raider.io/api/guilds/${region}/${realm}/${guild}/roster`
        )
        .then(res => {
          const { guild, raid, roster } = res.data.guildRoster;
          const filteredRoster = roster.filter(p => p.raidProgress.progress.mythic > 4);
          setRoster(filteredRoster);
          setGuildInfo(guild);
          setLastProgress(raid);
        })
        .catch(err => {
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    fetchDatas();
  }, [region, realm, guild]);

  return (
    <>
      {isError && <div>Error !</div>}
      {isLoading && <div>Loading...</div>}
      <Container>
        <h1>{guildInfo.name}</h1>
        <h2>{guildInfo.faction}</h2>>
        {guildInfo.faction === 'horde' ? (
          <img src={hordePic} alt="horde-img" />
        ) : (
          <img src={alliancePic} alt="alliance" />
        )}
        <Roster roster={roster} />
      </Container>
    </>
  );
}

export default GuildPage;
