<script setup>
import { RouterLink } from "vue-router";
import Footer from "../components/Footer.vue";
import { useMovieStore } from "../store/searchMovie";

const useMovie = useMovieStore();
</script>

<template>
  <div
    class="bg-gradient-to-r from-[#0f1419] via-[#1a2a3a] to-[#0f1419] backdrop-blur-md border-b border-[#0db5df]/20 p-4"
  >
    <div class="flex justify-between mx-4 items-center py-2">
      <RouterLink
        to="/"
        class="cursor-pointer flex items-center hover:opacity-80 transition-opacity"
      >
        <img src="../assets/logo1.svg" class="w-32" alt="PRE Movies" />
      </RouterLink>
      <font-awesome-icon
        class="text-2xl text-[#0db5df]"
        :icon="['fas', 'bell']"
      />
    </div>
  </div>

  <main>
    <div class="space-y-10 mt-2">
      <form
        @submit.prevent="useMovie.searchMovies"
        class="form flex flex-col sm:flex-row gap-4 mx-6 px-4"
      >
        <input
          v-model="useMovie.searchQuery"
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

      <div v-if="useMovie.movies.length > 0" class="px-6">
        <div
          class="bg-gradient-to-r from-[#0db5df] to-[#08b4e2] px-6 py-3 rounded-lg w-fit mb-8"
        >
          <p class="text-white font-semibold">
            {{ useMovie.movies.length }} Results Found
          </p>
        </div>
        <div class="space-y-4 pb-8">
          <div v-for="movie in useMovie.movies" :key="movie.id">
            <div
              class="flex gap-4 bg-[#1a1f2e] border border-[#2a3f5f] rounded-lg overflow-hidden hover:border-[#0db5df] transition-all duration-300 hover:shadow-lg hover:shadow-[#0db5df]/50"
            >
              <img
                :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
                alt="movie poster"
                class="w-32 h-48 object-cover flex-shrink-0"
              />
              <div class="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <div class="flex items-start gap-2 mb-2">
                    <h3 class="font-bold text-white text-lg flex-1">
                      {{ movie.title }}
                    </h3>
                    <span
                      v-if="movie.vote_average"
                      class="bg-[#0db5df]/30 text-[#0db5df] px-2 py-1 rounded text-sm font-bold flex-shrink-0"
                    >
                      ⭐ {{ (movie.vote_average / 2).toFixed(1) }}
                    </span>
                  </div>
                  <p class="text-gray-400 text-sm mb-3">
                    {{ movie.release_date }}
                  </p>
                  <p class="text-gray-300 text-sm line-clamp-3">
                    {{ movie.overview }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-12 text-gray-400">
        <font-awesome-icon :icon="['fas', 'search']" class="text-4xl mb-4" />
        <p>Search for movies to see results...</p>
      </div>
    </div>
  </main>
  <Footer />
</template>
