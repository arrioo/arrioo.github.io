<script setup>
import { usePortfolio } from '../../composables/usePortfolio'

const { profile } = usePortfolio()
</script>

<template>
  <section id="about" class="py-24 md:py-32 bg-white">
    <div class="container mx-auto px-6 max-w-7xl scroll-reveal">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        <div class="lg:col-span-5">
          <h2 class="text-section-heading font-bold">About</h2>
        </div>
        
        <div class="lg:col-span-7">
          <p class="text-xl md:text-2xl text-[var(--color-text-primary)] leading-relaxed font-light font-['Geist']">
            {{ profile?.about }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
