import React from 'react';
import axios from 'axios';
import CardRank from '../components/CardRank';
import Navbar from '../components/Navbar';
class Rank extends React.Component {
  constructor(props) {
    console.log('Constructor');

    super(props);

    this.state = {
      guildName: '',
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
        //console.log (ranking, ranking.slice(0,10))
        this.setState({ roster: ranking.slice(0, 10), isLoading: false });
      });
  }

  render() {
    console.log('Render');

    return (
      <div>
        <CardRank />
        {this.state.isLoading && <div>Loading...</div>}
        <h1>{this.state.guildName}</h1>
        <div className="container row mx-auto">
          {this.state.roster.map((guild, i) => {
            console.log(i);

            return (
              <div className={`player col-6 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                {guild.rank}
                {guild.guild.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Rank;
