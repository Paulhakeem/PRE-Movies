import { defineStore } from 'pinia'
import {ref, onMounted} from 'vue'

export const useMovieStore = defineStore('movies', () => {
  const api = '6b8d838296e5a23e5137a70749753a2d'
  const search = ref('')
  const movies = ref([])

  const fetchMovies = async() => {
    try {
      const searchMovies = await fetch(
        `https://api.themoviedb.org/3/search/collection?apiKey=${api}s=${search.value}`
      );
      const respose = await searchMovies.json();
      shows.value = respose.results;
      console.log(respose);
    } catch (error) {
      alert("Error fetching data:", error);
    }
    
  }
    return { search, movies, api }
  })