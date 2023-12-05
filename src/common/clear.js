//https://blog.csdn.net/m0_49083276/article/details/133743659
export default function clearScene(camera, scene, renderer) {
  try {
    scene.traverse((child) => {
      if (child.material) {
        child.material.dispose();
      }
      if (child.geometry) {
        child.geometry.dispose();
      }
      child = null;
    });
    // scene = null;

    // renderer.dispose();
    // renderer.forceContextLoss();
    // renderer.content = null;
    // // let gl = renderer.domElement.getContext("webgl");
    // // if (gl && gl.getExtension("WEBGL_lose_context")) {
    // //   gl.getExtension("WEBGL_lose_context").loseContext();
    // // }
    // renderer = null;
    // camera = null;
  } catch (e) {
    console.error("Failed to destroy threejs", e);
  }
}

function  clearSceneWW() {
    cancelAnimationFrame(this.animationId);
    this.scene.traverse((child) => {
      if (child.material) {
        child.material.dispose();
      }
      if (child.geometry) {
        child.geometry.dispose();
      }
      child = null;
    });
    this.sceneDomElement.innerHTML = '';
    this.renderer.forceContextLoss();
    this.renderer.dispose();
    this.scene.clear();
    this.flows = [];
    this.scene = null;
    this.camera = null;
    this.controls = null;
    this.renderer.domElement = null;
    this.renderer = null;
    this.sceneDomElement = null;
    console.log('clearScene');
  }
function clearGroup(group) {
  const clearCache = (item) => {
    item.geometry.dispose();
    item.material.dispose();
  };
  const removeObj = (obj) => {
    let arr = obj.children.filter((x) => !!x);
    arr.forEach((item) => {
      if (item.children.length) {
        removeObj(item);
      } else {
        clearCache(item);
        item.clear();
      }
    });
    obj.clear();
    arr = null;
  };
  removeObj(group);
}
