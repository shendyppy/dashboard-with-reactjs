import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchTeamsByID } from "../store/teams/action";
import { ToastContainer } from "react-toastify";

import Error from "../components/Error";
import Loading from "../components/Loading";
import MapContent from "../components/MapContent";
import NoDataFound from "../components/NoDataFound";
import { useParams } from "react-router";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, teamDetail, errors } = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(fetchTeamsByID(id));
  }, []);

  if (errors) {
    return <Error />;
  }

  if (!teamDetail) {
    return <NoDataFound />;
  }

  return (
    <>
      {loading || !teamDetail[0] ? (
        <Loading />
      ) : (
        <div className="container mx-auto text-center shadow-xl mt-10 mb-10">
          <ToastContainer />
          <div
            class="flex items-center w-full px-4 py-10 bg-cover card bg-base-200"
            style={{
              "background-image": `url(${teamDetail[0].strStadiumThumb})`,
            }}
          >
            <div class="card glass lg:card-side text-neutral-content">
              <figure class="p-6">
                <img
                  src={teamDetail[0].strTeamBadge}
                  class="rounded-lg shadow-lg"
                />
                <div className="mt-5">
                  <p class="text-xl">{teamDetail[0].strStadium}</p>
                  <p class="text-xl">{teamDetail[0].strStadiumLocation}</p>
                  {teamDetail[0].intStadiumCapacity !== 0 ? (
                    <p class="text-xl">{teamDetail[0].intStadiumCapacity}</p>
                  ) : (
                    <p class="text-xl">No Further Information</p>
                  )}
                </div>
                <MapContent />
              </figure>
              <div class="max-w-md card-body">
                <h2 class="card-title">{teamDetail[0].strTeam}</h2>
                <p>{teamDetail[0].strDescriptionEN}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
