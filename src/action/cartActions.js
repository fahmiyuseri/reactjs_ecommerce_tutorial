import Axios from "axios";

export const addToCart = (cart, product) => async (dispatch, getState) => {
  const existItem = cart.cartItems.find((x) => x._id === product._id);
  const quantity = existItem ? existItem.quantity + 1 : 1;
  const { data } = await Axios.get(`/api/products/${product._id}`);
  console.log(data);
  if (data.countStock < quantity) {
    window.alert("Sorry. Product is out of stock");
    return;
  }
  dispatch({
    type: "CART_ADD_ITEM",
    payload: { ...product, quantity: quantity },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const toogleShow = async (dispatch, getState) => {
  dispatch({
    type: "TOOGLE_SHOW",
    payload: { show: true },
  });
};
export const toogleClose = async (dispatch, getState) => {
  dispatch({
    type: "TOOGLE_SHOW",
    payload: { show: false },
  });
};
