import { ADD_TOASTED } from "../actions/toasted.action";
import { TOASTED_DATA } from "../../data/data";

const initialState = {
  toasted: TOASTED_DATA,
  toastedList: [],
};

const toastedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOASTED:
      return {
        ...state,
        toastedList: [...state.toastedList, action.toasted],
      };
    default:
      return state;
  }
};

export default toastedReducer;
