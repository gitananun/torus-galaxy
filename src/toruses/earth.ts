import * as THREE from 'three';
import { earthTexture } from '../utils/textures';

const geometry = new THREE.TorusGeometry(28, 6, 16, 100);
const material = new THREE.MeshStandardMaterial({
  map: earthTexture,
});

export const earthTorus = new THREE.Mesh(geometry, material);
