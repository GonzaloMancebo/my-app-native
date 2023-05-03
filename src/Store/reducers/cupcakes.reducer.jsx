import { ADD_CUPCAKE } from "../actions/cupcakes.action";
import { CUPCAKES_DATA } from "../../data/data";

const initialState = {
  cupcake: CUPCAKES_DATA,
  cupcakeList: [],
};

const cupcakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUPCAKE:
      return {
        ...state,
        cupcakeList: [...state.cupcakeList, action.cupcake],
      };
    default:
      return state;
  }
};

export default cupcakeReducer;
