<script setup>
import { useMovieStore } from "../store/searchMovie";

const useMovie = useMovieStore();
</script>

<template>
  <div class="bg-[#032541] p-4">
    <div class="flex justify-between mx-4">
      <RouterLink to="/" class="cursor-pointer mt-4">
        <img src="../assets/logo1.svg" class="w-32" alt="" />
      </RouterLink>

      <font-awesome-icon
        :icon="['fas', 'magnifying-glass']"
        class="text-2xl text-[#fffefa] pt-2"
      />
    </div>
  </div>

  <main>
    <div class="movie space-y-10  mt-2">
      <form @submit.prevent="useMovie.searchMovies"
       class="form flex flex-row mx-6 gap-4">
        <input
          v-model="useMovie.searchQuery"
          class="bg-gray-100 border text-md w-full p-3 outline-none text-lg text-gray-600 rounded-md"
          type="text"
          placeholder="Search for movies, tv shows and person..."
        />
        <button
          class="bg-gradient-to-r from-[#a0e5d0] to-[#07bad8] hover:bg-gredient-light text-lg text-white font-bold py-3 px-6 rounded-md"
        >
          Search
        </button>
      </form>
      <div v-for="movie in useMovie.movies" :key="movie.tmdbID" class="list mx-6">
        <div class="flex w-full shadow-md rounded-md pr-4 mb-6">
          <img
            :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
            alt="movie poster"
            class="mb-2 w-24"
          />
          <div class="mx-4 pt-2">
            <div>
              <h3 class="font-bold text-gray-800 text-base">{{ movie.title }}</h3>
            </div>
            <div class="font-medium text-gray-400 pt-1">
              <h3>{{ movie.release_date }}</h3>
            </div>
            <div class="font-medium text-gray-700 pt-2">
              <p>{{ movie.overview }}</p>
            </div>
          </div>
        </div>
        <!-- <div class="max-w-md flex-1 basis-12 pt-10 pb-10 pl-4 pr-4 w-64">
          <img
            :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
            alt="movie poster"
            class="mb-2"
          />

          <button
            class="bg-[#032541] text-[#88cca5] text-center rounded-full w-14 pb-1"
          >
            {{ movie.media_type }}
          </button>
          <div>
            <h3 class="font-semibold text-base">{{ movie.title }}</h3>
          </div>
          <div class="font-medium text-gray-400">
            <h3>{{ movie.release_date }}</h3>
          </div>
        </div> -->
      </div>
    </div>
  </main>
</template>
