<script setup>
import { ref } from 'vue'
import { usePortfolio } from '../../composables/usePortfolio'

const { profile } = usePortfolio()

const copied = ref(false)

const copyEmail = async () => {
  const email = profile.value?.email?.replace('mailto:', '') || 'arrio071@gmail.com'
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    // Fallback if clipboard fails
  }
}
</script>

<template>
  <section id="contact" class="py-24 md:py-36">
    <div class="container mx-auto px-6 max-w-7xl">
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 scroll-reveal">
        <div class="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] mb-2">
          06 / Let's Connect
        </div>
        <h2
          class="text-3xl md:text-5xl lg:text-6xl font-extrabold font-['Geist'] text-[var(--color-text-primary)] mb-6 tracking-tight leading-tight"
        >
          Ready to build reliable & secure applications?
        </h2>
        <p class="text-lg md:text-xl text-[var(--color-text-secondary)] font-light leading-relaxed">
          Based in Jakarta Pusat. Open to full-time engineering opportunities, enterprise platform
          architecture, and software development collaborations.
        </p>
      </div>

      <!-- Contact Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-stagger">
        <!-- Email Card -->
        <div
          class="p-8 rounded-[var(--radius-2xl)] bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] transition-all duration-200 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.015)]"
        >
          <div>
            <div
              class="w-10 h-10 rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] flex items-center justify-center mb-6"
            >
              <svg
                width="20"
                height="20"
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
            </div>
            <div
              class="text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] mb-1"
            >
              Email Inquiry
            </div>
            <div
              class="text-lg font-bold font-['Geist'] text-[var(--color-text-primary)] break-all mb-2"
            >
              arrio071@gmail.com
            </div>
            <p class="text-xs text-[var(--color-text-secondary)]">
              Best for project scopes and full-time hiring discussions.
            </p>
          </div>

          <div
            class="mt-8 pt-4 border-t border-[var(--color-border-subtle)] flex items-center gap-3"
          >
            <a
              href="mailto:arrio071@gmail.com"
              class="px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg text-xs font-semibold hover:bg-[var(--color-accent-hover)] transition-colors inline-flex items-center gap-1.5"
            >
              <span>Send Email</span>
              <span>↗</span>
            </a>
            <button
              type="button"
              @click="copyEmail"
              class="px-3.5 py-2 border border-[var(--color-border-subtle)] rounded-lg text-xs font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-primary)] transition-colors"
            >
              {{ copied ? 'Copied!' : 'Copy' }}
            </button>
          </div>
        </div>

        <!-- Phone & WhatsApp Card -->
        <div
          class="p-8 rounded-[var(--radius-2xl)] bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] transition-all duration-200 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.015)]"
        >
          <div>
            <div
              class="w-10 h-10 rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] flex items-center justify-center mb-6"
            >
              <svg
                width="20"
                height="20"
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
            </div>
            <div
              class="text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] mb-1"
            >
              Phone & WhatsApp
            </div>
            <div class="text-lg font-bold font-['Geist'] text-[var(--color-text-primary)] mb-2">
              +62 823 4821 5923
            </div>
            <p class="text-xs text-[var(--color-text-secondary)]">
              Direct mobile contact and instant messaging.
            </p>
          </div>

          <div
            class="mt-8 pt-4 border-t border-[var(--color-border-subtle)] flex items-center gap-3"
          >
            <a
              href="https://wa.me/6282348215923"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5"
            >
              <span>WhatsApp Chat</span>
              <span>↗</span>
            </a>
            <a
              href="tel:+6282348215923"
              class="px-3.5 py-2 border border-[var(--color-border-subtle)] rounded-lg text-xs font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-primary)] transition-colors"
            >
              Call
            </a>
          </div>
        </div>

        <!-- LinkedIn & GitHub Card -->
        <div
          class="p-8 rounded-[var(--radius-2xl)] bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] transition-all duration-200 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.015)]"
        >
          <div>
            <div
              class="w-10 h-10 rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] flex items-center justify-center mb-6"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"
                />
              </svg>
            </div>
            <div
              class="text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] mb-1"
            >
              Profiles & Code
            </div>
            <div class="text-lg font-bold font-['Geist'] text-[var(--color-text-primary)] mb-2">
              linkedin.com/in/arriosaputra
            </div>
            <p class="text-xs text-[var(--color-text-secondary)]">
              Professional history, recommendations, and open source repositories.
            </p>
          </div>

          <div
            class="mt-8 pt-4 border-t border-[var(--color-border-subtle)] flex items-center gap-3"
          >
            <a
              href="https://www.linkedin.com/in/arriosaputra/"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 bg-[var(--color-text-primary)] text-white rounded-lg text-xs font-semibold hover:bg-black transition-colors inline-flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>
            <a
              href="https://github.com/arrioo"
              target="_blank"
              rel="noopener noreferrer"
              class="px-3.5 py-2 border border-[var(--color-border-subtle)] rounded-lg text-xs font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-primary)] transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
