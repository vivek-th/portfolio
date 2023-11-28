// import React from 'react'
// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import Saturn from './Saturn'

// export default function Mymodel() {
//   return (
//     // <Canvas className='herosection'>
//         <Canvas>
//         <Saturn/>
//         <OrbitControls enableZoom={false}></OrbitControls>
//         <ambientLight intensity={0.6}/>
//     </Canvas>
//   )
// }



// import React from 'react'
// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import Saturn from './Saturn'

// export default function Mymodel() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 20] }} // Set the desired position of the camera
      
//     >
//       <Saturn />
//       <OrbitControls enableZoom={false} autoRotate={true} />
//       <ambientLight intensity={1} />
//     </Canvas>
//   )
// }

import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Saturn from './Saturn'
import "./components.css";

export default function Mymodel() {
  return (
    <div className="mymodel-container">
      <Canvas
        camera={{ position: [0, 0, 28] }} // Set the desired position of the camera
      >
        <Saturn />
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={1} />
      </Canvas>
    </div>
  )
}

