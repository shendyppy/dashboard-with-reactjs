import { Bar } from "react-chartjs-2";

function Chart() {
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
            labels: ["Test"],
            datasets: [
              {
                label: "Jumlah laporan masuk",
                data: ["Test"],
                backgroundColor: ["#f15447"],
                borderColor: ["#f15447"],
                borderWidth: 1,
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
          height={30}
          style={{ margin: "2%" }}
        />
      </div>
    </>
  );
}

export default Chart;
