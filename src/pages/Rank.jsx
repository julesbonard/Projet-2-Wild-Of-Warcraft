import React from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import RaidRank from '../components/RaidRank';

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
    return (
      <div>
        <Navbar />
        {this.state.isLoading && <div>Loading...</div>}
        <h1>{this.props.match.params.raid}</h1>
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
