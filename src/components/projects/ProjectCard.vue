<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <a :href="project.link" class="group block cursor-pointer">
    <div class="relative overflow-hidden rounded-[var(--radius-2xl)] mb-6 bg-gray-100 aspect-[16/9] md:aspect-[4/3] xl:aspect-[16/9]">
      <img 
        :src="project.image" 
        :alt="project.title" 
        class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
    </div>
    
    <div class="flex items-start justify-between">
      <div>
        <h3 class="text-2xl font-bold font-['Geist'] text-[var(--color-text-primary)] mb-2">
          {{ project.title }}
        </h3>
        <p class="text-[var(--color-text-secondary)] mb-4 max-w-md">
          {{ project.description }}
        </p>
        <div class="flex flex-wrap gap-2 text-sm text-[var(--color-text-secondary)]">
          <span class="font-medium text-[var(--color-text-primary)]">{{ project.role }}</span>
          <span>&middot;</span>
          <span>{{ project.year }}</span>
        </div>
      </div>
      
      <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-colors group-hover:bg-[var(--color-accent-soft)] group-hover:text-[var(--color-accent)]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
    </div>
  </a>
</template>
