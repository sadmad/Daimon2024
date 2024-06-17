import React from "react";
import {
  CDBBtn,
  CDBProgress,
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
  CDBContainer,
  CDBLink } from "cdbreact";
import { Pie, Bar } from "react-chartjs-2";


const Dashboard = () => {

  const data = {
    chart1:{
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
      ],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: [
            "#F2C94C",
            "#2F80ED",
            "#9B51E0",
          ],
          borderWidth: 0,
          data: [9, 22, 7],
        },
      ]
    },
    chart2:{
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running",
      ],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(255, 153, 51, 0.8)",
          borderColor: "rgb(102, 51, 0)",
          data: [65, 59, 75, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          backgroundColor: "#2F80ED",
          borderColor: "rgb(0, 41, 102)",
          data: [38, 48, 60, 79, 96, 47, 80],
        },
      ]
    }
  }

  return ( 

	<div><>Dashboard</></div>


	
  );
}

export default Dashboard;