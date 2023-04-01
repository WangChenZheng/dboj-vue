import { createRouter, createWebHistory } from 'vue-router'
import chapters from '../views/chapters.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chapter',
      component: chapters
    }
  ]
})

export default router
