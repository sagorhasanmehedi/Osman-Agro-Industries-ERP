import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    sale: 4000,
    purchase: 2400,
  },
  {
    name: "Feb",
    sale: 5000,
    purchase: 2300,
  },
  {
    name: "Mar",
    sale: 2000,
    purchase: 2800,
  },
  {
    name: "April",
    sale: 4000,
    purchase: 2400,
  },
  {
    name: "May",
    sale: 5000,
    purchase: 2300,
  },
  {
    name: "Jun",
    sale: 2000,
    purchase: 2800,
  },
  {
    name: "July",
    sale: 4000,
    purchase: 2400,
  },
  {
    name: "Aug",
    sale: 5000,
    purchase: 2300,
  },
  {
    name: "Sept",
    sale: 2000,
    purchase: 2800,
  },
  {
    name: "Oct",
    sale: 4000,
    purchase: 2400,
  },
  {
    name: "Nov",
    sale: 5000,
    purchase: 2300,
  },
  {
    name: "Dec",
    sale: 2000,
    purchase: 2800,
  },
];

const SalePurchaseChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sale" fill="#8884d8" />
        <Bar dataKey="purchase" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalePurchaseChart;
