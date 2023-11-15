<script setup>
import { ref, onMounted } from "vue"
import Header from "../components/Header.vue"
import Wallpaper from "../components/Wallpaper.vue";

const movies = ref([]);

onMounted(async () => {
  try {
    const fetchMovies = await fetch(
      "https://api.themoviedb.org/3/discover/movie/?api_key=6b8d838296e5a23e5137a70749753a2d"
    );
    const list = await fetchMovies.json();
    movies.value = list.results;
    console.log(list);
  } catch (error) {
    alert("Error fetching data:", error);
  }
});
</script>
<template>
    <div>
        <Header/>
    </div>
    <div>
        <Wallpaper/>
    </div>
  <main>
     <div class="mt-4 ml-20 flex gap-6">
       <h3 class="text-gray-800 font-semibold text-2xl">Free To Watch</h3>
       <button
        class="bg-[#032541] w-20 rounded-full first-letter:uppercase text-[#08b4e2] pb-1"
      >
        movies
      </button>
     </div>
    <div class="flex flex-wrap justify-center">
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
