<script setup>
import { ref, onMounted } from "vue";
import Header from "../components/Header.vue";
import Button from "../components/Button.vue";
import Wallpaper from "../components/Wallpaper.vue";
import Footer from "../components/Footer.vue";

const movies = ref([]);

onMounted(async () => {
  try {
    const fetchMovies = await fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=6b8d838296e5a23e5137a70749753a2d",
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
    <Header />
    <Wallpaper />
  </div>
  <main>
    <div>
      <Button />
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 py-8"
    >
      <div v-for="movie in movies" :key="movie.id" class="movie-card group">
        <div class="relative overflow-hidden">
          <img
            :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
            alt="movie poster"
            class="w-full h-64 object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
          >
            <div class="w-full">
              <p class="text-sm text-gray-300 line-clamp-2">
                {{ movie.overview }}
              </p>
            </div>
          </div>
        </div>
        <div class="p-4">
          <div class="mb-2">
            <span
              class="inline-block bg-[#0db5df]/30 text-[#0db5df] text-xs px-3 py-1 rounded-full font-semibold"
            >
              {{ movie.media_type }}
            </span>
          </div>
          <h3 class="font-semibold text-white text-sm line-clamp-2 mb-2">
            {{ movie.title || movie.name }}
          </h3>
          <div class="flex items-center justify-between text-xs text-gray-400">
            <span>{{ movie.release_date || movie.first_air_date }}</span>
            <span v-if="movie.vote_average" class="text-[#0db5df] font-bold"
              >⭐ {{ (movie.vote_average / 2).toFixed(1) }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </main>
  <div>
    <Footer />
  </div>
</template>
