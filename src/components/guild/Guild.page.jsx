import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
// eslint-disable-next-line

import './GuildPage.module.css';
import { Container, Alert, Button } from 'reactstrap';
import Roster from './Roster';
import styles from './GuildPage.module.css';

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
      {isError && (
        <Alert color="danger" isOpen={visible} toggle={onDismiss}>
          <Button tag={Link} to="/" color="danger" className={error}></Button>
          <strong> Warning !</strong> Problems with API's data, return to the home page.
        </Alert>
      )}

      {isLoading && (
        <div className="text-center">
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <Container>
        <Roster roster={roster} />
      </Container>
    </>
  );
}

export default GuildPage;
