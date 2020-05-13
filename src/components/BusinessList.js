import React from 'react';

function BusinessList(props) {
  return(
    <React.Fragment>
      <ul>
        {businesses.map((business, index) =>
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