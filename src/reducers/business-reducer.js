import * as c from './../actions/ActionTypes';

const defaultState= {
  isLoading: false,
  error: null,
  businesses: []
}

export default (state=defaultState, action) => {
  switch(action.type){
    case c.REQUEST_BUSINESSES:
      return Object.assign({}, state, {
        isLoading: true,
        error: null,
        businesses: []
      });
    case c.GET_BUSINESSES_SUCCESS:
      return Object.assign();
    default:
      return state;
  }
 
}