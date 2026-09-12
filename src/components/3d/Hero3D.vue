<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const containerRef = ref(null)
const canvasRef = ref(null)

let scene = null
let camera = null
let renderer = null
let animationFrameId = null
let mainMesh = null
let innerMesh = null
let wireframeMesh = null

// Mouse tracking with inertia
const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }

const handleMouseMove = (e) => {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
  const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
  mouse.targetX = x * 0.8
  mouse.targetY = y * 0.6
}

const handleResize = () => {
  if (!containerRef.value || !renderer || !camera) return
  const width = containerRef.value.clientWidth
  const height = containerRef.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

onMounted(() => {
  if (!containerRef.value || !canvasRef.value) return

  const width = containerRef.value.clientWidth
  const height = containerRef.value.clientHeight

  // Scene setup
  scene = new THREE.Scene()

  // Camera
  camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100)
  camera.position.set(0, 0, 4.8)

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.1

  // Lighting tailored to warm white #F7F7F5 and dark blue-gray #384E6F
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
  scene.add(ambientLight)

  const directionalLightTop = new THREE.DirectionalLight(0xffffff, 1.6)
  directionalLightTop.position.set(4, 6, 4)
  scene.add(directionalLightTop)

  // Dark blue-gray rim light matching palette #384E6F
  const rimLight = new THREE.DirectionalLight(0x384e6f, 2.2)
  rimLight.position.set(-5, -3, -2)
  scene.add(rimLight)

  const fillLight = new THREE.PointLight(0xd5dfeb, 1.2, 10)
  fillLight.position.set(2, -2, 3)
  scene.add(fillLight)

  // Geometries: Abstract multi-layered metallic/glass sculpture
  const group = new THREE.Group()
  scene.add(group)

  // 1. Outer Faceted Glass/Metallic Icosahedron
  const outerGeometry = new THREE.IcosahedronGeometry(1.3, 0)
  const outerMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xf3f5f8,
    metalness: 0.25,
    roughness: 0.1,
    transmission: 0.75,
    ior: 1.5,
    reflectivity: 0.8,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transparent: true,
    opacity: 0.92,
    flatShading: true,
  })
  mainMesh = new THREE.Mesh(outerGeometry, outerMaterial)
  group.add(mainMesh)

  // 2. Subtle wireframe overlay for tech/editorial precision
  const wireGeometry = new THREE.IcosahedronGeometry(1.305, 0)
  const wireMaterial = new THREE.MeshBasicMaterial({
    color: 0x384e6f,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  })
  wireframeMesh = new THREE.Mesh(wireGeometry, wireMaterial)
  group.add(wireframeMesh)

  // 3. Inner Dense Metallic Core (Dark blue-gray / platinum)
  const innerGeometry = new THREE.OctahedronGeometry(0.7, 0)
  const innerMaterial = new THREE.MeshStandardMaterial({
    color: 0x384e6f,
    metalness: 0.85,
    roughness: 0.2,
    flatShading: true,
  })
  innerMesh = new THREE.Mesh(innerGeometry, innerMaterial)
  group.add(innerMesh)

  // Render loop
  let clock = new THREE.Clock()

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)

    const elapsedTime = clock.getElapsedTime()

    // Smooth inertia mouse lerp
    mouse.x += (mouse.targetX - mouse.x) * 0.05
    mouse.y += (mouse.targetY - mouse.y) * 0.05

    // Idle floating rotation + responsive mouse tilt
    group.rotation.y = elapsedTime * 0.18 + mouse.x * 0.65
    group.rotation.x = Math.sin(elapsedTime * 0.15) * 0.15 + mouse.y * 0.45
    group.position.y = Math.sin(elapsedTime * 0.8) * 0.08

    // Internal core counter-rotation
    if (innerMesh) {
      innerMesh.rotation.y = -elapsedTime * 0.35
      innerMesh.rotation.z = Math.cos(elapsedTime * 0.25) * 0.2
    }

    renderer.render(scene, camera)
  }

  animate()

  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', handleResize)

  if (renderer) {
    renderer.dispose()
  }
})
</script>

<template>
  <div
    ref="containerRef"
    class="w-full h-full relative overflow-hidden pointer-events-none select-none"
  >
    <canvas ref="canvasRef" class="w-full h-full block"></canvas>
  </div>
</template>
