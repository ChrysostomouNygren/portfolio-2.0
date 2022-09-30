import React from "react";
import "../styles/header.css";

// fonten för logo:
// https://www.fontspace.com/aquire-font-f43735

function Header() {
  return (
    <header>
      <img
        src="https://see.fontimg.com/api/renderfont4/BW0ox/eyJyIjoiZnMiLCJoIjo5OCwidyI6MTUwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/S0NO/aquire.png"
        alt="KCN"
      />
      <div>
        <img
          src="https://see.fontimg.com/api/renderfont4/YzE0o/eyJyIjoiZnMiLCJoIjoxOCwidyI6MTUwMCwiZnMiOjEyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/S2F0ZXJpbmEg/aquire-light.png"
          alt="Katerina"
        />
        <img
          src="https://see.fontimg.com/api/renderfont4/YzE0o/eyJyIjoiZnMiLCJoIjoxOCwidyI6MTUwMCwiZnMiOjEyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/Q2hyeXNvc3RvbW91IA/aquire-light.png"
          alt="Chrysostomou"
        />
        <img
          src="https://see.fontimg.com/api/renderfont4/YzE0o/eyJyIjoiZnMiLCJoIjoxOCwidyI6MTUwMCwiZnMiOjEyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TnlncmVuIA/aquire-light.png"
          alt="Nygren"
        />
      </div>
    </header>
  );
}

export default Header;
