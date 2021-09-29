function Table() {
  return (
    <>
      <div className="container mx-auto text-center">
        <div className="container mx-auto text-center shadow-xl mt-10">
          <div
            className="card"
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#FF5C58",
            }}
          >
            <div className="m-8">
              <div className="overflow-x-auto" style={{ height: "750px" }}>
                <table className="table-auto m-2" style={{ minWidth: "99%" }}>
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
                        Description
                      </th>
                      <th
                        style={{
                          color: "#150050",
                          backgroundColor: "#FF5C58",
                          fontSize: 20,
                          padding: 10,
                        }}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  {/* {teams.map((team) => {
                    return ( */}
                  <tbody>
                    <tr>
                      <td
                        style={{
                          color: "#150050",
                          borderBottomColor: "#150050",
                          maxWidth: "100px",
                          borderWidth: 1,
                          borderColor: "#b4b4b4",
                          padding: 5,
                        }}
                        className="text-center"
                      >
                        Test
                      </td>
                      <td
                        style={{
                          color: "#150050",
                          borderBottomColor: "#150050",
                          maxWidth: "100px",
                          borderWidth: 1,
                          borderColor: "#b4b4b4",
                          padding: 5,
                        }}
                        className="text-center"
                      >
                        Test
                      </td>
                      <td
                        style={{
                          color: "#150050",
                          borderBottomColor: "#150050",
                          maxWidth: "400px",
                          borderWidth: 1,
                          borderColor: "#b4b4b4",
                          padding: 5,
                        }}
                        className="overflow truncate text-center"
                      >
                        Test
                      </td>
                      <td
                        style={{
                          color: "#150050",
                          borderBottomColor: "#150050",
                          maxWidth: "400px",
                          borderWidth: 1,
                          borderColor: "#b4b4b4",
                          padding: 5,
                        }}
                        className="my-auto"
                      >
                        <div className="grid grid-cols-3 ml-6">
                          <div className="text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-heart"
                              viewBox="0 0 16 16"
                            >
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                          </div>
                          <div className="text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-heart"
                              viewBox="0 0 16 16"
                            >
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                          </div>
                          <div className="text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-heart"
                              viewBox="0 0 16 16"
                            >
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  {/* ); */}
                  {/* })} */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
