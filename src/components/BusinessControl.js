import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';
import BusinessList from './BusinessList';
import SearchForm from './SearchForm';
import { Container, Button } from 'react-bootstrap';

class BusinessControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: false,
      searchDescription: null,
      searchName: null
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  onSearchSubmission = (searchObject) => {
    console.log('onSearchSubmission');
    const { name, description } = searchObject;
    let nameQuery = (name !== "") ? name: "";
    let descriptionQuery = (description !== "") ? description : "";
    this.setState({
      searched: false,
      searchDescription: descriptionQuery,
      searchName: nameQuery
    });
  }

  resetBusinessList = () => {
    this.setState({
      searched: false,
      searchDescription: null,
      searchName: null
    })
  }

  showButton = () => {
    return(this.state.searched) ? <Button onClick={this.resetBusinessList}>Show all businesses</Button> : null
  }

  render() {
    const {error, isLoading, businesses } = this.props;

    if(error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>
    } else if(isLoading) {
      return <React.Fragment>Loading...</React.Fragment>
    } else {
      let businessList;
      if(this.state.searchName !== null || this.state.searchDescription !== null) {
        businessList = businesses.filter((business) => {
          return business.name.indludes(this.state.searchName) && business.description.includes(this.state.searchDescription);
        });
      }else {
        businessList = businesses;
      }
      return(
      <Container>
        <h1>Businesses</h1>
        <BusinessList businessList={businessList} />
        <SearchForm onSearchSubmission={this.onSearchSubmission} />
        {this.showButton()}
      </Container>
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
