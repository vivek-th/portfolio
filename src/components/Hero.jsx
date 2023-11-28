import Particles from "react-tsparticles";
import Navbar from "./Navbar";
import "./components.css";
import React from "react";
import Mymodel from "./mymodel";
import "./components.css";
import {useTypewriter, cursor} from 'react-simple-typewriter';





const Hero = () => {

  
    const [typeEffect]= useTypewriter({
      words:['Vivek Thakur' , 'Developer' ],
      loop:{},
      typeSpeed:100,
      deleteSpeed:40
    })
  

  return (
    <div className="herosection">
      <div>
        <Navbar />
      </div>
  
      <div className="container">
        <div className="left">
          <h1> Hey! I Am <span style={{color: '#da4ea2'}}>{typeEffect}</span>

          </h1>
          <div className="myprof">
            <img className="height" src="./img/line.png" alt="Line" />
            <h2>Buckle up, Earthling ! You've Landed on my <br/> 3D Celestial Corner 🚀👩‍🚀</h2>
          </div>
          <div className="desc">
          Final-year Btech CSE'24 student | Seeking job opportunities in Software Development & Web Development. Let's write stellar code together! 💫💻"
          </div>
          <button className="hirebutton">MY RESUME</button>
        </div>

        <Mymodel className="mymodel-container" />
      </div>
    </div>
  );
};

export default Hero;
