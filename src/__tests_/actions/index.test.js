import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('park reducer actions', () => {
  it('requestBusinesses should create REQUEST_BUSINESSES action', () => {
    expect(actions.requestBusinesses()).toEqual({
      type: c.REQUEST_BUSINESSES
    });
  });

  it('getBusinessesSuccess should create GET_BUSINESSES_SUCCESS action', () => {
    const businesses = 'some business'
    expect(actions.getBusinessesSuccess(businesses)).toEqual({
      type: c.GET_BUSINESSES_SUCCESS,
      businesses
    });
  });

  it('getBusinessesFail should create GET_BUSINESSES_FAIL action', () => {
    const error = 'some error'
    expect(actions.getBusinessesFail(error)).toEqual({
      type: c.GET_BUSINESSES_FAIL,
      error
    })
  })
})