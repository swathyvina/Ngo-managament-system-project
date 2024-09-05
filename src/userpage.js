// src/UserPage.js
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Donate from "./Donate";
import NGO from "./NGO";
import Report from "./Report";
import Events from "./Events";
import Manage from "./Manage";
import "./UserPage.css";

const UserPage = () => {
  return (
    <div className="user-page">
      <div className="sidebar">
        <ul>
          <li><Link to="/profile">View Profile</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/ngo">NGO</Link></li>
          <li><Link to="/report">Report</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/manage">Manage</Link></li>
        </ul>
      </div>
      <div className="content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/ngo" element={<NGO />} />
          <Route path="/report" element={<Report />} />
          <Route path="/events" element={<Events />} />
          <Route path="/manage" element={<Manage />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserPage;
