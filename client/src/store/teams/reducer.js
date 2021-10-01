import {
  SET_LOADING,
  SET_TEAMS,
  SET_TEAM_DETAIL,
  SET_ERROR,
  SET_LENGTH,
} from "./actionType";

const initialState = {
  teams: [],
  loading: true,
  errors: null,
  teamDetail: [],
  length: 0,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TEAMS:
      return { ...state, teams: payload };
    case SET_TEAM_DETAIL:
      return { ...state, teamDetail: payload };
    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_ERROR:
      return { ...state, errors: payload };
    case SET_LENGTH:
      return { ...state, length: payload };
    default:
      return state;
  }
};

export default reducer;
