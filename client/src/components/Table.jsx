function Table({ team }) {
  return (
    <>
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
            {team.strTeam}
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
            {team.strStadium}
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
            {team.intStadiumCapacity}
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default Table;
