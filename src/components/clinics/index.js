// Connected component
import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class List extends Component {
  displayName = 'Clinics component'
  render() {
    return (
      <Row>
        <Col xs={12}>
          <h1>Clinics</h1>
        </Col>
      </Row>
    );
  }
}

export {List};
