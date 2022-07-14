import { createRouter, createWebHistory } from 'vue-router'
import yo from "../components/header/header.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: yo
    }
  ]
})

export default router
