<script setup>
import { usePortfolio } from '../../composables/usePortfolio'

const { skills } = usePortfolio()
</script>

<template>
  <section id="skills" class="py-24 md:py-32 bg-white border-b border-[var(--color-border-subtle)]">
    <div class="container mx-auto px-6 max-w-7xl">
      <!-- Section Header -->
      <div
        class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[var(--color-border-subtle)] scroll-reveal"
      >
        <div>
          <div class="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] mb-2">
            05 / Technical Stack
          </div>
          <h2 class="text-section-heading font-extrabold text-[var(--color-text-primary)]">
            Core Competencies
          </h2>
        </div>
        <div class="text-sm text-[var(--color-text-secondary)] font-mono mt-2 md:mt-0">
          Frameworks • Systems • Security Remediations
        </div>
      </div>

      <!-- Skills Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-stagger">
        <div
          v-for="group in skills"
          :key="group.category"
          class="p-8 rounded-[var(--radius-2xl)] bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] transition-all duration-300 flex flex-col justify-between shadow-[0_2px_15px_rgba(0,0,0,0.01)]"
        >
          <div>
            <h3 class="text-xl font-bold font-['Geist'] text-[var(--color-text-primary)] mb-2">
              {{ group.category }}
            </h3>
            <p class="text-xs text-[var(--color-text-secondary)] mb-6 font-mono">
              {{ group.summary }}
            </p>
          </div>

          <div class="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border-subtle)]/70">
            <span
              v-for="item in group.items"
              :key="item"
              class="px-3.5 py-1.5 bg-white border border-[var(--color-border-subtle)] rounded-full text-xs font-medium text-[var(--color-text-primary)] shadow-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
