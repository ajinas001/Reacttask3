import React, { useState, useEffect } from "react";
import axios from "axios";
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data.slice(0, 5));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="headertitle" data-aos="fade-up">Bar Chart with API Mock Data</h1>
      <BarChart
        width={400}
        height={280}
        data={data}
        padding={{ left: 10, right: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="userId" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Main;
