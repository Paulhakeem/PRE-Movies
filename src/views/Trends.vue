<script setup>
import movieDetails from '../components/movieDetails.vue'
import Header from '../components/Header.vue'
import { Suspense } from 'vue';
</script>

<template>
  <header>
    <Header/>
  </header>
  <Suspense>
      <movieDetails/>
  <template #fallback>
    <div class="border-2 border-dotted border-[#032541] w-20 h-20 rounded-full animate-spin"></div>
  </template>
  </Suspense>
</template>
