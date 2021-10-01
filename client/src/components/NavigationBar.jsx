import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavigationBar(props) {
  const setSearch = props.setSearch;
  const [input, setInput] = useState("");

  useEffect(() => {
    setSearch(input);
  }, [setSearch, input]);

  return (
    <>
      <div
        className="navbar mb-2 shadow-lg bg-neutral text-neutral-content"
        style={{ backgroundColor: "#150050" }}
      >
        <div className="container mx-auto">
          <div className="flex-1 hidden px-2 mx-2 lg:flex">
            <Link to={"/"} onClick={() => setInput("")}>
              <span className="text-2xl font-bold">Your NBA App</span>
            </Link>
          </div>
          <div className="flex-1 lg:flex-none">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                style={{ backgroundColor: "white" }}
                className="input input-ghost"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
            </div>
          </div>
          <div className="flex-none">
            <div className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex-none">
            <Link to={"/favorites"} onClick={() => setInput("")}>
              <button className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
