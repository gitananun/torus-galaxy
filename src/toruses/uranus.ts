import { uranusTexture } from '../utils/textures';
import * as THREE from 'three';

const geometry = new THREE.TorusGeometry(72, 10, 16, 100);
const material = new THREE.MeshStandardMaterial({
  map: uranusTexture,
});

export const uranusTorus = new THREE.Mesh(geometry, material);
