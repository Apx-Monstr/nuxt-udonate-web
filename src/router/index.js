import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import JoinNow from '../views/JoinNow.vue';
import AngelDonor from '../views/AngelDonor.vue';
import user from '../views/user.vue';
import login from '../views/login.vue';
import Donate from '../views/Donate.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/join',
    name: 'JoinNow',
    component: JoinNow
  },
  {
    path: '/angelDonor',
    name: 'Angel Donor',
    component: AngelDonor
  },
  
  {
    path: '/login',
    name: 'User',
    component: login
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate
  },
  {
    path: '/user',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/user.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
