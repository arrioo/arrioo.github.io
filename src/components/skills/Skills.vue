<script setup>
import { usePortfolio } from '../../composables/usePortfolio'

const { skills } = usePortfolio()
</script>

<template>
  <section class="py-24 md:py-32 bg-white">
    <div class="container mx-auto px-6 max-w-7xl">
      <h2 class="text-section-heading font-bold mb-16 scroll-reveal">Skills</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 scroll-stagger">
        <div v-for="group in skills" :key="group.category" class="flex flex-col">
          <h3 class="text-xl font-bold font-['Geist'] text-[var(--color-text-primary)] mb-6 border-b border-[var(--color-border-subtle)] pb-4">
            {{ group.category }}
          </h3>
          <ul class="flex flex-col gap-3">
            <li 
              v-for="item in group.items" 
              :key="item"
              class="text-[var(--color-text-secondary)] font-medium"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
