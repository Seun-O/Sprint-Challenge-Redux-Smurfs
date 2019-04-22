/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_DATA_START,
  POST_DATA_START,
  DELETE_DATA_START,
  EDIT_DATA_START,
  FETCH_DATA_SUCCESS,
  POST_DATA_SUCCESS,
  DELETE_DATA_SUCCESS,
  UPDATE_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  POST_DATA_FAIL,
  DELETE_DATA_FAIL,
  UPDATE_DATA_FAIL,
  EDIT_DATA_STOP
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
  This will guard your namespacing issues.import { POST_DATA_FAIL } from '../actions/index';

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
    case POST_DATA_START:
      return {
        ...state,
        addingSmurf: true,
        error: ""
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
        error: ""
      };
    case POST_DATA_FAIL:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    case DELETE_DATA_START:
      return {
        ...state,
        deletingSmurf: true,
        error: ""
      };
    case DELETE_DATA_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload
      };
    case DELETE_DATA_FAIL:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      };
    case UPDATE_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error: ""
      };
    case UPDATE_DATA_FAIL:
      return {
        ...state,
        updatingSmurf: false,
        error: action.payload
      };
    case EDIT_DATA_START:
      return {
        ...state,
        updatingSmurf: true
      };
    case EDIT_DATA_STOP:
      return {
        ...state,
        updatingSmurf: false
      };
    default:
      return state;
  }
};

export default reducer;
