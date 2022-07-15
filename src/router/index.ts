import { createRouter, createWebHistory } from 'vue-router'
import index from "../components/index.vue"
import petscompo from "../components/pets.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
    },
    {
      path: '/pets',
      name: 'pets',
      component: petscompo
    }
  ]
})

export default router