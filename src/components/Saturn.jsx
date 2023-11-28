import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { scene } = useGLTF('/saturn.glb');

  // Log information for debugging
  console.log('Scene:', scene);

  return (
    <>
      {/* Check if the scene is defined in the GLTF model */}
      {scene && <primitive object={scene} />}
    </>
  );
}

useGLTF.preload('/saturn.glb');
