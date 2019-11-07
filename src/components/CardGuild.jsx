import React from 'react';
import { Row, Container } from 'reactstrap';
import '../Css/CardGuild.module.css';
import axios from 'axios';
import Player from './Player';
import MainLayout from './MainLayout';

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
      <MainLayout>
        <Container>
          <Row>
            <h2>{this.props.guild}</h2>
          </Row>
          <Row>
            {this.state.roster.map(player => {
              return <Player {...player} />;
            })}
          </Row>
        </Container>
      </MainLayout>
    );
  }
}

export default CardGuild;
