<script setup>
import { useMovieStore } from "../store/searchMovie.js";

const tvShows = useMovieStore();
</script>
<template>
  <div
    class="wallpaper bg-[url('../assets/galaxy.jpg')] bg-cover bg-center bg-no-repeat h-screen w-full flex items-center justify-center"
  >
    <div class="w-full max-w-4xl px-6">
      <div class="text-center mb-12 animate-fade-in">
        <h1
          class="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0db5df] via-[#88cca5] to-[#0db5df] mb-4"
        >
          Welcome.
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 font-light">
          Millions of movies, TV shows and people to discover.
        </p>
      </div>

      <form
        @submit.prevent="tvShows.searchMovies"
        class="flex flex-col sm:flex-row gap-4 px-4"
      >
        <input
          v-model="tvShows.searchQuery"
          class="flex-1 bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-gray-400 text-lg p-4 rounded-lg focus:border-[#0db5df] focus:ring-2 focus:ring-[#0db5df]/50 outline-none transition-all duration-300"
          type="text"
          placeholder="Search for movies, TV shows and people..."
        />
        <button
          class="gradient-btn text-white text-lg font-bold px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300 whitespace-nowrap"
        >
          <font-awesome-icon :icon="['fas', 'search']" class="mr-2" />
          Search
        </button>
      </form>

      <div class="text-center mt-12">
        <p class="text-gray-400 text-sm">
          Press Enter or click Search to find your favorite content
        </p>
      </div>
    </div>
  </div>
</template>
