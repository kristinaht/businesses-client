import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Business(props) {
  const { currentBusiness } = props;

  return(
    <Card>
      <Card.Body>
        <Card.Title>{currentBusiness.name}</Card.Title>
        <Card.Text>{currentBusiness.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Business;