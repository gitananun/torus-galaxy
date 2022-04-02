import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.background = new THREE.Color(0x334756);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
camera.position.setZ(30);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
});

const torus = new THREE.Mesh(geometry, material);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);

pointLight.position.set(20, 20, 20);

scene.add(torus);
scene.add(pointLight, ambientLight);

const animate = () => {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  renderer.render(scene, camera);
};

animate();
