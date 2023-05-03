import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import coffeeReducer from "./reducers/coffee.reducer";
import cookieReducer from "./reducers/cookies.reducer";
import blendedReducer from "./reducers/blended.reducer";
import cupcakeReducer from "./reducers/cupcakes.reducer";
import toastedReducer from "./reducers/toasted.reducer";

const rootReducer = combineReducers({
  coffee: coffeeReducer,
  cookie: cookieReducer,
  blended: blendedReducer,
  cupcake: cupcakeReducer,
  toasted: toastedReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
