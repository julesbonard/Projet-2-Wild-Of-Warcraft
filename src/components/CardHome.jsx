import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import StyledCardHome from './StyleCardHome';
import '../Css/CardHome.scss';
import { Link } from 'react-router-dom';
import '../Css/Navbar.scss';

class CardHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking: [],
      isError: false
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://raider.io/api/v1/raiding/raid-rankings?raid=${this.props.raid}&difficulty=mythic&region=world
        `
      )
      .then(res => {
        let datas = res.data.raidRankings;
        datas.splice(3);

        this.setState({ ranking: datas });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isError: true });
      });
  }

  render() {
    const dash = /-/g;
    const { icon } = this.props;
    const { raid } = this.props;
    const { isError, ranking } = this.state;
    if (isError) {
      return <p>Error !</p>;
    } else {
      return (
        <React.Fragment>
          <StyledCardHome
            className={`d-flex flex-column text-center ${
              reverse ? 'flex-sm-row-reverse' : 'flex-sm-row'
            }`}
          >
            <div className="col-lg-3">
              <CardImg
                height="100%"
                src={`/Image/${raid}.jpg`}
                className="border border-dark"
                alt="coucou"
              />
            </div>


            <section className="card_body">
              <div className="card_category">
                <p>{icon}</p>
              </div>
              <Link to={`/Rank/${raid}`} style={{ textDecoration: 'none' }}>
                <h1 className="title-navbar card_title">{raid.replace(dash, ' ')}</h1>
              </Link>
              <h2 className="card_subtitle">Top 3 guilds :</h2>
              {ranking.map(guild => {
                return (
                  <p className="card_description" key={guild.guild.id}>
                    {guild.guild.name}
                  </p>
                );
              })}
              
            <section className="col-lg-9">
              <h1 className="text-capitalize">{raid.replace(dash, ' ')}</h1>
              <h2>Small description of the raid</h2>
              <ul>
                {ranking.map(guild => {
                  return (
                    <li key={guild.guild.id}>
                      <Link to={guild.guild.path}>{guild.guild.name}</Link>
                    </li>
                  );
                })}
              </ul>
              
            </section>
          </StyledCardHome>
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <StyledCardHome className="card bg-color-card">
              <div className="card_thumb">
                <Link to={`/Rank/${raid}`}>
                  <img width="320px" height="235px" src={`/Image/${raid}.jpg`} alt="coucou" />
                </Link>
              </div>

              <section className="card_body">
                <div class="card_category">
                  <p>{icon}</p>
                </div>
                <Link to={`/Rank/${raid}`} style={{ textDecoration: 'none' }}>
                  <h1 className="title-navbar card_title">{raid.replace(dash, ' ')}</h1>
                </Link>
                <h2 className="card_subtitle">Top 3 guilds :</h2>
                {ranking.map(guild => {
                  return <p className="card_description">{guild.guild.name}</p>;
                })}
              </section>
            </StyledCardHome>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default CardHome;
