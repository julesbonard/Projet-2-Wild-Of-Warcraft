import React from 'react';
import '../Css/CardGuild.module.css';
import axios from 'axios';

class CardGuild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guildName: '',
      roster: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://raider.io/api/guilds/${this.props.region}/${this.props.realm}/${this.props.guild}/roster`
      )
      .then(response => {
        const roster = response.data.guildRoster.roster.filter(
          player => player.raidProgress.progress.mythic > 4
        );
        console.log(roster);

        this.setState({ roster: roster });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.roster.map(player => {
          return <p>{player.character.name}</p>;
        })}
      </div>
    );
  }
}

export default CardGuild;
