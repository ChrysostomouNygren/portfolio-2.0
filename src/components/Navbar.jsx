import React from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();

  const home = () => {
    navigate(`/`);
  };
  const projects = () => {
    navigate(`/projects`);
  };
  const about = () => {
    navigate(`/about`);
  };

  return (
    <div className="navbar">
      <button onClick={home}>home</button>
      <button onClick={projects}>projects</button>
      <button onClick={about}>about</button>
    </div>
  );
}

export default Navbar;
