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
    default:
      return state;
  }
 
}