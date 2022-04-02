import { venusTexture } from './../utils/textures';
import * as THREE from 'three';

const geometry = new THREE.TorusGeometry(14, 4, 16, 100);
const material = new THREE.MeshStandardMaterial({
  map: venusTexture,
});

export const venusTorus = new THREE.Mesh(geometry, material);
