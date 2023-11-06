import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from "./brain.png"
import "./Logo.css";

const Logo = () => {
	return (
		<div className="na4 nt0">
	       <Tilt className="Tilt br2 shadow-2" style={{height:150, width: 150, scale: "0.6"}}>
      <div className="Tilt pa3"><img style={{paddingTop: "5px"}} alt="logo" src={brain}/> </div>
        </Tilt>
    
    </div>
	);
};

export default Logo;

