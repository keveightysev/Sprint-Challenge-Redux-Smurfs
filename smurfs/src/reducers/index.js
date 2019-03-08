import {
  GET_START,
  GET_SUCCESS,
  GET_FAILURE,
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
     default:
      return state
   }
 }

