<script setup>
import { usePortfolio } from '../../composables/usePortfolio'

const { profile } = usePortfolio()
</script>

<template>
  <section id="about" class="py-24 md:py-32 bg-white border-b border-[var(--color-border-subtle)]">
    <div class="container mx-auto px-6 max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <!-- Left Column: Editorial Tag & Profile Meta (4 cols) -->
        <div class="lg:col-span-4 scroll-reveal">
          <div class="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] mb-3">
            01 / Professional Profile
          </div>
          <h2 class="text-section-heading font-extrabold text-[var(--color-text-primary)] mb-6">
            About Arrio
          </h2>

          <div
            class="p-6 rounded-[var(--radius-xl)] bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] flex flex-col gap-4 text-sm"
          >
            <div>
              <div class="text-xs font-mono text-[var(--color-text-secondary)] uppercase">
                Location
              </div>
              <div class="font-medium text-[var(--color-text-primary)] mt-0.5">
                Jakarta Pusat, DKI Jakarta
              </div>
            </div>

            <div class="pt-3 border-t border-[var(--color-border-subtle)]">
              <div class="text-xs font-mono text-[var(--color-text-secondary)] uppercase">
                Current Role
              </div>
              <div class="font-medium text-[var(--color-text-primary)] mt-0.5">
                Application Developer
              </div>
              <div class="text-xs text-[var(--color-text-secondary)]">
                PT Jelajah Data Semesta (Balitower Group)
              </div>
            </div>

            <div class="pt-3 border-t border-[var(--color-border-subtle)]">
              <div class="text-xs font-mono text-[var(--color-text-secondary)] uppercase">
                Alma Mater & GPA
              </div>
              <div class="font-medium text-[var(--color-text-primary)] mt-0.5">
                Universitas Teknologi Digital Indonesia
              </div>
              <div class="text-xs font-semibold text-[var(--color-accent)]">
                Bachelor of Computer Science • GPA 3.85
              </div>
            </div>

            <div class="pt-3 border-t border-[var(--color-border-subtle)]">
              <div class="text-xs font-mono text-[var(--color-text-secondary)] uppercase">
                Core Focus
              </div>
              <div class="font-medium text-[var(--color-text-primary)] mt-0.5">
                Web Apps • APIs • Database Tuning • Security
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Biography & Highlights (8 cols) -->
        <div class="lg:col-span-8 scroll-reveal">
          <div
            class="prose prose-lg max-w-none text-[var(--color-text-primary)] leading-relaxed space-y-6"
          >
            <p
              class="text-xl md:text-2xl font-light text-[var(--color-text-primary)] font-['Geist'] leading-snug"
            >
              My name is
              <strong class="font-semibold text-[var(--color-accent)]">Arrio Saputra</strong>, and I
              graduated with a Bachelor's degree in Informatics from Universitas Teknologi Digital
              Indonesia. I am deeply passionate about software engineering, particularly
              web application development, system integration, database optimization, and
              application security.
            </p>

            <p class="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
              I have hands-on professional experience as a Full Stack Developer, architecting and
              maintaining web-based applications from requirement analysis through deployment.
              During my career, I have engineered and shipped e-commerce platforms, government
              procurement monitoring systems, foundation mentoring platforms, and mission-critical
              enterprise applications—collaborating with cross-functional teams and stakeholders to
              deliver scalable, reliable, and secure solutions.
            </p>
          </div>

          <!-- Highlight Metric Cards -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 scroll-stagger">
            <div
              v-for="highlight in profile?.highlights"
              :key="highlight.label"
              class="p-5 rounded-[var(--radius-xl)] bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] transition-all duration-200"
            >
              <div
                class="text-2xl md:text-3xl font-extrabold text-[var(--color-accent)] font-['Geist'] mb-1"
              >
                {{ highlight.metric }}
              </div>
              <div class="text-xs font-semibold text-[var(--color-text-primary)] mb-1">
                {{ highlight.label }}
              </div>
              <div class="text-[11px] text-[var(--color-text-secondary)] leading-tight">
                {{ highlight.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
