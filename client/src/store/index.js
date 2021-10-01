import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import favoriteReducer from "./favorites/reducer";
import teamReducer from "./teams/reducer";

const store = createStore(
  combineReducers({
    favorites: favoriteReducer,
    teams: teamReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
