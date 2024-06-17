import { Link } from "react-router-dom";
import React, { Component } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      {/* <div
        className="sidebar col-sm-2"
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      > */}
      <CDBSidebar
        style={{ minHeight: "100vh" }}
        textColor="#fff"
        backgroundColor="#333"
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Functions
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="home">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/training" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="sitemap">Train</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/testing" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="chart-bar">
                Evaluation
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="hdd">Backup</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="database">Logs</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter
          className="text-center "
          style={{ position: "fixed", bottom: "0" }}
        >
          <div style={{}}>&copy; TU Cluasthal 2022</div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </>
  );
};

export default Sidebar;
