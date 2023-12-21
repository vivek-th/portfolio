import React, { useEffect } from 'react';
import * as THREE from 'three';

const Sphere = () => {
  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();

    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('sphere-container').appendChild(renderer.domElement);

    // Create sphere
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('portfolio\public\img\bg.jpeg'); // replace with your image path
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the sphere
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div id="sphere-container" className="herosection"/>;
};

export default Sphere;
