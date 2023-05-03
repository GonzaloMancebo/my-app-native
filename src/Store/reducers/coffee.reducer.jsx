import {
  ADD_COFFEE,
  REMOVE_COFFEE,
  CONFIRM_CART,
  SET_ORDERS,
} from "../actions/coffee.action";
import { COFFEE_DATA } from "../../data/data";

const initialState = {
  coffee: COFFEE_DATA, 
  coffeeList: [],
  orders: [],
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COFFEE:
      return {
        ...state,
        coffeeList: [...state.coffeeList, action.coffee],
      };
    case REMOVE_COFFEE:
      const filteredItems = state.coffeeList.filter(
        (item) => item.id !== action.itemId
      );
      return {
        ...state,
        coffeeList: filteredItems,
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

export default coffeeReducer;
