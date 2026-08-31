<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  projectUrl: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="bg-[#F7F7F5] border border-[#E7E7E4] rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
  >
    <img :src="imageUrl" :alt="title" class="w-full h-64 object-cover" />
    <div class="p-6">
      <h3
        class="text-2xl font-bold text-[#111111] mb-4 group-hover:text-[#635BFF] transition-colors"
      >
        {{ title }}
      </h3>
      <p class="text-[#111111] mb-6">{{ description }}</p>
      <RouterLink
        :to="projectUrl"
        class="inline-flex items-center space-x-2 text-[#635BFF] hover:underline"
      >
        <span>View Project</span>
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
      </RouterLink>
    </div>
  </div>
</template>
