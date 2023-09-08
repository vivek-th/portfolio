import Navbar from "./Navbar";
import "./components.css";
import React from "react";

const Hero = () => {
  return (
    <div className="herosection">
      <div>
        <Navbar />
      </div>
      <div className="belownavbar">
        <div className="left ">
          <h1> Hey! I Am Vivek Thakur</h1>
          <div className="myprof">
            <img className="height" src="./img/line.png" />
            <h2>developer</h2>
          </div>
          <div className="desc">
            I am a final year student and i love coding
          </div>
          <button className="hirebutton">learn more</button>
        </div>
        <div className="right">
          <img className="moonimg" src="./img/moon.png"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
