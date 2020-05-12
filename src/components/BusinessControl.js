import React from 'react';
import { connect } from 'react-redux';

class BusinessControl extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      error: null,
      isLoaded: false,
      businesses: []
    };
  }

  makeApiCall = () => {
    fetch()
      .then(response => response.json())
      .then((jsonifiedResponse) => {
        console.log(jsonifiedResponse);
        if(jsonifiedResponse.status === 200 & jsonifiedResponse.ok) {
          this.setState({
            isLoaded: true,
            parks: jsonifiedResponse.results
          })
        } else {
          return false;
        }
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error
        });
      })
  }

  componentDidMount() {
    this.makeApiCall();
  }

  render() {
    const {error, isLoaded, businesses } = this.state;
    if(error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>
    } else if(!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>
    } else {
      return(
        <React.Fragment>
          <h1>Business Control</h1>
          {businesses.map((business, index) =>
          <div key={index}>
            <h2>{business.name}</h2>
            <h3>{business.description}</h3>
          </div>)}
        </React.Fragment>
      )
    }
  }
}

export default BusinessControl;