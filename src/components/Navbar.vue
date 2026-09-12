<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
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
        ? 'bg-[#F7F7F5]/90 backdrop-blur-md border-b border-[var(--color-border-subtle)] py-3 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
        : 'bg-transparent py-5',
    ]"
  >
    <div class="container mx-auto px-6 max-w-7xl flex items-center justify-between">
      <!-- Logo & Subtext -->
      <a href="#" class="group flex items-center gap-3" @click="closeMobileMenu">
        <span
          class="w-8 h-8 rounded-lg bg-[var(--color-accent)] text-[#F7F7F5] flex items-center justify-center font-bold text-sm tracking-wider font-['Geist'] transition-transform duration-300 group-hover:scale-105"
        >
          AS
        </span>
        <div class="flex flex-col">
          <span
            class="text-base font-semibold tracking-tight text-[var(--color-text-primary)] font-['Geist']"
          >
            Arrio Saputra
          </span>
          <span
            class="text-[11px] text-[var(--color-text-secondary)] font-mono hidden sm:inline-block"
          >
            Jakarta, ID • Application Dev
          </span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav
        class="hidden lg:flex items-center space-x-7 text-sm font-medium text-[var(--color-text-secondary)]"
      >
        <a href="#work" class="hover:text-[var(--color-text-primary)] transition-colors py-1"
          >Work</a
        >
        <a href="#about" class="hover:text-[var(--color-text-primary)] transition-colors py-1"
          >About</a
        >
        <a href="#experience" class="hover:text-[var(--color-text-primary)] transition-colors py-1"
          >Experience</a
        >
        <a href="#education" class="hover:text-[var(--color-text-primary)] transition-colors py-1"
          >Education</a
        >
        <a href="#skills" class="hover:text-[var(--color-text-primary)] transition-colors py-1"
          >Skills</a
        >
        <a href="#contact" class="hover:text-[var(--color-text-primary)] transition-colors py-1"
          >Contact</a
        >
      </nav>

      <!-- Action Button -->
      <div class="hidden sm:flex items-center gap-3">
        <a
          href="https://www.linkedin.com/in/arriosaputra/"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 py-2 text-xs font-semibold rounded-full border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] bg-white/70 hover:bg-white hover:border-[var(--color-accent)] transition-all duration-200 flex items-center gap-1.5 shadow-sm"
        >
          <span>LinkedIn</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
        <a
          href="mailto:arrio071@gmail.com"
          class="px-4 py-2 text-xs font-semibold rounded-full bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-sm flex items-center gap-1.5"
        >
          <span>Get in touch</span>
        </a>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <button
        type="button"
        class="lg:hidden p-2 rounded-lg text-[var(--color-text-primary)] hover:bg-black/5 transition-colors"
        :aria-expanded="mobileMenuOpen"
        aria-label="Toggle navigation menu"
        @click="toggleMobileMenu"
      >
        <svg
          v-if="!mobileMenuOpen"
          width="22"
          height="22"
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
        <svg
          v-else
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <!-- Mobile Drawer Overlay -->
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden fixed inset-x-0 top-[60px] bg-[#F7F7F5] border-b border-[var(--color-border-subtle)] shadow-xl px-6 py-8 flex flex-col gap-5 text-base font-medium z-40 transition-all duration-300"
    >
      <a href="#work" class="text-[var(--color-text-primary)] py-1.5" @click="closeMobileMenu"
        >Work</a
      >
      <a href="#about" class="text-[var(--color-text-primary)] py-1.5" @click="closeMobileMenu"
        >About</a
      >
      <a href="#experience" class="text-[var(--color-text-primary)] py-1.5" @click="closeMobileMenu"
        >Experience</a
      >
      <a href="#education" class="text-[var(--color-text-primary)] py-1.5" @click="closeMobileMenu"
        >Education & References</a
      >
      <a href="#skills" class="text-[var(--color-text-primary)] py-1.5" @click="closeMobileMenu"
        >Technical Skills</a
      >
      <a href="#contact" class="text-[var(--color-text-primary)] py-1.5" @click="closeMobileMenu"
        >Contact</a
      >

      <div class="pt-4 border-t border-[var(--color-border-subtle)] flex flex-col gap-3">
        <a
          href="https://www.linkedin.com/in/arriosaputra/"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full text-center py-3 rounded-xl border border-[var(--color-border-subtle)] text-sm font-semibold bg-white"
        >
          View LinkedIn Profile ↗
        </a>
        <a
          href="mailto:arrio071@gmail.com"
          class="w-full text-center py-3 rounded-xl bg-[var(--color-accent)] text-white text-sm font-semibold"
        >
          Email: arrio071@gmail.com
        </a>
      </div>
    </div>
  </header>
</template>
