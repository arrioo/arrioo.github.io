<script setup>
import { ref, onMounted } from 'vue'
import Hero3D from '../3d/Hero3D.vue'
import { usePortfolio } from '../../composables/usePortfolio'

const { profile } = usePortfolio()

const prefersReducedMotion = ref(false)

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>

<template>
  <section class="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
    <!-- 3D Background -->
    <ClientOnly>
      <Hero3D v-if="!prefersReducedMotion" />
    </ClientOnly>

    <div class="container mx-auto px-6 max-w-7xl relative z-10 scroll-reveal">
      <div class="max-w-4xl">
        <h1 class="text-hero font-bold text-[var(--color-text-primary)] mb-6">
          <span
            class="block text-[var(--color-text-secondary)] text-lg md:text-2xl font-normal mb-2 tracking-wide"
          >
            {{ profile?.name || 'ARRIO' }}
          </span>
          {{ profile?.headline || 'Building digital experiences with code.' }}
        </h1>

        <p
          class="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mb-12 leading-relaxed"
        >
          {{ profile?.title || 'Software Engineer / Full Stack Developer' }}
        </p>

        <div class="flex flex-wrap items-center gap-6">
          <a
            href="#work"
            class="px-8 py-4 bg-[var(--color-text-primary)] text-white rounded-[var(--radius-xl)] font-medium hover:bg-gray-800 transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            class="text-[var(--color-text-primary)] font-medium hover:text-[var(--color-accent)] transition-colors"
          >
            Contact
          </a>
        </div>

        <div class="mt-12">
          <div class="flex items-center gap-4">
            <a
              v-for="social in profile?.social"
              :key="social.name"
              :href="social.url"
              class="p-3 rounded-full bg-gray-100 hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)] transition-all"
              :aria-label="social.name"
            >
              <!-- Simple icon mapping for now, would be better as actual icons -->
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  v-if="social.icon === 'github'"
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 8h-.01c-2.32.65-4.74-1.19-5.08-4-.48-3.28-8.09-2.31-10 0-1.76.84-3.05 2.65-3.05 4.45 0 3.75 3.34 5.8 6.44 7-1.02.35-2.14-.63-2.15-1.85v-.2c.01-1.45.94-2.67 2.15-3.02A4.74 4.74 0 0 1 10.5 4v.5c0 2.52 1.69 4.5 3.75 4.97-.53.2-1.12.31-1.75.31h-.05c-1.63 0-3.16-.63-4.31-1.75 1.59 3.24 6.03 4.32 9.54 3.68 3.29-1.24 4.98-4.42 4.98-7 0-.39-.04-.77-.11-1.12A7.7 7.7 0 0 0 24 6.05c0-2.5-1-4.82-2.81-6.55-1.44-1.37-3.52-2.08-5.59-2.08v0z"
                ></path>
                <path
                  v-else-if="social.icon === 'linkedin'"
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <circle v-else-if="social.icon === 'email'" cx="12" cy="12" r="10"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
