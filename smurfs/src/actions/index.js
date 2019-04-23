import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const GET_SMURF = "GET_SMURF";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

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

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAIL, payload: err });
    });
};

export const POST_DATA_START = "POST_DATA_START";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FAIL = "POST_DATA_FAIL";

export const addSmurf = smurf => dispatch => {
  dispatch({ type: POST_DATA_START });
  axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then(res => {
      dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POST_DATA_FAIL, payload: err });
    });
};
export const DELETE_DATA_START = "DELETE_DATA_START";
export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";
export const DELETE_DATA_FAIL = "DELETE_DATA_FAIL";

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_DATA_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_DATA_FAIL, payload: err });
    });
};

export const UPDATE_DATA_START = "UPDATE_DATA_START";
export const UPDATE_DATA_SUCCESS = "UPDATE_DATA_SUCCESS";
export const UPDATE_DATA_FAIL = "UPDATE_DATA_FAIL";

export const updateSmurf = (id, smurf) => dispatch => {
  axios
    .put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res => {
      console.log("success");
      dispatch({ type: UPDATE_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_DATA_FAIL, payload: err });
    });
};

export const EDIT_DATA_START = "EDIT_DATA_START";
export const EDIT_DATA_STOP = "EDIT_DATA_STOP";

export const editStart = () => dispatch => {
  dispatch({ type: EDIT_DATA_START });
};
export const editStop = () => dispatch => {
  dispatch({ type: EDIT_DATA_STOP });
};
