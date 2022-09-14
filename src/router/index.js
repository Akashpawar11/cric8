import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/Home.vue'
import AsiaCup from '../components/AsiaCup.vue'
import IccRankings from '../components/IccRankings.vue'

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
  },
  {
    path: '/icc-rankings/:format/:category',
    name: 'IccRankings',
    component: IccRankings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
