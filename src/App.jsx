import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Train from "./pages/train/Train";
import React, { Component } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Test from "./pages/test/Test";
import "./App.css";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
