import { jupyterTorus } from './toruses/jupyter';
import { saturnTorus } from './toruses/saturn';
import { neptuneTorus } from './toruses/neptune';
import { marsTorus } from './toruses/mars';
import { mercuryTorus } from './toruses/mercury';
import { earthTorus } from './toruses/earth';
import { generateStars } from './utils/stars';
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { spaceTexture } from './utils/textures';
import { ambientLight, pointLight } from './utils/light';
import { venusTorus } from './toruses/venus';
import { uranusTorus } from './toruses/uranus';
import { sunTorus } from './toruses/sun';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
camera.position.setZ(30);

scene.background = spaceTexture;

document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

pointLight.position.set(0, 0, 0);
scene.add(pointLight, ambientLight);

const toruses = [
  mercuryTorus,
  marsTorus,
  venusTorus,
  earthTorus,
  neptuneTorus,
  uranusTorus,
  saturnTorus,
  jupyterTorus,
  sunTorus,
];

generateStars(scene, 2000);
scene.add(...toruses);

const animate = () => {
  requestAnimationFrame(animate);

  toruses.forEach((torus) => {
    torus.rotation.x += 0.001;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.001;
  });

  controls.update();

  renderer.render(scene, camera);
};

animate();
