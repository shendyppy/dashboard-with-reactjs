import { SET_FAVORITE } from "./actionType";

export function setFavorite(payload) {
  return { type: SET_FAVORITE, payload };
}