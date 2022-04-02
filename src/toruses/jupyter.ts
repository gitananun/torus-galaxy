import { jupyterTexture } from './../utils/textures';
import * as THREE from 'three';

const geometry = new THREE.TorusGeometry(142, 14, 16, 100);
const material = new THREE.MeshStandardMaterial({
  map: jupyterTexture,
});

export const jupyterTorus = new THREE.Mesh(geometry, material);
