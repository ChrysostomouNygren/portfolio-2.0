import React from "react";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";

// fonten för logo:
// https://www.fontspace.com/aquire-font-f43735

function Header() {

  let navigate = useNavigate();
  const home = () => {
    navigate(`/`);
  };
  
  return (
    <header onClick={home}>
      <img
        src="https://see.fontimg.com/api/renderfont4/BW0ox/eyJyIjoiZnMiLCJoIjozOSwidyI6MTUwMCwiZnMiOjI2LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/S2F0ZXJpbmEg/aquire.png"
        alt="Katerina"
      />
      <div>
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
