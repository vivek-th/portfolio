import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
  Text3D,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Box = () => {
  return (
    <div className="herosection">
      <div className="container">
        
        <div className="mymodel-container2">
          <div className="picturebox">
            <Canvas className="picturebox">
              <OrbitControls enableZoom={false} autoRotate />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <mesh>
                <boxGeometry args={[3,3,3]} />
                <meshStandardMaterial>
                  <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 2]} />
                    <color attach="background" args={["pink"]} />
                    <Text fontSize={1} color="#555">
                      hello
                    </Text>
                  </RenderTexture>
                </meshStandardMaterial>
              </mesh>
            </Canvas>
          </div>
        </div>
        <div className="left2">
          <h1 style={{color:'#da4ea2'}}>About me</h1>
          <h3 className="description">
        <div>👨‍💻 Greetings! Welcome to my 3D portfolio made using Three.js.</div>
        <div>😎 I'm <span style={{color:'#da4ea2'}} >Vivek Thakur</span> , a final-year Btech'CSE24 coding enthusiast.</div>  
        <div>🚀 Mastering the art of C/C++, HTML, CSS, Bootstrap, and the symphony of MongoDB, Express, React.js. </div>
        <div>🎮 Explored creativity in game development using C# in Unity Game-Engine.</div> 
        <div>🛠️Toolbox: VS Code, Git/GitHub, Adobe Premiere Pro and wonders with Canva. </div>  
        <div>💡 Infusing passion into websites and games, turning pixels into poetry.</div>
        <div>🎨And yes, I like dancing and painting too.</div>
        <div>🌐 Check out my coding adventures on GitHub:<a href="https://github.com/vivek-th" style={{color:'#da4ea2'}}> https://github.com/vivek-th</a>.</div> 
        <div> ✉️ Let's connect! Drop me a line at <a href="vivekthakuruspc@gmail.com" style={{color:'#da4ea2'}}>vivekthakuruspc@gmail.com</a>.</div>
        <div>💻 Ready to collaborate on exciting projects. Let's script something amazing! ✨ </div>      
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Box;



