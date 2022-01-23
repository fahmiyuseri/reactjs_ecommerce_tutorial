import Axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_SINGLE_FAIL,
  PRODUCT_SINGLE_REQUEST,
  PRODUCT_SINGLE_SUCCESS,
} from "../constant/productConstants";

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const singleProduct = (slug) => async (dispatch) => {
  console.log(slug);

  dispatch({
    type: PRODUCT_SINGLE_REQUEST,
  });
  try {
    const result = await Axios.get(`/api/products/slug/${slug}`);
    console.log(result.data);
    dispatch({ type: PRODUCT_SINGLE_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: PRODUCT_SINGLE_FAIL, payload: error.message });
  }
};
