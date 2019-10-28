import React from 'react';

import CardHome from './CardHome';

import { Row } from 'reactstrap';

class WithRaids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      raids: ['uldir', 'the-eternal-palace', 'battle-of-dazaralor', 'crucible-of-storms'],
      icon: 1
    };
  }

  render() {
    return (
      <Row className="justify-content-between">
        {this.state.raids.map((raid, i) => {
          return <CardHome icon={i + this.state.icon} raid={raid} />;
        })}
      </Row>
    );
  }
}

export default WithRaids;
