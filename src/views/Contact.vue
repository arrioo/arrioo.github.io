<template>
  <!-- CONTACT -->
  <section class="min-h-screen px-6 py-32 lg:px-12 lg:py-48">
    <div class="container mx-auto">
      <h1 class="text-5xl md:text-7xl font-bold text-[#111111] mb-8">Contact</h1>
      <p class="text-lg md:text-xl text-[#111111] max-w-2xl leading-relaxed">
        I'm always open to new opportunities. If you have a project in mind or just want to say hi,
        feel free to reach out!
      </p>

      <form class="max-w-2xl mx-auto mt-12">
        <div class="mb-6">
          <label for="name" class="block text-[#111111] mb-2">Name</label>
          <input
            type="text"
            id="name"
            class="w-full px-4 py-3 border border-[#E7E7E4] rounded-lg focus:outline-none focus:border-[#635BFF]"
          />
        </div>
        <div class="mb-6">
          <label for="email" class="block text-[#111111] mb-2">Email</label>
          <input
            type="email"
            id="email"
            class="w-full px-4 py-3 border border-[#E7E7E4] rounded-lg focus:outline-none focus:border-[#635BFF]"
          />
        </div>
        <div class="mb-6">
          <label for="message" class="block text-[#111111] mb-2">Message</label>
          <textarea
            id="message"
            rows="5"
            class="w-full px-4 py-3 border border-[#E7E7E4] rounded-lg focus:outline-none focus:border-[#635BFF]"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-[#111111] text-white px-8 py-3 rounded-lg hover:bg-[#635BFF] hover:shadow-2xl transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>
