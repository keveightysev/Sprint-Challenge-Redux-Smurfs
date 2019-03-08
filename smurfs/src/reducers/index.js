import {
  GET_START,
  GET_SUCCESS,
  GET_FAILURE,
  ADD_START,
  ADD_SUCCESS,
  ADD_FAILURE,
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_FAILURE
} from '../actions';


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

 export const reducer = (state = initialState, action) => {
   switch(action.type) {
     case GET_START:
      return {
        ...state,
        fetchingSmurfs: true,
      }
    case GET_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
      }
    case GET_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      }
    case ADD_START:
      return {
        ...state,
        addingSmurf: true
      }
    case ADD_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      }
    case ADD_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    case DELETE_START:
      return {
        ...state,
        deletingSmurf: true
      }
    case DELETE_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload
      }
    case DELETE_FAILURE:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      }
     default:
      return state
   }
 }

