import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import * as THREE from 'three';
import { gsap } from 'gsap';

// Initialize Three.js scene after React mounts
function initThreeJS() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const canvas = document.querySelector('#bg');
  
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(30);

  // Add torus
  const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
  const torusMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x646cff,
    metalness: 0.7,
    roughness: 0.2,
  });
  const torus = new THREE.Mesh(torusGeometry, torusMaterial);
  scene.add(torus);

  // Add floating spheres
  const spheres = [];
  for (let i = 0; i < 5; i++) {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      metalness: 0.8,
      roughness: 0.2,
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(
      THREE.MathUtils.randFloatSpread(100),
      THREE.MathUtils.randFloatSpread(100),
      THREE.MathUtils.randFloatSpread(100)
    );
    spheres.push(sphere);
    scene.add(sphere);
  }

  // Lights
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(5, 5, 5);
  
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(0, 10, 5);
  
  scene.add(pointLight, ambientLight, directionalLight);

  // Stars
  function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0xffffff,
      emissive: 0x444444,
    });
    const star = new THREE.Mesh(geometry, material);
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
    star.position.set(x, y, z);
    scene.add(star);
  }
  Array(200).fill().forEach(addStar);

  // Mouse movement effect
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
  });

  // Scroll Animation
  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    camera.position.z = t * -0.01 + 30;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
  }
  document.body.onscroll = moveCamera;

  // Animation
  function animate() {
    requestAnimationFrame(animate);

    // Smooth camera movement
    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;
    camera.rotation.y += 0.05 * (targetX - camera.rotation.y);
    camera.rotation.x += 0.05 * (targetY - camera.rotation.x);

    // Rotate torus
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    // Animate spheres
    spheres.forEach((sphere, index) => {
      sphere.position.y += Math.sin(Date.now() * 0.001 + index) * 0.02;
      sphere.rotation.x += 0.02;
      sphere.rotation.z += 0.02;
    });

    renderer.render(scene, camera);
  }

  // Handle resize
  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', handleResize);

  // Add post-processing effects
  gsap.to(torus.rotation, {
    duration: 2,
    x: Math.PI * 2,
    repeat: -1,
    ease: "none"
  });

  animate();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Initialize Three.js after React has mounted
setTimeout(initThreeJS, 0);