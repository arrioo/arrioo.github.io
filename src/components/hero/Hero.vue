<script setup>
import { ref, onMounted } from 'vue'
import Hero3D from '../3d/Hero3D.vue'
import { usePortfolio } from '../../composables/usePortfolio'

const { profile } = usePortfolio()

const prefersReducedMotion = ref(false)
const isMounted = ref(false)

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  isMounted.value = true
})
</script>

<template>
  <section
    class="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[var(--color-border-subtle)]"
  >
    <!-- Ambient subtle grain/radial background -->
    <div
      class="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#384E6F_0.75px,transparent_1px)] [background-size:24px_24px]"
    ></div>

    <div class="container mx-auto px-6 max-w-7xl relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <!-- Text Column (12-col desktop grid: 7 cols) -->
        <div class="lg:col-span-7 scroll-reveal">
          <!-- Status Tag -->
          <div
            class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[var(--color-border-subtle)] bg-white/80 backdrop-blur-sm text-xs font-mono text-[var(--color-text-secondary)] mb-6 shadow-sm"
          >
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Based in Jakarta Pusat, ID • Available for Engineering Roles</span>
          </div>

          <!-- Headline -->
          <h1 class="text-hero font-extrabold tracking-tight text-[var(--color-text-primary)] mb-6">
            <span
              class="block text-2xl md:text-3xl lg:text-4xl font-normal text-[var(--color-text-secondary)] mb-2 tracking-normal font-['Geist']"
            >
              {{ profile?.name || 'Arrio' }}
            </span>
            Engineering enterprise systems with speed & precision.
          </h1>

          <!-- Subtitle / Bio summary -->
          <p
            class="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mb-10 leading-relaxed font-light"
          >
            Full Stack & Application Developer specializing in web applications, database tuning,
            VAPT security hardening, and Oracle integrations.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#work"
              class="px-7 py-3.5 bg-[var(--color-accent)] text-white rounded-[var(--radius-xl)] font-medium hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-sm flex items-center gap-2 group"
            >
              <span>Selected Work</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="transition-transform group-hover:translate-x-0.5"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a
              href="#contact"
              class="px-7 py-3.5 bg-white border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] rounded-[var(--radius-xl)] font-medium hover:bg-[var(--color-accent-soft)] hover:border-[var(--color-accent)] transition-all duration-200 shadow-sm"
            >
              Contact Me
            </a>

            <a
              href="https://www.linkedin.com/in/arriosaputra/"
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-3.5 text-sm font-medium text-[var(--color-accent)] hover:underline flex items-center gap-1.5"
            >
              <span>LinkedIn Profile</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <!-- Social / Direct Contact Channels -->
          <div class="pt-8 border-t border-[var(--color-border-subtle)]/70">
            <div
              class="text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] mb-4"
            >
              Direct Contact & Repositories
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <a
                v-for="item in profile?.social"
                :key="item.name"
                :href="item.url"
                :target="item.icon === 'email' ? '_self' : '_blank'"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[var(--color-border-subtle)] text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:shadow-sm transition-all duration-200"
              >
                <!-- GitHub Icon -->
                <svg
                  v-if="item.icon === 'github'"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>

                <!-- LinkedIn Icon -->
                <svg
                  v-else-if="item.icon === 'linkedin'"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"
                  />
                </svg>

                <!-- Email Icon -->
                <svg
                  v-else-if="item.icon === 'email'"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  ></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>

                <!-- Phone / WhatsApp Icon -->
                <svg
                  v-else-if="item.icon === 'phone'"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>

                <span>{{ item.name }}</span>
                <span class="text-[10px] text-[var(--color-text-secondary)] opacity-75"
                  >({{ item.handle }})</span
                >
              </a>
            </div>
          </div>
        </div>

        <!-- 3D Interactive Column (5 cols) -->
        <div
          class="lg:col-span-5 h-[380px] md:h-[480px] lg:h-[540px] relative flex items-center justify-center"
        >
          <div
            class="w-full h-full relative rounded-[var(--radius-2xl)] border border-[var(--color-border-subtle)] bg-white/40 backdrop-blur-sm p-2 shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden"
          >
            <!-- Subtle interactive cue -->
            <div
              class="absolute top-4 left-4 z-20 flex items-center gap-2 text-[11px] font-mono text-[var(--color-text-secondary)] bg-white/80 px-2.5 py-1 rounded-full border border-[var(--color-border-subtle)]"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-ping"></span>
              <span>Interactive 3D • Move cursor</span>
            </div>

            <!-- 3D canvas -->
            <Hero3D v-if="isMounted && !prefersReducedMotion" />

            <div
              v-else
              class="w-full h-full flex items-center justify-center text-sm text-[var(--color-text-secondary)]"
            >
              Abstract Metallic Sculpture
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
