import React from 'react';
import '../Css/CardGuild.css';
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
        console.log(response);

        const roster = response.data.guildRoster.roster.filter(
          player => player.raidProgress.progress.mythic > 4
        );
        roster.splice(10);
        this.setState({ roster: roster });
      })
      .catch(err => console.log);
  }

  render() {
    return (
      <div>
        <h1>test</h1>
      </div>
    );
  }
}

export default CardGuild;
