import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/Home.vue'
import AsiaCup from '../components/AsiaCup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/asia-cup',
    name: 'AsiaCup',
    component: AsiaCup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
