<script setup>
import movieDetails from '../components/movieDetails.vue'
import { Suspense } from 'vue';
</script>

<template>
  <header class="bg-[#032541] p-4">
    <div class="flex justify-between mx-4">
      <font-awesome-icon :icon="['fas', 'bars']" class="fa-2x text-[#fffefa]" />
      <img src="../assets/logo.svg" class="w-32" alt="" />
      <font-awesome-icon
        :icon="['fas', 'magnifying-glass']"
        class="fa-2x text-[#fffefa]"
      />
    </div>
  </header>
  <Suspense>
      <movieDetails/>
  <template #fallback>
    <div class="border-2 border-dotted border-[#032541] w-20 h-20 rounded-full animate-spin"></div>
  </template>
  </Suspense>
</template>
