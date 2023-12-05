import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import clearScene from "./clear";
import scene from "./scene";
import camera from "./camera";
import renderer from "./renderer";
import addObj from "./addObj";

function animate() {
  if (!renderer) {
    return;
  }
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function init(container) {
  // document.getElementById('app').appendChild(renderer.domElement);
  container.appendChild(renderer.domElement);

  animate();
}

function destroy() {
  clearScene(camera, scene, renderer)
}
// animate();
export { init, destroy };
