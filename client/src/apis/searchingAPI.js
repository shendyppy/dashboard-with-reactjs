import axios from "axios";

const searchingAPI = axios.create({
  baseURL: "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=",
});

export default searchingAPI;
