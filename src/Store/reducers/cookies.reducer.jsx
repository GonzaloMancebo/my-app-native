import {
  ADD_COOKIE,
  REMOVE_COOKIE,
  CONFIRM_CART,
  SET_ORDERS,
} from "../actions/coffee.action";
import { COOKIES_DATA } from "../../data/data";

const initialState = {
  cookie: COOKIES_DATA, 
  cookieList: [],
  orders: [],
};

const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COOKIE:
      return {
        ...state,
        cookieList: [...state.cookieList, action.coffee],
      };
    case REMOVE_COOKIE:
      const filteredItems = state.cookieList.filter(
        (item) => item.id !== action.itemId
      );
      return {
        ...state,
        cookieList: filteredItems,
      };
    case CONFIRM_CART:
      return {
        ...state,
      };
    case SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    default:
      return state;
  }
};

export default cookieReducer;
