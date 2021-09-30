import { Bar } from "react-chartjs-2";

function Chart({ teamName, capacity }) {
  return (
    <>
      <div
        className="card shadow-xl"
        style={{
          backgroundColor: "white",
          borderWidth: 2,
          borderColor: "#f15447",
        }}
      >
        <Bar
          data={{
            labels: teamName,
            datasets: [
              {
                label: "Stadium Capacity",
                data: capacity,
                backgroundColor: ["#f15447"],
                borderColor: ["#f15447"],
                borderWidth: 2,
                options: {
                  scales: {
                    y: {
                      display: true,
                      beginAtZero: true,
                    },
                  },
                },
              },
            ],
          }}
          width={100}
          height={70}
          style={{ margin: "2%" }}
        />
      </div>
    </>
  );
}

export default Chart;
