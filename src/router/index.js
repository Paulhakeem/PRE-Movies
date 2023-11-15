import { createRouter, createWebHistory } from 'vue-router'
import Trends from '../views/Trends.vue'
import Week from '../views/Week.vue'
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'
import TVShow from '../views/TVShow.vue'
import Popular from '../views/Popular.vue'
import TopRated from '../views/TopRated.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/trends',
      name: 'trends',
      component: Trends
    },
    {
      path: '/week',
      name: 'week',
      component: Week
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movie
    },
    {
      path: '/tvshows',
      name: 'TVShow',
      component: TVShow
    },
    {
      path: '/popular',
      name: 'popular',
      component: Popular
    },
    {
      path: '/top-rated-movies',
      name: 'top-rated',
      component: TopRated
    }
  ]
})

export default router
