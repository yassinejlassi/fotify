import axios from "axios";
import { GET_USERS, GET_PHOTO, FILTER, GET_USER } from "./actiontype";

export function filter(payload) {
  return {
    type: FILTER,
    payload
  };
}

export const getphotos = () => dispatch => {
  axios
    .get(`/users`)
    .then(res =>
      dispatch({
        type: GET_PHOTO,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getusers = () => dispatch => {
  dispatch({
    type: "Loading_USER"
  });
  axios
    .get(`/users`)
    .then(res =>
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getuser = id => dispatch => {
  axios
    .get(`/users/` + id)
    .then(res =>
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

//   export const editUser = userUpdated => dispatch => {
//     axios
//       .put(`/contact/${userUpdated.id}`, userUpdated)
//       .then(res => dispatch(getusers()))
//       .catch(err => console.log(err));
//   };
