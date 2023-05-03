import { ADD_BLENDED } from "../actions/blended.action";
import { BLENDED_DATA } from "../../data/data";

const initialState = {
  blended: BLENDED_DATA,
  blendedList: [],
};

const blendedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLENDED:
      return {
        ...state,
        blendedList: [...state.blendedList, action.blended],
      };
    default:
      return state;
  }
};

export default blendedReducer;
