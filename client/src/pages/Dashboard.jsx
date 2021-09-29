import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams, fetchSearchedTeams } from "../store/teams/action";
import { ToastContainer } from "react-toastify";

import useDebouncing from "../hooks/useDebouncing";
import Loading from "../components/Loading";
import Error from "../components/Error";
import NoDataFound from "../components/NoDataFound";

function Dashboard(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

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

  const goToDetail = () => {
    history.push(`/detail/${id}`);
  };

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
            <div className="grid grid-cols-3 ml-6 mr-6 mb-3 mt-3">
              {teams.map((team) => {
                return (
                  <div
                    class="card text-center shadow-2xl m-3"
                    style={{ borderWidth: 1, borderColor: "#150050" }}
                  >
                    <figure class="px-10 pt-10">
                      <img src={team.strTeamBadge} class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">{team.strTeam}</h2>
                      <p class="truncate text-xl">{team.strDescriptionEN}</p>
                      <div class="justify-center card-actions">
                        <button
                          class="btn btn-outline btn-accent"
                          onClick={() => {
                            goToDetail(team.idTeam);
                          }}
                        >
                          More info
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
