<script setup>
import { ref, onMounted } from "vue";
import Header from "../components/Header.vue";
import Wallpaper from "../components/Wallpaper.vue";
import Footer from "../components/Footer.vue";

const shows = ref([]);

onMounted(async () => {
  try {
    const fetchShows = await fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=6b8d838296e5a23e5137a70749753a2d",
    );
    const list = await fetchShows.json();
    shows.value = list.results;
    console.log(list);
  } catch (error) {
    alert("Error fetching data:", error);
  }
});
</script>
<template>
  <div>
    <Header />
  </div>
  <div>
    <Wallpaper />
  </div>
  <main>
    <div class="px-6 py-8">
      <h2 class="section-title mb-8">TV Shows</h2>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 pb-8"
    >
      <div v-for="tv in shows" :key="tv.id" class="movie-card group">
        <div class="relative overflow-hidden">
          <div
            class="absolute top-3 right-3 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#0db5df]/90 border-2 border-white shadow-lg"
          >
            <p class="text-sm font-bold text-white text-center">
              {{ (tv.vote_average / 2).toFixed(1) }}
            </p>
          </div>
          <img
            :src="`https://image.tmdb.org/t/p/original/${tv.poster_path}`"
            alt="TV show poster"
            class="w-full h-64 object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
          >
            <div class="w-full">
              <p class="text-sm text-gray-300 line-clamp-2">
                {{ tv.overview }}
              </p>
            </div>
          </div>
        </div>
        <div class="p-4">
          <div class="mb-2">
            <span
              class="inline-block bg-purple-500/30 text-purple-400 text-xs px-3 py-1 rounded-full font-semibold"
            >
              TV Show
            </span>
          </div>
          <h3 class="font-semibold text-white text-sm line-clamp-2 mb-2">
            {{ tv.name }}
          </h3>
          <div class="flex items-center justify-between text-xs text-gray-400">
            <span>{{ tv.first_air_date }}</span>
            <span class="text-purple-400"
              >{{ tv.episode_run_time?.[0] || "N/A" }}m</span
            >
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
