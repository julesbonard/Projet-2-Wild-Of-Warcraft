import React from 'react';
import { Row, Col } from 'reactstrap';

import RaidProgress from './RaidProgress';

function Progress({ raids }) {
  const raidsArray = Object.entries(raids).map(([key, value]) => {
    return {
      name: key,
      ...value
    };
  });
  return (
    <Row>
      {raidsArray.map(raid => {
        return (
          <Col xs="12" sm="6" lg="4">
            <RaidProgress {...raid} />
          </Col>
        );
      })}
    </Row>
  );
}
export default Progress;
