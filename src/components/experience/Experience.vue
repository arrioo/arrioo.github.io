<script setup>
import { usePortfolio } from '../../composables/usePortfolio'

const { experience } = usePortfolio()
</script>

<template>
  <section id="experience" class="py-24 md:py-32">
    <div class="container mx-auto px-6 max-w-7xl">
      <h2 class="text-section-heading font-bold mb-16 scroll-reveal">Experience</h2>
      
      <div class="max-w-4xl scroll-stagger">
        <div 
          v-for="item in experience" 
          :key="item.id"
          class="group relative pl-8 md:pl-0 mb-12 md:mb-16 last:mb-0 md:grid md:grid-cols-12 md:gap-8"
        >
          <!-- Timeline line (mobile only) -->
          <div class="absolute left-0 top-2 bottom-0 w-px bg-[var(--color-border-subtle)] md:hidden"></div>
          <!-- Timeline dot (mobile only) -->
          <div class="absolute left-[-4px] top-2.5 w-2 h-2 rounded-full bg-[var(--color-text-secondary)] md:hidden"></div>
          
          <div class="md:col-span-3 mb-2 md:mb-0">
            <span class="text-sm font-medium text-[var(--color-text-secondary)] font-['Geist']">{{ item.period }}</span>
          </div>
          
          <div class="md:col-span-9">
            <h3 class="text-xl md:text-2xl font-bold font-['Geist'] text-[var(--color-text-primary)] mb-1">
              {{ item.role }}
            </h3>
            <div class="text-lg text-[var(--color-text-secondary)] mb-4">{{ item.company }}</div>
            
            <p class="text-[var(--color-text-primary)] leading-relaxed mb-6">
              {{ item.description }}
            </p>
            
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in item.tech" 
                :key="tech"
                class="px-3 py-1 bg-white border border-[var(--color-border-subtle)] rounded-full text-xs font-medium text-[var(--color-text-secondary)]"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
