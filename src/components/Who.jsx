
import "./components.css";
import React from "react";

const Who = () => {
  return (
    <div className="herosection">
      
      <div className="belownavbar2">
        <div className="right">
         {/* 3d  model */}
        </div>
        <div className="left ">
          <h1> Think outside the square box</h1>
          <div className="myprof">
            <img className="height" src="./img/line.png" />
            <h2 className="myh2">Who we are</h2>
          </div>
          <div className="desc">
           I love coding
          </div>
          <button className="hirebutton">See my works</button>
        </div>
      </div>
    </div>
  );
};

export default Who;
