<script setup>
import { ref, onMounted } from "vue"
import Header from "../components/Header.vue"
import Wallpaper from "../components/Wallpaper.vue"
import Footer from "../components/Footer.vue"

const shows = ref([])

onMounted(async () => {
  try {
    const fetchShows = await fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=6b8d838296e5a23e5137a70749753a2d"
    );
    const list = await fetchShows.json();
    shows.value = list.results;
    tvRating.value = list.results.vote_average
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
        class="bg-[#032541] w-20 rounded-full first-letter:uppercase text-[#08b4e2] pb-1 text-md"
      >
        TV Shows
      </button>
     </div>
    <div class="flex flex-wrap justify-center">
      <div v-for="tv in shows" :key="tv.tmdbID" class="list">
        <div class="max-w-md flex-1 basis-12 pt-10 pb-10 pl-4 pr-4 w-64">
          <div class="absolute w-12 h-12 justify-center items-center rounded-full bg-[#032541] mx-2 my-2">
            <div class="ml-1 mt-1 border-2 border-[#0db5df]  w-10 h-10 rounded-full">
              <p class="text-md pt-1.5 text-white text-center">{{ tv.vote_average }}</p>
            </div>
          </div>
          <img
            :src="`https://image.tmdb.org/t/p/original/${tv.poster_path}`"
            alt="movie poster"
            class="mb-2"
          />
    

          <button
            class="bg-[#032541] text-[#88cca5] text-center rounded-full w-14 pb-1"
          >
            {{ tv.media_type }}
          </button>
          <div>
            <h3 class="font-semibold text-base">{{ tv.name }}</h3>
          </div>
          <div class="font-medium text-gray-400">
            <h3>{{ tv.first_air_date }}</h3>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer/>
</template>
