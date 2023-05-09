import { useEffect, useState } from "react";
import axios from "axios";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const RechartsExample = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await axios.get(
      "https://yelpcamp-o6sr.onrender.com/api/line-chart-data"
    );
    setData(res.data);
  };
  if (!data) return <></>;
  return (
    <ResponsiveContainer height={300} width="95%">
      <LineChart margin={{ top: 25, right: 20, left: 20 }} data={data}>
        <Line
          type="monotone"
          dataKey="react"
          stroke="#E9A0A0"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="angular"
          stroke="#9BDD7C"
          strokeWidth={3}
        />
        <CartesianGrid stroke="#ccc" vertical={false} />
        <XAxis dataKey="name" axisLine={false} />
        <YAxis axisLine={false} />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RechartsExample;
