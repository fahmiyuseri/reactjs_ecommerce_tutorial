import { createContext, useReducer } from "react";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";

import logger from "use-reducer-logger";
import cartReducer from "./reducer/cartReducer";
import { productDetailReducer } from "./reducer/productDetailReducer";
import { productListReducer } from "./reducer/productListReducer";
import { userSigninReducer } from "./reducer/userReducers";
import { userRegisterReducer } from "./reducer/userRegisterReducer";

export const Store = createContext();

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
    paymentMethod: "PayPal",
    show: false,
  },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  cart: cartReducer,
  productList: productListReducer,
  productDetail: productDetailReducer,
  userRegister: userRegisterReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
// export function StoreProvider(props) {
//   const [state, dispatch] = useReducer(logger(reducer), initialState);
//   const value = { state, dispatch };
//   return <Store.Provider value={value}>{props.children}</Store.Provider>;

//}
