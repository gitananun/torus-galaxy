import { neptuneTexture } from './../utils/textures';
import * as THREE from 'three';

const geometry = new THREE.TorusGeometry(48, 8, 16, 100);
const material = new THREE.MeshStandardMaterial({
  map: neptuneTexture,
});

export const neptuneTorus = new THREE.Mesh(geometry, material);
