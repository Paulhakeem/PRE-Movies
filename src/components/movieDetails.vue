<script setup>
import { ref, onMounted } from "vue"
import Button from "./Button.vue";

const movies = ref([]);


onMounted(async () => {
  try {
    const fetchMovies = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=6b8d838296e5a23e5137a70749753a2d"
    );
    const list = await fetchMovies.json();
    movies.value = list.results;
    console.log(list);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
});
</script>

<template>
  <main>
     <div>
      <Button/>
     </div>
    <div class="movie flex flex-wrap justify-center">
      <div v-for="movie in movies" :key="movie.tmdbID" class="list">
        <div class="max-w-md flex-1 basis-12 pt-10 pb-10 pl-4 pr-4 w-64">
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
        </div>
      </div>
    </div>
  </main>
</template>
