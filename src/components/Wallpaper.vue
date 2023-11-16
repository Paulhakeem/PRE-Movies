<script setup>
import {ref} from 'vue'


  const api = '6b8d838296e5a23e5137a70749753a2d'
  const searchQuery = ref('')
  const movies = ref([])

const searchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6b8d838296e5a23e5137a70749753a2d&query=${searchQuery.value}`
      )
      const search = await response.json();
      console.log(search);
    } catch (error) {
      console.error(error);
    }
  }
</script>
<template>
  <div
    class="wallpaper bg-[url('../assets/galaxy.jpg')] bg-cover bg-center bg-no-repeat h-96 w-full"
  >
    <div class="pt-16 ml-8">
      <h1 class="text-6xl font-bold text-gray-200">Welcome.</h1>
      <p class="my-3 text-4xl font-semibold text-gray-200">
        Millions of movies, TV shows and people to discover. Explore now.
      </p>
    </div>
    <form @submit.prevent="searchMovies(searchQuery)" 
    class="form flex flex-row mx-6 pt-14 gap-4">
      <input
        v-model="searchQuery"
        class="bg-gray-100 border text-md w-full p-3 outline-none text-lg text-gray-600 rounded-full"
        type="text"
        placeholder="Search for movies, tv shows and person..."
      />

      <button
        class="bg-gradient-to-r from-[#a0e5d0] to-[#07bad8] hover:bg-gredient-light text-lg text-white font-bold py-3 px-6 rounded-full"
      >
        Search
      </button>
    </form>
  </div>
</template>
