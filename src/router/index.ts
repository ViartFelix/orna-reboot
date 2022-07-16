import { createRouter, createWebHistory } from 'vue-router'
import index from "../components/index.vue"
import petscompo from "../components/pets.vue"
import equipcompo from "../components/equipment.vue"
import monsterscompo from '../components/monsters.vue'
import bosses from "../components/bosses.vue"
import materialscompo from "../components/materials.vue"
import consumcompo from "../components/consumables.vue"
import potionscompo from "../components/potions.vue"

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
    },
    {
      path: '/equipments',
      name: 'equipments',
      component: equipcompo
    },
    {
      path: '/monsters',
      name: 'monsters',
      component: monsterscompo
    },
    {
      path: '/bosses',
      name: 'bosses',
      component: bosses
    },
    {
      path: '/materials',
      name: 'materials',
      component: materialscompo
    },
    {
      //Consomables: items avec les popos genre beast blood mais pas les popos normales genre stone cure
      path: '/consumables',
      name: 'consumables',
      component: consumcompo
    },
    {
      path: '/potions',
      name: 'potions',
      component: potionscompo
    }
  ]
})

export default router