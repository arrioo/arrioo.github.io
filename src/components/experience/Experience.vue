<script setup>
import { usePortfolio } from '../../composables/usePortfolio'

const { experience } = usePortfolio()
</script>

<template>
  <section id="experience" class="py-24 md:py-32 border-b border-[var(--color-border-subtle)]">
    <div class="container mx-auto px-6 max-w-7xl">
      <!-- Section Header -->
      <div
        class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[var(--color-border-subtle)] scroll-reveal"
      >
        <div>
          <div class="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] mb-2">
            02 / Career Path
          </div>
          <h2 class="text-section-heading font-extrabold text-[var(--color-text-primary)]">
            Professional Experience
          </h2>
        </div>
        <div class="text-sm text-[var(--color-text-secondary)] font-mono mt-2 md:mt-0">
          5 Roles • Enterprise, E-commerce & GovTech
        </div>
      </div>

      <!-- Experience Items -->
      <div class="space-y-16">
        <article v-for="item in experience" :key="item.id" class="scroll-reveal group">
          <div
            class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-10 rounded-[var(--radius-2xl)] bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.015)]"
          >
            <!-- Left Side: Time, Company & Location (4 cols) -->
            <div class="lg:col-span-4 flex flex-col justify-between">
              <div>
                <div
                  class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[var(--color-accent-soft)] text-[var(--color-accent)] font-semibold mb-3"
                >
                  <span>{{ item.period }}</span>
                </div>

                <h3 class="text-2xl font-bold font-['Geist'] text-[var(--color-text-primary)] mb-1">
                  {{ item.company }}
                </h3>

                <div
                  class="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] mb-4"
                >
                  <span>{{ item.location }}</span>
                  <span>&bull;</span>
                  <span class="font-medium text-[var(--color-accent)]">{{ item.type }}</span>
                  <span>&bull;</span>
                  <span>{{ item.workplace }}</span>
                </div>
              </div>

              <!-- Tech Stack Pills -->
              <div class="mt-6 pt-6 border-t border-[var(--color-border-subtle)]">
                <div class="text-xs font-mono text-[var(--color-text-secondary)] uppercase mb-3">
                  Technologies
                </div>
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="tech in item.tech"
                    :key="tech"
                    class="px-2.5 py-1 bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-lg text-xs font-medium text-[var(--color-text-primary)]"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Side: Role & Detailed Bullets (8 cols) -->
            <div class="lg:col-span-8 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between gap-4 mb-4">
                  <h4
                    class="text-xl md:text-2xl font-bold font-['Geist'] text-[var(--color-accent)]"
                  >
                    {{ item.role }}
                  </h4>
                </div>

                <p class="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6 italic">
                  {{ item.summary }}
                </p>

                <!-- Bullet Points -->
                <ul class="space-y-3">
                  <li
                    v-for="(bullet, bIndex) in item.bullets"
                    :key="bIndex"
                    class="flex items-start gap-3 text-sm md:text-[15px] text-[var(--color-text-primary)] leading-relaxed"
                  >
                    <span
                      class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"
                    ></span>
                    <span>{{ bullet }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
