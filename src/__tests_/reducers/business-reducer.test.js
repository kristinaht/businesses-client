import businessReducer from './../../reducers/business-reducer';
import * as c from './../../actions/ActionTypes';

describe('businessReducer', () => {
  const defaultState = {
    isLoading: false,
    error: null,
    businesses: []
  }  
  test('should successfully return default state if no action is passed', () => {
    expect(businessReducer(defaultState, { type: null})).toEqual({
      isLoading: false,
      error: null,
      businesses: []
    })
});

})