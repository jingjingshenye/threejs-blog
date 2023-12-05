<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { init, destroy } from "./common/init.js";
import {
  addBox,
  addSphere,
  addPlane,
  addVideo,
  addWater,
  addGround,
  addLight
} from "./common/addObj";
import { setSceneEnvironment } from "./common/scene.js"
const container = ref(null);

// addBox();
// addSphere();
addWater();

addGround();
addLight();
setSceneEnvironment();

onMounted(() => {
  console.log("mounted");
  init(container.value);
});
onUnmounted(() => {
  destroy();

  console.log("unmounted");
});
</script>

<template>
  <div class="container" ref="container"></div>
</template>

<style scoped></style>
