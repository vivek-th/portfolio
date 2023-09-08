// import { ListCollectionsCursor } from "mongodb";
import "./components.css";
import React from "react";

const data=[
  "web dev",
  "Game dev",
  "Dsa and algo"
]

const Works = () => {
  return (
    <div className="herosection">
      <div className="belownavbar2">
        <div className="leftwork ">
          <list>
            {data.map((item)=>
              <li key={item}>{item} </li>
            )}
          </list>
          <div className="rightwork">{/* 3d  model */}</div>
        </div>
      </div>
    </div>
  );
};

export default Works;
