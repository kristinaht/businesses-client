import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';


function SearchForm(props) {


  function handleSearch(event) {  
    event.preventDefault();
    props.onSearchSubmission({
      name: event.target.name.value,
      description: event.target.description.value
    });
  }

  return(
    <React.Frabment>
      <Form onSubmit={handleSearch}>
        <Form.Group>
          <Form.Label>Business Name: </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Business Description: </Form.Label>
        </Form.Group>
        <Button type='submit'>Search Businesses</Button>
      </Form>
    </React.Frabment>
  )
}

SearchForm.propTypes = {
  onSearchSubmission: PropTypes.func
}

export default SearchForm;