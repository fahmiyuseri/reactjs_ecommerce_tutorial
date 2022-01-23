import {
  PRODUCT_SINGLE_FAIL,
  PRODUCT_SINGLE_REQUEST,
  PRODUCT_SINGLE_SUCCESS,
} from "../constant/productConstants";

export const productDetailReducer = (
  state = { loading: true, products: {} },
  action
) => {
  switch (action.type) {
    case PRODUCT_SINGLE_REQUEST:
      return { loading: true };
    case PRODUCT_SINGLE_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_SINGLE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
