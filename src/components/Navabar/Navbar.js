import React from "react";
import "./Navbar.css";
import Troll from "../images/troll.png";
import Face from "../images/memeface.png";
const Navbar = () => {
  return (
    
      <div className="container">
        <div className="header">
          <img src={Troll} alt="" className="img1" />
          <h2>Meme Generator</h2>
        </div>
        <img src={Face} alt="" className="img2" />
      </div>
  
  );
};

export default Navbar;
