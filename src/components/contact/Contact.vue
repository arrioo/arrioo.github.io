<script setup>
import { usePortfolio } from '../../composables/usePortfolio'

const { profile } = usePortfolio()
</script>

<template>
  <section id="contact" class="py-32 md:py-48">
    <div class="container mx-auto px-6 max-w-7xl text-center scroll-reveal">
      <div class="max-w-3xl mx-auto flex flex-col items-center">
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold font-['Geist'] text-[var(--color-text-primary)] mb-6 tracking-tight">
          Have a project in mind?
        </h2>
        
        <p class="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-12 font-light">
          Let's build something meaningful.
        </p>
        
        <a 
          :href="`mailto:${profile?.email || 'hello@example.com'}`"
          class="inline-flex items-center gap-2 px-10 py-5 bg-[var(--color-text-primary)] text-white rounded-[var(--radius-xl)] font-medium hover:bg-gray-800 transition-colors text-lg group"
        >
          Get in touch 
          <span class="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
        </a>
      </div>
    </div>
  </section>
</template>
