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
        <div className="left">hey</div>
      </div>
    </div>
  );
};

export default Box;
