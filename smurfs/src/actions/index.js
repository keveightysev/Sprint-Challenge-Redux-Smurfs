import axios from 'axios';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const GET_START = "GET_START"
export const GET_SUCCESS = "GET_SUCCESS"
export const GET_FAILURE = "GET_FAILURE"

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_START })
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res)
      dispatch({ type: GET_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: GET_FAILURE, payload: err.message })
    })
}

export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_START })
  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ type: ADD_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ADD_FAILURE, payload: err.message })
    })
}