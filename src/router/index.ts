import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home', // Make this the default route for "/"
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'about', // You don't need the leading "/"
        name: 'about',
        component: () => import('../views/AboutView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
