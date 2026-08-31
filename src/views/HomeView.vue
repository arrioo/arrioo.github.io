<script setup>
import { onMounted } from 'vue'
import { usePortfolio } from '../composables/usePortfolio'
import { useScrollAnimation } from '../composables/useScrollAnimation'

import Hero from '../components/hero/Hero.vue'
import SelectedWork from '../components/projects/SelectedWork.vue'
import About from '../components/about/About.vue'
import Experience from '../components/experience/Experience.vue'
import Skills from '../components/skills/Skills.vue'
import Contact from '../components/contact/Contact.vue'

const { fetchAllData, isLoading } = usePortfolio()

onMounted(async () => {
  await fetchAllData()
  // Give DOM a tick to render before initializing scroll animations
  setTimeout(() => {
    useScrollAnimation()
  }, 100)
})
</script>

<template>
  <div v-if="isLoading" class="min-h-screen flex items-center justify-center bg-[var(--color-bg-primary)]">
    <div class="w-8 h-8 rounded-full border-2 border-[var(--color-border-subtle)] border-t-[var(--color-text-primary)] animate-spin"></div>
  </div>
  
  <div v-else>
    <Hero />
    <SelectedWork />
    <About />
    <Experience />
    <Skills />
    <Contact />
  </div>
</template>
