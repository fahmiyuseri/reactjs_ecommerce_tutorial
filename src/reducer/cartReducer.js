const cartReducer = (
  state = { loading: true, cartItems: [], show: false },
  action
) => {
  switch (action.type) {
    case "TOOGLE_SHOW": {
      console.log(action.payload.show);
      return { ...state, show: action.payload.show };
    }
    case "TOOGLE_CLOSE": {
      console.log(action.payload.show);
      return { ...state, show: true };
    }
    case "CART_ADD_ITEM": {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x._id === existItem._id ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    }

    //add to cart
    // case "CART_ADD_ITEM":
    //   // add to cart
    //   return {
    //     ...state,
    //     cart: {
    //       ...state.cart,
    //       cartItems: [...state.cart.cartItems, action.payload],
    //     },
    //   };
    case "CART_REMOVE_ITEM": {
      //remove item cart

      const curItem = action.payload;
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== curItem._id
      );
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      return { ...state, cart: { ...state.cartItems, cartItems } };
    }
    default:
      return state;
  }
};
export default cartReducer;
