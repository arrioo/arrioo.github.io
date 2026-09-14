<script setup>
import { computed } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { usePortfolio } from '../../composables/usePortfolio'

const { projects } = usePortfolio()

const selectedProjects = computed(() => {
  return projects.value || []
})
</script>

<template>
  <section id="work" class="py-24 md:py-32 border-b border-[var(--color-border-subtle)]">
    <div class="container mx-auto px-6 max-w-7xl">
      <!-- Section Header -->
      <div
        class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[var(--color-border-subtle)] scroll-reveal"
      >
        <div>
          <div class="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] mb-2">
            04 / Featured Implementations
          </div>
          <h2 class="text-section-heading font-extrabold text-[var(--color-text-primary)]">
            Selected Work
          </h2>
        </div>
        <div class="text-sm text-[var(--color-text-secondary)] font-mono mt-2 md:mt-0">
          GovTech • Enterprise ERP • E-Commerce • EdTech
        </div>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 scroll-stagger">
        <ProjectCard
          v-for="project in selectedProjects.slice().reverse()"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
