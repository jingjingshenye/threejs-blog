import * as THREE from "three";
import scene from "./scene";
import { Water } from "three/examples/jsm/objects/Water2";
// import { Water } from "three-stdlib"
import skyJpg from "../assets/img/sky.png?url";
import waterNormalMap0 from "../assets/img/Water_1_M_Normal.jpg?url";
import waterNormalMap1 from "../assets/img/Water_2_M_Normal.jpg?url";

import skyVideo from "../assets/video/skyVideo.mp4?url";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import groundModel from "../assets/model/treasure-island.glb?url";

function addLight() {
  const light = new THREE.DirectionalLight(0xffffff, 1);
  scene.add(light);
  light.position.set(1, 1, 1);
  // light.castShadow = true;
  // 

}

function addGround() {
  const loader = new GLTFLoader();
  loader.load(
    groundModel,
    function (gltf) {
      const mesh = gltf.scene;
      mesh.position.y = 5;
      // mesh.scale.set(100, 100, 100);
      scene.add(mesh);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
}
function addWater() {
  const waterGeometry = new THREE.CircleGeometry(300, 64);
  const water = new Water(waterGeometry, {
    textureWidth: 1024,
    textureHeight: 1024,
    color: 0xeeeeff,
    flowDirection: new THREE.Vector2(1, 1),
    scale: 4,
    reflectivity: 0.3,
    // 下面俩参数必须加，否则没有波纹
    // https://blog.csdn.net/qq_37766810/article/details/134017513
    normalMap0: new THREE.TextureLoader().load(waterNormalMap0, (texture) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    }),
    normalMap1: new THREE.TextureLoader().load(waterNormalMap1, (texture) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    }),
  });

  water.rotation.x = -Math.PI / 2;
  scene.add(water);
}
function addSphere() {
  const geometry = new THREE.SphereGeometry(500, 60, 60);
  const material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(skyJpg),
  });

  geometry.scale(1, 1, -1);
  const sphere = new THREE.Mesh(geometry, material);

  scene.add(sphere);
}

function addVideo() {
  const video = document.createElement("video");
  video.src = skyVideo;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.crossOrigin = "anonymous";
  video.autoplay = true;

  const geometry = new THREE.SphereGeometry(1000, 60, 60);
  const material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(skyJpg),
  });

  geometry.scale(1, 1, -1);
  const sphere = new THREE.Mesh(geometry, material);

  scene.add(sphere);

  console.log(sphere);
  window.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      material.map = new THREE.VideoTexture(video);
      material.needsUpdate = true;
    }
  });
}
function addPlane() {
  const planeGeometry = new THREE.PlaneGeometry(100, 100, 10, 10);
  const planeMaterial = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(skyJpg),
    transparent: false,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  scene.add(plane);
}
function addBox() {
  const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
  const box = new THREE.Mesh(
    boxGeometry,
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  );
  box.position.set(0, 20, 0);
  scene.add(box);
}

export default function addObj() {
  addBox();

  addSphere();

  //   addPlane();
  //   addVideo();

  addWater();

  console.log("add");
}

export { addBox, addSphere, addPlane, addVideo, addWater, addGround, addLight };
