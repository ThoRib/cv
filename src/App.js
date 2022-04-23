import React from "react";
import './style/App.css';
import './style/media-queries.css';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import SideBar from "./view/SideBar";
import Presentation from "./view/Presentation";
import Experience from "./view/Experience";
import Realisations from "./view/Realisations";
import Technologies from "./view/Technologies";
import Formations from "./view/Formations";
import Nav from "./view/Nav.js";

export default () => {
  return (
    <div className="global">
      <Nav />
      <div className="container">
        <SideBar />
        <Routes>
          <Route path="/" element={<Presentation />}></Route>
          <Route path="/experience-professionnel" element={<Experience />}></Route>
          <Route path="/realisations-web" element={<Realisations />}></Route>
          <Route path="/technologies-web" element={<Technologies />}></Route>
          <Route path="/formations" element={<Formations />}></Route>
        </Routes>
      </div>
    </div>
  );
}

