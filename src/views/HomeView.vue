<script setup>
import { onMounted, onUnmounted, nextTick } from 'vue'
import { usePortfolio } from '../composables/usePortfolio'
import { initScrollAnimation, cleanupScrollAnimation } from '../composables/useScrollAnimation'

import Hero from '../components/hero/Hero.vue'
import About from '../components/about/About.vue'
import SelectedWork from '../components/projects/SelectedWork.vue'
import Experience from '../components/experience/Experience.vue'
import Education from '../components/education/Education.vue'
import Skills from '../components/skills/Skills.vue'
import Contact from '../components/contact/Contact.vue'

const { fetchAllData, isLoading } = usePortfolio()

onMounted(async () => {
  await fetchAllData()
  await nextTick()
  setTimeout(() => {
    initScrollAnimation()
  }, 150)
})

onUnmounted(() => {
  cleanupScrollAnimation()
})
</script>

<template>
  <div
    v-if="isLoading"
    class="min-h-screen flex flex-col items-center justify-center bg-[var(--color-bg-primary)]"
  >
    <div
      class="w-10 h-10 rounded-full border-2 border-[var(--color-border-subtle)] border-t-[var(--color-accent)] animate-spin mb-4"
    ></div>
    <div class="text-xs font-mono uppercase tracking-widest text-[var(--color-text-secondary)]">
      Loading Portfolio...
    </div>
  </div>

  <div v-else class="min-h-screen">
    <Hero />
    <About />
    <SelectedWork />
    <Experience />
    <Education />
    <Skills />
    <Contact />
  </div>
</template>
