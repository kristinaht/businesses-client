import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';

class BusinessControl extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const {error, isLoading, businesses } = this.props;
    if(error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>
    } else if(isLoading) {
      return <React.Fragment>Loading...</React.Fragment>
    } else {
      return(
      <React.Fragment>
        <h1>Businesses</h1>
        <ul>
          {businesses.map((business, index) =>
            <li key={index}>
              <h2 key={index}>{business.name}</h2>
              <h3>{business.description}</h3>
            </li>
          )}
        </ul>
      </React.Fragment>
    )}
  }
}

const mapStateToProps = state => {
  return {
    businesses: state.businesses,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(BusinessControl);
