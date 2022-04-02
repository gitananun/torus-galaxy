import { mercuryTexture } from './../utils/textures';
import * as THREE from 'three';

const geometry = new THREE.TorusGeometry(2, 1, 16, 100);
const material = new THREE.MeshStandardMaterial({
  map: mercuryTexture,
});

export const mercuryTorus = new THREE.Mesh(geometry, material);
