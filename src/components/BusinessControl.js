import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';
import BusinessList from './BusinessList';

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
        <BusinessList parkList={businesses} />
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
