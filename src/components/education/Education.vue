<script setup>
import { usePortfolio } from '../../composables/usePortfolio'

const { profile } = usePortfolio()
</script>

<template>
  <section
    id="education"
    class="py-24 md:py-32 bg-white border-b border-[var(--color-border-subtle)]"
  >
    <div class="container mx-auto px-6 max-w-7xl">
      <!-- Section Header -->
      <div
        class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[var(--color-border-subtle)] scroll-reveal"
      >
        <div>
          <div class="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] mb-2">
            03 / Academics & Credibility
          </div>
          <h2 class="text-section-heading font-extrabold text-[var(--color-text-primary)]">
            Education & References
          </h2>
        </div>
        <div class="text-sm text-[var(--color-text-secondary)] font-mono mt-2 md:mt-0">
          Informatics Degree • Leadership • Verified References
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <!-- Left: Education (7 cols) -->
        <div class="lg:col-span-7 space-y-8 scroll-reveal">
          <h3
            class="text-xl font-bold font-['Geist'] text-[var(--color-text-primary)] flex items-center gap-2"
          >
            <span>Academic Background</span>
          </h3>

          <!-- UTDI Degree Card -->
          <div
            class="p-8 rounded-[var(--radius-2xl)] bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] relative overflow-hidden"
          >
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span
                class="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[var(--color-accent)] text-white"
              >
                2019 — 2023
              </span>
              <span
                class="text-xs font-mono font-bold text-[var(--color-accent)] bg-white px-3 py-1 rounded-full border border-[var(--color-border-subtle)]"
              >
                GPA: 3.85 / 4.00
              </span>
            </div>

            <h4 class="text-2xl font-bold font-['Geist'] text-[var(--color-text-primary)] mb-1">
              Universitas Teknologi Digital Indonesia (UTDI)
            </h4>
            <div class="text-sm font-medium text-[var(--color-accent)] mb-4">
              Bachelor of Computer Science in Informatics • Faculty of Information Technology
            </div>

            <!-- Organization Details -->
            <div class="mt-6 pt-6 border-t border-[var(--color-border-subtle)]">
              <div
                class="text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] mb-2"
              >
                Campus Organization Leadership
              </div>
              <div class="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
                UKM WAMIKA (Wahana Aspirasi Mahasiswa Islam Kampus) UTDI
              </div>
              <ul class="space-y-2.5 text-sm text-[var(--color-text-secondary)]">
                <li class="flex items-start gap-2.5">
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 flex-shrink-0"
                  ></span>
                  <span
                    ><strong>AN-NAJAH BUREAU Administrator (2020–2021):</strong> Led Islamic study
                    assistance programs, designed digital reminder campaigns, and conducted monthly
                    seminars.</span
                  >
                </li>
                <li class="flex items-start gap-2.5">
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 flex-shrink-0"
                  ></span>
                  <span
                    ><strong>Tabligh Akbar PR Coordinator (2019–2020):</strong> Coordinated public
                    relations, managed inter-committee communications, and led event
                    promotions.</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- High School Card -->
          <div
            class="p-6 rounded-[var(--radius-xl)] bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] flex items-center justify-between"
          >
            <div>
              <div class="text-xs font-mono text-[var(--color-text-secondary)]">2016 — 2019</div>
              <h5 class="text-lg font-bold font-['Geist'] text-[var(--color-text-primary)]">
                SMAN 8 Kota Ternate
              </h5>
              <div class="text-xs text-[var(--color-text-secondary)]">
                High School Diploma • Natural Sciences Major
              </div>
            </div>
            <div
              class="px-3 py-1 rounded-full text-xs font-mono bg-white border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)]"
            >
              Science
            </div>
          </div>
        </div>

        <!-- Right: Professional References (5 cols) -->
        <div class="lg:col-span-5 space-y-6 scroll-reveal">
          <h3
            class="text-xl font-bold font-['Geist'] text-[var(--color-text-primary)] flex items-center gap-2"
          >
            <span>Professional References</span>
          </h3>
          <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Direct professional references from leadership mentors and organizational directors
            available to verify engineering contributions and work ethic.
          </p>

          <div class="space-y-4">
            <div
              v-for="refItem in profile?.references"
              :key="refItem.name"
              class="p-6 rounded-[var(--radius-xl)] bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] transition-all duration-200"
            >
              <div class="flex items-start justify-between">
                <div>
                  <h4 class="text-base font-bold font-['Geist'] text-[var(--color-text-primary)]">
                    {{ refItem.name }}
                  </h4>
                  <div class="text-xs font-semibold text-[var(--color-accent)] mt-0.5">
                    {{ refItem.role }}
                  </div>
                  <div class="text-xs text-[var(--color-text-secondary)] mt-0.5">
                    {{ refItem.company }}
                  </div>
                </div>

                <a
                  :href="refItem.url"
                  class="p-2.5 rounded-full bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] transition-colors text-[var(--color-accent)]"
                  :aria-label="`Call ${refItem.name}`"
                >
                  <svg
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
                </a>
              </div>

              <div
                class="mt-4 pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs"
              >
                <span class="font-mono text-[var(--color-text-secondary)]">Direct Line</span>
                <a
                  :href="refItem.url"
                  class="font-mono font-medium text-[var(--color-accent)] hover:underline"
                >   
                </a>

                <a
                  :href="'https://wa.me/' + refItem.phone"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>WhatsApp Chat</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
