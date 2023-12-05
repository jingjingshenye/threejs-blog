import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TransformControls } from 'three/addons/controls/TransformControls.js';

import renderer from "./renderer";
import scene from "./scene";
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(-50, 100, 200);

camera.lookAt( scene.position );

camera.aspect = window.innerWidth / window.innerHeight;

const orbitControl = new OrbitControls(camera, renderer.domElement);
// orbitControl.minDistance = 5;
// orbitControl.maxDistance = 50;

const transformControl = new TransformControls(camera, renderer.domElement);

scene.add(transformControl);

scene.add(camera);

export default camera;
