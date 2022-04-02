import { Scene } from './../../node_modules/@types/three/src/scenes/Scene.d';
import * as THREE from 'three';

const addStar = (scene: Scene) => {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide,
  });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill(undefined)
    .map(() => THREE.MathUtils.randFloatSpread(800));

  star.position.set(x, y, z);
  scene.add(star);
};

export const generateStars = (scene: Scene, count: number) => {
  Array(count)
    .fill(undefined)
    .forEach(() => addStar(scene));
};
