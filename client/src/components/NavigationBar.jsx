import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
          <div className="flex-1 hidden px-2 mx-2 lg:flex">
            <Link to={"/"}>
              <span className="text-lg font-bold">Your NBA App</span>
            </Link>
          </div>
          <div className="flex-1 lg:flex-none">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-ghost"
              />
            </div>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex-none">
            <Link to={"/favorites"}>
              <button className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
