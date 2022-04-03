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
  {
    torus: jupyterTorus,
    speed: 0.012,
  },
  {
    torus: saturnTorus,
    speed: 0.01,
  },
  {
    torus: neptuneTorus,
    speed: 0.002,
  },
  {
    torus: marsTorus,
    speed: 0.004,
  },
  {
    torus: mercuryTorus,
    speed: 0.002,
  },
  {
    torus: earthTorus,
    speed: 0.006,
  },
  {
    torus: venusTorus,
    speed: 0.001,
  },
  {
    torus: uranusTorus,
    speed: 0.008,
  },
  {
    torus: sunTorus,
    speed: 0.014,
  },
];

generateStars(scene, 2000);

scene.add(...toruses.map((torus) => torus.torus));

const animate = () => {
  requestAnimationFrame(animate);

  toruses.forEach((map) => {
    map.torus.rotation.x += map.speed;
    map.torus.rotation.y += map.speed;
    map.torus.rotation.z += map.speed;
  });

  controls.update();

  renderer.render(scene, camera);
};

animate();
