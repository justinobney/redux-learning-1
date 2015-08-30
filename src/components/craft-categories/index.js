// Connected component
import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class List extends Component {
  displayName = 'Craft Categories component'
  render() {
    return (
      <Row>
        <Col xs={12}>
          <h1>Craft Categories</h1>
        </Col>
      </Row>
    );
  }
}

export {List};
