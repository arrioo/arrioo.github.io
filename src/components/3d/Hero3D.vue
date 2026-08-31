<script setup>
import { TresCanvas } from '@tresjs/core'
import { ref, watchEffect, onUnmounted } from 'vue'

const boxRef = ref(null)
const mouse = ref({ x: 0, y: 0 })

// Handle mouse movement for subtle rotation
const onMouseMove = (e) => {
  mouse.value = {
    x: (e.clientX / window.innerWidth) * 2 - 1,
    y: -(e.clientY / window.innerHeight) * 2 + 1
  }
}

window.addEventListener('mousemove', onMouseMove)

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
})

watchEffect(() => {
  if (boxRef.value) {
    // Interpolate towards mouse position
    boxRef.value.rotation.y += (mouse.value.x * 0.5 - boxRef.value.rotation.y) * 0.05
    boxRef.value.rotation.x += (-mouse.value.y * 0.5 - boxRef.value.rotation.x) * 0.05
  }
})
</script>

<template>
  <div class="absolute inset-0 z-0 pointer-events-none opacity-60">
    <TresCanvas alpha antialias :clearColor="'transparent'">
      <TresPerspectiveCamera :position="[0, 0, 5]" :fov="45" />
      <TresAmbientLight :intensity="0.5" />
      <TresDirectionalLight :position="[5, 5, 5]" :intensity="1" color="#ffffff" />
      <TresDirectionalLight :position="[-5, 5, -5]" :intensity="0.5" color="#635BFF" />
      
      <TresMesh ref="boxRef" :position="[1.5, 0, 0]">
        <!-- Icosahedron for an abstract crystal/glassy look -->
        <TresIcosahedronGeometry :args="[1.2, 0]" />
        <TresMeshPhysicalMaterial 
          color="#ffffff"
          :metalness="0.2"
          :roughness="0.1"
          :transmission="0.9"
          :thickness="0.5"
        />
      </TresMesh>
    </TresCanvas>
  </div>
</template>
