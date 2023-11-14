import { createRouter, createWebHistory } from 'vue-router'
import Trends from '../views/Trends.vue'
import Week from '../views/Week.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
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
    }
  ]
})

export default router
