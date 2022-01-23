import Axios from "axios";
import {
  USER_SIGN_FAIL,
  USER_SIGN_REQUEST,
  USER_SIGN_SUCCESS,
} from "../constant/userConstants";
import { getError } from "../components/utils";

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("api/users/signin", { email, password });
    dispatch({ type: USER_SIGN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({ type: USER_SIGN_FAIL, payload: getError(error) });
  }
};
