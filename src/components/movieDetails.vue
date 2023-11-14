<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const movies = ref([]);
const isActive = ref(false)

const active = () => {
  isActive.value = !isActive.value
}

onMounted(async () => {
  try {
    const fetchMovies = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=6b8d838296e5a23e5137a70749753a2d"
    );
    const list = await fetchMovies.json();
    movies.value = list.results;
    console.log(list);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<template>
  <main>
    <div class="trending flex gap-6 pl-20 mt-6 mb-4">
      <h1
        class="text-left text-xl font-semibold text-[#032541] first-letter:uppercase"
      >
        trending
      </h1>
      <RouterLink to="/">
        <button
        @click="active"
        :class="isActive ? 'bg-[#032541] text-[#88cca5]' : 'bg-white text-[#032541]'"
        class="border border-1 border-[#032541] p-1 w-20 rounded-full first-letter:uppercase"
      >
        all
      </button>
     </RouterLink>
     <RouterLink to="/trends">
        <button 
        @click="active"
        :class="isActive ? 'bg-[#032541] text-[#88cca5]' : 'bg-white text-[#032541]'"
        class="border border-1 border-[#032541] p-1 w-20 rounded-full first-letter:uppercase"
      >
        today
      </button>
     </RouterLink>

      <RouterLink to="/week">
        <button
        @click="active"
        :class="isActive ? 'bg-[#032541] text-[#88cca5]' : 'bg-white text-[#032541]'"
        class="border border-1 border-[#032541] p-1 w-20 rounded-full text-[#88cca5] first-letter:uppercase"
      >
        week
      </button>
      </RouterLink>
      
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
