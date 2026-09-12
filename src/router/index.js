import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      redirect: { path: '/', hash: '#about' },
    },
    {
      path: '/work',
      redirect: { path: '/', hash: '#work' },
    },
    {
      path: '/projects',
      redirect: { path: '/', hash: '#work' },
    },
    {
      path: '/experience',
      redirect: { path: '/', hash: '#experience' },
    },
    {
      path: '/education',
      redirect: { path: '/', hash: '#education' },
    },
    {
      path: '/contact',
      redirect: { path: '/', hash: '#contact' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
