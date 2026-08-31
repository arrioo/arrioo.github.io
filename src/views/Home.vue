<template>
  <!-- HERO -->
  <section class="min-h-screen flex flex-col justify-center px-6 py-32 lg:px-12 lg:py-48">
    <!-- Title -->
    <h1 class="text-6xl md:text-8xl font-bold text-[#111111] leading-tight mb-8">
      Hi, I'm <br />
      <span class="text-[#635BFF]">Arrio</span>
    </h1>

    <!-- Subtitle -->
    <p class="text-xl md:text-2xl text-[#111111] max-w-2xl mb-12">
      I design and build digital products that solve real-world problems. Currently working at
      <strong class="font-semibold">Jelajah Data Semesta</strong>.
    </p>

    <!-- Primary CTA -->
    <router-link
      to="/projects"
      class="inline-flex items-center space-x-2 bg-[#111111] text-white px-8 py-4 rounded-lg hover:bg-[#635BFF] hover:shadow-2xl transition-all duration-300 max-w-fit group"
    >
      <span class="font-medium">View My Work</span>
      <svg
        class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </router-link>
  </section>
</template>
