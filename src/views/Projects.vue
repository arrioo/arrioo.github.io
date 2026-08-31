<template>
  <!-- PROJECTS -->
  <section class="min-h-screen px-6 py-32 lg:px-12 lg:py-48">
    <div class="container mx-auto">
      <h1 class="text-5xl md:text-7xl font-bold text-[#111111] mb-8">Projects</h1>
      <p class="text-lg md:text-xl text-[#111111] max-w-2xl leading-relaxed">
        Here are some of my recent projects. I'm proud of the work I've done and the problems I've
        solved.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import api from '../services/api'

const projects = ref([])
const isLoading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    projects.value = await api.getProjects()
  } catch (err) {
    error.value = 'Failed to fetch projects'
  } finally {
    isLoading.value = false
  }
})
</script>
