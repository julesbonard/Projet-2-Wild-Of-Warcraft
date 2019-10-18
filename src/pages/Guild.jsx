import React from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';

class Guild extends React.Component {
  constructor(props) {
    console.log('Constructor');

    super(props);

    this.state = {
      guildName: 'Method',
      roster: [],
      isLoading: false
    };
  }

  componentDidMount() {
    console.log('Component Did Mount');
    this.setState({ isLoading: true });
    axios
      .get(
        'https://raider.io/api/v1/raiding/raid-rankings?raid=uldir&difficulty=mythic&region=world'
      )
      .then(response => {
        const ranking = response.data.raidRankings;
        this.setState({ roster: ranking, isLoading: false });
      });
  }

  render() {
    console.log('Render');

    return (
      <div>
        <Navbar />
        {this.state.isLoading && <div>Loading...</div>}
        <h1>{this.state.guildName}</h1>
        {this.state.roster.map(guild => {
          return (
            <div>
              {guild.rank}
              {guild.guild.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Guild;
