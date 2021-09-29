import { SET_LOADING, SET_TEAMS, SET_ERROR } from "./actionType";

import nbaAPI from "../../apis/nbaAPI";
import searchingAPI from "../../apis/searchingAPI";

export function setLoading(payload) {
  return { type: SET_LOADING, payload };
}

export function setTeams(payload) {
  return { type: SET_TEAMS, payload };
}

export function setError(payload) {
  return { type: SET_ERROR, payload };
}

export function fetchTeams() {
  return async function (dispatch) {
    try {
      dispatch(setError(null));
      dispatch(setLoading(true));

      const response = await nbaAPI.get("");

      console.log(response);

      dispatch(setTeams(response.data.teams));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function fetchSearchedTeams(payload) {
  return async function (dispatch) {
    try {
      dispatch(setError(null));
      dispatch(setLoading(true));

      const response = await searchingAPI.get(`/searchteams.php?t=${payload}`);

      dispatch(setTeams(response.data.teams));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
}
