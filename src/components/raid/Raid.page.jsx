import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';

import StyledRaidImg from './StyledRaidImg';
import GuildTopTen from './GuildTopTen';
import styles from './RaidPage.module.css';
import { Link } from 'react-router-dom';

function RaidPage() {
  const [topTen, setTopTen] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { raid } = useParams();

  useEffect(() => {
    const fetchDatas = () => {
      axios
        .get(
          `https://raider.io/api/v1/raiding/raid-rankings?raid=${raid}&difficulty=mythic&region=world`
        )
        .then(res => {
          const datas = res.data.raidRankings;
          setTopTen(datas.slice(0, 10));
        })
        .catch(err => {
          console.log(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    fetchDatas();
  }, []);

  return (
    <Row>
      {isLoading && <div>Loading...</div>}
      <Col xs="12">
        <StyledRaidImg src={`/Image/${raid}.jpg`} alt="raid-img" />
      </Col>
      <Col xs="12" className="text-center">
        <h3>{raid.replace(/-/g, ' ')}</h3>
      </Col>
      <Row className="mx-auto">
        {topTen.map((guild, i) => {
          return <GuildTopTen {...guild} i={i} key={i} />;
        })}
      </Row>
    </Row>
  );
}

export default RaidPage;

{
  /* <h6>
  <Link to={guild.guild.path} className={desc}>
    {guild.guild.name}
  </Link>
</h6>; 
*/
}
