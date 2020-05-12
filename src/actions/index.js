import * as c from './ActionTypes';

export const requestBusinesses = () => ({
  type: c.REQUEST_BUSINESSES
})

export const getBusinessesSuccess = (businesses) => ({
  type: c.GET_BUSINESSES_SUCCESS,
  businesses
})

export const getBusinessesFail = (error) => ({
  type: c.GET_BUSINESSES_FAIL,
  error
})