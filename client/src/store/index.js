import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import teamReducer from "./teams/reducer";

const store = createStore(
  combineReducers({
    teams: teamReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
