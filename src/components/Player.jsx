import React from 'react';
import { Col, Card, CardTitle, CardBody, CardText } from 'reactstrap';

function Player(props) {
  return (
    <Col xs="3">
      <Card>
        <CardTitle>{props.character.name}</CardTitle>
        <CardBody>
          <CardText>iLv : {props.character.itemLevelTotal}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Player;
