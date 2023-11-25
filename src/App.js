import React, { useEffect } from "react";
import "./App.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  LineChart,
  Line,
} from "recharts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
}, [])

  const data = [
    { name: "Facebook", users: 2000000000, impressions: 5000000000 },
    { name: "Instagram", users: 1500000000, impressions: 4500000000 },
    { name: "Twitter", users: 1000000000, impressions: 3000000000 },
    { name: "Telegram", users: 3000000000, impressions: 2000000000 },
  ];

  return (
<>
<div className="maindiv">

<div className="container">
  <div className="row">
    <div className="col-lg-12">

    
    <Navbar/>
    <div style={{ textAlign: "center" }}>
      <h3 className="textclass" data-aos="zoom-in-up">Social Media Users and Impressions</h3>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie 
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone"  dataKey="users" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>

    <section>
      <Main/>
    </section>
    <Footer/>
    </div>
    </div>
  </div>
</div>
    </>
  );
};

export default App;
