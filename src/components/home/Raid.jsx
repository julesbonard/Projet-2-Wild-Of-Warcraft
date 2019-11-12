import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Col, Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';

import styles from './Raid.module.scss';

const { center, card, thumb, body, category, title, subtitle, desc } = styles;

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
  }, [raid]);

  if (isError) {
    return <div>Error !</div>;
  }

  return (
    <Col
      xs={{ offset: 1, size: 9 }}
      sm={{ offset: 0, size: 6 }}
      lg={{ offset: 1, size: 5 }}
      xl={{ offset: 0, size: 3 }}
      className="mt-3"
    >
      <Card className={card}>
        <Link to={`/Rank/${raid}`} className={thumb}>
          <CardImg src={`/Image/${raid}.jpg`} />
        </Link>
        <CardBody className={body}>
          <CardText className={category}>{icon}</CardText>
          <Link to={`/Rank/${raid}`} style={{ textDecoration: 'none' }}>
            <CardTitle className={title}>{raid.replace(/-/g, ' ')}</CardTitle>
          </Link>
          <CardSubtitle className={subtitle}>Top 3 guilds :</CardSubtitle>
          {ranking.map((guild, i) => {
            return (
              <CardText className={center} key={i}>
                <Link to={guild.guild.path} key={i} className={desc}>
                  {guild.guild.name}
                </Link>
              </CardText>
            );
          })}
        </CardBody>
      </Card>
    </Col>
  );
}

export default Raid;
