import * as c from './../actions/ActionTypes';

const initialState= {
  isLoading: false,
  error: null,
  businesses: []
}

export default (state=initialState, action) => {
  switch(action.type){
    case c.REQUEST_BUSINESSES:
      return Object.assign({}, state, {
        isLoading: true,
        error: null,
        businesses: []
      });
    case c.GET_BUSINESSES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        businesses: action.businesses
      });
    case c.GET_BUSINESSES_FAIL:
      return Object.assign({}, state, {
        // isLoading: false,
        // error: action.error,
        // businesses: []
      });
    default:
      return state;
  }
 
}