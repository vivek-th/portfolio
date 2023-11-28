import Particles from "react-tsparticles";
import Navbar from "./Navbar";
import "./components.css";
import React from "react";
import Mymodel from "./mymodel";
import "./components.css";
import {useTypewriter, cursor} from 'react-simple-typewriter';
const Hero = () => {
  return (
    <div className="herosection">
      <div>
        <Navbar />
      </div>
  
      <div className="container">
        <div className="left">
          <h1> Hey! I Am Vivek Thakur</h1>
          <div className="myprof">
            <img className="height" src="./img/line.png" alt="Line" />
            <h2>developer</h2>
          </div>
          <div className="desc">
            I am a final year student and I love coding Tin Tin
          </div>
          <button className="hirebutton">Learn more</button>
        </div>

        <Mymodel className="mymodel-container" />
      </div>
    </div>
  );
};

export default Hero;
