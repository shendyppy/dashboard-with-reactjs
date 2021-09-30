import React from "react";

import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TeamCard from "../components/TeamCards";
import NoDataFound from "../components/NoDataFound";

function Favorites() {
  const favorites = useSelector((state) => state.favorites.favorites);

  if (favorites.length === 0 || !favorites) {
    return <NoDataFound />;
  }

  return (
    <>
      <ToastContainer />

      <div className="container mx-auto text-center shadow-xl mt-10 mb-10">
        <h1
          className="text-3xl font-bold text-center mt-10 mb-10"
          style={{
            color: "#150050",
          }}
        >
          YOUR FAVORITE TEAMS
        </h1>
        <div
          className="card"
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#FF5C58",
          }}
        >
          <div className="grid grid-cols-3 ml-6 mr-6 mb-3 mt-3">
            {favorites.map((favorite) => {
              return <TeamCard favorite={favorite} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorites;
