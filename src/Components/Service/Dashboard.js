import React, { useState, useEffect, useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import userContext from "../../Context/userContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const context = useContext(userContext);
  const { user } = context;
  const [Details, setDetails] = useState([]);
  const currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  if (currentMonth <= 3) currentYear = currentYear - 1;
  useEffect(() => {
    if (Details.length === 0) {
      calculateDetails();
    }
    Object.keys(Details).forEach((key) => {
      const month = Details[key].Month;
      const totalRecords = Details[key].TotalRecords;
      if (Details[key].Year === currentYear + 1)
        records[month + 8] = totalRecords;
      else records[month - 4] = totalRecords; // Set value in result array at the index corresponding to the month value
    });
    setChartData({
      labels: [
        `Apr ${currentYear}`,
        `May ${currentYear}`,
        `Jun ${currentYear}`,
        `Jul ${currentYear}`,
        `Aug ${currentYear}`,
        `Sep ${currentYear}`,
        `Oct ${currentYear}`,
        `Nov ${currentYear}`,
        `Dec ${currentYear}`,
        `Jan ${currentYear + 1}`,
        `Feb ${currentYear + 1}`,
        `Mar ${currentYear + 1}`,
      ],
      datasets: [
        {
          label: "Leads Generated",
          data: records,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Details]);
  var records = Array.from({ length: 12 }, () => 0); // Initialize array with 12 elements and set all values to zero
  const Token = JSON.parse(user).token.Token;
  const calculateDetails = async () => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        FINCode: JSON.parse(localStorage.getItem("UserDetails")).FINCode,
      }),
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    };
    var response;

    if (
      JSON.parse(localStorage.getItem("UserDetails")).FINCode !==
      process.env.REACT_APP_ADMIN_USERNAME
    ) {
      response = await fetch(
        `http://localhost:3001/product/dashboard`,
        requestOptions
      );
      const result = await response.json();
      setDetails(result);
    } else {
      response = await fetch(
        `http://localhost:3001/product/dashboardall`,
        requestOptions
      );
      const result = await response.json();
      setDetails(result);
    }
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        // text: "Chart.js Bar Chart",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        type: "category", // explicitly specify category axis
        labels: [
          `Apr ${currentYear}`,
          `May ${currentYear}`,
          `Jun ${currentYear}`,
          `Jul ${currentYear}`,
          `Aug ${currentYear}`,
          `Sep ${currentYear}`,
          `Oct ${currentYear}`,
          `Nov ${currentYear}`,
          `Dec ${currentYear}`,
          `Jan ${currentYear + 1}`,
          `Feb ${currentYear + 1}`,
          `Mar ${currentYear + 1}`,
        ],
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  };
  const [chartData, setChartData] = useState({
    labels: [
      `Apr ${currentYear}`,
      `May ${currentYear}`,
      `Jun ${currentYear}`,
      `Jul ${currentYear}`,
      `Aug ${currentYear}`,
      `Sep ${currentYear}`,
      `Oct ${currentYear}`,
      `Nov ${currentYear}`,
      `Dec ${currentYear}`,
      `Jan ${currentYear + 1}`,
      `Feb ${currentYear + 1}`,
      `Mar ${currentYear + 1}`,
    ],
    datasets: [
      {
        label: "LeadRequests",
        data: records,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="card">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Dashboard;
