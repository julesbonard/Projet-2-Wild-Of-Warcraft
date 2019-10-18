import React from 'react';
import { CardImg } from 'reactstrap';
import axios from 'axios';

import StyledCardHome from './StyleCardHome';
import '../Css/CardHome.css';

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
    const { raid, reverse } = this.props;
    const { isError, ranking } = this.state;
    if (isError) {
      return <p>Error !</p>;
    } else {
      return (
        <StyledCardHome
          className={`d-flex flex-column ${
            reverse ? 'flex-sm-row-reverse' : 'flex-sm-row'
          } text-center`}
        >
          <div className="col-lg-3">
            <CardImg
              src="https://via.placeholder.com/150"
              className="border border-dark rounded-lg"
              alt=""
              jsp
            />
          </div>
          <section className="col-lg-9">
            <h1>{raid}</h1>
            <h2>Small description of the raid</h2>
            {ranking.map(guild => {
              return <p>{guild.guild.name}</p>;
            })}
          </section>
        </StyledCardHome>
      );
    }
  }
}

export default CardHome;
