import { marsTexture } from '../utils/textures';
import * as THREE from 'three';

const geometry = new THREE.TorusGeometry(6, 2, 16, 100);
const material = new THREE.MeshStandardMaterial({
  map: marsTexture,
});

export const marsTorus = new THREE.Mesh(geometry, material);
