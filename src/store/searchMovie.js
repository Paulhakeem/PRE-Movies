import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useMovieStore = defineStore('movies', () => {
  const router = useRouter()
  const searchQuery = ref('')
  const movies = ref([])

const searchMovies = async () => {

    if(searchQuery != '') {
      router.push({
        path: '/search'
      })
    }
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6b8d838296e5a23e5137a70749753a2d&query=${searchQuery.value}`
      )
      const search = await response.json();
      movies.value = search.results
      console.log(search);
    } catch (error) {
      console.error(error);
    }
    searchQuery.value = ''
  }
    return { searchQuery, movies, searchMovies }
  })