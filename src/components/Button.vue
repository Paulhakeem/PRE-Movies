<script setup>
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
</script>
<template>
  <div class="px-6 py-8">
    <div class="flex items-center gap-4 mb-8">
      <h2 class="section-title">Trending</h2>
    </div>
    <div class="trending px-6 mb-6">
      <RouterLink to="/">
        <button
          :class="[
            route.path === '/' ? 'gradient-btn text-white' : 'btn-outline',
            'px-6 py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap hover:scale-105',
          ]"
        >
          All Time
        </button>
      </RouterLink>
      <RouterLink to="/trends">
        <button
          :class="[
            route.path === '/trends'
              ? 'gradient-btn text-white'
              : 'btn-outline',
            'px-6 py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap hover:scale-105',
          ]"
        >
          Today
        </button>
      </RouterLink>
      <RouterLink to="/week">
        <button
          :class="[
            route.path === '/week' ? 'gradient-btn text-white' : 'btn-outline',
            'px-6 py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap hover:scale-105',
          ]"
        >
          This Week
        </button>
      </RouterLink>
    </div>
  </div>
</template>
