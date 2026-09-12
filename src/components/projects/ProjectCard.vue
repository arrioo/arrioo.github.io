<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="group block cursor-pointer">
    <div
      class="p-6 sm:p-8 rounded-[var(--radius-2xl)] bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] transition-all duration-300 flex flex-col justify-between h-full shadow-[0_4px_20px_rgba(0,0,0,0.015)]"
    >
      <div>
        <!-- Image Container -->
        <div
          class="relative overflow-hidden rounded-[var(--radius-xl)] mb-6 bg-[var(--color-bg-primary)] aspect-[16/10] border border-[var(--color-border-subtle)]/60"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div
            class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-mono bg-white/90 backdrop-blur-sm border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] font-medium"
          >
            {{ project.category || 'Platform' }}
          </div>
          <div
            class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-mono bg-[#111111]/80 backdrop-blur-sm text-white font-medium"
          >
            {{ project.year }}
          </div>
        </div>

        <!-- Meta -->
        <div
          class="flex items-center gap-2 text-xs font-mono text-[var(--color-accent)] font-semibold mb-2"
        >
          <span>{{ project.role }}</span>
        </div>

        <!-- Title -->
        <h3
          class="text-2xl font-bold font-['Geist'] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-3"
        >
          {{ project.title }}
        </h3>

        <!-- Description -->
        <p class="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
          {{ project.description }}
        </p>
      </div>

      <!-- Footer & Tech Tags -->
      <div
        class="pt-6 border-t border-[var(--color-border-subtle)] flex items-center justify-between gap-4"
      >
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="px-2.5 py-1 bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-lg text-xs font-medium text-[var(--color-text-secondary)]"
          >
            {{ tech }}
          </span>
        </div>

        <a
          v-if="project.link && project.link !== '#'"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 rounded-full bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-200 flex-shrink-0"
          :aria-label="`Open ${project.title}`"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
    </div>
  </article>
</template>
