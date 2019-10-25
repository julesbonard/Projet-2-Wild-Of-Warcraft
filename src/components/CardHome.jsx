import React from 'react';
import axios from 'axios';

import StyledCardHome from './StyleCardHome';
import '../Css/CardHome.scss';

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
    const { raid } = this.props;
    const { isError, ranking } = this.state;
    if (isError) {
      return <p>Error !</p>;
    } else {
      return (
        <StyledCardHome className="card">
          <div className="card_thumb">
            <a href="#">
              <img
                width="370px"
                height="235px"
                src={`/Image/${raid}.jpg`}
                className=""
                alt="coucou"
              />
            </a>
          </div>
          <section className="card_body">
            <div class="card_category">
              <a href="#">Photos</a>
            </div>
            <h1 className="card_title">{raid.replace(dash, ' ')}</h1>
            <h2 className="card_subtitle">3 best guilds :</h2>
            {ranking.map(guild => {
              return <p className="card_description">{guild.guild.name}</p>;
            })}
          </section>
        </StyledCardHome>
      );
    }
  }
}

export default CardHome;
