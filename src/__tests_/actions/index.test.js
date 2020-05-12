import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('park reducer actions', () => {
  it('requestBusinesses should create REQUEST_BUSINESSES action', () => {
    expect(actions.requestBusinesses()).toEqual({
      type: c.REQUEST_BUSINESSES
    });
  });

  it('getBusinessesSuccess should create GET_BUSINESSES_SUCCESS action', () => {
    expect(actions.getBusinessesSuccess()).toEqual({
      type: c.GET_BUSINESSES_SUCCESS
    });
  });

  it('getBusinessesFail should create GET_BUSINESSES_FAIL action', () => {
    expect(actions.getBusinessesFail()).toEqual({
      type: c.GET_BUSINESSES_FAIL
    })
  })
})