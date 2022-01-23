import {
  USER_SIGN_FAIL,
  USER_SIGN_REQUEST,
  USER_SIGN_SIGNOUT,
  USER_SIGN_SUCCESS,
} from "../constant/userConstants";

export const userSigninReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_SIGN_REQUEST:
      return { ...state, loading: true };
    case USER_SIGN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_SIGN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_SIGN_SIGNOUT:
      return {};

    default:
      return state;
  }
};
