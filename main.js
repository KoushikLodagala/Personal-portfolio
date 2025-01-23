import './style.css'
import * as THREE from 'three';
import { gsap } from 'gsap';

// Three.js Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Background Stars
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}
Array(200).fill().forEach(addStar);

// Torus
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0x646cff });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Background
const spaceTexture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/fireship-io/threejs-scroll-animation-demo/main/space.jpg');
scene.background = spaceTexture;

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  renderer.render(scene, camera);
}

// Handle Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Move camera on scroll
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}
document.body.onscroll = moveCamera;

animate();

// Content
document.querySelector('#app').innerHTML = `
  <nav>
    <div class="logo">Portfolio</div>
    <div class="nav-links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-content">
      <h1>Hi, I'm <span class="highlight">John Doe</span></h1>
      <p>A passionate Full Stack Developer based in New York, specializing in building exceptional digital experiences.</p>
      <div class="social-links">
        <a href="#"><i class="fab fa-github"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
    <div class="hero-image">
      <img src="https://via.placeholder.com/300" alt="Profile Picture">
    </div>
  </section>

  <section id="about" class="section">
    <h2>About Me</h2>
    <p>I'm a software developer with 5 years of experience in building web applications. I love creating elegant solutions to complex problems and am passionate about clean code and user experience.</p>
  </section>

  <section id="projects" class="section">
    <h2>Projects</h2>
    <div class="projects">
      <div class="project-card">
        <h3>E-commerce Platform</h3>
        <p>A full-stack e-commerce solution built with React and Node.js</p>
      </div>
      <div class="project-card">
        <h3>Task Management App</h3>
        <p>A productivity app built with Vue.js and Firebase</p>
      </div>
      <div class="project-card">
        <h3>Weather Dashboard</h3>
        <p>Real-time weather tracking app using Weather API</p>
      </div>
    </div>
  </section>

  <section id="skills" class="section">
    <h2>Skills</h2>
    <div class="skills">
      <span class="skill-tag">JavaScript</span>
      <span class="skill-tag">React</span>
      <span class="skill-tag">Node.js</span>
      <span class="skill-tag">Python</span>
      <span class="skill-tag">SQL</span>
      <span class="skill-tag">Git</span>
      <span class="skill-tag">Three.js</span>
      <span class="skill-tag">WebGL</span>
    </div>
  </section>

  <section id="contact" class="section">
    <h2>Contact</h2>
    <p>Feel free to reach out to me for collaborations or opportunities!</p>
    <div class="contact-info">
      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <span>john.doe@example.com</span>
      </div>
      <div class="contact-item">
        <i class="fas fa-phone"></i>
        <span>+1 234 567 890</span>
      </div>
    </div>
  </section>
`