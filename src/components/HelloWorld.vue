<script setup>
import { ref } from 'vue'
import Three from 'three'

const scene = new Three.Scene()


</script>

<template>
  <canvas id="" width="400" height="400"></canvas>
</template>

<style scoped>
canvas {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px #ccc;
}
</style>