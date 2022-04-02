import { sunTexture } from './../utils/textures';
import * as THREE from 'three';

const geometry = new THREE.TorusGeometry(186, 16, 16, 100);
const material = new THREE.MeshStandardMaterial({
  map: sunTexture,
});

export const sunTorus = new THREE.Mesh(geometry, material);
