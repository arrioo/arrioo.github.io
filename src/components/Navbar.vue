<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
      isScrolled
        ? 'bg-white/80 backdrop-blur-md border-b border-[var(--color-border-subtle)] py-4'
        : 'bg-transparent py-6',
    ]"
  >
    <div class="container mx-auto px-6 max-w-7xl flex items-center justify-between">
      <!-- Logo -->
      <a
        href="#"
        class="text-xl font-bold tracking-tight text-[var(--color-text-primary)] font-['Geist']"
      >
        ARRIO
      </a>

      <!-- Desktop Nav -->
      <nav
        class="hidden md:flex items-center space-x-8 text-sm font-medium text-[var(--color-text-secondary)]"
      >
        <a href="#work" class="hover:text-[var(--color-text-primary)] transition-colors">Work</a>
        <a href="#about" class="hover:text-[var(--color-text-primary)] transition-colors">About</a>
        <a href="#experience" class="hover:text-[var(--color-text-primary)] transition-colors"
          >Experience</a
        >
        <a href="#contact" class="hover:text-[var(--color-text-primary)] transition-colors"
          >Contact</a
        >
        <a
          href="#"
          class="text-[var(--color-accent)] hover:text-indigo-500 transition-colors flex items-center gap-1"
        >
          Resume <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <!-- Mobile Nav Toggle (Simplified) -->
      <button class="md:hidden text-[var(--color-text-primary)]" aria-label="Menu">
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
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>
      </button>
    </div>
  </header>
</template>
