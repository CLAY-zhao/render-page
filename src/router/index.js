import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

// Layout
import Layout from '@/layout'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: defineAsyncComponent(() => import('@/views/dashboard')),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'word',
        name: 'word',
        component: defineAsyncComponent(() => import('@/views/word')),
        meta: {
          title: 'word'
        }
      }
    ]
  },
  {
    path: '/*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title}`
  }
  next()
})

export default router
