<script setup>
const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="py-14 border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)]">
    <div class="container mx-auto px-6 max-w-7xl">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
            <span class="font-bold text-sm font-['Geist'] text-[var(--color-text-primary)]"
              >Arrio Saputra</span
            >
          </div>
          <p class="text-xs text-[var(--color-text-secondary)]">
            Application Developer • Full Stack Engineer • Jakarta Pusat, Indonesia
          </p>
        </div>

        <div
          class="flex flex-wrap items-center gap-6 text-xs font-mono text-[var(--color-text-secondary)]"
        >
          <a
            href="https://github.com/arrioo"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-[var(--color-accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arriosaputra/"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-[var(--color-accent)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:arrio071@gmail.com"
            class="hover:text-[var(--color-accent)] transition-colors"
          >
            Email
          </a>
          <button
            type="button"
            @click="scrollToTop"
            class="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>
      </div>

      <div
        class="mt-8 pt-6 border-t border-[var(--color-border-subtle)]/60 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[var(--color-text-secondary)]"
      >
        <div>
          &copy; {{ currentYear }} Arrio Saputra. Designed & Built with Vue 3, Three.js & Tailwind
          CSS.
        </div>
        <div class="mt-2 sm:mt-0 font-mono">Minimal Editorial Tech</div>
      </div>
    </div>
  </footer>
</template>
