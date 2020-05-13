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

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestBusinesses);
    return fetch("http://localhost:5000/api/businesses")
      .then(response => response.json())
      .then((jsonifiedResponse) => {
        dispatch(getBusinessesSuccess(jsonifiedResponse));
      })
    .catch((error) => {
      dispatch(getBusinessesFail(error));
    });
  }
}