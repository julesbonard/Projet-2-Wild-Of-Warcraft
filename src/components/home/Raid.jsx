import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

import StyledRaid from './StyledRaid';
import styles from './Raid.module.scss';

const { card, bgColor, thumb, body, category, title, subtitle, desc } = styles;

function Raid({ raid, icon }) {
  const [isError, setIsError] = useState(false);
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const fetchDatas = () => {
      axios
        .get(
          `https://raider.io/api/v1/raiding/raid-rankings?raid=${raid}&difficulty=mythic&region=world`
        )
        .then(res => {
          let datas = res.data.raidRankings;
          datas.splice(3);
          setRanking(datas);
        })
        .catch(err => {
          console.log(err);
          setIsError(true);
        });
    };
    fetchDatas();
  }, []);

  if (isError) {
    return <div>Error !</div>;
  }
  return (
    <Col sm="6" xl="3" lg="6">
      <StyledRaid className={`${card} ${bgColor}`}>
        <div className={thumb}>
          <Link to={`/Rank/${raid}`}>
            <img width="320px" height="235px" src={`/Image/${raid}.jpg`} alt={raid} />
          </Link>
        </div>
        <section className={body}>
          <div class={category}>
            <p>{icon}</p>
          </div>
          <Link to={`/Rank/${raid}`} style={{ textDecoration: 'none' }}>
            <h1 className={title}>{raid.replace(/-/g, ' ')}</h1>
          </Link>
          <h2 className={subtitle}>Top 3 guilds :</h2>
          {ranking.map(guild => {
            return (
              <h6>
                {/* balise p changée en h6 pour styliser les liens sur la page principale sans affecter le reste du code*/}
                <Link to={guild.guild.path} className={desc}>
                  {guild.guild.name}
                </Link>
              </h6>
            );
          })}
        </section>
      </StyledRaid>
    </Col>
  );
}

export default Raid;
