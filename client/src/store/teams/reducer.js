import {
  SET_LOADING,
  SET_TEAMS,
  SET_TEAM_DETAIL,
  SET_ERROR,
} from "./actionType";

const initialState = {
  teams: [],
  loading: true,
  errors: null,
  teamDetail: [],
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
    default:
      return state;
  }
};

export default reducer;
