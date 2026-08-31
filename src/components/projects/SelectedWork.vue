<script setup>
import { computed } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { usePortfolio } from '../../composables/usePortfolio'

const { projects } = usePortfolio()

const selectedProjects = computed(() => {
  return projects.value.slice(0, 4) // Show up to 4 featured projects
})
</script>

<template>
  <section id="work" class="py-24 md:py-32">
    <div class="container mx-auto px-6 max-w-7xl">
      <h2 class="text-section-heading font-bold mb-16 scroll-reveal">Selected Work</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 scroll-stagger">
        <ProjectCard 
          v-for="project in selectedProjects" 
          :key="project.id" 
          :project="project" 
        />
      </div>
    </div>
  </section>
</template>
