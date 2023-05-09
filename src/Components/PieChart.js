import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import axios from "axios";
function PieChart() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await axios.get(
      "https://yelpcamp-o6sr.onrender.com/api/pie-chart-data"
    );
    const UserData = res.data;
    setUserData({
      datasets: [
        {
          label: "Users Gained",
          data: UserData.map((data) => data.userGain),
          backgroundColor: ["#98D89E", "#EE8484", "#F7DC7D"],
          display: "flex",
          "justify-content": "between",
        },
      ],
    });
  };
  return (
    <div>
      <div style={{ width: 180 }}>{userData && <Pie data={userData} />}</div>
    </div>
  );
}

export default PieChart;
