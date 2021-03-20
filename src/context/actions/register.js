import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../../constants/actionTypes/ActionTypes";
import axiosInstance from "../../helpers/axios";

export const register = ({
  username,
  firstname: first_name,
  surname: last_name,
  email,
  password,
}) => (dispatch) => {
  dispatch({ type: REGISTER_LOADING });
  axiosInstance
    .post("/auth/register", {
      username,
      first_name,
      last_name,
      email,
      password,
    })
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) =>
      dispatch({
        type: REGISTER_ERROR,
        payload: error.response.data,
      })
    );
};
