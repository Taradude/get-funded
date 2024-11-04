import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
      },
      {
        path: 'newbie',
        name: 'newbie',
        component: () => import('@/views/NewbieView.vue'),
      },
      {
        path: 'profi',
        name: 'profi',
        component: () => import('@/views/ProfiView.vue'),
      },
      {
        path: 'amateur',
        name: 'amateur',
        component: () => import('@/views/AmateurView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
