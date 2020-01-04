import Vue from 'vue'
import VueRouter from './k-vue-router'
import Home from '../views/Home.vue'

// Vue会调用install方法, 并且会把Vue构造函数传进去
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    children: [
      // {
      //   path: '',
      //   component: () => import('../views/User.vue')
      // },
      {
        path: '/about/user',
        component: () => import('../views/User.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
