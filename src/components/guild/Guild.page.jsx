import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
// eslint-disable-next-line

import { Container, Alert, Button } from 'reactstrap';
import Roster from './Roster';
import alliancePic from '../../assets/img-faction/alliance.png';
import hordePic from '../../assets/img-faction/horde.png';
import styles from './GuildPage.module.scss';
import Loader from '../../Loader';

const { error } = styles;

function GuildPage() {
  const [roster, setRoster] = useState([]);
  const [guildInfo, setGuildInfo] = useState({});
  const [lastProgress, setLastProgress] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { region, realm, guild } = useParams();
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

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
      {isError ? (
        <Alert color="danger" isOpen={visible} toggle={onDismiss}>
          <Button tag={Link} to="/" color="danger" className={error}></Button>
          <strong> Warning !</strong> Problems with API's data, return to the home page.
        </Alert>
      ) : isLoading ? (
        <Loader />
      ) : (
        <Container>
          <h1>{guildInfo.name}</h1>
          <h2>{guildInfo.faction}</h2>>
          <div className={styles.factionimg} alt>
            {guildInfo.faction === 'horde' ? (
              <img className={styles.imgsize} src={hordePic} alt="horde-img" />
            ) : (
              <img className={styles.imgsize} src={alliancePic} alt="alliance-img" />
            )}
          </div>
          <Roster roster={roster} />
          {/* <Link to= </Link> */}
        </Container>
      )}
    </>
  );
}

export default GuildPage;
