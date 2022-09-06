import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    date: "2-2-22",
    income: 700,
    expense: 1900,
  },
  {
    date: "2-3-22",
    income: 3900,
    expense: 100,
  },
  {
    date: "2-4-22",
    income: 3000,
    expense: 2000,
  },
  {
    date: "2-5-22",
    income: 2000,
    expense: 3700,
  },
  {
    date: "2-6-22",
    income: 1100,
    expense: 1800,
  },
  {
    date: "2-7-22",
    income: 3900,
    expense: 1200,
  },
  {
    date: "2-8-22",
    income: 1200,
    expense: 3300,
  },
  {
    date: "2-9-22",
    income: 4000,
    expense: 1000,
  },
];

const IncomeExpenseChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="income"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default IncomeExpenseChart;
