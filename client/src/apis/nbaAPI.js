import axios from "axios";

const nbaAPI = axios.create({
  baseURL:
    "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA",
});

export default nbaAPI;
