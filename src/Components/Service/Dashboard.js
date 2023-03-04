import React, { useState, useEffect, useContext } from "react";
import { Bar } from "react-chartjs-2";
import userContext from "../../Context/userContext";
import Cookies from "js-cookie";

const Dashboard = () => {
  const context = useContext(userContext);
  const { user } = context;
  const [Details, setDetails] = useState([]);
  useEffect(() => {
    if (Details.length === 0) {
       calculateDetails();
    }
      Object.keys(Details).forEach(key => {
        const month = Details[key].Month;
        const totalRecords = Details[key].TotalRecords;
        console.log(Details[key])
        if(Details[key].Year===2023)
        records[month + 8] = totalRecords; 
        else
        records[month - 4] = totalRecords; // Set value in result array at the index corresponding to the month value
      });
      console.log(records)
      setChartData({
        labels: ["April 22", "May 22", "June 22", "July 22", "August 22","September 22","October 22","November 22","December 22","January 23","February 23","March 23"],
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Details]);
  var records = Array.from({length: 12}, () => 0); // Initialize array with 12 elements and set all values to zero
  const Token = JSON.parse(user).Token;
  const calculateDetails =async () =>{
    const requestOptions = {
        method: "POST",
        body: JSON.stringify({"FINCode":JSON.parse(localStorage.getItem("UserDetails")).FINCode}),
        headers: {
          Authorization: `Bearer ${Token}`,
          "Content-Type": "application/json",
        },
      };
      var response;

      if (
        JSON.parse(localStorage.getItem("UserDetails")).FINCode !== "ADMIN@123456"
      ) {
        response =await fetch(
          `http://localhost:3001/product/dashboard`,
          requestOptions
        )
        const result = await response.json();
        setDetails(result);
        
      }
        else {
          response =await fetch(
            `http://localhost:3001/product/dashboardall`,
            requestOptions
          )
          const result = await response.json();
          setDetails(result);
        }
       
  }
  
    
  
  const [chartData, setChartData] = useState({
    labels: ["April 22", "May 22", "June 22", "July 22", "August 22","September 22","October 22","November 22","December 22","January 23","February 23","March 23"],
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
    <div className="container">
      <Bar data={chartData} />
    </div>
  );
};

export default Dashboard;
