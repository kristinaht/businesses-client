import businessReducer from './../../reducers/business-reducer';
import * as c from './../../actions/ActionTypes';

describe('businessReducer', () => {

  let action;

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

  test('requesting businesses should successfuly change isLoading to true', () => {
    action={
      type: c.REQUEST_BUSINESSES
    };
    expect(businessReducer(defaultState, action)).toEqual({
      isLoading: true,
      error: null,
      businesses: []
    })
  })

})