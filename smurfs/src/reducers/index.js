/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_DATA_START,
  FETCH_DATA_FAIL,
  FETCH_DATA_SUCCESS
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ""
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        smurfs: action.payload,
        fetchingSmurfs: false
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    default:
      return state;
  }
};

export default reducer;
