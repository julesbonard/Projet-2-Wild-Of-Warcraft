import React from 'react';
import axios from 'axios';

import StyledCardHome from './StyleCardHome';
import '../Css/CardHome.scss';
import { Link } from 'react-router-dom';

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
        <div className="col-xl-3 col-lg-6 col-sm-6">
          <StyledCardHome className="card">
            <div className="card_thumb">
              <Link to={`/Rank/${raid}`}>
                <img
                  width="320px"
                  height="235px"
                  src={`/Image/${raid}.jpg`}
                  className=""
                  alt="coucou"
                />
              </Link>
            </div>

            <section className="card_body">
              <div class="card_category">
                <p>{icon}</p>
              </div>
              <Link to={`/Rank/${raid}`}>
                <h1 className="card_title">{raid.replace(dash, ' ')}</h1>
              </Link>
              <h2 className="card_subtitle">Top 3 guilds :</h2>
              {ranking.map(guild => {
                return <p className="card_description">{guild.guild.name}</p>;
              })}
            </section>
          </StyledCardHome>
        </div>
      );
    }
  }
}

export default CardHome;
