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
        <div className={thumb}>
          <CardImg src={`/Image/${raid}.jpg`} />
        </div>
        <CardBody className={body}>
          <CardText className={category}>{icon}</CardText>
          <Link to={`/Rank/${raid}`} style={{ textDecoration: 'none' }}>
            <CardTitle className={title}>{raid.replace(/-/g, ' ')}</CardTitle>
          </Link>
          <CardSubtitle className={subtitle}>Top 3 guilds :</CardSubtitle>
          {ranking.map(guild => {
            return (
              <CardText className={center}>
                <Link to={guild.guild.path} className={desc}>
                  {guild.guild.name}
                </Link>
              </CardText>
            );
          })}
        </CardBody>
      </Card>
    </Col>
  );

  // return (
  //   <Col sm="6" xl="3" lg="3">
  //     <article className={card}>
  //       <div className={thumb}>
  //         <Link to={`/Rank/${raid}`}>
  //           <img width="320px" height="235px" src={`/Image/${raid}.jpg`} alt={raid} />
  //         </Link>
  //       </div>
  //       <section className={body}>
  //         <div class={category}>
  //           <p>{icon}</p>
  //         </div>
  //         <Link to={`/Rank/${raid}`} style={{ textDecoration: 'none' }}>
  //           <h1 className={title}>{raid.replace(/-/g, ' ')}</h1>
  //         </Link>
  //         <h2 className={subtitle}>Top 3 guilds :</h2>
  //         {ranking.map(guild => {
  //           return (
  //             <h4>
  //               <Link to={guild.guild.path} className={desc}>
  //                 {guild.guild.name}
  //               </Link>
  //             </h4>
  //           );
  //         })}
  //       </section>
  //     </article>
  //   </Col>
  // );
}

export default Raid;
