const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.background = new THREE.Color(0x334756);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// create table
const table = new THREE.Mesh(
  new THREE.BoxGeometry(5, 0.1, 5),
  new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true })
);

const animate = () => {
  //   show the table component on the scene
  scene.add(table);
  //   update the camera position
  camera.position.x = 0;
  camera.position.y = 0;

  renderer.render(scene, camera);
};

animate();
