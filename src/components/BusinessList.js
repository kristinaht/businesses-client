import React from 'react';
import PropTypes from 'prop-types';
import Business from './Business';

function BusinessList(props) {
  return(
    <React.Fragment>
      <ul>
        {props.businessList.map((business, index) =>
          <li key={index}>
            <h2 key={index}>{business.name}</h2>
            <h3>{business.description}</h3>
          </li>
        )}
      </ul>
    </React.Fragment>
  )
}

export default BusinessList;