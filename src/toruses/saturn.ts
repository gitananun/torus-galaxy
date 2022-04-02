import { saturnTexture } from './../utils/textures';
import * as THREE from 'three';

const geometry = new THREE.TorusGeometry(102, 12, 16, 100);
const material = new THREE.MeshStandardMaterial({
  map: saturnTexture,
});

export const saturnTorus = new THREE.Mesh(geometry, material);
