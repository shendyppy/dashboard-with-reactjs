import { SET_FAVORITE } from "./actionType";

const initialState = {
  favorites: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_FAVORITE:
      return { ...state, favorites: [...state.favorites, payload] };
    default:
      return state;
  }
};

export default reducer;