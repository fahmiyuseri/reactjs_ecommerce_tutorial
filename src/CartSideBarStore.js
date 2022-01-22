import { createContext, useReducer } from "react";
import logger from "use-reducer-logger";

export const Store = createContext();
const initialState = {
  show: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOOGLE_SHOW": {
      return { ...state, show: !action.payload };
    }

    default:
      return state;
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(logger(reducer), initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
