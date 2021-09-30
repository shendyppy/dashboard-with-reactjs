import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchTeams, fetchSearchedTeams } from "../store/teams/action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useDebouncing from "../hooks/useDebouncing";

import Error from "../components/Error";
import Chart from "../components/Chart";
import Table from "../components/Table";
import Loading from "../components/Loading";
import TeamCard from "../components/TeamCards";
import NoDataFound from "../components/NoDataFound";

function Dashboard({ search }) {
  const [teamName, setTeamName] = useState("");
  const [capacity, setCapacity] = useState(0);

  const dispatch = useDispatch();

  const debouncing = useDebouncing(search, 500);

  const { loading, teams, errors } = useSelector((state) => state.teams);

  useEffect(() => {
    if (!search) {
      dispatch(fetchTeams());
    } else {
      const searchParams = new URLSearchParams({ t: search });

      dispatch(fetchSearchedTeams(searchParams.toString()));
    }
  }, [dispatch, search, debouncing]);

  useEffect(() => {
    if (!teams) {
      return <NoDataFound />;
    } else {
      let teamsName = teams.map((team) => {
        return team.strTeam;
      });

      let totalCapacity = teams.map((team) => {
        return team.intStadiumCapacity;
      });

      setTeamName(teamsName);
      setCapacity(totalCapacity);
    }
  }, [teams]);

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
        <>
          <div className="container mx-auto text-center shadow-xl mt-10 mb-10">
            <div className="container mx-auto text-center">
              <h1
                className="text-3xl font-bold text-center"
                style={{
                  color: "#150050",
                }}
              >
                YOUR TEAM LIST
              </h1>
              <div className="container mx-auto text-center shadow-xl mt-10">
                <div
                  className="card"
                  style={{
                    backgroundColor: "white",
                    borderWidth: 2,
                    borderColor: "#FF5C58",
                  }}
                >
                  <div className="m-8">
                    <div
                      className="overflow-x-auto"
                      style={{ height: "750px" }}
                    >
                      <table
                        className="table-auto m-2"
                        style={{ minWidth: "99%" }}
                      >
                        <thead>
                          <tr>
                            <th
                              style={{
                                color: "#150050",
                                backgroundColor: "#FF5C58",
                                fontSize: 20,
                              }}
                            >
                              Team Name
                            </th>
                            <th
                              style={{
                                color: "#150050",
                                backgroundColor: "#FF5C58",
                                fontSize: 20,
                              }}
                            >
                              Stadium
                            </th>
                            <th
                              style={{
                                color: "#150050",
                                backgroundColor: "#FF5C58",
                                fontSize: 20,
                                padding: 10,
                              }}
                            >
                              Capacity
                            </th>
                          </tr>
                        </thead>
                        {teams.map((team) => {
                          return <Table team={team} />;
                        })}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto text-center shadow-xl mt-20 mb-10">
            <h1
              className="text-3xl font-bold text-center mt-20 mb-10"
              style={{
                color: "#150050",
              }}
            >
              YOUR TEAM STADIUM CAPACITY
            </h1>
            <Chart teamName={teamName} capacity={capacity} />
          </div>
          <div className="container mx-auto text-center shadow-xl mt-20 mb-10">
            <h1
              className="text-3xl font-bold text-center mt-20 mb-10"
              style={{
                color: "#150050",
              }}
            >
              YOUR TEAM INFORMATION
            </h1>
            <div
              className="card"
              style={{
                backgroundColor: "white",
                borderWidth: 2,
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
        </>
      )}
    </>
  );
}

export default Dashboard;
