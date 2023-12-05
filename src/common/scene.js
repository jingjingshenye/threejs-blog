import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import skyhdr from "../assets/img/sky2.hdr?url"
const scene = new THREE.Scene();

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper)

const dir = new THREE.Vector3( 1, 2, 0 );

//normalize the direction vector (convert to vector of length 1)
dir.normalize();

const origin = new THREE.Vector3( 0, 0, 0 );
const length = 1;
const hex = 0xffff00;

// const arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
// scene.add( arrowHelper );

export function setSceneEnvironment(){
    const hrdLoader = new RGBELoader();// hdr记录光线信息，相当于光源，更加真实
    hrdLoader.load(skyhdr, function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
        scene.environment = texture;
    });
    // scene.environment = new THREE.CubeTextureLoader().load([
    //     './assets/textures/skybox/px.jpg',
    //     './assets/textures/skybox/nx.jpg',
    //     './assets/textures/skybox/py.jpg',
    //     './assets/textures/skybox/ny.jpg',
    //     './assets/textures/skybox/pz.jpg',
    //     './assets/textures/skybox/nz.jpg',
    // ]);
    // scene.fog = new THREE.FogExp2(0x000000, 0.00025);

}
export default scene