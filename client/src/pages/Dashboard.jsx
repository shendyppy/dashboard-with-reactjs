import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchTeams, fetchSearchedTeams } from "../store/teams/action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useDebouncing from "../hooks/useDebouncing";

import Error from "../components/Error";
import Loading from "../components/Loading";
import TeamCard from "../components/TeamCards";
import NoDataFound from "../components/NoDataFound";

function Dashboard(props) {
  const dispatch = useDispatch();

  const search = props.search;
  const debouncing = useDebouncing(search, 500);

  const { loading, teams, errors } = useSelector((state) => state.teams);

  useEffect(() => {
    if (!search) {
      dispatch(fetchTeams());
    } else {
      dispatch(fetchSearchedTeams(search));
    }
  }, [debouncing]);

  if (errors) {
    return <Error />;
  }

  if (!teams) {
    return <NoDataFound />;
  }

  return (
    <>
      <ToastContainer />
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto text-center shadow-xl mt-10 mb-10">
          <div
            className="card"
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#FF5C58",
            }}
          >
            <div className="grid grid-cols-4 ml-6 mr-6 mb-3 mt-3">
              {teams.map((team) => {
                return <TeamCard team={team} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
