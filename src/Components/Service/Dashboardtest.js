import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./styles.css";

const data = [
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page E",
    uv: 1890,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
  {
    name: "Page H",
    uv: 3490,
  },
  {
    name: "Page I",
    uv: 3490,
  },
  {
    name: "Page J",
    uv: 3490,
  },
  {
    name: "Page L",
    uv: 3490,
  },
  {
    name: "Page M",
    uv: 3490,
  },
];

const Dashboardtest = () => {
  return (
    <div>
      <p className="heading">Recharts basic demo</p>
      <BarChart
        width={1200}
        height={500}
        data={data}
        title="Lead Details"
        margin={{
          top: 35,
          right: 100,
          left: 150,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#0d6efd" />
      </BarChart>
    </div>
  );
};

export default Dashboardtest;
