import React from 'react';
import axios from 'axios';
import '../Css/RaidRank.css';
import RaidRank from '../components/RaidRank';
import StyleRank from '../components/StyleRank';
import CardRank from '../components/CardRank';

class Rank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://raider.io/api/v1/raiding/raid-rankings?raid=${this.props.match.params.raid}&difficulty=mythic&region=world`
      )
      .then(response => {
        const ranking = response.data.raidRankings;
        this.setState({ roster: ranking.slice(0, 10), isLoading: false });
      });
  }

  render() {
    const dash = /-/g;
    return (
      <div>
        <CardRank />
        {this.state.isLoading && <div>Loading...</div>}
        <StyleRank src={`/Image/${this.props.match.params.raid}.jpg`} alt="coucou" />
        <h3 className="raider">{this.props.match.params.raid.replace(dash, ' ')}</h3>
        <div className="container row mx-auto">
          {this.state.roster.map((guild, i) => {
            return <RaidRank {...guild} i={i} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

export default Rank;
