<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="py-12 border-t border-[var(--color-border-subtle)] mt-24">
    <div class="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-[var(--color-text-secondary)] text-sm">
        &copy; {{ currentYear }} Arrioo. All rights reserved.
      </p>
      
      <div class="flex items-center space-x-6 text-sm text-[var(--color-text-secondary)]">
        <a href="#" class="hover:text-[var(--color-text-primary)] transition-colors">GitHub</a>
        <a href="#" class="hover:text-[var(--color-text-primary)] transition-colors">LinkedIn</a>
        <a href="#" class="hover:text-[var(--color-text-primary)] transition-colors">Twitter</a>
      </div>
    </div>
  </footer>
</template>
