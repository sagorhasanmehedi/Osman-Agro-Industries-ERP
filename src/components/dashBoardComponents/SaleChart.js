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
    name: "Product Name",
    quantity: 50,
  },
  {
    name: "Product Name",
    quantity: 60,
  },
  {
    name: "Product Name",
    quantity: 70,
  },
  {
    name: "Product Name",
    quantity: 210,
  },
  {
    name: "Product Name",
    quantity: 10,
  },
  {
    name: "Product Name",
    quantity: 30,
  },
  {
    name: "Product Name",
    quantity: 45,
  },
  {
    name: "Product Name",
    quantity: 68,
  },
  {
    name: "Product Name",
    quantity: 90,
  },
  {
    name: "Product Name",
    quantity: 100,
  },
  {
    name: "Product Name",
    quantity: 11,
  },
];

const SaleChart = () => {
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
        <Bar dataKey="quantity" fill="#B5C7FF" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SaleChart;
