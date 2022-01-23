import { USER_SIGN_FAIL, USER_SIGN_REQUEST } from "../constant/userConstants";
import { getError } from "../src/components/utils";

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGN_REQUEST, payload: { email, password } });
  try {
  } catch (error) {
    dispatch({ type: USER_SIGN_FAIL, payload: getError(error) });
  }
};
