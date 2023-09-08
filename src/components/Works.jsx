// import { ListCollectionsCursor } from "mongodb";
import "./components.css";
import React from "react";

const data = ["web dev", "Game dev", "Dsa and allgo"];

const Works = () => {
  return (
    <div className="herosection">
      <div className="belownavbar3">
        <div className="leftwork ">
          <div className="worklist">
            {data.map((item) => (
              <li className="workli" key={item} test={item}>{item} </li>
            ))}
          </div>
        </div>
        <div className="rightwork">{/* 3d  model */}</div>
      </div>
    </div>
  );
};

export default Works;
